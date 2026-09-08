export type Dungeon = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type MythicPlusSeason = {
  expansion: string;
  seasonNumber: number;
  patch: string;
  dungeons: Dungeon[];
};
