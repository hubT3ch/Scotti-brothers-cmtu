"use client";

import Link from "next/link";

export default function EpisodesPage() {
  return (
    <main className="episodes-page">
      <div className="episodes-background" aria-hidden="true" />

      <div className="episodes-content">
        <header className="episodes-header">
          <Link href="/" className="episodes-brand">
            SCOTTI BROTHERS
          </Link>

          <nav className="episodes-nav">
            <Link href="/">Home</Link>
            <Link href="/episodes">Episodes</Link>
            <Link href="/guests">Guests</Link>
            <Link href="/merchandise">Merchandise</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="episodes-intro">
          <p className="episodes-eyebrow">
            Scotti Brothers Entertainment
          </p>

          <h1>Episodes</h1>

          <p className="episodes-description">
            Watch &amp; Listen
          </p>
        </section>

        <section className="episodes-list">
          {/* Episode cards will be added here. */}
        </section>
      </div>
    </main>
  );
}
