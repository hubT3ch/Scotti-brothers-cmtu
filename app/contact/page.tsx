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
    <main className="min-h-screen bg-[#d8b887] text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Entertainment"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </Link>

          <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] sm:gap-7 sm:text-xs">
            <Link
              href="/"
              className="text-white transition hover:text-[#c62828]"
            >
              Home
            </Link>

            <Link
              href="/episodes"
              className="text-white transition hover:text-[#c62828]"
            >
              Episodes
            </Link>

            <Link
              href="/guests"
              className="text-white transition hover:text-[#c62828]"
            >
              Guests
            </Link>

            <Link
              href="/merchandise"
              className="text-white transition hover:text-[#c62828]"
            >
              Merchandise
            </Link>

            <Link
              href="/contacts"
              className="text-[#c62828]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/20 bg-[#d8b887]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(198,40,40,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-[#c62828]">
              Scotti Brothers Entertainment
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
              Contact
              <span className="block text-[#c62828]">
                Can&apos;t Make This Up!
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-black/70 sm:text-lg">
              Promotions, marketing, sponsorships, media
              requests, partnerships, publicity, and guest
              opportunities for the{" "}
              <span className="font-bold text-black">
                Can&apos;t Make This Up!
              </span>{" "}
              Podcast.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
              <span className="h-px flex-1 bg-black/50" />

              <span className="h-3 w-3 rotate-45 border-2 border-[#c62828]" />

              <span className="h-px flex-1 bg-black/50" />
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONS & MARKETING */}
      <section className="bg-[#d8b887] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.42em] text-[#c62828]">
                Promotions & Marketing
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-wide text-black sm:text-5xl">
                Media & Business
                <span className="block text-black/45">
                  Inquiries
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-black/75">
                Scotti Brothers Entertainment welcomes
                opportunities to collaborate with artists,
                brands, businesses, media organizations,
                entertainment companies, and strategic
                partners.
              </p>

              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-black/75">
                Contact the Marketing & Promotions office
                for podcast promotions, marketing campaigns,
                sponsorship opportunities, media requests,
                partnerships, publicity, interviews, and
                other entertainment-related business
                inquiries.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-black bg-black p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b887]">
                    Promotions
                  </p>

                  <p className="mt-4 leading-7 text-white/70">
                    Podcast promotion, artist promotion,
                    campaigns, publicity, and audience
                    engagement.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-black bg-black p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b887]">
                    Partnerships
                  </p>

                  <p className="mt-4 leading-7 text-white/70">
                    Sponsorships, brand partnerships,
                    collaborations, and media opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* MARKETING CONTACT CARD */}
            <aside className="rounded-3xl border-2 border-black bg-black p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
              <p className="text-xs font-black uppercase tracking-[0.38em] text-[#d8b887]">
                Contact
              </p>

              <h3 className="mt-5 text-2xl font-black uppercase tracking-wide">
                Marketing & Promotions
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                For promotions, marketing, sponsorships,
                media requests, partnerships, and podcast
                publicity, contact the Marketing &
                Promotions office.
              </p>

              <a
                href="mailto:pbody@scottibrothersent.com"
                className="mt-7 block break-all font-semibold text-[#d8b887] transition hover:text-[#c62828]"
              >
                pbody@scottibrothersent.com
              </a>

              <a
                href="mailto:pbody@scottibrothersent.com"
                className="mt-7 inline-block border-2 border-[#c62828] bg-[#c62828] px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-white transition hover:bg-transparent hover:text-[#c62828]"
              >
                Email Marketing
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* GUEST SIGN-UP */}
      <section
        id="guest-signup"
        className="border-y-2 border-black bg-[#d8b887] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* INTRO */}
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-[#c62828]">
              Guest Sign-Up
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-wide text-black sm:text-5xl">
              Share Your Story
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-black/70">
              Submit a guest proposal for consideration.
              Tell us who you are, what you would like to
              discuss, and why your story belongs on{" "}
              <span className="font-black text-black">
                Can&apos;t Make This Up!
              </span>
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border-2 border-black bg-[#050505] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12"
          >
            {/* GUEST INFORMATION */}
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

            {/* MANAGEMENT */}
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

            {/* PODCAST SEGMENT */}
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

            {/* DISCUSSION */}
            <label className="mt-7 block">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b887]">
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
                className="mt-3 w-full resize-y rounded-xl border-2 border-white/15 bg-white px-4 py-4 text-black outline-none transition placeholder:text-gray-400 focus:border-[#c62828] focus:ring-2 focus:ring-[#c62828]/20"
              />

              <span className="mt-2 block text-right text-xs text-white/40">
                {proposal.discussion.length}/1500
              </span>
            </label>

            {/* CONSENT */}
            <label className="mt-7 flex items-start gap-4 rounded-xl border border-white/15 bg-white/[0.04] p-5">
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

              <span className="text-sm leading-6 text-white/65">
                I understand that submitting a guest
                proposal does not guarantee an appearance
                on the podcast. Scotti Brothers
                Entertainment may contact me or my
                representative for additional information.
              </span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-8 w-full border-2 border-[#c62828] bg-[#c62828] px-7 py-4 text-xs font-black uppercase tracking-[0.32em] text-white transition hover:bg-transparent hover:text-[#c62828]"
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
      <footer className="border-t-2 border-black bg-black px-5 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Entertainment"
              className="h-12 w-auto object-contain"
            />

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
              © 2026 Scotti Brothers Entertainment.
              All rights reserved.
            </p>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d8b887]">
            Can&apos;t Make This Up!
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
    <div className="flex items-center gap-4 border-b border-white/15 pb-4">
      <span className="text-xs font-black tracking-[0.3em] text-[#c62828]">
        {number}
      </span>

      <h3 className="text-lg font-black uppercase tracking-[0.22em] text-[#d8b887]">
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
      <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b887]">
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
        className="mt-3 w-full rounded-xl border-2 border-black/20 bg-white px-4 py-4 text-black outline-none transition placeholder:text-gray-400 focus:border-[#c62828] focus:ring-2 focus:ring-[#c62828]/20"
      />
    </label>
  );
}
