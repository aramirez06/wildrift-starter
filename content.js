/*
  content.js: the parts of the site YOU write by hand.
  (The numbers live in stats.js, which the update script rewrites.)

  builds: one entry per champion. The key is the champion's id, which is
  the last part of the page address when you click a champion, without
  the lane. Example: the address ends in #leesin-jungle, so the id is leesin.

  patchNotes: shown on the page when the list isn't empty.
*/

const CONTENT = {
  patch: "",          // e.g. "Patch 7.3"

  patchNotes: [
    // { champ: "Smolder", kind: "buff", text: "What changed, in your own words." },
    // { champ: "Lee Sin", kind: "nerf", text: "What changed, in your own words." }
  ],

  builds: {
    // Remove the two slashes at the start of each line and fill in your own build:
    //
    // leesin: {
    //   items: ["First item", "Second item", "Third item"],
    //   rune: "Keystone rune",
    //   spells: ["Flash", "Smite"],
    //   skillOrder: "1 > 2 > 3"
    // },
  }
};
