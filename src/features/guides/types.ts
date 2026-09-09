export type GuidePriority = {
  id: string;
  title: string;
  description: string;
};

export type GuideEntry = {
  id: string;
  title: string;
  description: string;
};

export type DungeonGuide = {
  id: string;
  dungeonSlug: string;
  summary: string;
  priorities: GuidePriority[];
  route: string;
  bosses: GuideEntry[];
  trash: GuideEntry[];
};

export type SpecializationTip = {
  id: string;
  priority: "Must Have" | "Recommended" | "Situational";
  title: string;
  description: string;
};

export type SpecializationGuide = {
  dungeonSlug: string;
  classSlug: string;
  specializationSlug: string;
  talentBuild: string;
  tips: SpecializationTip[];
};
