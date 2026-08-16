"use client";

import Image from "next/image";
import Link from "next/link";

type Episode = {
  slug: string;
  number: string;
  title: string;
  guest: string;
  subtitle: string;
  image?: string;
  description: string;
};

const episodes: Episode[] = [
  {
    slug: "episode-1",
    number: "01",
    title: "Can’t Make This Up!",
    guest: "Jaheim",
    subtitle: "R&B Singer • Songwriter • Music Industry",
    image: undefined,
    description:
      "The Scotti Brothers sit down with Jaheim for a conversation filled with unbelievable moments, real stories, music, and plenty of things you simply can’t make up.",
  },
];

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/hero/hero-background.png"
          alt="Scotti Brothers"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

        {/* Navigation */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
            <Link href="/" className="relative h-14 w-40">
              <Image
                src="/images/logo/logo.png"
                alt="Scotti Brothers"
                fill
                className="object-contain object-left"
              />
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-sm font-black uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/episodes"
                className="text-sm font-black uppercase tracking-[0.18em] text-white"
              >
                Episodes
              </Link>

              <Link
                href="/guests"
                className="text-sm font-black uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                Guests
              </Link>

              <Link
                href="/merchandise"
                className="text-sm font-black uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                Merchandise
              </Link>

              <Link
                href="/contact"
                className="text-sm font-black uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-6xl items-end px-6 pb-16 lg:px-10">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#f4b400]">
              Scotti Brothers
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              Episodes
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg">
              Unbelievable moments. Real stories. Music industry conversations.
              And plenty of things you simply can’t make up.
            </p>
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <section className="relative bg-black px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f4b400]">
                Watch & Listen
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Latest Episodes
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/50">
              New conversations, new guests, and stories you won't hear
              anywhere else.
            </p>
          </div>

          <div className="grid gap-10">
            {episodes.map((episode) => (
              <article
                key={episode.slug}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
              >
                <div className="grid lg:grid-cols-[420px_1fr]">
                  {/* Guest Photo */}
                  <div className="relative min-h-[420px] overflow-hidden bg-[#151515]">
                    {episode.image ? (
                      <Image
                        src={episode.image}
                        alt={episode.guest}
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#f4b400]/40">
                            <span className="text-3xl font-black text-[#f4b400]">
                              {episode.number}
                            </span>
                          </div>

                          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/30">
                            Guest Photo
                          </p>

                          <p className="mt-2 text-sm text-white/20">
                            Jaheim photo will be added from Supabase
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="absolute left-5 top-5 rounded-full bg-[#d71920] px-5 py-2 text-xs font-black uppercase tracking-[0.18em]">
                      Episode {episode.number}
                    </div>
                  </div>

                  {/* Episode Information */}
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f4b400]">
                      Featured Guest
                    </p>

                    <h3 className="mt-3 text-5xl font-black uppercase leading-none sm:text-6xl">
                      {episode.guest}
                    </h3>

                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-white/50">
                      {episode.subtitle}
                    </p>

                    <div className="my-8 h-px w-full bg-white/10" />

                    <p className="max-w-2xl text-base leading-7 text-white/65">
                      {episode.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-wrap gap-4">
                      <Link
                        href={`/episodes/${episode.slug}`}
                        className="rounded-full bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:bg-[#ef2027]"
                      >
                        Watch Episode
                      </Link>

                      <Link
                        href={`/episodes/${episode.slug}`}
                        className="rounded-full border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:border-white hover:bg-white/10"
                      >
                        Listen
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="border-t border-white/10 bg-[#080808] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d71920]">
            More Coming Soon
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
            More Guests.
            <br />
            More Stories.
            <br />
            More You Can’t Make Up.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/50">
            Episode 2 and beyond will appear here automatically as new
            episodes are added.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </p>
      </footer>
    </main>
  );
}
