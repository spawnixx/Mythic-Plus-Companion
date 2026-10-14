import { EncounterGuide, MechanicRecommendation, SpellData } from "../types";
import MechanicCard from "./MechanicCard";
import Image from "next/image";

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
      <div className="flex items-start gap-4">
        {encounter.portrait && (
          <Image
            src={encounter.portrait}
            alt=""
            width={80}
            height={80}
            className="h-16 w-16 shrink-0 rounded-lg border border-border object-cover sm:h-20 sm:w-20"
          />
        )}

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {encounter.title}
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {encounter.summary}
          </p>
        </div>
      </div>
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
