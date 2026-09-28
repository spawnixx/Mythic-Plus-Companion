import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-main-accent border-2 rounded-sm p-2">
          Mythic+ Companion
        </h1>
        <p>
          A personalized World of Warcraft Mythic+ companion that combines
          dungeon routes, talent builds, mechanics, and spec-specific tips in
          one place.
        </p>
        <Link href="dashboard" className="border-2 rounded-md">
          Prepare for a dungeon
        </Link>
      </main>
    </div>
  );
}
