export type CharacterRole = "tank" | "healer" | "damage";
export type CharacterRegion = "us" | "eu" | "kr" | "tw";

export type Character = {
  id: string;
  name: string;
  realm: string;
  region: CharacterRegion;
  className: string;
  classSlug: string;
  specializationName: string;
  specializationSlug: string;
  role: CharacterRole;
};
