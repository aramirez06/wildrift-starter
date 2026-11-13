# Wild Rift tier list starter

Open `index.html` in a browser to see the site.

## The files

| File | What it is | Who edits it |
|---|---|---|
| `index.html` | The page: layout, styling and the ranking rules | You |
| `content.js` | Builds and patch notes | You |
| `stats.js` | Win, pick and ban rates | The update script |
| `scripts/update-stats.mjs` | Downloads today's numbers and rewrites `stats.js` | You, rarely |
| `history/` | One dated copy of the numbers per run | The update script |
| `.github/workflows/update-stats.yml` | Runs the script daily once the project is on GitHub | Nobody |

## Updating the numbers yourself

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder.
3. Run `node scripts/update-stats.mjs`
4. Reload `index.html`.

## About the data

The numbers are ranked-game statistics from the Wild Rift China server, published by
Tencent. They describe Chinese players, so other regions may differ. Tencent doesn't
document this data for outside use and could change or remove it, so check their terms
before you build a public site on it.

This project isn't endorsed by Riot Games.
