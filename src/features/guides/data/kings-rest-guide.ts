import type { DungeonGuide, EncounterGuide } from "../types";

export const kingsRestGuideData = {
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
      portrait: "/icons/bosses/golden-serpent.jpg",
      mechanics: [
        {
          id: "serpentine-gust",
          title: "Serpentine Gust",
          icon: "",
          description: "BIG AoE damage.",
        },
        {
          id: "spit-gold",
          title: "Spit Gold",
          icon: "",
          description:
            "DoT that drops on expiration. Stack puddles away from boss.",
        },
        {
          id: "lucres-call",
          title: "Lucre's Call",
          icon: "",
          description:
            "Summons adds from puddles. Kill the adds before they reach the boss.",
        },
        {
          id: "tail-thrash",
          title: "Tail Thrash",
          icon: "",
          description: "Tankbuster.",
        },
      ],
    },
    {
      id: "mchimba-the-embalmer",
      title: "Mchimba the Embalmer",
      summary: "Free allies from coffins.",
      portrait: "/icons/bosses/mchimba-the-embalmer.jpg",
      mechanics: [
        {
          id: "burn-corruption",
          title: "Burn Corruption",
          icon: "",
          description:
            "Drops fire on expiration. Drop fire near the edges of the room.",
        },
        {
          id: "drain-fluids",
          title: "Drain Fluids",
          icon: "",
          description: "Large channeled damage to target.",
        },
        {
          id: "awakening-slam",
          title: "Awakening Slam",
          icon: "",
          description:
            "Summons two adds. Kill them and interrupt Wretched Discharge.",
        },
        {
          id: "entomb",
          title: "Entomb",
          icon: "",
          description: "Traps target in coffin. Click the correct coffin.",
        },
      ],
    },
    {
      id: "the-council-of-tribes",
      title: "The Council of Tribes",
      summary: "Kill Explosive totem quick.",
      portrait: "/icons/bosses/council-of-tribes.jpg",
      mechanics: [
        {
          id: "barrel-through",
          title: "Barrel Through",
          icon: "",
          description:
            "Split damage around target. Stack to reduce individual damage.",
        },
        {
          id: "debilitating-backhand",
          title: "Debilitating Backhand",
          icon: "",
          description:
            "Tankbuster and debuff. Kite — the debuff increases damage taken by 200%.",
        },
        {
          id: "poison-nova",
          title: "Poison Nova",
          icon: "",
          description: "Large AoE cast. Interrupt.",
        },
        {
          id: "call-of-the-elements",
          title: "Call of the Elements",
          icon: "",
          description:
            "Summons three totems around the room. Kill the explosive totem first.",
        },
        {
          id: "arc-lightning",
          title: "Arc Lightning",
          icon: "",
          description: "Magic damage cast that jumps to nearby characters.",
        },
      ],
    },
    {
      id: "king-dazar",
      title: "King Dazar",
      summary: "Dodge the swirlies.",
      portrait: "/icons/bosses/king-dazar.jpg",
      mechanics: [
        {
          id: "deathly-roar",
          title: "Deathly Roar",
          icon: "",
          description: "AoE fear. Interrupt.",
        },
        {
          id: "blade-combo",
          title: "Blade Combo",
          icon: "",
          description: "Large damage to target. Use a defensive.",
        },
        {
          id: "gilded-destruction",
          title: "Gilded Destruction",
          icon: "",
          description:
            "Summons many Impaling Spears (swirlies) around King Dazar. Run out of the area and dodge the swirlies.",
        },
        {
          id: "aerial-smash",
          title: "Aerial Smash / Quaking Leap",
          icon: "",
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
          icon: "",
          description: "Interrupt.",
        },
        {
          id: "pit-of-despair",
          title: "Minion of Zul — Pit of Despair",
          icon: "",
          description: "Magic fear. Dispel only on mechanic failure.",
        },
        {
          id: "bound-by-shadow",
          title: "Minion of Zul — Bound by Shadow",
          icon: "",
          description: "Magic buff. Purge.",
        },
        {
          id: "ancestral-fury",
          title: "Shadow-Borne Champion — Ancestral Fury",
          icon: "",
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
          icon: "",
          description: "Interrupt.",
        },
        {
          id: "unholy-mending",
          title: "Seneschal M'bara — Unholy Mending",
          icon: "",
          description: "Interrupt.",
        },
        {
          id: "wretched-discharge",
          title: "Half-Finished Mummy — Wretched Discharge",
          icon: "",
          description: "Interrupt.",
        },
        {
          id: "lingering-fluid",
          title: "Embalming Fluid — Lingering Fluid",
          icon: "",
          description: "Poison. Dispel.",
        },
        {
          id: "bestial-berserk",
          title: "Queen Patlaa — Bestial Berserk  ",
          icon: "",
          description: "Purge.",
        },
        {
          id: "forked-lightning",
          title: "King Rahu'ai — Forked Lightning",
          icon: "",
          description:
            "Bouncing damage across players. Healers should prepare for group damage.",
        },
        {
          id: "soul-bolt",
          title: "Queen Wasi — Soul Bolt",
          icon: "",
          description:
            "Targets a random player. Use spare interrupts while prioritizing Bind Soul.",
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
          icon: "",
          description: "Interrupt. Curse dispel only on mechanic failure.",
        },
        {
          id: "spectral-bolt",
          title: "Phantom Hex Priest — Spectral Bolt",
          icon: "",
          description:
            "Targets a random player. Use spare interrupts while prioritizing Hex.",
        },
        {
          id: "shadow-barrage",
          title: "Shadow of Zul — Shadow Barrage",
          icon: "",
          description:
            "Targets random players. Use a defensive when it overlaps with other damage.",
        },
        {
          id: "putrid-seekers",
          title: "Putrid Seekers",
          icon: "",
          description: "Poison. Dispel.",
        },
      ],
    },
  ],
} satisfies DungeonGuide;

function withMechanicIcons(encounters: EncounterGuide[]): EncounterGuide[] {
  return encounters.map((encounter) => ({
    ...encounter,
    mechanics: encounter.mechanics.map((mechanic) => ({
      ...mechanic,
      icon: `/icons/spells/kings-rest/${mechanic.id}.jpg`,
    })),
  }));
}

export const kingsRestGuide: DungeonGuide = {
  ...kingsRestGuideData,
  bosses: withMechanicIcons(kingsRestGuideData.bosses),
  trash: withMechanicIcons(kingsRestGuideData.trash),
};
