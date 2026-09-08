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
} satisfies DungeonGuide;
