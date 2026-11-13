/*
  content.js: the parts of the site YOU write by hand.
  (The numbers live in stats.js, which the update script rewrites.)

  builds: one entry per champion. The key is the champion's id, which is
  the last part of the page address when you click a champion, without
  the lane. Example: the address ends in #leesin-jungle, so the id is leesin.
  A champion has one build here even if it appears in two lanes.

  patchNotes: shown on the page when the list isn't empty.

  THE BUILDS BELOW ARE DRAFTS. The first twelve were written on 2026-11-12
  for the champions in S tier that day; the rest were added on 2026-11-13
  so that every champion in stats.js has one. Item and rune names were
  checked against the patch 7.3 lists, but the choices are general-knowledge
  starting points, not win-rate data. Play them, then change whatever you
  disagree with.

  When a champion plays more than one lane, the spells are for its strongest
  lane, with the other lane's swap in brackets.

  Each build's rune page is in two parts:
    rune:   the keystone.
    runes:  the four smaller runes. The first three come from one path, one
            from each of its rows in order; the fourth comes from a different
            path. The rune pages are shared between similar champions (all
            tank supports use the same four, for example), so treat them as
            the roughest part of each draft.
  Rune and spell names must be spelled the way they are in icons.js, or the
  page shows the name without its picture. The full list of names is in
  scripts/update-icons.mjs.

  skillOrder is the order to max abilities in: 1, 2 and 3 are the champion's
  first, second and third ability.
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
      runes: ["Courage of the Colossus", "Bone Plating", "Overgrowth", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "2 > 3 > 1"
    },
    amumu: {
      items: ["Sunfire Aegis", "Liandry's Torment", "Abyssal Mask"],
      rune: "Conqueror",
      runes: ["Courage of the Colossus", "Bone Plating", "Overgrowth", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "3 > 1 > 2"
    },
    nocturne: {
      items: ["Black Cleaver", "Sterak's Gage", "Death's Dance"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    shen: {
      items: ["Sunfire Aegis", "Thornmail", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    morgana: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 1 > 3"
    },
    hwei: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite (Exhaust as support)"],
      skillOrder: "1 > 3 > 2"
    },
    skarner: {
      items: ["Sunfire Aegis", "Dead Man's Plate", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Courage of the Colossus", "Bone Plating", "Overgrowth", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    zyra: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Morellonomicon"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    teemo: {
      items: ["Nashor's Tooth", "Liandry's Torment", "Rabadon's Deathcap"],
      rune: "Fleet Footwork",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    kalista: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Ignite (Heal in the Duo lane)"],
      skillOrder: "3 > 1 > 2"
    },
    malphite: {
      items: ["Sunfire Aegis", "Thornmail", "Frozen Heart"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    mordekaiser: {
      items: ["Riftmaker", "Rylai's Crystal Scepter", "Liandry's Torment"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    nidalee: {
      items: ["Luden's Echo", "Lich Bane", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    syndra: {
      items: ["Luden's Echo", "Infinity Orb", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    fiddlesticks: {
      items: ["Liandry's Torment", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Smite"],
      skillOrder: "2 > 3 > 1"
    },
    smolder: {
      items: ["Manamune", "Essence Reaver", "Infinity Edge"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal (Ignite in the Baron lane)"],
      skillOrder: "1 > 2 > 3"
    },
    vladimir: {
      items: ["Riftmaker", "Cosmic Drive", "Rabadon's Deathcap"],
      rune: "Phase Rush",
      runes: ["Axiom Arcanist", "Celerity", "Gathering Storm", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    lissandra: {
      items: ["Luden's Echo", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite (Exhaust as support)"],
      skillOrder: "1 > 2 > 3"
    },
    drmundo: {
      items: ["Heartsteel", "Warmog's Armor", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Courage of the Colossus", "Bone Plating", "Overgrowth", "Triumph"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    sett: {
      items: ["Stridebreaker", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    galio: {
      items: ["Luden's Echo", "Abyssal Mask", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    annie: {
      items: ["Luden's Echo", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    thresh: {
      items: ["Zeke's Convergence", "Locket of the Iron Solari", "Knight's Vow"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    veigar: {
      items: ["Luden's Echo", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    kaisa: {
      items: ["Manamune", "Guinsoo's Rageblade", "Nashor's Tooth"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    braum: {
      items: ["Locket of the Iron Solari", "Zeke's Convergence", "Frozen Heart"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "1 > 3 > 2"
    },
    masteryi: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Wit's End"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    sona: {
      items: ["Harmonic Echo", "Ardent Censer", "Staff of Flowing Water"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "1 > 2 > 3"
    },
    orianna: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    nunu: {
      items: ["Sunfire Aegis", "Abyssal Mask", "Dead Man's Plate"],
      rune: "Grasp of the Undying",
      runes: ["Courage of the Colossus", "Bone Plating", "Overgrowth", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    ksante: {
      items: ["Iceborn Gauntlet", "Sunfire Aegis", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    lillia: {
      items: ["Liandry's Torment", "Riftmaker", "Rabadon's Deathcap"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    ekko: {
      items: ["Lich Bane", "Infinity Orb", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Smite (Ignite in the Mid lane)"],
      skillOrder: "1 > 3 > 2"
    },
    hecarim: {
      items: ["Trinity Force", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    shyvana: {
      items: ["Divine Sunderer", "Blade of the Ruined King", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "3 > 2 > 1"
    },
    kindred: {
      items: ["Kraken Slayer", "The Collector", "Infinity Edge"],
      rune: "Empowerment",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    xayah: {
      items: ["Essence Reaver", "Navori Quickblades", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "3 > 2 > 1"
    },
    viktor: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    gragas: {
      items: ["Sunfire Aegis", "Abyssal Mask", "Frozen Heart"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    brand: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 3 > 1"
    },
    chogath: {
      items: ["Heartsteel", "Sunfire Aegis", "Abyssal Mask"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 2 > 3"
    },
    gwen: {
      items: ["Riftmaker", "Nashor's Tooth", "Rabadon's Deathcap"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    darius: {
      items: ["Stridebreaker", "Sterak's Gage", "Dead Man's Plate"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    yuumi: {
      items: ["Ardent Censer", "Staff of Flowing Water", "Harmonic Echo"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Exhaust", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    leona: {
      items: ["Zeke's Convergence", "Locket of the Iron Solari", "Thornmail"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 1 > 3"
    },
    aurora: {
      items: ["Luden's Echo", "Infinity Orb", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    jax: {
      items: ["Trinity Force", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "2 > 1 > 3"
    },
    yunara: {
      items: ["Kraken Slayer", "Runaan's Hurricane", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    ashe: {
      items: ["Blade of the Ruined King", "Runaan's Hurricane", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "2 > 1 > 3"
    },
    rell: {
      items: ["Locket of the Iron Solari", "Zeke's Convergence", "Force of Nature"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 3 > 1"
    },
    bard: {
      items: ["Shurelya's Battlesong", "Zeke's Convergence", "Redemption"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    jarvaniv: {
      items: ["Divine Sunderer", "Black Cleaver", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    sylas: {
      items: ["Lich Bane", "Cosmic Drive", "Rabadon's Deathcap"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "2 > 3 > 1"
    },
    rengar: {
      items: ["Duskblade of Draktharr", "Youmuu's Ghostblade", "Edge of Night"],
      rune: "Electrocute",
      runes: ["Sudden Impact", "Tyrant", "Relentless Hunter", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    varus: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Wit's End"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "2 > 1 > 3"
    },
    nautilus: {
      items: ["Locket of the Iron Solari", "Zeke's Convergence", "Abyssal Mask"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    ahri: {
      items: ["Luden's Echo", "Lich Bane", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    soraka: {
      items: ["Harmonic Echo", "Redemption", "Staff of Flowing Water"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "2 > 1 > 3"
    },
    janna: {
      items: ["Ardent Censer", "Harmonic Echo", "Redemption"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "3 > 2 > 1"
    },
    kogmaw: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Runaan's Hurricane"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "2 > 1 > 3"
    },
    ambessa: {
      items: ["Eclipse", "Black Cleaver", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    sivir: {
      items: ["Essence Reaver", "Navori Quickblades", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    zoe: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    rumble: {
      items: ["Liandry's Torment", "Riftmaker", "Rabadon's Deathcap"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    kennen: {
      items: ["Luden's Echo", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    rakan: {
      items: ["Shurelya's Battlesong", "Locket of the Iron Solari", "Redemption"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 3 > 1"
    },
    seraphine: {
      items: ["Harmonic Echo", "Staff of Flowing Water", "Rabadon's Deathcap"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust (Ignite in the Mid lane)"],
      skillOrder: "1 > 2 > 3"
    },
    graves: {
      items: ["Youmuu's Ghostblade", "The Collector", "Infinity Edge"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    kayn: {
      items: ["Duskblade of Draktharr", "Serylda's Grudge", "Edge of Night"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    samira: {
      items: ["The Collector", "Infinity Edge", "Immortal Shieldbow"],
      rune: "Conqueror",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    ornn: {
      items: ["Sunfire Aegis", "Frozen Heart", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 1 > 3"
    },
    yone: {
      items: ["Blade of the Ruined King", "Infinity Edge", "Immortal Shieldbow"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 2 > 3"
    },
    aatrox: {
      items: ["Eclipse", "Black Cleaver", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    gnar: {
      items: ["Trinity Force", "Black Cleaver", "Force of Nature"],
      rune: "Fleet Footwork",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    talon: {
      items: ["Youmuu's Ghostblade", "Serylda's Grudge", "Edge of Night"],
      rune: "Electrocute",
      runes: ["Sudden Impact", "Tyrant", "Relentless Hunter", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "2 > 1 > 3"
    },
    vayne: {
      items: ["Blade of the Ruined King", "Guinsoo's Rageblade", "Phantom Dancer"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Ignite (Heal in the Duo lane)"],
      skillOrder: "2 > 1 > 3"
    },
    lulu: {
      items: ["Ardent Censer", "Staff of Flowing Water", "Redemption"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "3 > 2 > 1"
    },
    warwick: {
      items: ["Blade of the Ruined King", "Titanic Hydra", "Sterak's Gage"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    xinzhao: {
      items: ["Trinity Force", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "2 > 1 > 3"
    },
    aurelionsol: {
      items: ["Rylai's Crystal Scepter", "Liandry's Torment", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    lux: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Exhaust (Ignite in the Mid lane)"],
      skillOrder: "3 > 1 > 2"
    },
    heimerdinger: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Void Staff"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    caitlyn: {
      items: ["Stormrazor", "Rapid Firecannon", "Infinity Edge"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    kassadin: {
      items: ["Rod of Ages", "Seraph's Embrace", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    swain: {
      items: ["Rod of Ages", "Liandry's Torment", "Rylai's Crystal Scepter"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Exhaust as support)"],
      skillOrder: "1 > 2 > 3"
    },
    maokai: {
      items: ["Locket of the Iron Solari", "Abyssal Mask", "Thornmail"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    twitch: {
      items: ["Blade of the Ruined King", "Runaan's Hurricane", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal (Smite when jungling)"],
      skillOrder: "3 > 1 > 2"
    },
    jinx: {
      items: ["Stormrazor", "Runaan's Hurricane", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    camille: {
      items: ["Divine Sunderer", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    garen: {
      items: ["Stridebreaker", "Black Cleaver", "Dead Man's Plate"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    kayle: {
      items: ["Nashor's Tooth", "Guinsoo's Rageblade", "Rabadon's Deathcap"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "3 > 1 > 2"
    },
    zed: {
      items: ["Youmuu's Ghostblade", "Duskblade of Draktharr", "Serylda's Grudge"],
      rune: "Electrocute",
      runes: ["Sudden Impact", "Tyrant", "Relentless Hunter", "Triumph"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    tryndamere: {
      items: ["Kraken Slayer", "Phantom Dancer", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    leesin: {
      items: ["Eclipse", "Black Cleaver", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    taliyah: {
      items: ["Luden's Echo", "Rylai's Crystal Scepter", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    volibear: {
      items: ["Trinity Force", "Dead Man's Plate", "Force of Nature"],
      rune: "Empowerment",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "2 > 1 > 3"
    },
    nasus: {
      items: ["Divine Sunderer", "Frozen Heart", "Force of Nature"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ghost"],
      skillOrder: "1 > 3 > 2"
    },
    poppy: {
      items: ["Divine Sunderer", "Sunfire Aegis", "Dead Man's Plate"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    pantheon: {
      items: ["Youmuu's Ghostblade", "Black Cleaver", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "1 > 3 > 2"
    },
    singed: {
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Force of Nature"],
      rune: "Phase Rush",
      runes: ["Axiom Arcanist", "Celerity", "Gathering Storm", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    ezreal: {
      items: ["Manamune", "Trinity Force", "Serylda's Grudge"],
      rune: "Conqueror",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    zeri: {
      items: ["Statikk Shiv", "Runaan's Hurricane", "Infinity Edge"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    jayce: {
      items: ["Eclipse", "Manamune", "Serylda's Grudge"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 2 > 3"
    },
    khazix: {
      items: ["Youmuu's Ghostblade", "Duskblade of Draktharr", "Edge of Night"],
      rune: "Electrocute",
      runes: ["Sudden Impact", "Tyrant", "Relentless Hunter", "Triumph"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    senna: {
      items: ["The Collector", "Rapid Firecannon", "Infinity Edge"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    twistedfate: {
      items: ["Luden's Echo", "Lich Bane", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    velkoz: {
      items: ["Luden's Echo", "Liandry's Torment", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite (Exhaust as support)"],
      skillOrder: "1 > 2 > 3"
    },
    renekton: {
      items: ["Black Cleaver", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    yasuo: {
      items: ["Blade of the Ruined King", "Infinity Edge", "Death's Dance"],
      rune: "Lethal Tempo",
      runes: ["Triumph", "Last Stand", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    karma: {
      items: ["Shurelya's Battlesong", "Ardent Censer", "Redemption"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    katarina: {
      items: ["Luden's Echo", "Nashor's Tooth", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    monkeyking: {
      items: ["Divine Sunderer", "Black Cleaver", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite (Ignite in the Baron lane)"],
      skillOrder: "3 > 1 > 2"
    },
    diana: {
      items: ["Nashor's Tooth", "Riftmaker", "Rabadon's Deathcap"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 2 > 3"
    },
    olaf: {
      items: ["Stridebreaker", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    zilean: {
      items: ["Shurelya's Battlesong", "Harmonic Echo", "Redemption"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "1 > 3 > 2"
    },
    mel: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    corki: {
      items: ["Trinity Force", "Rapid Firecannon", "Infinity Edge"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    pyke: {
      items: ["Duskblade of Draktharr", "Youmuu's Ghostblade", "Edge of Night"],
      rune: "Electrocute",
      runes: ["Sudden Impact", "Tyrant", "Relentless Hunter", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    jhin: {
      items: ["The Collector", "Infinity Edge", "Rapid Firecannon"],
      rune: "Fleet Footwork",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    akali: {
      items: ["Lich Bane", "Infinity Orb", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    vex: {
      items: ["Luden's Echo", "Infinity Orb", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    milio: {
      items: ["Ardent Censer", "Harmonic Echo", "Staff of Flowing Water"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "3 > 2 > 1"
    },
    nami: {
      items: ["Staff of Flowing Water", "Ardent Censer", "Harmonic Echo"],
      rune: "Aery",
      runes: ["Font of Life", "Second Wind", "Revitalize", "Manaflow Band"],
      spells: ["Flash", "Exhaust"],
      skillOrder: "2 > 3 > 1"
    },
    urgot: {
      items: ["Black Cleaver", "Titanic Hydra", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "2 > 1 > 3"
    },
    fizz: {
      items: ["Luden's Echo", "Lich Bane", "Rabadon's Deathcap"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "3 > 2 > 1"
    },
    alistar: {
      items: ["Locket of the Iron Solari", "Knight's Vow", "Thornmail"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    missfortune: {
      items: ["The Collector", "Infinity Edge", "Bloodthirster"],
      rune: "Empowerment",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    evelynn: {
      items: ["Lich Bane", "Rabadon's Deathcap", "Void Staff"],
      rune: "Electrocute",
      runes: ["Cheap Shot", "Tyrant", "Eyeball Collection", "Manaflow Band"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    riven: {
      items: ["Eclipse", "Black Cleaver", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite (Smite when jungling)"],
      skillOrder: "1 > 3 > 2"
    },
    blitzcrank: {
      items: ["Zeke's Convergence", "Locket of the Iron Solari", "Dead Man's Plate"],
      rune: "Guardian",
      runes: ["Courage of the Colossus", "Bone Plating", "Perseverance", "Zombie Ward"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    vi: {
      items: ["Divine Sunderer", "Black Cleaver", "Sterak's Gage"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    fiora: {
      items: ["Divine Sunderer", "Hullbreaker", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    viego: {
      items: ["Blade of the Ruined King", "Sterak's Gage", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Smite"],
      skillOrder: "1 > 3 > 2"
    },
    draven: {
      items: ["Bloodthirster", "The Collector", "Infinity Edge"],
      rune: "Conqueror",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 2 > 3"
    },
    sion: {
      items: ["Heartsteel", "Titanic Hydra", "Thornmail"],
      rune: "Grasp of the Undying",
      runes: ["Demolish", "Second Wind", "Overgrowth", "Triumph"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 2 > 3"
    },
    tristana: {
      items: ["Kraken Slayer", "Infinity Edge", "Bloodthirster"],
      rune: "Lethal Tempo",
      runes: ["Brutal", "Coup de Grace", "Legend: Alacrity", "Bone Plating"],
      spells: ["Flash", "Heal (Ignite in the Mid lane)"],
      skillOrder: "3 > 1 > 2"
    },
    ryze: {
      items: ["Rod of Ages", "Seraph's Embrace", "Rabadon's Deathcap"],
      rune: "Phase Rush",
      runes: ["Axiom Arcanist", "Celerity", "Gathering Storm", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    ziggs: {
      items: ["Luden's Echo", "Horizon Focus", "Rabadon's Deathcap"],
      rune: "Arcane Comet",
      runes: ["Manaflow Band", "Transcendence", "Scorch", "Cheap Shot"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    lucian: {
      items: ["Essence Reaver", "Navori Quickblades", "Infinity Edge"],
      rune: "Empowerment",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Heal"],
      skillOrder: "1 > 3 > 2"
    },
    akshan: {
      items: ["Kraken Slayer", "The Collector", "Infinity Edge"],
      rune: "Empowerment",
      runes: ["Brutal", "Coup de Grace", "Legend: Bloodline", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    },
    irelia: {
      items: ["Blade of the Ruined King", "Wit's End", "Death's Dance"],
      rune: "Conqueror",
      runes: ["Triumph", "Last Stand", "Legend: Haste", "Bone Plating"],
      spells: ["Flash", "Ignite"],
      skillOrder: "1 > 3 > 2"
    }
  }
};
