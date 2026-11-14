# Wild Rift tier list starter

Open `index.html` in a browser to see the site.

## The files

| File | What it is | Who edits it |
|---|---|---|
| `index.html` | The page: the layout and the list of files to load | You |
| `styles.css` | Styling: colors, fonts and spacing | You |
| `app.js` | The ranking rules and the code that draws the page | You |
| `content.js` | Builds, patch notes, and rune and spell descriptions | You |
| `stats.js` | Win, pick and ban rates | The update script |
| `icons.js` | Where to find the rune, spell and ability pictures, plus ability descriptions | The icon script |
| `scripts/update-stats.mjs` | Downloads today's numbers and rewrites `stats.js` | You, rarely |
| `scripts/update-icons.mjs` | Looks up the pictures and ability descriptions and rewrites `icons.js` | You, rarely |
| `history/` | One dated copy of the numbers per run | The update script |
| `.github/workflows/update-stats.yml` | Runs the script daily once the project is on GitHub | Nobody |

## Updating the numbers yourself

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder.
3. Run `node scripts/update-stats.mjs`
4. Reload `index.html`.

## Updating the pictures

Run `node scripts/update-icons.mjs` after a game patch that adds a champion or changes
the runes. The daily GitHub run doesn't do this, because the pictures rarely change.

## About the data

The numbers are ranked-game statistics from the Wild Rift China server, published by
Tencent. They describe Chinese players, so other regions may differ. Tencent doesn't
document this data for outside use and could change or remove it, so check their terms
before you build a public site on it.

The pictures are not stored in this project. The page loads them from Tencent's
servers, using addresses the scripts save in `stats.js` (champion portraits) and
`icons.js` (runes, spells and abilities). If a portrait can't load, the champion's
initials show instead; the other pictures are simply left out.

Pointing at a rune, spell or ability on a champion page pops up a description. The
rune and spell descriptions are short summaries written by hand in `content.js`. The
ability names and descriptions are Riot Games' own text, copied from the champion pages
on wildrift.leagueoflegends.com by the icon script and stored in `icons.js`. Riot's
"Legal Jibber Jabber" policy sets the rules for using its material in fan projects, so
read it before you publish the site.

This project isn't endorsed by Riot Games.
