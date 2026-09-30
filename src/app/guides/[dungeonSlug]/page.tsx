import { notFound } from "next/navigation";

import { mockCharacter } from "@/features/characters/data/mock-character";
import { midnightSeasonTwo } from "@/features/dungeons/data/midnight-season-two";
import { dungeonGuides } from "@/features/guides/data/dungeon-guides";
import { specializationGuides } from "@/features/guides/data/specialization-guides";
import type {
  EncounterGuide,
  MechanicRecommendation,
  SpellData,
} from "@/features/guides/types";
import { PageContainer } from "@/components/layout/page-container";
import { warriorSpells } from "@/features/characters/data/warrior-spell-data";
import EncounterCard from "@/features/guides/components/EncounterCard";

type GuidePageProps = {
  params: Promise<{
    dungeonSlug: string;
  }>;
};

function EncounterList({
  encounters,
  specMechanics,
  spellData,
}: {
  encounters: EncounterGuide[];
  specMechanics: MechanicRecommendation[];
  spellData: SpellData[];
}) {
  return (
    <ul className="space-y-6">
      {encounters.map((encounter) => (
        <EncounterCard
          key={encounter.id}
          encounter={encounter}
          specMechanics={specMechanics}
          spellData={spellData}
        />
      ))}
    </ul>
  );
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { dungeonSlug } = await params;

  const dungeon = midnightSeasonTwo.dungeons.find(
    (currentDungeon) => currentDungeon.slug === dungeonSlug,
  );

  if (!dungeon) {
    notFound();
  }

  const guide = dungeonGuides.find(
    (currentGuide) => currentGuide.dungeonSlug === dungeon.slug,
  );

  if (!guide) {
    notFound();
  }

  const specializationGuide = specializationGuides.find(
    (guide) =>
      guide.dungeonSlug === dungeonSlug &&
      guide.classSlug === mockCharacter.classSlug &&
      guide.specializationSlug === mockCharacter.specializationSlug,
  );

  const specMechanics = specializationGuide?.mechanics ?? [];

  return (
    <main>
      <header>
        <p>
          {midnightSeasonTwo.expansion} Season {midnightSeasonTwo.seasonNumber}{" "}
          · ({midnightSeasonTwo.patch})
        </p>
        <h1>{dungeon.name}</h1>

        <p>
          Prepared for {mockCharacter.name}, {mockCharacter.specializationName}{" "}
          {mockCharacter.className}
        </p>
      </header>
      <PageContainer>
        <nav aria-label="Dungeon Guide sections">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>

            <li>
              <a href="#route">Route</a>
            </li>

            <li>
              <a href="#talents">Talents</a>
            </li>

            <li>
              <a href="#bosses">Bosses</a>
            </li>

            <li>
              <a href="#trash">Trash</a>
            </li>
          </ul>
        </nav>

        <section id="overview">
          <h2>Overview</h2>
          <p>{guide.summary}</p>

          <h3>Preparation Priorities</h3>

          <ul>
            {guide.priorities.map((priority) => (
              <li key={priority.id}>
                <h4>{priority.title}</h4>
                <p>{priority.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="route">
          <h2>Route</h2>
          <iframe
            src={guide.route.embedUrl}
            title={guide.route.label}
            style={{ width: "100%", height: "600px", border: "none" }}
          />
        </section>

        <section id="talents">
          <h2>Talents</h2>
          {specializationGuide ? (
            <>
              <p>{specializationGuide.talentBuild}</p>
              <button>View Full Talent build here</button>
            </>
          ) : (
            <p>No talent build is available for this specialization yet.</p>
          )}
        </section>

        <section id="bosses">
          <div id="bosses">
            <h2>Bosses</h2>
            <EncounterList
              encounters={guide.bosses}
              specMechanics={specMechanics}
              spellData={warriorSpells}
            />
          </div>
        </section>

        <section id="trash">
          <h2>Trash</h2>
          <EncounterList
            encounters={guide.trash}
            specMechanics={specMechanics}
            spellData={warriorSpells}
          />
        </section>
      </PageContainer>
    </main>
  );
}
