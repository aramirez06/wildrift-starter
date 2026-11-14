#!/usr/bin/env node
/*
  update-icons.mjs: finds the pictures for runes, summoner spells and champion
  abilities, and writes their addresses to icons.js. It also saves each
  ability's English name and description, which the page shows when a visitor
  points at an ability. Those come from the champion pages on Riot's Wild Rift
  website. (Rune and spell descriptions are written by hand in content.js.)

  Run it from the project folder with:   node scripts/update-icons.mjs
  Needs Node.js 18 or newer. No packages to install.

  You only need to run it after a game patch that adds a champion or changes
  the runes. It takes a little while because it asks for every champion in turn.
  The pictures themselves stay on Tencent's servers; the site only links to them.
  If anything looks wrong it stops and leaves your existing icons.js untouched.
*/

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { englishName } from "./update-stats.mjs";

const BASE = "https://game.gtimg.cn/images/lgamem/act/lrlib/js/";
const ICONS_FILE = new URL("../icons.js", import.meta.url);

// Tencent publishes rune and spell names in Chinese. These tables give the
// English names used in content.js. The comments show how a rune page is built:
// one keystone, one rune from each row of a main path, one rune from another path.
const RUNE_NAMES = {
  // Keystones
  "电击": "Electrocute", "黑暗收割": "Dark Harvest", "强攻": "Empowerment", "致命节奏": "Lethal Tempo",
  "迅捷步法": "Fleet Footwork", "征服者": "Conqueror", "不灭之握": "Grasp of the Undying", "守护者": "Guardian",
  "艾黎": "Aery", "奥术彗星": "Arcane Comet", "相位猛冲": "Phase Rush", "先攻": "First Strike", "冰霜领主": "Ice Overlord",
  // Domination: row 1, row 2, row 3
  "恶意中伤": "Cheap Shot", "猛然冲击": "Sudden Impact", "强化攻击": "Empowered Attack",
  "连破": "Chain Assault", "凌弱": "Tyrant", "狂妄": "Hubris",
  "眼球收集器": "Eyeball Collection", "无情猎手": "Relentless Hunter", "僵尸守卫": "Zombie Ward",
  // Precision: row 1, row 2, row 3
  "残暴": "Brutal", "凯旋": "Triumph", "战意": "Battle Zeal",
  "坚毅不倒": "Last Stand", "砍倒": "Cut Down", "致命一击": "Coup de Grace",
  "传说：攻速": "Legend: Alacrity", "传说：急速": "Legend: Haste", "传说：血统": "Legend: Bloodline",
  // Resolve: row 1, row 2, row 3
  "爆破": "Demolish", "生命源泉": "Font of Life", "巨像勇气": "Courage of the Colossus", "坚定壁垒": "Unshakeable",
  "复苏之风": "Second Wind", "无效化之法球": "Nullifying Orb", "骸骨镀层": "Bone Plating",
  "过度生长": "Overgrowth", "复苏": "Revitalize", "坚韧": "Perseverance",
  // Sorcery: row 1, row 2, row 3
  "公理秘术": "Axiom Arcanist", "法力流系带": "Manaflow Band", "植物学家": "Botanist", "海克斯闪现": "Hexflash",
  "超然": "Transcendence", "迅捷": "Celerity", "绝对专注": "Absolute Focus",
  "焦灼": "Scorch", "灵光披风": "Nimbus Cloak", "风暴聚集": "Gathering Storm", "以绪塔尔种子罐": "Ixtali Seedjar"
};

const SPELL_NAMES = {
  "闪现": "Flash", "引燃": "Ignite", "惩戒": "Smite", "治疗术": "Heal", "虚弱": "Exhaust",
  "屏障": "Barrier", "幽灵疾步": "Ghost", "净化": "Cleanse", "传送": "Teleport"
};

// Only keeps addresses that look like a picture on Tencent's image server.
function picture(url) {
  const text = String(url || "");
  return /^https:\/\/game\.gtimg\.cn\/[\w\/.-]+\.(png|jpg)$/.test(text) ? text : null;
}

