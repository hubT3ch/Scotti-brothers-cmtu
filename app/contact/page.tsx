"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

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

    if (!proposal.consent) {
      return;
    }

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
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9ad42]/25 bg-[#02050c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[#efc761]"
          >
            Clifton Lighty
          </Link>

          <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:gap-8 sm:tracking-[0.25em]">
            <Link
              href="/home"
              className="transition hover:text-[#efc761]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-[#efc761]"
            >
              About
            </Link>

            <Link
              href="/projects/scotti-brothers"
              className="transition hover:text-[#efc761]"
            >
              Podcast
            </Link>

            <Link
              href="/projects/sbe-supply-store"
              className="transition hover:text-[#efc761]"
            >
              Shop
            </Link>

            <Link
              href="/contacts"
              className="text-[#efc761]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d9ad42]/25 px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#030710] via-[#071326] to-[#05070d]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(31,93,175,0.28),transparent_38%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_40%,rgba(215,45,35,0.15),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#efc761]">
            Scotti Brothers Entertainment
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Contact
            <span className="block text-[#efc761]">
              Scotti Brothers
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Connect with Scotti Brothers Entertainment for
            promotions, marketing, sponsorships, media
            opportunities, partnerships, publicity, and
            guest opportunities for the{" "}
            <span className="text-[#f6dc94]">
              Can&apos;t Make This Up!
            </span>{" "}
            Podcast.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-[#efc761]/70" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#efc761]" />
            <span className="h-px flex-1 bg-[#efc761]/70" />
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#guest-signup"
              className="border border-[#efc761] bg-[#efc761] px-7 py-3 text-xs font-bold uppercase tracking-[0.28em] text-black transition hover:bg-transparent hover:text-[#efc761]"
            >
              Be Our Guest
            </a>

            <a
              href="mailto:pbody@scottibrothersent.com"
              className="border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:border-[#efc761] hover:text-[#efc761]"
            >
              Marketing Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* PROMOTIONS & MARKETING */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#efc761]">
              Promotions & Marketing
            </p>

            <h2 className="mt-4 text-4xl font-light uppercase tracking-wide sm:text-5xl">
              Media & Business
              <span className="block text-white/55">
                Inquiries
              </span>
            </h2>

            <p className="mt-7 max-w-4xl text-base leading-8 text-white/70">
              Scotti Brothers Entertainment welcomes
              opportunities to collaborate with artists,
              brands, businesses, media organizations,
              entertainment companies, and strategic
              partners.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-white/70">
              Contact the Marketing & Promotions office for
              podcast promotions, marketing campaigns,
              sponsorship opportunities, media requests,
              partnerships, publicity, interviews, and
              other entertainment-related business
              inquiries.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efc761]">
                  Promotions
                </p>
                <p className="mt-3 leading-7 text-white/60">
                  Podcast promotion, artist promotion,
                  campaigns, publicity, and audience
                  engagement.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efc761]">
                  Partnerships
                </p>
                <p className="mt-3 leading-7 text-white/60">
                  Sponsorships, brand partnerships,
                  collaborations, and media opportunities.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-[#d4af37]/55 bg-gradient-to-br from-[#233c60] via-[#122b47] to-[#081829] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.42)]">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#efc761]">
              Contact
            </p>

            <h3 className="mt-5 text-2xl font-light uppercase tracking-wide">
              Marketing & Promotions
            </h3>

            <p className="mt-5 leading-7 text-white/65">
              For promotions, marketing, sponsorships,
              media requests, partnerships, and podcast
              publicity, contact the Marketing &
              Promotions office.
            </p>

            <a
              href="mailto:pbody@scottibrothersent.com"
              className="mt-7 block break-all text-[#f6dc94] transition hover:text-white"
            >
              pbody@scottibrothersent.com
            </a>

            <a
              href="mailto:pbody@scottibrothersent.com"
              className="mt-6 inline-block border border-[#efc761] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#efc761] transition hover:bg-[#efc761] hover:text-black"
            >
              Email Marketing
            </a>
          </aside>
        </div>
      </section>

      {/* GUEST SIGN-UP */}
      <section
        id="guest-signup"
        className="border-y border-[#d9ad42]/20 bg-[#09172a] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#efc761]">
              Guest Sign-Up
            </p>

            <h2 className="mt-4 text-4xl font-light uppercase tracking-wide sm:text-5xl">
              Share Your Story
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/68">
              Would you like to be a guest on{" "}
              <span className="text-[#f6dc94]">
                Can&apos;t Make This Up!
              </span>
              ?
            </p>

            <p className="mx-auto mt-3 max-w-3xl leading-8 text-white/60">
              Submit a guest proposal and tell us who you
              are, what you would like to discuss, and why
              your story belongs on the podcast.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-8 rounded-3xl border border-[#d4af37]/45 bg-[#050d19]/90 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.45)] sm:p-10"
          >
            {/* 01 */}
            <FormSectionHeading
              number="01"
              title="Guest Information"
            />

            <div className="grid gap-5 md:grid-cols-2">
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

            {/* 02 */}
            <FormSectionHeading
              number="02"
              title="Management Information"
            />

            <div className="grid gap-5 md:grid-cols-2">
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

            {/* 03 */}
            <FormSectionHeading
              number="03"
              title="Proposed Podcast Segment"
            />

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

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#efc761]">
                Proposed Discussion
                <span className="ml-1 text-[#e6312a]">
                  *
                </span>
              </span>

              <textarea
                required
                rows={7}
                maxLength={1500}
                value={proposal.discussion}
                onChange={(event) =>
                  updateField(
                    "discussion",
                    event.target.value
                  )
                }
                placeholder="Provide a short paragraph describing your proposed topic, the story you would like to share, and why it would be compelling for the podcast audience."
                className="mt-3 w-full resize-y rounded-xl border border-white/15 bg-[#07111f] px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#efc761]"
              />

              <span className="mt-2 block text-right text-xs text-white/35">
                {proposal.discussion.length}/1500
              </span>
            </label>

            {/* CONSENT */}
            <label className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5">
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
                className="mt-1 h-4 w-4 accent-[#efc761]"
              />

              <span className="text-sm leading-6 text-white/60">
                I understand that submitting a guest
                proposal does not guarantee an appearance
                on the podcast. Scotti Brothers
                Entertainment may contact me or my
                representative for additional information.
              </span>
            </label>

            <button
              type="submit"
              className="w-full border border-[#efc761] bg-[#efc761] px-7 py-4 text-xs font-bold uppercase tracking-[0.32em] text-black transition hover:bg-transparent hover:text-[#efc761]"
            >
              Submit Guest Proposal
            </button>

            {submitted && (
              <p className="text-center text-sm leading-7 text-[#f6dc94]">
                Your email application should now open
                with the proposal information prepared.
                Review the message and press Send.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* BACK TO PROJECTS */}
      <section className="px-5 py-14 text-center sm:px-8 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#efc761] transition hover:text-white"
        >
          <span>←</span>
          Back to Projects
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            © 2026 Scotti Brothers Entertainment.
            All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#efc761]/80">
            Website by{" "}
            <a
              href="https://hubtechnologies.co"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#efc761]"
            >
              C.Jones | HubTechnologies.co
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------
   FORM SECTION HEADING
------------------------------------------------- */

function FormSectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-[#d9ad42]/20 pb-4">
      <span className="text-xs font-bold tracking-[0.3em] text-[#e6312a]">
        {number}
      </span>

      <h3 className="text-lg font-light uppercase tracking-[0.22em] text-[#f6dc94]">
        {title}
      </h3>
    </div>
  );
}

/* -------------------------------------------------
   FORM FIELD
------------------------------------------------- */

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
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#efc761]">
        {label}

        {required && (
          <span className="ml-1 text-[#e6312a]">
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
        className="mt-3 w-full rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3.5 text-black outline-none transition placeholder:text-gray-400 focus:border-[#efc761] focus:ring-2 focus:ring-[#efc761]/20"
      />
    </label>
  );
}
