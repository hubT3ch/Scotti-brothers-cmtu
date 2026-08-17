"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type GuestProposal = {
  guestName: string;
  email: string;
  phone: string;
  company: string;

  selfRepresenting: boolean;

  managementName: string;
  managementEmail: string;
  managementPhone: string;

  segmentHeading: string;
  discussion: string;

  availabilityOne: string;
  availabilityTwo: string;
  availabilityThree: string;

  anonymousNames: boolean;

  termsVersion: string;
  termsRead: boolean;

  consent: boolean;
};

const initialProposal: GuestProposal = {
  guestName: "",
  email: "",
  phone: "",
  company: "",

  selfRepresenting: false,

  managementName: "",
  managementEmail: "",
  managementPhone: "",

  segmentHeading: "",
  discussion: "",

  availabilityOne: "",
  availabilityTwo: "",
  availabilityThree: "",

  anonymousNames: false,

  termsVersion: "",
  termsRead: false,

  consent: false,
};

const GOLD = "#F2C94C";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
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

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !proposal.consent ||
      !proposal.termsRead ||
      !proposal.termsVersion
    ) {
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
        "REPRESENTATION",
        `Self-Representing: ${
          proposal.selfRepresenting ? "Yes" : "No"
        }`,
        "",
        "MANAGEMENT / CONTACT INFORMATION",
        `Management/Contact Name: ${
          proposal.managementName || "Not provided"
        }`,
        `Management/Contact Email: ${
          proposal.managementEmail || "Not provided"
        }`,
        `Management/Contact Phone: ${
          proposal.managementPhone || "Not provided"
        }`,
        "",
        "PROPOSED PODCAST SEGMENT",
        `Proposed Segment Heading: ${proposal.segmentHeading}`,
        "",
        "Proposed Discussion:",
        proposal.discussion,
        "",
        "PROPOSED TAPING AVAILABILITY",
        `Preferred Date 1: ${
          proposal.availabilityOne || "Not provided"
        }`,
        `Preferred Date 2: ${
          proposal.availabilityTwo || "Not provided"
        }`,
        `Preferred Date 3: ${
          proposal.availabilityThree || "Not provided"
        }`,
        "",
        "CONFIDENTIALITY",
        `Keep names/organizations anonymous: ${
          proposal.anonymousNames ? "Yes" : "No"
        }`,
        "",
        "GUEST TERMS",
        `Terms selected: ${proposal.termsVersion}`,
        `Terms Read: ${
          proposal.termsRead ? "Yes" : "No"
        }`,
        "",
        "ACKNOWLEDGEMENT",
        "The applicant acknowledges that submitting this proposal does not guarantee an appearance.",
      ].join("\n")
    );

    window.location.href =
      `mailto:pbody@scottibrothersent.com` +
      `?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="site-header">
        <nav
          className="site-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/contact"
                  ? "site-nav-link active"
                  : "site-nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="contact-hero">
        <div className="hero-light hero-light-left" />
        <div className="hero-light hero-light-right" />

        <div className="hero-inner">

          {/* LEFT — LOGO */}
          <div className="hero-logo">
            <Link
              href="/"
              aria-label="Scotti Brothers Can't Make This Up!"
            >
              <img
                src="/images/logo.png"
                alt="Scotti Brothers Can't Make This Up!"
              />
            </Link>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="hero-copy">

            <p className="eyebrow">
              Scotti Brothers
            </p>

            <h1>
              Contact
              <span className="red-text">
                Can&apos;t Make
              </span>
              <span className="gold-text">
                This Up!
              </span>
            </h1>

            <p className="podcast-label">
              The Podcast
            </p>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-description">
              Promotions, marketing, sponsorships, media
              requests, partnerships, publicity, and guest
              opportunities for the{" "}
              <strong>
                Can&apos;t Make This Up!
              </strong>{" "}
              Podcast.
            </p>

            <div className="hero-buttons">
              <a
                href="#guest-signup"
                className="primary-button"
              >
                Be Our Guest
              </a>

              <a
                href="mailto:pbody@scottibrothersent.com"
                className="secondary-button"
              >
                Marketing Inquiries
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROMOTIONS & MARKETING
      ===================================================== */}
      <section className="marketing-section">
        <div className="section-inner">

          <div className="marketing-grid">

            <div>
              <p className="section-eyebrow">
                Promotions & Marketing
              </p>

              <h2>
                Media & Business
                <span>Inquiries</span>
              </h2>

              <p className="section-copy">
                Scotti Brothers Ent welcomes
                opportunities to collaborate with artists,
                brands, businesses, media organizations,
                entertainment companies, and strategic
                partners.
              </p>

              <p className="section-copy">
                Contact the Marketing & Promotions office
                for podcast promotions, marketing campaigns,
                sponsorship opportunities, media requests,
                partnerships, publicity, interviews, and
                other entertainment-related business
                inquiries.
              </p>

              <div className="marketing-cards">

                <div className="marketing-card">
                  <div className="red-rule" />

                  <p className="card-title">
                    Promotions
                  </p>

                  <p>
                    Podcast promotion, artist promotion,
                    campaigns, publicity, and audience
                    engagement.
                  </p>
                </div>

                <div className="marketing-card">
                  <div className="red-rule" />

                  <p className="card-title">
                    Partnerships
                  </p>

                  <p>
                    Sponsorships, brand partnerships,
                    collaborations, and media opportunities.
                  </p>
                </div>

              </div>
            </div>

            {/* MARKETING CONTACT */}
            <aside className="marketing-contact">
              <div className="contact-glow" />

              <div className="contact-box-content">

                <p className="contact-label">
                  Contact
                </p>

                <h3>
                  Marketing &
                  <span>
                    Promotions
                  </span>
                </h3>

                <p>
                  For promotions, marketing, sponsorships,
                  media requests, partnerships, and podcast
                  publicity, contact the Marketing &
                  Promotions office.
                </p>

                <a
                  href="mailto:pbody@scottibrothersent.com"
                  className="email-link"
                >
                  pbody@scottibrothersent.com
                </a>

                <a
                  href="mailto:pbody@scottibrothersent.com"
                  className="email-button"
                >
                  Email Marketing
                </a>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* =====================================================
          GUEST SIGN-UP
      ===================================================== */}
      <section
        id="guest-signup"
        className="guest-section"
      >
        <div className="form-container">

          <div className="form-intro">

            <p className="section-eyebrow">
              Guest Sign-Up
            </p>

            <h2>
              Share Your Story
            </h2>

            <p>
              Submit a guest proposal for consideration.
              Tell us who you are, what you would like to
              discuss, and why your story belongs on{" "}
              <span>
                Can&apos;t Make This Up!
              </span>
            </p>

          </div>

          {/* =================================================
              FORM
          ================================================= */}
          <form
            onSubmit={handleSubmit}
            className="guest-form"
          >

            {/* =============================================
                01 GUEST INFORMATION
            ============================================= */}
            <FormSectionHeading
              number="01"
              title="Guest Information"
            />

            <div className="form-grid">

              <FormField
                label="Guest or Artist Name"
                required
                value={proposal.guestName}
                onChange={(value) =>
                  updateField(
                    "guestName",
                    value
                  )
                }
              />

              <FormField
                label="Email Address"
                type="email"
                required
                value={proposal.email}
                onChange={(value) =>
                  updateField(
                    "email",
                    value
                  )
                }
              />

              <FormField
                label="Phone Number"
                type="tel"
                required
                value={proposal.phone}
                onChange={(value) =>
                  updateField(
                    "phone",
                    value
                  )
                }
              />

              <FormField
                label="Company / Organization (Optional)"
                value={proposal.company}
                onChange={(value) =>
                  updateField(
                    "company",
                    value
                  )
                }
              />

            </div>

            {/* SELF REPRESENTING */}
            <CheckBoxField
              checked={
                proposal.selfRepresenting
              }
              onChange={(checked) =>
                updateField(
                  "selfRepresenting",
                  checked
                )
              }
              label="I am self-representing and do not have management or a representative."
            />

            {/* =============================================
                02 MANAGEMENT / CONTACT
            ============================================= */}
            <div className="form-section-spacing">
              <FormSectionHeading
                number="02"
                title="Management / Contact"
              />
            </div>

            <div className="form-grid">

              <FormField
                label="Management / Contact Name"
                value={
                  proposal.managementName
                }
                onChange={(value) =>
                  updateField(
                    "managementName",
                    value
                  )
                }
              />

              <FormField
                label="Management / Contact Email"
                type="email"
                value={
                  proposal.managementEmail
                }
                onChange={(value) =>
                  updateField(
                    "managementEmail",
                    value
                  )
                }
              />

              <FormField
                label="Management / Contact Phone"
                type="tel"
                value={
                  proposal.managementPhone
                }
                onChange={(value) =>
                  updateField(
                    "managementPhone",
                    value
                  )
                }
              />

            </div>

            {/* =============================================
                03 SEGMENT
            ============================================= */}
            <div className="form-section-spacing">
              <FormSectionHeading
                number="03"
                title="Proposed Podcast Segment"
              />
            </div>

            <div className="single-field">

              <FormField
                label="Proposed Segment Heading"
                required
                placeholder="Example: The Record Deal That Almost Never Happened"
                value={
                  proposal.segmentHeading
                }
                onChange={(value) =>
                  updateField(
                    "segmentHeading",
                    value
                  )
                }
              />

            </div>

            <label className="textarea-field">

              <span className="field-label">
                Proposed Discussion
                <span className="required-mark">
                  *
                </span>
              </span>

              <textarea
                required
                rows={8}
                maxLength={1500}
                value={
                  proposal.discussion
                }
                onChange={(event) =>
                  updateField(
                    "discussion",
                    event.target.value
                  )
                }
                placeholder="Provide a short paragraph describing your proposed topic, the story you would like to share, and why it would be compelling for the podcast audience."
              />

              <span className="character-count">
                {proposal.discussion.length}/1500
              </span>

            </label>

            {/* =============================================
                04 AVAILABILITY
            ============================================= */}
            <div className="form-section-spacing">
              <FormSectionHeading
                number="04"
                title="Proposed Taping Availability"
              />
            </div>

            <p className="availability-intro">
              Please provide up to three preferred dates
              for recording your podcast appearance.
            </p>

            <div className="form-grid">

              <DateField
                label="Preferred Taping Date 1"
                value={
                  proposal.availabilityOne
                }
                onChange={(value) =>
                  updateField(
                    "availabilityOne",
                    value
                  )
                }
              />

              <DateField
                label="Preferred Taping Date 2"
                value={
                  proposal.availabilityTwo
                }
                onChange={(value) =>
                  updateField(
                    "availabilityTwo",
                    value
                  )
                }
              />

              <DateField
                label="Preferred Taping Date 3"
                value={
                  proposal.availabilityThree
                }
                onChange={(value) =>
                  updateField(
                    "availabilityThree",
                    value
                  )
                }
              />

            </div>

            {/* =============================================
                05 CONFIDENTIALITY
            ============================================= */}
            <div className="form-section-spacing">
              <FormSectionHeading
                number="05"
                title="Conversation Confidentiality"
              />
            </div>

            <CheckBoxField
              checked={
                proposal.anonymousNames
              }
              onChange={(checked) =>
                updateField(
                  "anonymousNames",
                  checked
                )
              }
              label="Names or organizations mentioned during the conversation should remain anonymous."
            />

            <p className="helper-text">
              Select this option if any names, companies,
              organizations, or other identifying information
              discussed during the recording should not be
              publicly identified.
            </p>

            {/* =============================================
                06 TERMS
            ============================================= */}
            <div className="form-section-spacing">
              <FormSectionHeading
                number="06"
                title="Guest Terms of Agreement"
              />
            </div>

            <label className="block">
              <span className="field-label">
                Guest Terms of Agreement
                <span className="required-mark">
                  *
                </span>
              </span>

              <select
                required
                value={
                  proposal.termsVersion
                }
                onChange={(event) =>
                  updateField(
                    "termsVersion",
                    event.target.value
                  )
                }
                className="form-input"
              >
                <option value="">
                  Select Guest Terms of Agreement
                </option>

                <option value="Guest Terms of Agreement - Current">
                  Guest Terms of Agreement
                </option>
              </select>
            </label>

            <label className="checkbox-card">

              <input
                type="checkbox"
                required
                checked={
                  proposal.termsRead
                }
                onChange={(event) =>
                  updateField(
                    "termsRead",
                    event.target.checked
                  )
                }
              />

              <span>
                <strong>
                  Read
                </strong>

                <small>
                  I confirm that I have read and reviewed
                  the selected Guest Terms of Agreement.
                </small>
              </span>

            </label>

            {/* =============================================
                FINAL ACKNOWLEDGEMENT
            ============================================= */}
            <label className="checkbox-card">

              <input
                type="checkbox"
                required
                checked={
                  proposal.consent
                }
                onChange={(event) =>
                  updateField(
                    "consent",
                    event.target.checked
                  )
                }
              />

              <span>
                <strong>
                  Submission Acknowledgement
                </strong>

                <small>
                  I understand that submitting a guest
                  proposal does not guarantee an appearance
                  on the podcast. Scotti Brothers
                  Ent. may contact me or my
                  representative for additional information.
                </small>
              </span>

            </label>

            <button
              type="submit"
              className="submit-button"
            >
              Submit Guest Proposal
            </button>

            {submitted && (
              <p className="submitted-message">
                Your email application should now open
                with the proposal information prepared.
                Review the message and press Send.
              </p>
            )}

          </form>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="site-footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <img
              src="/images/logo.png"
              alt="Scotti Brothers Entertainment"
            />

            <p>
              © 2026 Scotti Brothers Ent.
              All rights reserved.
            </p>

          </div>

          <p className="footer-title">
            Can&apos;t Make This Up!
          </p>

        </div>

      </footer>

      {/* =====================================================
          PAGE STYLES
      ===================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .contact-page {
          --gold: ${GOLD};

          min-height: 100vh;
          overflow-x: hidden;

          background:
            linear-gradient(
              180deg,
              #050505 0%,
              #090909 48%,
              #050505 100%
            );

          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* =========================================
           HEADER
        ========================================= */

        .site-header {
          position: relative;
          z-index: 20;

          width: 100%;

          padding:
            24px
            42px;

          display: flex;
          justify-content: flex-end;

          background:
            rgba(5,5,5,0.96);

          border-bottom:
            1px solid
            rgba(242,201,76,0.12);

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);
        }

        .site-nav {
          display: flex;
          align-items: center;

          gap: 4px;

          padding:
            8px
            10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.07);

          border:
            1px solid
            rgba(255,255,255,0.12);
        }

        .site-nav-link {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            8px
            12px;

          border-radius: 999px;

          color:
            rgba(255,255,255,0.78);

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          white-space: nowrap;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .site-nav-link:hover {
          color: var(--gold);
        }

        .site-nav-link.active {
          background: #8b0000;
          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .contact-hero {
          position: relative;

          min-height: 520px;

          overflow: hidden;

          border-bottom:
            1px solid
            rgba(242,201,76,0.15);

          background:
            radial-gradient(
              circle at 18% 50%,
              rgba(242,201,76,0.09),
              transparent 35%
            ),
            radial-gradient(
              circle at 82% 50%,
              rgba(139,0,0,0.11),
              transparent 35%
            ),
            #050505;
        }

        .hero-light {
          position: absolute;

          pointer-events: none;

          border-radius: 50%;

          filter: blur(70px);
        }

        .hero-light-left {
          left: -120px;
          top: 40px;

          width: 420px;
          height: 420px;

          background:
            rgba(242,201,76,0.035);
        }

        .hero-light-right {
          right: -100px;
          top: 50px;

          width: 420px;
          height: 420px;

          background:
            rgba(198,40,40,0.055);
        }

        .hero-inner {
          position: relative;
          z-index: 2;

          width: min(
            1250px,
            calc(100% - 70px)
          );

          min-height: 520px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.9fr
            1.1fr;

          align-items: center;

          gap: 60px;
        }

        /* =========================================
           HERO LOGO
        ========================================= */

        .hero-logo {
          display: flex;

          align-items: center;
          justify-content: center;

          min-height: 380px;
        }

        .hero-logo a {
          display: block;

          width: 100%;

          max-width: 480px;

          line-height: 0;
        }

        .hero-logo img {
          display: block;

          width: 100%;
          height: auto;

          object-fit: contain;

          filter:
            drop-shadow(
              0 0 35px
              rgba(0,0,0,0.7)
            );
        }

        /* =========================================
           HERO COPY
        ========================================= */

        .hero-copy {
          padding:
            30px
            0;
        }

        .eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 12px;

          font-weight: 900;

          letter-spacing:
            0.45em;

          text-transform:
            uppercase;
        }

        .hero-copy h1 {
          margin:
            18px
            0
            0;

          font-size:
            clamp(
              52px,
              7vw,
              90px
            );

          line-height: 0.92;

          font-weight: 900;

          letter-spacing:
            -0.045em;

          text-transform:
            uppercase;
        }

        .red-text {
          display: block;

          color:
            #c62828;
        }

        .gold-text {
          display: block;

          color:
            var(--gold);

          text-shadow:
            0 2px 0
            rgba(0,0,0,0.45);
        }

        .podcast-label {
          margin:
            18px
            0
            0;

          color:
            #c62828;

          font-size: 13px;

          font-weight: 900;

          letter-spacing:
            0.4em;

          text-transform:
            uppercase;
        }

        .gold-line {
          display: flex;

          align-items: center;

          gap: 16px;

          width:
            min(
              530px,
              100%
            );

          margin:
            28px
            0;
        }

        .gold-line span {
          flex: 1;

          height: 1px;

          background:
            rgba(
              242,
              201,
              76,
              0.65
            );
        }

        .gold-line b {
          color:
            var(--gold);

          font-size: 14px;
        }

        .hero-description {
          max-width: 620px;

          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.62
            );

          font-size: 17px;

          line-height: 1.8;
        }

        .hero-description strong {
          color:
            var(--gold);
        }

        .hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 15px;

          margin-top:
            30px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            14px
            22px;

          text-decoration: none;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

          transition:
            all 0.2s ease;
        }

        .primary-button {
          border:
            1px solid
            #c62828;

          background:
            #c62828;

          color:
            #fff;
        }

        .primary-button:hover {
          background:
            transparent;

          color:
            #c62828;
        }

        .secondary-button {
          border:
            1px solid
            rgba(
              242,
              201,
              76,
              0.55
            );

          color:
            var(--gold);
        }

        .secondary-button:hover {
          background:
            var(--gold);

          border-color:
            var(--gold);

          color:
            #050505;
        }

        /* =========================================
           MARKETING
        ========================================= */

        .marketing-section {
          padding:
            90px
            0;

          background:
            #050505;
        }

        .section-inner {
          width:
            min(
              1200px,
              calc(100% - 70px)
            );

          margin:
            0
            auto;
        }

        .marketing-grid {
          display: grid;

          grid-template-columns:
            1.35fr
            0.65fr;

          gap:
            50px;
        }

        .section-eyebrow {
          margin: 0;

          color:
            #c62828;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.42em;

          text-transform:
            uppercase;
        }

        .marketing-grid h2 {
          margin:
            15px
            0
            0;

          color:
            #fff;

          font-size:
            clamp(
              40px,
              5vw,
              62px
            );

          line-height:
            1;

          font-weight:
            300;

          text-transform:
            uppercase;

          letter-spacing:
            0.02em;
        }

        .marketing-grid h2 span {
          display: block;

          color:
            rgba(
              255,
              255,
              255,
              0.35
            );
        }

        .section-copy {
          max-width: 780px;

          margin:
            25px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.64
            );

          font-size: 16px;

          line-height: 1.9;
        }

        .marketing-cards {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 20px;

          margin-top:
            32px;
        }

        .marketing-card {
          padding:
            28px;

          border:
            1px solid
            rgba(
              242,
              201,
              76,
              0.18
            );

          border-radius:
            16px;

          background:
            #0d0d0d;
        }

        .red-rule {
          width: 48px;
          height: 4px;

          background:
            #c62828;

          margin-bottom:
            20px;
        }

        .card-title {
          margin: 0;

          color:
            var(--gold);

          font-size: 13px;

          font-weight: 900;

          letter-spacing:
            0.28em;

          text-transform:
            uppercase;
        }

        .marketing-card > p:last-child {
          margin:
            15px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

          line-height:
            1.8;
        }

        .marketing-contact {
          position: relative;

          overflow: hidden;

          min-height:
            430px;

          padding:
            35px;

          border:
            1px solid
            rgba(
              242,
              201,
              76,
              0.28
            );

          border-radius:
            24px;

          background:
            #111;
        }

        .contact-glow {
          position: absolute;

          right: -40px;
          top: -40px;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          background:
            rgba(
              198,
              40,
              40,
              0.10
            );

          filter:
            blur(45px);
        }

        .contact-box-content {
          position: relative;
        }

        .contact-label {
          margin: 0;

          color:
            #c62828;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.38em;

          text-transform:
            uppercase;
        }

        .marketing-contact h3 {
          margin:
            18px
            0
            0;

          color:
            #fff;

          font-size: 28px;

          line-height:
            1.15;

          font-weight:
            300;

          text-transform:
            uppercase;
        }

        .marketing-contact h3 span {
          display: block;

          margin-top: 4px;

          color:
            var(--gold);
        }

        .marketing-contact p:not(.contact-label) {
          margin:
            22px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

          line-height:
            1.8;
        }

        .email-link {
          display: block;

          margin-top:
            25px;

          color:
            var(--gold);

          font-size:
            14px;

          font-weight:
            700;

          text-decoration:
            none;

          word-break:
            break-word;
        }

        .email-link:hover {
          color:
            #c62828;
        }

        .email-button {
          display:
            inline-flex;

          margin-top:
            25px;

          padding:
            13px
            20px;

          border:
            1px solid
            #c62828;

          background:
            #c62828;

          color:
            #fff;

          text-decoration:
            none;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;
        }

        .email-button:hover {
          background:
            transparent;

          color:
            #c62828;
        }

        /* =========================================
           GUEST SECTION
        ========================================= */

        .guest-section {
          padding:
            100px
            0;

          border-top:
            1px solid
            rgba(
              242,
              201,
              76,
              0.14
            );

          background:
            #090909;
        }

        .form-container {
          width:
            min(
              1100px,
              calc(100% - 40px)
            );

          margin:
            0
            auto;
        }

        .form-intro {
          text-align:
            center;
        }

        .form-intro h2 {
          margin:
            15px
            0
            0;

          color:
            #fff;

          font-size:
            clamp(
              42px,
              6vw,
              62px
            );

          line-height:
            1;

          font-weight:
            300;

          text-transform:
            uppercase;

          letter-spacing:
            0.02em;
        }

        .form-intro > p:last-child {
          max-width:
            760px;

          margin:
            25px
            auto
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

          font-size:
            16px;

          line-height:
            1.9;
        }

        .form-intro > p:last-child span {
          color:
            var(--gold);
        }

        .guest-form {
          margin-top:
            55px;

          padding:
            45px;

          border:
            1px solid
            rgba(
              242,
              201,
              76,
              0.24
            );

          border-radius:
            24px;

          background:
            #050505;

          box-shadow:
            0 25px 70px
            rgba(
              0,
              0,
              0,
              0.45
            );
        }

        /* =========================================
           FORM HEADINGS
        ========================================= */

        .form-section-heading {
          display:
            flex;

          align-items:
            center;

          gap:
            16px;

          padding-bottom:
            15px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.10
            );
        }

        .form-section-number {
          color:
            #c62828;

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.3em;
        }

        .form-section-title {
          margin: 0;

          color:
            var(--gold);

          font-size:
            16px;

          font-weight:
            300;

          letter-spacing:
            0.22em;

          text-transform:
            uppercase;
        }

        .form-section-spacing {
          margin-top:
            48px;
        }

        .form-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            24px;

          margin-top:
            28px;
        }

        .single-field {
          margin-top:
            28px;
        }

        /* =========================================
           FORM FIELDS
        ========================================= */

        .field-label {
          display:
            block;

          color:
            var(--gold);

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;
        }

        .required-mark {
          margin-left:
            4px;

          color:
            #c62828;
        }

        .form-input {
          width:
            100%;

          margin-top:
            10px;

          padding:
            14px
            16px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );

          border-radius:
            12px;

          outline:
            none;

          background:
            #fff;

          color:
            #000;

          font-size:
            15px;
        }

        .form-input:focus {
          border-color:
            #c62828;

          box-shadow:
            0 0 0 3px
            rgba(
              198,
              40,
              40,
              0.18
            );
        }

        .form-input::placeholder {
          color:
            #999;
        }

        .textarea-field {
          display:
            block;

          margin-top:
            28px;
        }

        .textarea-field textarea {
          width:
            100%;

          min-height:
            190px;

          margin-top:
            10px;

          padding:
            16px;

          resize:
            vertical;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );

          border-radius:
            12px;

          outline:
            none;

          background:
            #fff;

          color:
            #000;

          font-size:
            15px;

          line-height:
            1.6;
        }

        .textarea-field textarea:focus {
          border-color:
            #c62828;

          box-shadow:
            0 0 0 3px
            rgba(
              198,
              40,
              40,
              0.18
            );
        }

        .textarea-field textarea::placeholder {
          color:
            #999;
        }

        .character-count {
          display:
            block;

          margin-top:
            7px;

          color:
            rgba(
              255,
              255,
              255,
              0.30
            );

          font-size:
            11px;

          text-align:
            right;
        }

        .availability-intro {
          margin:
            20px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.50
            );

          font-size:
            14px;

          line-height:
            1.7;
        }

        .helper-text {
          margin:
            12px
            0
            0;

          padding-left:
            40px;

          color:
            rgba(
              255,
              255,
              255,
              0.38
            );

          font-size:
            12px;

          line-height:
            1.7;
        }

        /* =========================================
           CHECKBOXES
        ========================================= */

        .checkbox-card {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            15px;

          margin-top:
            25px;

          padding:
            18px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.10
            );

          border-radius:
            12px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          cursor:
            pointer;
        }

        .checkbox-card input {
          flex:
            0 0 auto;

          width:
            18px;

          height:
            18px;

          margin-top:
            2px;

          accent-color:
            #c62828;

          cursor:
            pointer;
        }

        .checkbox-card span {
          display:
            flex;

          flex-direction:
            column;

          gap:
            5px;

          color:
            rgba(
              255,
              255,
              255,
              0.58
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        .checkbox-card strong {
          color:
            var(--gold);

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.20em;

          text-transform:
            uppercase;
        }

        .checkbox-card small {
          color:
            rgba(
              255,
              255,
              255,
              0.52
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =========================================
           SUBMIT
        ========================================= */

        .submit-button {
          width:
            100%;

          margin-top:
            32px;

          padding:
            17px
            25px;

          border:
            1px solid
            #c62828;

          background:
            #c62828;

          color:
            #fff;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.32em;

          text-transform:
            uppercase;

          cursor:
            pointer;

          transition:
            all 0.2s ease;
        }

        .submit-button:hover {
          background:
            transparent;

          color:
            #c62828;
        }

        .submitted-message {
          margin:
            25px
            0
            0;

          text-align:
            center;

          color:
            var(--gold);

          font-size:
            14px;

          line-height:
            1.7;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .site-footer {
          border-top:
            1px solid
            rgba(
              242,
              201,
              76,
              0.15
            );

          background:
            #000;
        }

        .footer-inner {
          width:
            min(
              1200px,
              calc(100% - 40px)
            );

          margin:
            0
            auto;

          padding:
            28px
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            25px;
        }

        .footer-brand {
          display:
            flex;

          align-items:
            center;

          gap:
            15px;
        }

        .footer-brand img {
          width:
            95px;

          height:
            auto;

          object-fit:
            contain;
        }

        .footer-brand p,
        .footer-title {
          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.35
            );

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            0.20em;

          text-transform:
            uppercase;
        }

        .footer-title {
          color:
            rgba(
              242,
              201,
              76,
              0.70
            );
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .hero-inner {
            grid-template-columns:
              0.8fr
              1.2fr;

            gap:
              30px;
          }

          .hero-logo a {
            max-width:
              380px;
          }

          .marketing-grid {
            grid-template-columns:
              1fr;
          }

        }

        @media (max-width: 800px) {

          .site-header {
            padding:
              18px
              20px;

            justify-content:
              center;
          }

          .site-nav {
            flex-wrap:
              wrap;

            justify-content:
              center;

            border-radius:
              18px;
          }

          .site-nav-link {
            font-size:
              11px;

            padding:
              7px
              9px;
          }

          .hero-inner {
            width:
              calc(
                100% - 40px
              );

            min-height:
              600px;

            grid-template-columns:
              1fr;

            gap:
              5px;

            padding:
              40px
              0
              55px;
          }

          .hero-logo {
            min-height:
              280px;

            order:
              1;
          }

          .hero-logo a {
            max-width:
              330px;
          }

          .hero-copy {
            order:
              2;

            text-align:
              center;
          }

          .gold-line {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .hero-description {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .hero-buttons {
            justify-content:
              center;
          }

          .marketing-cards {
            grid-template-columns:
              1fr;
          }

          .form-grid {
            grid-template-columns:
              1fr;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .site-header {
            padding:
              14px
              10px;
          }

          .site-nav {
            gap:
              2px;
          }

          .site-nav-link {
            font-size:
              9px;

            padding:
              6px
              7px;

            letter-spacing:
              0;
          }

          .contact-hero {
            min-height:
              auto;
          }

          .hero-inner {
            width:
              calc(
                100% - 32px
              );

            min-height:
              auto;

            padding:
              35px
              0
              55px;
          }

          .hero-logo {
            min-height:
              220px;
          }

          .hero-logo a {
            max-width:
              275px;
          }

          .hero-copy h1 {
            font-size:
              50px;
          }

          .eyebrow {
            font-size:
              9px;

            letter-spacing:
              0.28em;
          }

          .hero-description {
            font-size:
              14px;

            line-height:
              1.7;
          }

          .hero-buttons {
            flex-direction:
              column;

            align-items:
              stretch;
          }

          .primary-button,
          .secondary-button {
            width:
              100%;
          }

          .marketing-section,
          .guest-section {
            padding:
              70px
              0;
          }

          .section-inner {
            width:
              calc(
                100% - 32px
              );
          }

          .form-container {
            width:
              calc(
                100% - 28px
              );
          }

          .guest-form {
            padding:
              28px
              20px;
          }

          .form-section-title {
            font-size:
              12px;

            letter-spacing:
              0.14em;
          }

          .footer-inner {
            flex-direction:
              column;

            text-align:
              center;
          }

          .footer-brand {
            flex-direction:
              column;
          }

        }

      `}</style>
    </main>
  );
}

/* =========================================================
   FORM SECTION HEADING
========================================================= */

function FormSectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="form-section-heading">
      <span className="form-section-number">
        {number}
      </span>

      <h3 className="form-section-title">
        {title}
      </h3>
    </div>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

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
      <span className="field-label">
        {label}

        {required && (
          <span className="required-mark">
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
        className="form-input"
      />
    </label>
  );
}

/* =========================================================
   DATE FIELD
========================================================= */

function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
      </span>

      <input
        type="date"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="form-input"
      />
    </label>
  );
}

/* =========================================================
   CHECKBOX
========================================================= */

function CheckBoxField({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="checkbox-card">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
      />

      <span>
        <strong>
          {label}
        </strong>
      </span>
    </label>
  );
}
