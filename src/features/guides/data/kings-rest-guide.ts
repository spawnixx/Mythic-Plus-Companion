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
  route: {
    provider: "keystone-guru",
    url: "https://keystone.guru/route/kings-rest/F6rsN3j/kr-pug-friendly/2",
    embedUrl:
      "https://keystone.guru/route/kings-rest/F6rsN3j/kr-pug-friendly/embed",
    label: "King's Rest route on Keystone.guru",
  },

  bosses: [
    {
      id: "the-golden-serpent",
      title: "The Golden Serpent",
      summary: "Don't let the adds get to the boss.",
      mechanics: [
        {
          id: "serpentine-gust",
          title: "Serpentine Gust",
          description: "BIG AoE damage.",
        },
        {
          id: "spit-gold",
          title: "Spit Gold",
          description:
            "DoT that drops on expiration. Stack puddles away from boss.",
        },
        {
          id: "lucres-call",
          title: "Lucre's Call",
          description:
            "Summons adds from puddles. Kill the adds before they reach the boss.",
        },
        {
          id: "tail-thrash",
          title: "Tail Thrash",
          description: "Tankbuster.",
        },
      ],
    },
    {
      id: "mchimba-the-embalmer",
      title: "Mchimba the Embalmer",
      summary: "Free allies from coffins.",
      mechanics: [
        {
          id: "burn-corruption",
          title: "Burn Corruption",
          description: "Drops fire on expiration. Drop fire near the edges of the room.",
        },
        {
          id: "drain-fluids",
          title: "Drain Fluids",
          description: "Large channeled damage to target.",
        },
        {
          id: "awakening-slam",
          title: "Awakening Slam",
          description:
            "Summons two adds. Kill them and interrupt Wretched Discharge.",
        },
        {
          id: "entomb",
          title: "Entomb",
          description: "Traps target in coffin. Click the correct coffin.",
        },
      ],
    },
    {
      id: "the-council-of-tribes",
      title: "The Council of Tribes",
      summary: "Kill Explosive totem quick.",
      mechanics: [
        {
          id: "barrel-through",
          title: "Barrel Through",
          description:
            "Split damage around target. Stack to reduce individual damage.",
        },
        {
          id: "debilitating-backhand",
          title: "Debilitating Backhand",
          description:
            "Tankbuster and debuff. Kite — the debuff increases damage taken by 200%.",
        },
        {
          id: "poison-nova",
          title: "Poison Nova",
          description: "Large AoE cast. Interrupt.",
        },
        {
          id: "call-of-the-elements",
          title: "Call of the Elements",
          description:
            "Summons three totems around the room. Kill the explosive totem first.",
        },
        {
          id: "arc-lightning",
          title: "Arc Lightning",
          description: "Magic damage cast that can be reflected.",
        },
      ],
    },
    {
      id: "king-dazar",
      title: "King Dazar",
      summary: "Dodge the swirlies.",
      mechanics: [
        {
          id: "deathly-roar",
          title: "Deathly Roar",
          description: "AoE fear. Interrupt.",
        },
        {
          id: "blade-combo",
          title: "Blade Combo",
          description: "Large damage to target. Use a defensive.",
        },
        {
          id: "gilded-destruction",
          title: "Gilded Destruction",
          description:
            "Summons many Impaling Spears (swirlies) around King Dazar. Run out of the area and dodge the swirlies.",
        },
        {
          id: "aerial-smash",
          title: "Aerial Smash / Quaking Leap",
          description: "AoE at target players. Spread out.",
        },
      ],
    },
  ],

  trash: [
    {
      id: "entrance-to-golden-serpent",
      title: "Entrance to The Golden Serpent",
      summary: "Handle fears, enrages, and Hex Volley before the first boss.",
      mechanics: [
        {
          id: "hex-volley",
          title: "Risen Hexer — Hex Volley",
          description: "Interrupt.",
        },
        {
          id: "pit-of-despair",
          title: "Minion of Zul — Pit of Despair",
          description:
            "Magic fear. Dispel only on mechanic failure.",
        },
        {
          id: "bound-by-shadow",
          title: "Minion of Zul — Bound by Shadow",
          description: "Magic buff. Purge.",
        },
        {
          id: "ancestral-fury",
          title: "Shadow-Borne Champion — Ancestral Fury",
          description: "Enrage. Soothe.",
        },
      ],
    },
    {
      id: "hall-of-kings",
      title: "Hall of Kings",
      summary:
        "Trash between The Golden Serpent and Mchimba. Cover interrupts, poisons, and dangerous casts.",
      mechanics: [
        {
          id: "bind-soul",
          title: "Queen Wasi — Bind Soul",
          description: "Interrupt.",
        },
        {
          id: "unholy-mending",
          title: "Seneschal M'bara — Unholy Mending",
          description: "Interrupt.",
        },
        {
          id: "wretched-discharge",
          title: "Half-Finished Mummy — Wretched Discharge",
          description: "Interrupt.",
        },
        {
          id: "lingering-fluid",
          title: "Embalming Fluid — Lingering Fluid",
          description: "Poison. Dispel.",
        },
        {
          id: "queen-patlaa",
          title: "Queen Patlaa",
          description: "Purge.",
        },
      ],
    },
    {
      id: "council-dazar-hall",
      title: "Hall to Council and King Dazar",
      summary:
        "Trash leading to The Council of Tribes and King Dazar. Hex, bolts, and Shadow of Zul are the priority.",
      mechanics: [
        {
          id: "hex",
          title: "Phantom Hex Priest — Hex",
          description: "Interrupt. Curse dispel only on mechanic failure.",
        },
        {
          id: "putrid-seekers",
          title: "Putrid Seekers",
          description: "Poison. Dispel.",
        },
      ],
    },
  ],
} satisfies DungeonGuide;
