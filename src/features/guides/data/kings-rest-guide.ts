import type { DungeonGuide } from "../types";

export const kingsRestGuide = {
  id: "kings-rest-guide",
  dungeonSlug: "kings-rest",
  summary:
    "Prepare for King's Rest with the focused route, boss strategies, dangerous trash mechanics, and priority assignment.",
  priorities: [
    {
      id: "interrupts",
      title: "Plan Priority interrupts",
      description:
        "Review the dungeon's most dangerous casts before starting your run.",
    },
    {
      id: "route",
      title: "Understand the route",
      description:
        "Review pull order, enemy forces, and planned cooldown windows.",
    },
    {
      id: "defensives",
      title: "Prepare for dangerous damage",
      description:
        "Identify mechanics that require defensive cooldowns or careful positioning.",
    },
  ],
  route: "King's Rest route information will be added here.",

  bosses: [
    {
      id: "the-golden-serpent",
      title: "The Golden Serpent",
      description:
        "Main Focus: Don't let the adds get to the boss. Serpentine Gust-BIG AoE damage. Spit Gold-DoT that drops on expiration 'Stack puddles away from boss'. Lucre's Call-Summons adds from puddles 'Kill the adds before they reach the boss'. Tail Thrash-Tankbuster.",
    },
    {
      id: "mchimba-the-embalmer",
      title: "Mchimba the Embalmer",
      description:
        "Main Focus: Free allies from coffins. Burn Corruption-drops fire on expiration 'Drop fire near the edges of the room'. Drain Fluids-Large channeled damage to target. Awakening Slam-Summons two adds 'Kill them and interrupt Wretched Discharge'. Entomb-Traps target in coffin 'Click correct coffin'.",
    },
    {
      id: "the-council-of-tribes",
      title: "The Council of Tribes",
      description:
        "Main Focus: Kill Explosive totem quick. Barrel Through-Split damage around target 'Stack to reduce individual damage.' Debilitating Backhand-Tankbuster and debuff 'Kite-The debuff increases damage taken by 200%'. Poison Nova-Lage AoE cast 'interrupt'. Call of the Elements-Summons three totems arond the room 'Kill the explosive totem first' ",
    },
    {
      id: "king-dazar",
      title: "King Dazar",
      description:
        "Main Focus: Dodge the swirlies. Deathly Roar-AoE fear 'interrupt'. Blade Combo-Large damage to target 'Use a defensive'. Gilded Destruction-Summons many Impaling Spears(swirlies) around King Dazar 'Run out of the area and dodge the swirlies'. Aerial Smash/Quaking leap-AoE at target players. 'Spread out'.",
    },
  ],

  trash: [
    {
      id: "notable-trash",
      title: "Notable Trash",
      description:
        "Interrupts -Risen Hexer-Hex Volley. Queen Wasi-Bind Soul. Seneschal M'bara-Unholy Mending. Half-Finished Mummy-Wretched Discharge. Phantom Hex Priest-Hex. Dispels- Minion of Zul-Pit of Despair(Magic Fear only on mechanic failure). Embalming Fluid-Lingering Fluid(poison)-Putrid Seekers(poison). Phantom Hex Priest-hex(curse only on mechanic failure). Purges-Minion of Zul-Bound by Shadow(magic). Shadow-Borne Champion-Ancestral Fury(enrage/soothe). Queen Patlaa-",
    },
  ],
} satisfies DungeonGuide;
