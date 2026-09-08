import type { MythicPlusSeason } from "../types";
import { kingsRest } from "./kings-rest";

export const midnightSeasonTwo = {
  expansion: "Midnight",
  seasonNumber: 2,
  patch: "12.1",
  dungeons: [kingsRest],
} satisfies MythicPlusSeason;
