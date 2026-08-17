"use client";

import Link from "next/link";

const comingSoonEpisodes = [
  {
    number: "01",
    title: "Coming Soon",
    description:
      "An unforgettable story from the music and entertainment industry.",
  },
  {
    number: "02",
    title: "Coming Soon",
    description:
      "Real stories, unbelievable moments, and conversations you won't expect.",
  },
  {
    number: "03",
    title: "Coming Soon",
    description:
      "Another story that sounds too crazy to be true—but it happened.",
  },
];

const reels = [
  {
    number: "01",
    title: "Coming Soon",
  },
  {
    number: "02",
    title: "Coming Soon",
  },
  {
    number: "03",
    title: "Coming Soon",
  },
];

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-[#d8b887] text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </Link>

          <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] sm:gap-7 sm:text-xs">
            <Link
              href="/"
              className="text-white/75 transition hover:text-[#d8b887]"
            >
              Home
            </Link>

            <Link
              href="/episodes"
              className="text-[#d8b887]"
            >
              Episodes
            </Link>

            <Link
              href="/guests"
              className="text-white/75 transition hover:text-[#d8b887]"
            >
              Guests
            </Link>

            <Link
              href="/merchandise"
              className="text-white/75 transition hover:text-[#d8b887]"
            >
              Merchandise
            </Link>

            <Link
              href="/contact"
              className="text-white/75 transition hover:text-[#d8b887]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/20 bg-[#d8b887]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-[#c62828]">
              Scotti Brothers Entertainment
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
              Episodes
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-black/65 sm:text-lg">
              Unbelievable moments. Real stories.
              Conversations from the music and entertainment
              industry that you simply{" "}
              <span className="font-black text-black">
                Can&apos;t Make This Up!
              </span>
            </p>

            <div className="mx-auto mt-8 flex max-w-md items-center gap-4">
              <span className="h-px flex-1 bg-black/45" />

              <span className="h-3 w-3 rotate-45 border-2 border-[#c62828]" />

              <span className="h-px flex-1 bg-black/45" />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT EPISODE */}
      <section className="bg-[#d8b887] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Now Playing"
            title="Current Episode"
          />

          <div className="mt-10 overflow-hidden rounded-3xl border-2 border-black bg-black shadow-[0_20px_55px_rgba(0,0,0,0.30)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* CURRENT EPISODE VISUAL */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#111111] p-8 sm:min-h-[420px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(216,184,135,0.10),transparent_55%)]" />

                <div className="relative z-10 text-center">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c62828]">
                    Current Episode
                  </p>

                  <div className="mx-auto mt-6 h-1 w-16 bg-[#d8b887]" />

                  <h3 className="mt-7 text-4xl font-black uppercase text-white sm:text-5xl">
                    Coming Soon
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#d8b887]">
                    Scotti Brothers
                  </p>
                </div>
              </div>

              {/* CURRENT EPISODE DETAILS */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <EpisodeLabel number="01" />

                <h3 className="mt-6 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  The Next Story
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  The next episode of{" "}
                  <span className="text-[#d8b887]">
                    Can&apos;t Make This Up!
                  </span>{" "}
                  is coming soon. Get ready for another
                  unforgettable conversation filled with
                  stories, music, and moments you won't
                  believe.
                </p>

                <div className="mt-8">
                  <span className="inline-flex border border-[#d8b887]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d8b887]">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON EPISODES */}
      <section className="border-y border-black/15 bg-[#d8b887] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What's Next"
            title="Coming Soon"
          />

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {comingSoonEpisodes.map((episode) => (
              <article
                key={episode.number}
                className="group overflow-hidden rounded-3xl border-2 border-black bg-black shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#c62828]"
              >
                {/* CARD BACK — BLACK */}
                <div className="relative flex min-h-[330px] flex-col justify-between bg-black p-7">
                  <div>
                    {/* RED EPISODE LABEL */}
                    <EpisodeLabel number={episode.number} />

                    <h3 className="mt-7 text-2xl font-black uppercase text-white">
                      {episode.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/55">
                      {episode.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="h-px w-full bg-[#d8b887]/20" />

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[#d8b887]">
                      Episode {episode.number}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EPISODE REELS */}
      <section className="bg-black px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-[#c62828]">
                Watch
              </p>

              {/* RED EPISODE REELS HEADING */}
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c62828] sm:text-5xl">
                Episode Reels
              </h2>

              <p className="mt-4 max-w-2xl text-white/50">
                Short clips and memorable moments from
                Can&apos;t Make This Up!
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {reels.map((reel) => (
              <article
                key={reel.number}
                className="group overflow-hidden rounded-2xl border border-[#d8b887]/20 bg-[#0d0d0d]"
              >
                <div className="flex aspect-video items-center justify-center bg-black">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c62828] text-[#c62828] transition group-hover:bg-[#c62828] group-hover:text-white">
                      <span className="ml-1 text-xl">
                        ▶
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d8b887]">
                      Coming Soon
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <EpisodeLabel number={reel.number} />

                  <h3 className="mt-4 text-xl font-black uppercase text-white">
                    {reel.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8b887]/15 bg-black px-5 py-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Entertainment"
              className="h-10 w-auto object-contain"
            />

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              © 2026 Scotti Brothers Entertainment.
              All rights reserved.
            </p>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d8b887]/70">
            Can&apos;t Make This Up!
          </p>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------
   SECTION HEADING
------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.45em] text-[#c62828]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c62828] sm:text-5xl">
        {title}
      </h2>

      <div className="mt-5 h-1 w-16 bg-black" />
    </div>
  );
}

/* -------------------------------------------------
   EPISODE LABEL
------------------------------------------------- */

function EpisodeLabel({
  number,
}: {
  number: string;
}) {
  return (
    <span className="inline-flex items-center bg-[#c62828] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
      Episode {number}
    </span>
  );
}
