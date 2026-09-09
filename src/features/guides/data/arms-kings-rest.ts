import type { SpecializationGuide } from "../types";

export const kingsRestArmsGuide: SpecializationGuide = {
  dungeonSlug: "kings-rest",
  classSlug: "warrior",
  specializationSlug: "arms",
  talentBuild: "This is where the picture or import string will go.",
  mechanics: [
    {
      id: "spell-reflection-hall-of-kings",
      encounterId: "hall-of-kings",
      priority: "Must Have",
      title: "Spell Reflection",
      description:
        "Use against King Rahu'ai Forked Lightning and Queen Wasi Soul Bolt.",
    },
    {
      id: "spell-reflection-council-dazar-hall",
      encounterId: "council-dazar-hall",
      mechanicId: "hex",
      priority: "Must Have",
      title: "Spell Reflection",
      description:
        "Use against Phantom Hex Priest Hex and Spectral Bolt, and Shadow of Zul Shadow Barrage.",
    },
    {
      id: "spell-reflection-council",
      encounterId: "the-council-of-tribes",
      mechanicId: "arc-lightning",
      priority: "Must Have",
      title: "Spell Reflection",
      description: "Use against Arc Lightning.",
    },
    {
      id: "shockwave-council-dazar-hall",
      encounterId: "council-dazar-hall",
      priority: "Recommended",
      title: "Shockwave",
      description: "Useful when you need an AoE stop in this hallway.",
    },
    {
      id: "berserker-rage-entrance",
      encounterId: "entrance-to-golden-serpent",
      mechanicId: "pit-of-despair",
      priority: "Situational",
      title: "Berserker Rage",
      description:
        "Very limited use in modern dungeons. Use if you get feared by a Minion of Zul.",
    },
    {
      id: "berserker-rage-shadow-of-zul",
      encounterId: "council-dazar-hall",
      priority: "Situational",
      title: "Berserker Rage",
      description:
        "Very limited use in modern dungeons. Use if you get feared while fighting the Shadow of Zul.",
    },
  ],
};
