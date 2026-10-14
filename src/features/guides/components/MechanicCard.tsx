import type { Mechanic, MechanicRecommendation, SpellData } from "../types";
import Image from "next/image";
export default function MechanicCard({
  mechanic,
  recommendations,
  spellData,
}: {
  mechanic: Mechanic;
  recommendations: MechanicRecommendation[];
  spellData: SpellData[];
}) {
  return (
    <li className="rounded-lg border border-border bg-surface p-5">
      <div className="p-2">
        <div className="flex items-center gap-2">
          {mechanic.icon && (
            <Image
              src={mechanic.icon}
              alt=""
              width={24}
              height={24}
              className="shrink-0 rounded"
            />
          )}
          <h4 className="min-w-0 text-base font-semibold text-foreground">
            {mechanic.title}
          </h4>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {mechanic.description}
        </p>
        {recommendations.length > 0 ? (
          <div className="mt-4 border-t border-border-subtle pt-4">
            <ul className="space-y-3">
              {recommendations.map((recommendation) => {
                const spell = spellData.find(
                  (spell) => spell.id === recommendation.spellId,
                );
                return (
                  <li key={recommendation.id}>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2">
                        {spell?.icon && (
                          <Image
                            src={spell.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="shrink-0 rounded"
                          />
                        )}
                        <h5 className="text-sm font-semibold text-foreground">
                          {spell?.name ?? recommendation.spellId}
                        </h5>
                      </div>
                      <p className="rounded-md bg-main-accent/10 px-2 py-0.5 text-xs font-medium text-main-accent">
                        {recommendation.priority}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {recommendation.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </li>
  );
}
