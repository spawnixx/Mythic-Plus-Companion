export type GuidePriority = {
  id: string;
  title: string;
  description: string;
};

export type Mechanic = {
  id: string;
  title: string;
  description: string;
};

export type EncounterGuide = {
  id: string;
  title: string;
  summary: string;
  mechanics: Mechanic[];
};

export type DungeonRoute = {
  provider: "keystone-guru";
  url: string;
  embedUrl: string;
  label: string;
};

export type DungeonGuide = {
  id: string;
  dungeonSlug: string;
  summary: string;
  priorities: GuidePriority[];
  route: DungeonRoute;
  bosses: EncounterGuide[];
  trash: EncounterGuide[];
};

export type SpecializationMechanic = {
  id: string;
  encounterId: string;
  mechanicId?: string;
  priority: "Must Have" | "Recommended" | "Situational";
  title: string;
  description: string;
};

export type SpecializationGuide = {
  dungeonSlug: string;
  classSlug: string;
  specializationSlug: string;
  talentBuild: string;
  mechanics: SpecializationMechanic[];
};
