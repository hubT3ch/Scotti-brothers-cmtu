"use client";

import Image from "next/image";
import Link from "next/link";

type Episode = {
  slug: string;
  number: string;
  title: string;
  guest: string;
  subtitle: string;
  description: string;
  guestImage?: string;
};

const episodes: Episode[] = [
  {
    slug: "episode-1",
    number: "01",
    title: "Can't Make This Up!",
    guest: "Jaheim",
    subtitle: "R&B Singer • Songwriter • Music Industry",
    description:
      "The Scotti Brothers sit down with Jaheim for an unforgettable conversation filled with real stories, music industry moments, and things you simply can't make up.",
    guestImage: undefined,
  },
];

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVIGATION */}
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="relative block h-12 w-36">
            <Image
              src="/images/logo/logo.png"
              alt="Scotti Brothers"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-black uppercase tracking-[0.16em] transition ${
                  item.href === "/episodes"
                    ? "text-[#f4b400]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/episodes"
            className="rounded-full border border-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white md:hidden"
          >
            Episodes
          </Link>
        </div>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
        {/* Decorative accents */}
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#d71920]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#f4b400]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f4b400]">
            Scotti Brothers
          </p>

          <h1 className="mt-4 text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
            Episodes
          </h1>

          <div className="mt-6 h-1 w-24 bg-[#d71920]" />

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Unbelievable moments. Real stories. Music industry conversations.
            Welcome to <span className="font-bold text-white">Can't Make This Up!</span>
          </p>
        </div>
      </section>

      {/* EPISODE LIST */}
      <section className="bg-black px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d71920]">
              Watch & Listen
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Latest Episode
            </h2>
          </div>

          {episodes.map((episode) => (
            <article
              key={episode.slug}
              className="overflow-hidden border border-white/10 bg-[#0b0b0b]"
            >
              <div className="grid lg:grid-cols-[380px_1fr]">
                {/* GUEST PHOTO */}
                <div className="relative min-h-[380px] bg-[#151515]">
                  {episode.guestImage ? (
                    <Image
                      src={episode.guestImage}
                      alt={episode.guest}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#f4b400]">
                          <span className="text-3xl font-black text-[#f4b400]">
                            {episode.number}
                          </span>
                        </div>

                        <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-white/30">
                          Guest Photo
                        </p>

                        <p className="mt-2 text-xs text-white/20">
                          Jaheim's photo will be connected through Supabase.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute left-5 top-5 bg-[#d71920] px-4 py-2">
                    <span className="text-xs font-black uppercase tracking-[0.18em]">
                      Episode {episode.number}
                    </span>
                  </div>
                </div>

                {/* INFORMATION */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f4b400]">
                    Featured Guest
                  </p>

                  <h3 className="mt-3 text-5xl font-black uppercase leading-none sm:text-6xl">
                    {episode.guest}
                  </h3>

                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-white/45">
                    {episode.subtitle}
                  </p>

                  <div className="my-8 h-px bg-white/10" />

                  <p className="max-w-2xl text-base leading-7 text-white/60">
                    {episode.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                      href={`/episodes/${episode.slug}`}
                      className="rounded-full bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] transition hover:bg-[#ef2027]"
                    >
                      Watch Episode
                    </Link>

                    <Link
                      href={`/episodes/${episode.slug}`}
                      className="rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.1em] transition hover:border-[#f4b400] hover:text-[#f4b400]"
                    >
                      Listen
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FUTURE EPISODES */}
      <section className="border-t border-white/10 bg-[#080808] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f4b400]">
            Coming Soon
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
            More Episodes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45">
            New episodes will be added to this page as they are released.
            Episode information, guest photos, video, audio, and other media
            will eventually be managed through the Scotti Brothers system.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </p>
      </footer>
    </main>
  );
}
