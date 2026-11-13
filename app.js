/*
  app.js: the ranking rules and the code that draws the page.
  It reads STATS (from stats.js) and CONTENT (from content.js), so index.html
  must load those two files first.
*/

/* ---------- A. Ranking rules: change these to change the tier list ---------- */
const WEIGHTS = { win: 2, pick: 0.2, ban: 0.1 };
const TIERS = [            // checked top to bottom; first match wins
  { name: "S", min: 8 },
  { name: "A", min: 4 },
  { name: "B", min: 0 },
  { name: "C", min: -Infinity }
];
const ROLES = ["All", "Baron", "Jungle", "Mid", "Duo", "Support"];

/* ---------- B. What the visitor has selected ---------- */
const state = {
  rank: STATS.ranks["1"] ? "1" : Object.keys(STATS.ranks)[0],   // start on Diamond+
  role: "All",
  champ: null          // looks like "leesin-jungle"
};

/* ---------- C. The calculations ---------- */
function score(s) {
  return (s.win - 50) * WEIGHTS.win + s.pick * WEIGHTS.pick + s.ban * WEIGHTS.ban;
}
function tierIndex(points) {
  return TIERS.findIndex(function (t) { return points >= t.min; });
}
// Every champion-and-lane for one rank bracket, scored and sorted best first.
function ranked(rankKey) {
  return STATS.rows[rankKey]
    .map(function (r) {
      const points = score(r);
      return { data: r, key: r.id + "-" + r.lane.toLowerCase(), points: points, tier: tierIndex(points) };
    })
    .sort(function (a, b) { return b.points - a.points; });
}
// The same champion's numbers from the previous update, if we have them.
function previousStats(rankKey, r) {
  const before = STATS.previous && STATS.previous.rows[rankKey] && STATS.previous.rows[rankKey][r.id + "|" + r.lane];
  return before ? { win: before[0], pick: before[1], ban: before[2] } : null;
}
function initials(name) {
  return name.replace(/[^A-Za-z]/g, "").slice(0, 2);
}
// Makes text safe to put inside HTML.
function esc(text) {
  return String(text).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
function signed(n) {
  return (n > 0 ? "+" : "") + n.toFixed(2);
}

/* ---------- D. Drawing the page ---------- */
function render() {
  const rows = ranked(state.rank);

  // If nothing is selected (or the link names an unknown champion), pick the top one.
  if (!rows.some(function (r) { return r.key === state.champ; })) {
    state.champ = rows[0].key;
  }

  document.getElementById("flag").textContent = "Data from " + STATS.date + " · " + STATS.ranks[state.rank];

  // Did this champion change tier since the previous update?
  function movement(row) {
    const before = previousStats(state.rank, row.data);
    if (!before) return "";
    const oldTier = tierIndex(score(before));
    if (oldTier === row.tier) return "";
    return row.tier < oldTier
      ? ' <span class="move-up">▲ up</span>'
      : ' <span class="move-down">▼ down</span>';
  }

  // Role filter buttons
  document.getElementById("roles").innerHTML = ROLES.map(function (r) {
    return '<button type="button" data-role="' + r + '" aria-pressed="' + (r === state.role) + '">' + r + "</button>";
  }).join("");

  // Tier rows
  document.getElementById("tiers").innerHTML = TIERS.map(function (t, i) {
    const inTier = rows.filter(function (r) {
      return r.tier === i && (state.role === "All" || r.data.lane === state.role);
    });
    const chips = inTier.map(function (r) {
      return '<button type="button" class="champ" data-champ="' + r.key + '" aria-current="' + (r.key === state.champ) + '">' +
        '<span class="avatar" aria-hidden="true">' + esc(initials(r.data.name)) + "</span>" +
        '<span class="champ-name">' + esc(r.data.name) + "</span>" +
        '<span class="champ-meta">' + (state.role === "All" ? r.data.lane + " · " : "") + r.data.win.toFixed(1) + "%" + movement(r) + "</span>" +
        "</button>";
    }).join("");
    return '<div class="tier">' +
      '<div class="tier-badge tier-' + t.name.toLowerCase() + '" aria-label="Tier ' + t.name + '">' + t.name + "</div>" +
      '<div class="tier-champs">' + (chips || '<span class="muted">No ' + (state.role === "All" ? "" : state.role + " ") + "champions in this tier.</span>") + "</div>" +
      "</div>";
  }).join("");

  // Champion page
  const row = rows.find(function (r) { return r.key === state.champ; });
  const c = row.data;
  const tier = TIERS[row.tier].name;
  const before = previousStats(state.rank, c);
  const build = CONTENT.builds[c.id];
  const diff = before ? c.win - before.win : 0;
  document.getElementById("detail").innerHTML =
    '<div class="detail-head">' +
      "<h2>" + esc(c.name) + "</h2>" +
      '<span class="pill">' + c.lane + "</span>" +
      '<span class="pill tier-' + tier.toLowerCase() + '">Tier ' + tier + "</span>" +
      '<span class="muted">Score ' + row.points.toFixed(1) + "</span>" +
    "</div>" +
    '<div class="stats">' +
      '<div class="stat"><b>' + c.win.toFixed(2) + "%</b><span>Win rate</span></div>" +
      '<div class="stat"><b>' + c.pick.toFixed(2) + "%</b><span>Pick rate</span></div>" +
      '<div class="stat"><b>' + c.ban.toFixed(2) + "%</b><span>Ban rate</span></div>" +
    "</div>" +
    (before
      ? '<p class="change ' + (diff > 0 ? "buff" : diff < 0 ? "nerf" : "") + '">Since ' + STATS.previous.date + ": win rate " + signed(diff) +
        ", pick rate " + signed(c.pick - before.pick) + ", ban rate " + signed(c.ban - before.ban) + " points.</p>"
      : "") +
    '<div class="build">' +
      (build
        ? "<div><h3>Core items</h3><ol>" + build.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ol></div>" +
          "<dl>" +
            "<dt>Keystone rune</dt><dd>" + esc(build.rune) + "</dd>" +
            "<dt>Spells</dt><dd>" + esc(build.spells.join(", ")) + "</dd>" +
            "<dt>Skill order</dt><dd>" + esc(build.skillOrder) + "</dd>" +
          "</dl>"
        : '<h3>Build</h3><p class="muted">No build written yet. Add one under <code>' + c.id + "</code> in <code>content.js</code>.</p>") +
    "</div>";

  // Data source and (if you wrote any) patch notes
  document.getElementById("notes").innerHTML =
    (CONTENT.patchNotes.length
      ? "<h2>" + esc(CONTENT.patch || "Patch") + " notes</h2><ul>" + CONTENT.patchNotes.map(function (n) {
          return "<li><strong>" + esc(n.champ) + " (" + esc(n.kind) + ")</strong> " + esc(n.text) + "</li>";
        }).join("") + "</ul>"
      : "") +
    "<h2>About this data</h2>" +
    "<p>" + esc(STATS.source) + ". Last updated " + STATS.date + ".</p>" +
    '<p class="muted">' +
      (STATS.previous
        ? "Up and down markers compare with " + STATS.previous.date + "."
        : "Up and down markers appear after the update script has run on two different days.") +
    " These numbers describe players in China, so your region may differ.</p>";

  // Explanation, built from the real rules above so it can't go out of date
  document.getElementById("how").innerHTML =
    "<h2>How champions are ranked</h2>" +
    '<p class="formula">score = (win − 50) × ' + WEIGHTS.win + " + pick × " + WEIGHTS.pick + " + ban × " + WEIGHTS.ban + "</p>" +
    "<ul>" + TIERS.map(function (t, i) {
      return "<li>Tier " + t.name + ": " + (t.min === -Infinity ? "score below " + TIERS[i - 1].min : "score " + t.min + " or higher") + "</li>";
    }).join("") + "</ul>" +
    '<p class="muted">Change the rules at the top of <code>app.js</code>, then reload.</p>';
}

/* ---------- E. Reacting to clicks ---------- */
const rankSelect = document.getElementById("rank");
rankSelect.innerHTML = Object.keys(STATS.ranks).map(function (key) {
  return '<option value="' + key + '">' + esc(STATS.ranks[key]) + "</option>";
}).join("");
rankSelect.value = state.rank;
rankSelect.addEventListener("change", function () {
  state.rank = rankSelect.value;
  render();
});

document.getElementById("roles").addEventListener("click", function (event) {
  const button = event.target.closest("button[data-role]");
  if (!button) return;
  state.role = button.dataset.role;
  render();
});

document.getElementById("tiers").addEventListener("click", function (event) {
  const button = event.target.closest("button[data-champ]");
  if (!button) return;
  state.champ = button.dataset.champ;
  // Put the champion in the address (page.html#leesin-jungle) so the link can be shared.
  try { location.hash = state.champ; } catch (e) { /* some viewers block this; the page still works */ }
  render();
});

// Open the right champion when someone arrives through a link like #leesin-jungle
function readHash() {
  const key = location.hash.slice(1);
  if (key) state.champ = key;
}
window.addEventListener("hashchange", function () { readHash(); render(); });

readHash();
render();
