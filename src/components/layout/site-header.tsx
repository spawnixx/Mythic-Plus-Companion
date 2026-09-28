import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-main-accent"
          >
            Mythic+ Companion
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/guides/kings-rest"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  King&apos;s Rest Guide
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
}
