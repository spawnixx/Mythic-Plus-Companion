import Link from "next/link";

import { mockCharacter } from "@/features/characters/data/mock-character";
import { midnightSeasonTwo } from "@/features/dungeons/data/midnight-season-two";
import { PageContainer } from "@/components/layout/page-container";

export default function DashboardPage() {
  const kingsRest = midnightSeasonTwo.dungeons.find(
    (dungeon) => dungeon.slug === "kings-rest",
  );

  if (!kingsRest) {
    return <p>Dungeon Not Found.</p>;
  }
  return (
    <main>
      <PageContainer>
        <section>
          <h1>Prepare for Mythic+</h1>

          <p>Select a character and dungeon to build your personalized guide</p>

          <div>
            <h2>Selected Character:</h2>
            <h3>{mockCharacter.name}</h3>

            <p>
              {mockCharacter.specializationName} {mockCharacter.className}
            </p>

            <p>
              {mockCharacter.realm} · {mockCharacter.region.toUpperCase()}
            </p>
          </div>

          <div>
            <p>
              {midnightSeasonTwo.expansion} Season{" "}
              {midnightSeasonTwo.seasonNumber} · ({midnightSeasonTwo.patch})
            </p>
            <p></p>
            <article>
              <h2>Selected Dungeon:</h2>
              <h3>{kingsRest.name}</h3>
              <p>{kingsRest.description}</p>

              <Link
                href={`/guides/${kingsRest.slug}`}
                className="border-2 rounded-md "
              >
                Prepare for {kingsRest.name}
              </Link>
            </article>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
