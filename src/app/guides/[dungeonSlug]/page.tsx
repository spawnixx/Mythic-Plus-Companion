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
        <p>{guide.route}</p>
      </section>

      <section id="talents">
        <h2>Talents</h2>
        {specializationGuide ? (
          <p>{specializationGuide.talentBuild}</p>
        ) : (
          <p>No talent build is available for this specialization yet.</p>
        )}
      </section>

      <section id="bosses">
        <h2>Bosses</h2>
        <ul>
          {guide.bosses.map((boss) => (
            <li key={boss.id}>
              <h3>{boss.title}</h3>
              <p>{boss.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="trash">
        <h2>Trash</h2>
        <ul>
          {guide.trash.map((mob) => (
            <li key={mob.id}>
              <h3>{mob.title}</h3>
              <p>{mob.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="tips">
        <h2>
          {mockCharacter.specializationName} {mockCharacter.className} Tips
        </h2>

        {specializationGuide ? (
          <ul>
            {specializationGuide.tips.map((tip, i) => (
              <li key={tip.id}>
                <h3>
                  {i + 1}. {tip.title}
                </h3>
                <p>{tip.priority}</p>
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
