"use client";

import Link from "next/link";
import { useState } from "react";

type Episode = {
  id: string;
  slug: string;
  episodeNumber: number;
  guestName: string;
  guestPhoto: string;
  topic: string;
  description: string;
  videoUrl: string;
  audioUrl: string;
  status: "live" | "coming-soon";
};

/*
 * TEMPORARY EPISODE DATA
 *
 * This is only here while we build the frontend.
 *
 * Jaheim is NOT special.
 * He is simply Episode 1.
 *
 * Later this array will be replaced with the
 * Scotti Podcast Supabase query.
 */
const episodes: Episode[] = [
  {
    id: "episode-1",
    slug: "episode-1",
    episodeNumber: 1,
    guestName: "Jaheim",
    guestPhoto: "",
    topic: "The Comeback, the Struggle & the Blessings",
    description:
      "Jaheim gets real about his journey, the music industry, staying grounded, and why faith keeps him moving forward.",
    videoUrl: "",
    audioUrl: "",
    status: "live",
  },
];

const navigation = [
  { label: "HOME", href: "/" },
  { label: "EPISODES", href: "/episodes" },
  { label: "GUESTS", href: "/guests" },
  { label: "MERCHANDISE", href: "/merchandise" },
  { label: "CONTACT", href: "/contact" },
];

