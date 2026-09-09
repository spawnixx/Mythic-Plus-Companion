import type { SpecializationGuide } from "../types";

export const kingsRestArmsGuide: SpecializationGuide = {
  dungeonSlug: "kings-rest",
  classSlug: "warrior",
  specializationSlug: "arms",
  talentBuild: "This is where the picture or import string will go.",
  tips: [
    {
      id: "spell-reflection-mchimba-trash",
      priority: "Must Have",
      title: "Spell Reflection",
      description:
        "Useful in the 'Hall of Kings' just after The Golden Serpent on the way to Mchimba. Use against King Rahu'ai Forked Lightning & Queen Wasi Soul Bolt.",
    },
    {
      id: "spell-reflection-council-king-trash",
      priority: "Must Have",
      title: "Spell Reflection",
      description:
        "Useful in the hall leading to both Council and King Dazar. Use against Phantom Hex Priest Hex & Spectral Bolt AND Shadow of Zul Shadow Barrage",
    },
    {
      id: "spell-reflection-council",
      priority: "Must Have",
      title: "Spell Reflection",
      description: "Useful in Council. Use against Arc Lightning.",
    },
    {
      id: "shockwave-general",
      priority: "Recommended",
      title: "Shockwave",
      description:
        "Useful when you need an AoE stop. Use in the hallway going to Council and King Dazar.",
    },
    {
      id: "berserker-rage-general",
      priority: "Situational",
      title: "Berserker Rage",
      description:
        "Very limited use in modern dungeons. Use if you get feared by a Minion of Zul before The Golden Serpent or while fighting the Shadow of Zul.",
    },
  ],
};