async function download(path) {
  const response = await fetch(BASE + path, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(path + " answered with status " + response.status);
  return JSON.parse(await response.text());
}

// Turns a Chinese-named list into { "English name": "picture address" }.
function named(list, names) {
  const out = {};
  for (const entry of list || []) {
    const english = names[entry.name];
    const url = picture(entry.iconPath);
    if (english && url) out[english] = url;
  }
  return out;
}

// One champion's ability pictures: [passive, ability 1, ability 2, ability 3, ultimate].
async function abilityIcons(heroId) {
  const detail = await download("hero/" + heroId + ".js");
  const spells = detail.spells || [];
  const passive = spells.find(function (s) { return s.spellKey === "passive"; });
  const active = spells.filter(function (s) { return s.spellKey !== "passive"; }).slice(0, 4);
  const icons = [passive].concat(active).map(function (s) { return s ? picture(s.abilityIconPath) : null; });
  return icons.length === 5 && icons.slice(1).every(Boolean) ? icons : null;
}

const RIOT_CHAMPIONS = "https://wildrift.leagueoflegends.com/en-us/champions/";
// Riot's page names that don't match our champion ids once the dashes are removed.
const RIOT_ID_FIXES = { nunuandwillump: "nunu", wukong: "monkeyking" };
const ABILITY_SLOTS = { PASSIVE: 0, "1": 1, "2": 2, "3": 3, ULTIMATE: 4 };

async function riotPage(slug) {
  const response = await fetch(RIOT_CHAMPIONS + slug, {
    signal: AbortSignal.timeout(30000),
    headers: { "user-agent": "Mozilla/5.0 (tier list update script)" }
  });
  if (!response.ok) throw new Error("Riot's page " + slug + " answered with status " + response.status);
  return response.text();
}

function plainText(html) {
  return String(html || "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

// One champion's abilities as [passive, 1, 2, 3, ultimate], each { name, text }.
async function abilityText(slug) {
  const html = await riotPage(slug + "/");
  const data = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!data) return null;
  const blades = JSON.parse(data[1]).props.pageProps.page.blades || [];
  const out = [null, null, null, null, null];
  for (const blade of blades) {
    for (const group of blade.groups || []) {
      const content = group.content || {};
      const slot = ABILITY_SLOTS[String(content.subtitle || "").toUpperCase()];
      const text = plainText(content.description && content.description.body);
      if (slot === undefined || out[slot] || !content.title || !text) continue;
      out[slot] = { name: plainText(content.title), text };
    }
  }
  return out.slice(1).every(Boolean) ? out : null;
}

// Every champion's ability descriptions, keyed by our champion id.
async function allAbilityText() {
  const index = await riotPage("");
  const slugs = [...new Set([...index.matchAll(/\/en-us\/champions\/([a-z0-9-]+)\/?/g)].map(function (m) { return m[1]; }))];
  const out = {};
  const missed = [];
  for (let i = 0; i < slugs.length; i += 4) {
    await Promise.all(slugs.slice(i, i + 4).map(async function (slug) {
      const plain = slug.replace(/-/g, "");
      const id = RIOT_ID_FIXES[plain] || plain;
      try {
        const abilities = await abilityText(slug);
        if (abilities) out[id] = abilities; else missed.push(slug);
      } catch {
        missed.push(slug);
      }
    }));
  }
  return { out, missed };
}

async function main() {
  const [runeJson, spellJson, heroJson] = await Promise.all([
    download("rune/rune.js"), download("skill/skill.js"), download("heroList/hero_list.js")
  ]);

  const runes = named(runeJson.runeList, RUNE_NAMES);
  const spells = named(spellJson.skillList, SPELL_NAMES);
  if (Object.keys(runes).length < 40) throw new Error("Only " + Object.keys(runes).length + " runes were recognised, so nothing was saved.");
  if (Object.keys(spells).length < 6) throw new Error("Only " + Object.keys(spells).length + " spells were recognised, so nothing was saved.");

  // Ask for the champions a few at a time, to be gentle on the server.
  const heroes = Object.values(heroJson.heroList || {});
  const skills = {};
  const skipped = [];
  for (let i = 0; i < heroes.length; i += 6) {
    await Promise.all(heroes.slice(i, i + 6).map(async function (hero) {
      const names = englishName(hero);
      if (!names) return;
      try {
        const icons = await abilityIcons(hero.heroId);
        if (icons) skills[names.id] = icons; else skipped.push(names.name);
      } catch {
        skipped.push(names.name);
      }
    }));
  }
  if (Object.keys(skills).length < 50) throw new Error("Only " + Object.keys(skills).length + " champions came back, so nothing was saved.");

  // Ability names and descriptions, for the pop-ups. The pictures are still saved if this part fails.
  let skillText = {};
  let missedText = [];
  try {
    const result = await allAbilityText();
    skillText = result.out;
    missedText = result.missed;
  } catch (error) {
    console.log("Couldn't read ability descriptions from Riot's site (" + error.message + "), so pop-ups for abilities will be empty.");
  }

  const date = new Date().toISOString().slice(0, 10);
  const header = "// Generated by scripts/update-icons.mjs on " + date + ". Don't edit by hand: it gets overwritten.\n" +
    "// Ability names and descriptions in skillText are Riot Games' text, from wildrift.leagueoflegends.com.\n";
  await writeFile(ICONS_FILE, header + "const ICONS = " + JSON.stringify({ date, runes, spells, skills, skillText }, null, 1) + ";\n");

  console.log("Saved pictures for " + Object.keys(runes).length + " runes, " + Object.keys(spells).length +
    " spells and " + Object.keys(skills).length + " champions, and ability descriptions for " +
    Object.keys(skillText).length + " champions.");
  const noText = Object.keys(skills).filter(function (id) { return !skillText[id]; });
  if (noText.length) console.log("Champions with pictures but no ability descriptions: " + noText.join(", "));
  if (missedText.length) console.log("Riot pages that couldn't be read: " + missedText.join(", "));
  const unnamed = (runeJson.runeList || []).filter(function (r) { return !RUNE_NAMES[r.name]; }).map(function (r) { return r.name; });
  if (unnamed.length) console.log("Runes with no English name in this script yet: " + unnamed.join(", "));
  if (skipped.length) console.log("Champions skipped (no ability pictures found): " + skipped.join(", "));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(function (error) {
    console.error("Update failed: " + error.message);
    process.exit(1);
  });
}