function EpisodeButton({
  episode,
  children,
}: {
  episode: Episode;
  children: React.ReactNode;
}) {
  const hasVideo = Boolean(episode.videoUrl);

  if (hasVideo) {
    return (
      <a
        href={episode.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-[#a91519] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-md transition hover:bg-[#c51d22]"
      >
        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#a91519]">
          ▶
        </span>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className="inline-flex items-center justify-center rounded-full bg-[#a91519] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-md transition hover:bg-[#c51d22]"
    >
      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#a91519]">
        ▶
      </span>
      {children}
    </Link>
  );
}

export default function EpisodesPage() {
  const [activeEpisode, setActiveEpisode] = useState<Episode>(
    episodes[0]
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#d8b88b] text-black">
      {/* =========================================================
          PAGE BACKGROUND / ARTWORK
          ========================================================= */}

      <section
        className="relative min-h-screen bg-[#d8b88b]"
        style={{
          backgroundImage:
            "url('/images/episodes/episodes-background.png')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        {/* =======================================================
            TEXTURE / READABILITY LAYER
            ======================================================= */}

        <div className="absolute inset-0 bg-[#d8b88b]/10" />

        {/* =======================================================
            NAVIGATION
            ======================================================= */}

        <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-end px-6 pt-7 sm:px-10 lg:px-16">
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10">
            {navigation.map((item) => {
              const active = item.href === "/episodes";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-black tracking-[0.08em] transition sm:text-[15px] ${
                    active
                      ? "text-[#a91519]"
                      : "text-black hover:text-[#a91519]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute -bottom-3 left-0 right-0 mx-auto h-[4px] w-16 rounded-full bg-[#a91519]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </header>

        {/* =======================================================
            PAGE INTRO
            ======================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-[150px] sm:px-10 lg:px-16 lg:pt-[185px]">
          <div className="max-w-[620px]">
            <h1
              className="font-black uppercase leading-[0.85] tracking-[-0.04em] text-black"
              style={{
                fontSize: "clamp(4rem, 8vw, 7rem)",
              }}
            >
              EPISODES
            </h1>

            <div className="mt-5 h-[7px] w-32 rounded-full bg-[#a91519]" />

            <p className="mt-5 max-w-[520px] text-lg font-bold leading-tight sm:text-xl">
              Unbelievable moments. Real stories.
              <br />
              Music industry insanity.
            </p>
          </div>
        </div>

        {/* =======================================================
            DYNAMIC FEATURED EPISODE
            ======================================================= */}

        <section className="relative z-10 mx-auto mt-10 w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[12px] border border-[#a91519]/60 bg-[#ead3ac]/95 shadow-xl">
            <div className="grid lg:grid-cols-[52%_48%]">
              {/* GUEST PHOTO */}

              <div className="relative min-h-[330px] overflow-hidden bg-black sm:min-h-[420px]">
                {activeEpisode.guestPhoto ? (
                  <img
                    src={activeEpisode.guestPhoto}
                    alt={activeEpisode.guestName}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#171717]">
                    <div className="text-center">
                      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#f0a900]">
                        <span className="text-4xl font-black text-[#f0a900]">
                          {String(activeEpisode.episodeNumber).padStart(
                            2,
                            "0"
                          )}
                        </span>
                      </div>

                      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-white/50">
                        Guest Photo
                      </p>

                      <p className="mt-2 text-sm text-white/30">
                        Photo will be supplied from Supabase
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute left-0 top-0 bg-[#a91519] px-5 py-2">
                  <span className="text-sm font-black uppercase tracking-[0.08em] text-white">
                    ★ LATEST EPISODE ★
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 bg-black/90 px-5 py-3">
                  <span className="text-sm font-black uppercase tracking-[0.08em] text-white">
                    EP.{" "}
                    {String(activeEpisode.episodeNumber).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* EPISODE INFORMATION */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#a91519]">
                  GUEST
                </p>

                <h2 className="mt-1 text-4xl font-black uppercase leading-none sm:text-5xl">
                  {activeEpisode.guestName}
                </h2>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.08em] text-[#a91519]">
                  TOPIC
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight sm:text-2xl">
                  {activeEpisode.topic}
                </h3>

                <div className="my-5 h-[2px] w-20 bg-[#d49b2a]" />

                <p className="max-w-xl text-base leading-7 text-black/80">
                  {activeEpisode.description}
                </p>

                <div className="mt-7">
                  <EpisodeButton episode={activeEpisode}>
                    WATCH &amp; LISTEN
                  </EpisodeButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            ALL EPISODES
            ======================================================= */}

        <section className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-32 pt-10 sm:px-10 lg:px-16">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              ALL EPISODES
            </h2>

            <div className="h-[2px] flex-1 bg-[#a91519]/60" />
          </div>

          <div className="space-y-3">
            {episodes.map((episode) => (
              <button
                key={episode.id}
                type="button"
                onClick={() => setActiveEpisode(episode)}
                className="group grid w-full grid-cols-[115px_1fr_auto] items-center gap-4 rounded-lg border border-black/10 bg-[#ead3ac]/95 p-3 text-left shadow-sm transition hover:border-[#a91519]/60 hover:shadow-md sm:grid-cols-[160px_1fr_auto] sm:p-4"
              >
                {/* MINI EPISODE IMAGE */}

                <div className="relative h-[70px] overflow-hidden rounded-md bg-[#151515] sm:h-[88px]">
                  {episode.guestPhoto ? (
                    <img
                      src={episode.guestPhoto}
                      alt={episode.guestName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70">
                        <span className="text-lg font-black text-white">
                          ▶
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 bg-[#a91519] px-2 py-1">
                    <span className="text-[11px] font-black text-white">
                      EP.{" "}
                      {String(episode.episodeNumber).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* EPISODE TEXT */}

                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#a91519]">
                    GUEST
                  </p>

                  <h3 className="truncate text-lg font-black uppercase leading-tight sm:text-xl">
                    {episode.guestName}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm font-semibold leading-tight text-black/70">
                    {episode.topic}
                  </p>
                </div>

                {/* BUTTON */}

                <span className="hidden rounded-full bg-[#a91519] px-5 py-3 text-xs font-black uppercase tracking-[0.05em] text-white transition group-hover:bg-[#c51d22] sm:inline-flex sm:items-center sm:gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#a91519]">
                    ▶
                  </span>
                  WATCH &amp; LISTEN
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a91519] text-sm text-white sm:hidden">
                  ▶
                </span>
              </button>
            ))}
          </div>

          {/* =====================================================
              EMPTY STATE FOR FUTURE SUPABASE EPISODES
              ===================================================== */}

          <div className="mt-8 rounded-lg border border-dashed border-[#a91519]/40 bg-[#ead3ac]/60 px-6 py-8 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a91519]">
              More Episodes Coming
            </p>

            <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-black/60">
              New guests, photos, topics, descriptions, videos and audio
              will be added through the Scotti Brothers podcast system.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
      
