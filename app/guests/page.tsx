"use client";

import Image from "next/image";
import Link from "next/link";

type Guest = {
  name: string;
  role: string;
  image: string;
};

const LOGO_SRC = "/images/logo.png";

const guests: Guest[] = [];

export default function GuestsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Logo */}
      <div className="fixed left-6 top-6 z-50 md:left-10 md:top-8">
        <Link href="/" aria-label="Can't Make This Up! Home">
          <Image
            src={LOGO_SRC}
            alt="Can't Make This Up!"
            width={220}
            height={100}
            priority
            className="h-auto w-[150px] md:w-[190px] object-contain"
          />
        </Link>
      </div>

      {/* Header */}
      <section className="relative px-6 pb-10 pt-32 md:px-12 md:pb-14 md:pt-36">
        <div className="mx-auto max-w-6xl text-center">
          <h1
            className="text-5xl font-black uppercase tracking-[0.08em] md:text-7xl"
            style={{
              textShadow:
                "3px 3px 0 #8b0000, 6px 6px 0 rgba(212,175,55,0.5)",
            }}
          >
            Guests
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-neutral-300 md:text-xl md:leading-8">
            Meet the artists, entertainers, creators, and personalities with
            unbelievable stories of their industry encounters
          </p>
        </div>
      </section>

      {/* Gallery Wall */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guests.map((guest, index) => (
            <article
              key={`${guest.name}-${index}`}
              className="group relative"
            >
              {/* Outer gold frame */}
              <div className="relative rounded-[4px] bg-gradient-to-br from-[#f5d76e] via-[#b8860b] to-[#6f4e00] p-[7px] shadow-[0_10px_35px_rgba(0,0,0,0.65)]">
                {/* Red inner frame */}
                <div className="bg-[#8b0000] p-[8px]">
                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                    <Image
                      src={guest.image}
                      alt={guest.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Name plate */}
                  <div className="px-4 py-5 text-center">
                    <h2 className="text-xl font-black uppercase tracking-wide text-[#f5d76e]">
                      {guest.name}
                    </h2>

                    {guest.role && (
                      <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-white/80">
                        {guest.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Empty state until guests are added */}
          {guests.length === 0 && (
            <div className="col-span-full flex min-h-[260px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-5 h-px w-24 bg-[#b8860b]" />

                <p className="text-lg uppercase tracking-[0.18em] text-[#f5d76e]">
                  Guest Gallery
                </p>

                <p className="mt-3 text-sm text-neutral-500">
                  New guest portraits will appear here.
                </p>

                <div className="mx-auto mt-5 h-px w-24 bg-[#b8860b]" />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
