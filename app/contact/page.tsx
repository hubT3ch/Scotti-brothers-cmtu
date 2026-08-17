"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type GuestProposal = {
  guestName: string;
  email: string;
  phone: string;
  company: string;
  managementName: string;
  managementEmail: string;
  managementPhone: string;
  segmentHeading: string;
  discussion: string;
  consent: boolean;
};

const initialProposal: GuestProposal = {
  guestName: "",
  email: "",
  phone: "",
  company: "",
  managementName: "",
  managementEmail: "",
  managementPhone: "",
  segmentHeading: "",
  discussion: "",
  consent: false,
};

export default function ContactsPage() {
  const [proposal, setProposal] =
    useState<GuestProposal>(initialProposal);

  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof GuestProposal,
    value: string | boolean
  ) {
    setProposal((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!proposal.consent) return;

    const subject = encodeURIComponent(
      `Podcast Guest Proposal: ${proposal.segmentHeading}`
    );

    const body = encodeURIComponent(
      [
        "SCOTTI BROTHERS CAN'T MAKE THIS UP! PODCAST",
        "GUEST PROPOSAL",
        "",
        `Guest/Artist Name: ${proposal.guestName}`,
        `Email: ${proposal.email}`,
        `Phone: ${proposal.phone}`,
        `Company/Organization: ${
          proposal.company || "Not provided"
        }`,
        "",
        "MANAGEMENT INFORMATION",
        `Management/Representative: ${
          proposal.managementName || "Not provided"
        }`,
        `Management Email: ${
          proposal.managementEmail || "Not provided"
        }`,
        `Management Phone: ${
          proposal.managementPhone || "Not provided"
        }`,
        "",
        `Proposed Segment Heading: ${proposal.segmentHeading}`,
        "",
        "Proposed Discussion:",
        proposal.discussion,
        "",
        "The applicant acknowledges that submitting this proposal does not guarantee an appearance.",
      ].join("\n")
    );

    window.location.href =
      `mailto:pbody@scottibrothersent.com` +
      `?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#d8b887]/20 bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Entertainment"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] sm:gap-7 sm:text-xs">
            <Link
              href="/"
              className="text-white/70 transition hover:text-[#d8b887]"
            >
              Home
            </Link>

            <Link
              href="/episodes"
              className="text-white/70 transition hover:text-[#d8b887]"
            >
              Episodes
            </Link>

            <Link
              href="/guests"
              className="text-white/70 transition hover:text-[#d8b887]"
            >
              Guests
            </Link>

            <Link
              href="/merchandise"
              className="text-white/70 transition hover:text-[#d8b887]"
            >
              Merchandise
            </Link>

            <Link
              href="/contacts"
              className="text-[#d8b887]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

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
          Scotti Brothers Entertainment
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

      {/* PROMOTIONS & MARKETING */}
      <section className="bg-[#050505] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#c62828]">
                Promotions & Marketing
              </p>

              <h2 className="mt-4 text-3xl font-light uppercase tracking-wide sm:text-5xl">
                Media & Business
                <span className="block text-white/35">
                  Inquiries
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65">
                Scotti Brothers Entertainment welcomes
                opportunities to collaborate with artists,
                brands, businesses, media organizations,
                entertainment companies, and strategic
                partners.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
                Contact the Marketing & Promotions office
                for podcast promotions, marketing campaigns,
                sponsorship opportunities, media requests,
                partnerships, publicity, interviews, and
                other entertainment-related business
                inquiries.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#d8b887]/20 bg-[#0d0d0d] p-7">
                  <div className="mb-5 h-1 w-12 bg-[#c62828]" />

                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d8b887]">
                    Promotions
                  </p>

                  <p className="mt-4 leading-7 text-white/55">
                    Podcast promotion, artist promotion,
                    campaigns, publicity, and audience
                    engagement.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8b887]/20 bg-[#0d0d0d] p-7">
                  <div className="mb-5 h-1 w-12 bg-[#c62828]" />

                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d8b887]">
                    Partnerships
                  </p>

                  <p className="mt-4 leading-7 text-white/55">
                    Sponsorships, brand partnerships,
                    collaborations, and media opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* MARKETING CONTACT */}
            <aside className="relative overflow-hidden rounded-3xl border border-[#d8b887]/30 bg-[#111111] p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#c62828]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.38em] text-[#c62828]">
                  Contact
                </p>

                <h3 className="mt-5 text-2xl font-light uppercase tracking-wide text-white">
                  Marketing &
                  <span className="block text-[#d8b887]">
                    Promotions
                  </span>
                </h3>

                <p className="mt-5 leading-7 text-white/55">
                  For promotions, marketing, sponsorships,
                  media requests, partnerships, and podcast
                  publicity, contact the Marketing &
                  Promotions office.
                </p>

                <a
                  href="mailto:pbody@scottibrothersent.com"
                  className="mt-7 block break-all text-sm font-semibold text-[#d8b887] transition hover:text-[#c62828]"
                >
                  pbody@scottibrothersent.com
                </a>

                <a
                  href="mailto:pbody@scottibrothersent.com"
                  className="mt-7 inline-flex border border-[#c62828] bg-[#c62828] px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-transparent hover:text-[#c62828]"
                >
                  Email Marketing
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* GUEST SIGN-UP */}
      <section
        id="guest-signup"
        className="border-y border-[#d8b887]/15 bg-[#090909] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#c62828]">
              Guest Sign-Up
            </p>

            <h2 className="mt-4 text-4xl font-light uppercase tracking-wide text-white sm:text-5xl">
              Share Your Story
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55">
              Submit a guest proposal for consideration.
              Tell us who you are, what you would like to
              discuss, and why your story belongs on{" "}
              <span className="text-[#d8b887]">
                Can&apos;t Make This Up!
              </span>
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-[#d8b887]/25 bg-[#050505] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12"
          >
            <FormSectionHeading
              number="01"
              title="Guest Information"
            />

            <div className="mt-7 grid gap-x-6 gap-y-6 md:grid-cols-2">
              <FormField
                label="Guest or Artist Name"
                required
                value={proposal.guestName}
                onChange={(value) =>
                  updateField("guestName", value)
                }
              />

              <FormField
                label="Email Address"
                type="email"
                required
                value={proposal.email}
                onChange={(value) =>
                  updateField("email", value)
                }
              />

              <FormField
                label="Phone Number"
                type="tel"
                required
                value={proposal.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
              />

              <FormField
                label="Company or Organization"
                value={proposal.company}
                onChange={(value) =>
                  updateField("company", value)
                }
              />
            </div>

            <div className="mt-12">
              <FormSectionHeading
                number="02"
                title="Management Information"
              />
            </div>

            <div className="mt-7 grid gap-x-6 gap-y-6 md:grid-cols-2">
              <FormField
                label="Management or Representative Name"
                value={proposal.managementName}
                onChange={(value) =>
                  updateField(
                    "managementName",
                    value
                  )
                }
              />

              <FormField
                label="Management Email"
                type="email"
                value={proposal.managementEmail}
                onChange={(value) =>
                  updateField(
                    "managementEmail",
                    value
                  )
                }
              />

              <FormField
                label="Management Phone"
                type="tel"
                value={proposal.managementPhone}
                onChange={(value) =>
                  updateField(
                    "managementPhone",
                    value
                  )
                }
              />
            </div>

            <div className="mt-12">
              <FormSectionHeading
                number="03"
                title="Proposed Podcast Segment"
              />
            </div>

            <div className="mt-7">
              <FormField
                label="Proposed Segment Heading"
                required
                placeholder="Example: The Record Deal That Almost Never Happened"
                value={proposal.segmentHeading}
                onChange={(value) =>
                  updateField(
                    "segmentHeading",
                    value
                  )
                }
              />
            </div>

            <label className="mt-7 block">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b887]">
                Proposed Discussion
                <span className="ml-1 text-[#c62828]">
                  *
                </span>
              </span>

              <textarea
                required
                rows={8}
                maxLength={1500}
                value={proposal.discussion}
                onChange={(event) =>
                  updateField(
                    "discussion",
                    event.target.value
                  )
                }
                placeholder="Provide a short paragraph describing your proposed topic, the story you would like to share, and why it would be compelling for the podcast audience."
                className="mt-3 w-full resize-y rounded-xl border border-white/15 bg-white px-4 py-4 text-black outline-none transition placeholder:text-gray-400 focus:border-[#c62828] focus:ring-2 focus:ring-[#c62828]/20"
              />

              <span className="mt-2 block text-right text-xs text-white/30">
                {proposal.discussion.length}/1500
              </span>
            </label>

            <label className="mt-7 flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <input
                type="checkbox"
                required
                checked={proposal.consent}
                onChange={(event) =>
                  updateField(
                    "consent",
                    event.target.checked
                  )
                }
                className="mt-1 h-4 w-4 accent-[#c62828]"
              />

              <span className="text-sm leading-6 text-white/55">
                I understand that submitting a guest
                proposal does not guarantee an appearance
                on the podcast. Scotti Brothers
                Entertainment may contact me or my
                representative for additional information.
              </span>
            </label>

            <button
              type="submit"
              className="mt-8 w-full border border-[#c62828] bg-[#c62828] px-7 py-4 text-xs font-bold uppercase tracking-[0.32em] text-white transition hover:bg-transparent hover:text-[#c62828]"
            >
              Submit Guest Proposal
            </button>

            {submitted && (
              <p className="mt-6 text-center text-sm leading-7 text-[#d8b887]">
                Your email application should now open
                with the proposal information prepared.
                Review the message and press Send.
              </p>
            )}
          </form>
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

function FormSectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
      <span className="text-xs font-black tracking-[0.3em] text-[#c62828]">
        {number}
      </span>

      <h3 className="text-lg font-light uppercase tracking-[0.22em] text-[#d8b887]">
        {title}
      </h3>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b887]">
        {label}

        {required && (
          <span className="ml-1 text-[#c62828]">
            *
          </span>
        )}
      </span>

      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="mt-3 w-full rounded-xl border border-white/15 bg-white px-4 py-4 text-black outline-none transition placeholder:text-gray-400 focus:border-[#c62828] focus:ring-2 focus:ring-[#c62828]/20"
      />
    </label>
  );
}
