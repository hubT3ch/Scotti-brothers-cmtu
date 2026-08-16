"use client";

import Image from "next/image";
import Link from "next/link";

type Episode = {
  slug: string;
  episodeNumber: string;
  title: string;
  guestName: string;
  guestSubtitle: string;
  guestImage: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
};

const episodes: Episode[] = [
  {
    slug: "episode-1",
    episodeNumber: "EPISODE 01",
    title: "Can’t Make This Up!",
    guestName: "Jaheim",
    guestSubtitle: "R&B Singer & Songwriter",
    guestImage: "/images/episodes/jaheim.jpg",
    description:
      "The Scotti Brothers sit down with Jaheim for an unforgettable conversation.",
    videoUrl: "",
    audioUrl: "",
  },

  // Add future episodes here.
  // Each episode gets its own guest photo, name, subtitle,
  // description, video, and audio information.
];

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/episodes/episodes-hero-bg.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/75">
            The Scotti Brothers
          </p>

          <h1 className="text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl">
            Episodes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Real conversations. Real stories. No script. No filter.
          </p>
        </div>
      </section>

      {/* EPISODES */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            Watch & Listen
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Latest Episodes
          </h2>
        </div>

        {episodes.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-lg text-white/70">
              Episodes coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {episodes.map((episode) => (
              <article
                key={episode.slug}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                {/* Guest Image */}
                <Link
                  href={`/episodes/${episode.slug}`}
                  className="block"
                  aria-label={`View ${episode.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <Image
                      src={episode.guestImage}
                      alt={episode.guestName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Episode Badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-black/80 px-4 py-2 text-xs font-bold tracking-[0.2em] backdrop-blur-sm">
                      {episode.episodeNumber}
                    </div>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                    {episode.guestSubtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {episode.guestName}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-white/85">
                    {episode.title}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/60">
                    {episode.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/episodes/${episode.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/85"
                    >
                      View Episode
                    </Link>

                    {episode.videoUrl && (
                      <a
                        href={episode.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                      >
                        Watch
                      </a>
                    )}

                    {episode.audioUrl && (
                      <a
                        href={episode.audioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                      >
                        Listen
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </p>
      </footer>
    </main>
  );
}