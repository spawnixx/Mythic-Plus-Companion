export interface GuidePriority {
  id: string;
  title: string;
  description: string;
}

export interface Mechanic {
  id: string;
  title: string;
  description: string;
}

export interface EncounterGuide {
  id: string;
  title: string;
  summary: string;
  mechanics: Mechanic[];
}

export interface DungeonRoute {
  url: string;
  embedUrl: string;
  label: string;
}

export interface DungeonGuide {
  id: string;
  dungeonSlug: string;
  summary: string;
  priorities: GuidePriority[];
  route: DungeonRoute;
  bosses: EncounterGuide[];
  trash: EncounterGuide[];
}

export type MechanicPriority = "Must Have" | "Recommended" | "Situational";

export interface SpellData {
  id: string;
  name: string;
  icon: string;
}

export interface MechanicRecommendation {
  id: string;
  mechanicId: string;
  spellId: string;
  priority: MechanicPriority;
  description: string;
}

export interface SpecializationGuide {
  dungeonSlug: string;
  classSlug: string;
  specializationSlug: string;
  talentBuild: string;
  mechanics: MechanicRecommendation[];
}
