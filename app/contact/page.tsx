{/* HERO */}
<section className="relative overflow-hidden border-b border-[#d8b887]/20 bg-[#050505]">
  {/* Subtle background lighting */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(216,184,135,0.10),transparent_38%)]" />

  <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#c62828]/[0.05] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

      {/* LEFT — CMTU HERO GRAPHIC */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#d8b887]/[0.06] blur-3xl" />

        <img
          src="/images/contact-hero.png"
          alt="Scotti Brothers Can't Make This Up! Podcast"
          className="relative z-10 h-auto w-full max-w-[620px] object-contain drop-shadow-[0_0_35px_rgba(0,0,0,0.75)]"
        />
      </div>

      {/* RIGHT — CONTACT HEADING */}
      <div className="relative lg:pl-4">
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#d8b887]">
          Scotti Brothers
        </p>

        <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Contact
          <span className="mt-2 block text-[#c62828]">
            Can&apos;t Make
          </span>
          <span className="block text-[#d8b887]">
            This Up!
          </span>
        </h1>

        <p className="mt-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c62828]">
          The Podcast
        </p>

        <div className="mt-7 flex max-w-lg items-center gap-4">
          <span className="h-px flex-1 bg-[#d8b887]/50" />

          <span className="h-3 w-3 rotate-45 border border-[#c62828]" />

          <span className="h-px flex-1 bg-[#d8b887]/50" />
        </div>

        <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
          Promotions, marketing, sponsorships, media
          requests, partnerships, publicity, and guest
          opportunities for the{" "}
          <span className="font-semibold text-[#d8b887]">
            Can&apos;t Make This Up!
          </span>{" "}
          Podcast.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#guest-signup"
            className="border border-[#c62828] bg-[#c62828] px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white transition hover:bg-transparent hover:text-[#c62828]"
          >
            Be Our Guest
          </a>

          <a
            href="mailto:pbody@scottibrothersent.com"
            className="border border-[#d8b887]/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-[#d8b887] transition hover:border-[#d8b887] hover:bg-[#d8b887] hover:text-black"
          >
            Marketing Inquiries
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
