/*
  content.js: the parts of the site YOU write by hand.
  (The numbers live in stats.js, which the update script rewrites.)

  builds: one entry per champion. The key is the champion's id, which is
  the last part of the page address when you click a champion, without
  the lane. Example: the address ends in #leesin-jungle, so the id is leesin.
  A champion has one build here even if it appears in two lanes.

  patchNotes: shown on the page when the list isn't empty.

  THE BUILDS BELOW ARE DRAFTS written on 2026-11-12 for the champions that
  were in S tier that day. Item and rune names were checked against the
  patch 7.3f lists, but the choices are general-knowledge starting points,
  not win-rate data. Play them, then change whatever you disagree with.
*/

const CONTENT = {
  patch: "",          // e.g. "Patch 7.3"

  patchNotes: [
    // { champ: "Smolder", kind: "buff", text: "What changed, in your own words." },
    // { champ: "Lee Sin", kind: "nerf", text: "What changed, in your own words." }
  ],

  builds: {
    rammus: {
      items: ["Thornmail", "Sunfire Aegis", "Dead Man's Plate"],
      rune: "Grasp of the Undying",
      spells: ["Flash", "Smite"],
      skillOrder: "2 > 3 > 1"
    },
    amumu: {
      items: ["Sunfire Aegis", "Liandry's Torment", "Abyssal Mask"],
      rune: "Conqueror",
      spells: ["Flash", "Smite"],
      skillOrder: "3 > 1 > 2"
    },
    nocturne: {
      items: ["Black Cleaver", "Sterak's Gage", "Death's Dance"],
      rune: "Lethal Tempo",
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    shen: {
      items: ["Sunfire Aegis", "Thornmail", "Force of Nature"],
      rune: "Grasp of the Undying",
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    morgana: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 1 > 3"
    },
    hwei: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      spells: ["Flash", "Ignite (Exhaust as support)"],
      skillOrder: "1 > 3 > 2"
    },
    skarner: {
      items: ["Sunfire Aegis", "Dead Man's Plate", "Force of Nature"],
      rune: "Grasp of the Undying",
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    zyra: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Morellonomicon"],
      rune: "Arcane Comet",
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    teemo: {
      items: ["Nashor's Tooth", "Liandry's Torment", "Rabadon's Deathcap"],
      rune: "Fleet Footwork",
      spells: ["Flash", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    kalista: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"],
      rune: "Lethal Tempo",
      spells: ["Flash", "Ignite (Heal in the Duo lane)"],
      skillOrder: "3 > 1 > 2"
    },
    malphite: {
      items: ["Sunfire Aegis", "Thornmail", "Frozen Heart"],
      rune: "Grasp of the Undying",
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    mordekaiser: {
      items: ["Riftmaker", "Rylai's Crystal Scepter", "Liandry's Torment"],
      rune: "Conqueror",
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    }
  }
};
