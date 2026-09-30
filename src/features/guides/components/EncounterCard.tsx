import { EncounterGuide, MechanicRecommendation, SpellData } from "../types";
import MechanicCard from "./MechanicCard";

export default function EncounterCard({
  encounter,
  specMechanics,
  spellData,
}: {
  encounter: EncounterGuide;
  specMechanics: MechanicRecommendation[];
  spellData: SpellData[];
}) {
  return (
    <li
      key={encounter.id}
      className="rounded-xl border border-border bg-background p-4 sm:p-6"
    >
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {encounter.title}
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
        {encounter.summary}
      </p>
      <ul className="mt-5 space-y-4">
        {encounter.mechanics.map((mechanic) => {
          const overlay = specMechanics.filter(
            (recommendation) => recommendation.mechanicId === mechanic.id,
          );
          return (
            <MechanicCard
              key={mechanic.id}
              mechanic={mechanic}
              recommendations={overlay}
              spellData={spellData}
            />
          );
        })}
      </ul>
    </li>
  );
}
