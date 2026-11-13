#!/usr/bin/env node
/*
  update-stats.mjs: downloads today's Wild Rift ranked stats and rewrites stats.js.

  Run it from the project folder with:   node scripts/update-stats.mjs
  Needs Node.js 18 or newer. No packages to install.

  What it does:
  1. Downloads win / pick / ban rates (China server, published by Tencent).
  2. Downloads the champion list, to turn champion numbers into names and
     to find each champion's portrait.
  3. Writes stats.js (read by index.html) and a dated copy in history/.
  If anything looks wrong it stops and leaves your existing stats.js untouched.
*/

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const STATS_URL = "https://mlol.qt.qq.com/go/lgame_battle_info/hero_rank_list_v2";
const HEROES_URL = "https://game.gtimg.cn/images/lgamem/act/lrlib/js/heroList/hero_list.js";

const STATS_FILE = new URL("../stats.js", import.meta.url);
const HISTORY_DIR = new URL("../history/", import.meta.url);

// The numbers Tencent uses for lanes and rank brackets.
const LANES = { "1": "Mid", "2": "Baron", "3": "Duo", "4": "Support", "5": "Jungle" };
const RANKS = { "0": "All ranks", "1": "Diamond+", "2": "Master+", "3": "Challenger+", "4": "Legendary" };

// English names come from the champion's poster file name (for example "LeeSin").
// These are the ones that need more than a space added.
const NAME_FIXES = {
  MonkeyKing: "Wukong",
  Nunu: "Nunu & Willump",
  DrMundo: "Dr. Mundo",
  Khazix: "Kha'Zix",
  Kaisa: "Kai'Sa",
  Chogath: "Cho'Gath",
  Kogmaw: "Kog'Maw",
  Velkoz: "Vel'Koz",
  Reksai: "Rek'Sai",
  Ksante: "K'Sante"
};

export function englishName(hero) {
  const file = String(hero.poster || "").split("/").pop() || "";
  const stem = file.replace(/_\d+\.\w+$/, "").replace(/[^A-Za-z]/g, "");
  if (!stem) return null;
  return {
    id: stem.toLowerCase(),
    name: NAME_FIXES[stem] || stem.replace(/([a-z])([A-Z])/g, "$1 $2")
  };
}

// The address of the champion's square portrait, if it looks the way we expect.
// The pictures stay on Tencent's servers; the site only links to them.
function portrait(hero) {
  const url = String(hero.avatar || "");
  return /^https:\/\/game\.gtimg\.cn\/[\w\/.-]+\.(png|jpg)$/.test(url) ? url : null;
}

// Reads one rate as a percentage, e.g. 53.12
function percent(entry, field) {
  const ready = Number(entry[field + "_rate_percent"]);
  if (Number.isFinite(ready)) return ready;
  const fraction = Number(entry[field + "_rate"]);
  return Number.isFinite(fraction) ? Math.round(fraction * 10000) / 100 : null;
}

// Keeps only what the site needs to show "moved up / down since last time".
function compact(rows) {
  const out = {};
  for (const [rankKey, list] of Object.entries(rows)) {
    out[rankKey] = {};
    for (const r of list) out[rankKey][r.id + "|" + r.lane] = [r.win, r.pick, r.ban];
  }
  return out;
}

// Turns the two downloads into the object saved in stats.js.
export function buildStats(rankJson, heroJson, old) {
  if (!rankJson || rankJson.result !== 0 || !rankJson.data) {
    throw new Error("The stats download doesn't look right (result: " + (rankJson && rankJson.result) + ").");
  }
  const heroes = (heroJson && heroJson.heroList) || {};
  const rows = {};
  const ranks = {};
  const images = {};
  const unknown = new Set();
  let date = null;
  let total = 0;

  for (const [rankKey, lanes] of Object.entries(rankJson.data)) {
    const list = [];
    for (const [laneKey, entries] of Object.entries(lanes || {})) {
      const lane = LANES[laneKey];
      if (!lane || !Array.isArray(entries)) continue;
      for (const entry of entries) {
        const hero = heroes[entry.hero_id];
        const names = hero && englishName(hero);
        if (!names) { unknown.add(String(entry.hero_id)); continue; }
        const win = percent(entry, "win");
        const pick = percent(entry, "appear");
        const ban = percent(entry, "forbid");
        if (win === null || pick === null || ban === null) continue;
        const d = String(entry.dtstatdate || "");
        if (!date && /^\d{8}$/.test(d)) date = d.slice(0, 4) + "-" + d.slice(4, 6) + "-" + d.slice(6);
        list.push({ id: names.id, name: names.name, lane, win, pick, ban });
        const image = portrait(hero);
        if (image) images[names.id] = image;
      }
    }
    if (list.length) {
      rows[rankKey] = list;
      ranks[rankKey] = RANKS[rankKey] || "Rank " + rankKey;
      total += list.length;
    }
  }

  if (total < 50) throw new Error("Only " + total + " rows came back, so nothing was saved.");
  if (!date) date = new Date().toISOString().slice(0, 10);

  // Remember the last different day, so the site can show who moved.
  let previous = null;
  if (old && old.date && old.rows) {
    previous = old.date !== date ? { date: old.date, rows: compact(old.rows) } : old.previous || null;
  }

  return {
    stats: {
      date,
      source: "Wild Rift China server ranked games, published by Tencent",
      ranks,
      images,
      rows,
      previous
    },
    unknown: [...unknown]
  };
}

export async function readOldStats() {
  try {
    const text = await readFile(STATS_FILE, "utf8");
    return JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
  } catch {
    return null; // first run: there is no stats.js yet
  }
}

export async function writeOutputs(stats) {
  const header = "// Generated by scripts/update-stats.mjs on " + stats.date + ". Don't edit by hand: it gets overwritten.\n";
  await writeFile(STATS_FILE, header + "const STATS = " + JSON.stringify(stats, null, 1) + ";\n");
  await mkdir(HISTORY_DIR, { recursive: true });
  await writeFile(new URL(stats.date + ".json", HISTORY_DIR), JSON.stringify({ date: stats.date, rows: stats.rows }));
}

async function download(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(url + " answered with status " + response.status);
  return JSON.parse(await response.text());
}

async function main() {
  const [rankJson, heroJson] = await Promise.all([download(STATS_URL), download(HEROES_URL)]);
  const { stats, unknown } = buildStats(rankJson, heroJson, await readOldStats());
  await writeOutputs(stats);
  const count = Object.values(stats.rows).reduce((sum, list) => sum + list.length, 0);
  console.log("Saved " + count + " rows for " + stats.date + " (" + Object.values(stats.ranks).join(", ") + ").");
  if (unknown.length) console.log("Skipped champion numbers with no name yet: " + unknown.join(", "));
}

// Only download when this file is run directly (not when another script imports it).
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(function (error) {
    console.error("Update failed: " + error.message);
    process.exit(1);
  });
}
