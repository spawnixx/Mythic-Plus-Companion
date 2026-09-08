import { notFound } from "next/navigation";

import { mockCharacter } from "@/features/characters/data/mock-character";
import { midnightSeasonTwo } from "@/features/dungeons/data/midnight-season-two";
import { dungeonGuides } from "@/features/guides/data/dungeon-guides";
import { SpecializationGuides } from "@/features/guides/data/specialization-guides";

type GuidePageProps = {
  params: Promise<{
    dungeonSlug: string;
  }>;
};

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

  const specializationGuide = SpecializationGuides.find(
    (guide) =>
      guide.dungeonSlug === dungeonSlug &&
      guide.specializationSlug === mockCharacter.specializationSlug,
  );
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

          <li>
            <a href="#tips">Tips</a>
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
        <p>Route information will go here</p>
      </section>

      <section id="talents">
        <h2>Talents</h2>
        <p>
          The Recommended Arms Warrior talent build and import string will go
          here
        </p>
      </section>

      <section id="bosses">
        <h2>Bosses</h2>
        <p>Boss Strategies will go here</p>
      </section>

      <section id="trash">
        <h2>Trash</h2>
        <p>Import mobs and mechanics will go here</p>
      </section>

      <section id="tips">
        <h2>
          {mockCharacter.specializationName} {mockCharacter.className} Tips
        </h2>

        {specializationGuide ? (
          <ul>
            {specializationGuide.tips.map((tip) => (
              <li key={tip.id}>
                <p>{tip.priority}</p>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Specialization tips are available yet.</p>
        )}
      </section>
    </main>
  );
}
