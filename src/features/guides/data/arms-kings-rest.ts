import type { SpecializationGuide } from "../types";

export const kingsRestArmsGuide: SpecializationGuide = {
  dungeonSlug: "kings-rest",
  classSlug: "warrior",
  specializationSlug: "arms",
  talentBuild: "This is where the picture or import string will go.",
  mechanics: [
    {
      id: "spell-reflection-hall-of-kings-rahu",
      mechanicId: "forked-lightning",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against King Rahu'ai Forked Lightning.",
    },
    {
      id: "spell-reflection-hall-of-kings-wasi",
      mechanicId: "soul-bolt",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against Queen Wasi's Soul Bolt.",
    },
    {
      id: "spell-reflection-council-dazar-hall-hex",
      mechanicId: "hex",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against Phantom Hex Priest Hex.",
    },
    {
      id: "spell-reflection-council-dazar-hall-bolt",
      mechanicId: "spectral-bolt",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against Phantom Hex Priest Spectral Bolt.",
    },
    {
      id: "spell-reflection-council-dazar-hall-barrage",
      mechanicId: "shadow-barrage",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against Shadow of Zul Shadow Barrage.",
    },
    {
      id: "spell-reflection-council",
      mechanicId: "arc-lightning",
      spellId: "spell-reflection",
      priority: "Must Have",
      description: "Use against Arc Lightning.",
    },
    {
      id: "shockwave-council-dazar-hall",
      mechanicId: "spectral-bolt",
      spellId: "shockwave",
      priority: "Recommended",
      description: "Useful when you need an AoE stop in this hallway.",
    },
    {
      id: "berserker-rage-minion-of-zul",
      mechanicId: "pit-of-despair",
      spellId: "berserker-rage",
      priority: "Situational",
      description:
        "Very limited use in modern dungeons. Use if you get feared by a Minion of Zul.",
    },
  ],
};
