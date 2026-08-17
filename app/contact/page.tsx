"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const GOLD = "#F2C94C";

type GuestProposal = {
  guestName: string;
  email: string;
  phone: string;
  company: string;

  selfRepresenting: boolean;

  managementName: string;
  managementEmail: string;
  managementPhone: string;

  availabilityOne: string;
  availabilityOneVirtual: boolean;
  availabilityOneInPerson: boolean;

  availabilityTwo: string;
  availabilityTwoVirtual: boolean;
  availabilityTwoInPerson: boolean;

  availabilityThree: string;
  availabilityThreeVirtual: boolean;
  availabilityThreeInPerson: boolean;

  segmentHeading: string;
  discussion: string;

  anonymousNames: boolean;

  guestTerms: string;
  guestTermsRead: boolean;

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

  availabilityOne: "",
  availabilityOneVirtual: false,
  availabilityOneInPerson: false,

  availabilityTwo: "",
  availabilityTwoVirtual: false,
  availabilityTwoInPerson: false,

  availabilityThree: "",
  availabilityThreeVirtual: false,
  availabilityThreeInPerson: false,

  segmentHeading: "",
  discussion: "",

  anonymousNames: false,

  guestTerms: "",
  guestTermsRead: false,

  consent: false,
};

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
      !proposal.guestTermsRead
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
        "========================================",
        "GUEST INFORMATION",
        "========================================",
        "",
        `Guest/Artist Name: ${proposal.guestName}`,
        `Email: ${proposal.email}`,
        `Phone: ${proposal.phone}`,
        `Company/Organization: ${
          proposal.company || "Not provided"
        }`,
        `Self-Representing: ${
          proposal.selfRepresenting ? "Yes" : "No"
        }`,
        "",
        "========================================",
        "MANAGEMENT / CONTACT",
        "========================================",
        "",
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
        "========================================",
        "PROPOSED TAPING AVAILABILITY",
        "========================================",
        "",
        `Preferred Date 1: ${
          proposal.availabilityOne || "Not provided"
        }`,
        `Date 1 - Virtual: ${
          proposal.availabilityOneVirtual
            ? "Yes"
            : "No"
        }`,
        `Date 1 - In-Person: ${
          proposal.availabilityOneInPerson
            ? "Yes"
            : "No"
        }`,
        "",
        `Preferred Date 2: ${
          proposal.availabilityTwo || "Not provided"
        }`,
        `Date 2 - Virtual: ${
          proposal.availabilityTwoVirtual
            ? "Yes"
            : "No"
        }`,
        `Date 2 - In-Person: ${
          proposal.availabilityTwoInPerson
            ? "Yes"
            : "No"
        }`,
        "",
        `Preferred Date 3: ${
          proposal.availabilityThree || "Not provided"
        }`,
        `Date 3 - Virtual: ${
          proposal.availabilityThreeVirtual
            ? "Yes"
            : "No"
        }`,
        `Date 3 - In-Person: ${
          proposal.availabilityThreeInPerson
            ? "Yes"
            : "No"
        }`,
        "",
        "========================================",
        "PROPOSED PODCAST SEGMENT",
        "========================================",
        "",
        `Proposed Segment Heading: ${proposal.segmentHeading}`,
        "",
        "Proposed Discussion:",
        proposal.discussion,
        "",
        "========================================",
        "PRIVACY / ANONYMITY",
        "========================================",
        "",
        `Names or Organizations to Remain Anonymous: ${
          proposal.anonymousNames
            ? "Yes"
            : "No"
        }`,
        "",
        "========================================",
        "GUEST TERMS",
        "========================================",
        "",
        `Guest Terms Selection: ${
          proposal.guestTerms || "Not selected"
        }`,
        `Guest Terms Read: ${
          proposal.guestTermsRead
            ? "Yes"
            : "No"
        }`,
        "",
        "========================================",
        "ACKNOWLEDGMENT",
        "========================================",
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
    <main className="contact-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="contact-background"
        aria-hidden="true"
      />

      <div
        className="contact-overlay"
        aria-hidden="true"
      />

      <div className="contact-content">

        {/* =====================================================
            HEADER / NAVIGATION
        ===================================================== */}

        <header className="contact-header">

          <nav
            className="contact-nav"
            aria-label="Main navigation"
          >

            <Link
              href="/"
              className="contact-nav-link"
            >
              Home
            </Link>

            <Link
              href="/episodes"
              className="contact-nav-link"
            >
              Episodes
            </Link>

            <Link
              href="/guests"
              className="contact-nav-link"
            >
              Guests
            </Link>

            <Link
              href="/merchandise"
              className="contact-nav-link"
            >
              Merchandise
            </Link>

            <Link
              href="/contact"
              className="contact-nav-link active"
            >
              Contact
            </Link>

          </nav>

        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">

          {/* HERO LOGO — LEFT */}

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

          {/* HERO CONTENT — RIGHT */}

          <div className="contact-hero-copy">

            <p className="eyebrow">
              Scotti Brothers Entertainment
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
                  <span>
                    Inquiries
                  </span>
                </h2>

                <p className="section-description">
                  Scotti Brothers Entertainment welcomes
                  opportunities to collaborate with artists,
                  brands, businesses, media organizations,
                  entertainment companies, and strategic
                  partners.
                </p>

                <p className="section-description">
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

                <p className="contact-card-eyebrow">
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

          <div className="guest-section-inner">

            <div className="guest-intro">

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

              {/* 01 */}

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
                  label="Company / Organization"
                  value={proposal.company}
                  onChange={(value) =>
                    updateField(
                      "company",
                      value
                    )
                  }
                />

              </div>

              {/* 02 */}

              <div className="form-section-spacing">

                <FormSectionHeading
                  number="02"
                  title="Management / Contact"
                />

              </div>

              <div className="self-representing">

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
                  label="I am self-representing"
                />

                <p>
                  Check this box if you are submitting
                  this proposal on your own behalf and do
                  not have a management or representative
                  contact.
                </p>

              </div>

              <div className="form-grid management-grid">

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

              {/* 03 */}

              <div className="form-section-spacing">

                <FormSectionHeading
                  number="03"
                  title="Proposed Taping Availability"
                />

              </div>

              <p className="form-help">
                Please provide up to three preferred
                taping dates. For each date, indicate
                whether you are requesting a virtual or
                in-person recording.
              </p>

              <div className="availability-grid">

                <TapingDateField
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
                  virtual={
                    proposal.availabilityOneVirtual
                  }
                  inPerson={
                    proposal.availabilityOneInPerson
                  }
                  onVirtualChange={(checked) =>
                    updateField(
                      "availabilityOneVirtual",
                      checked
                    )
                  }
                  onInPersonChange={(checked) =>
                    updateField(
                      "availabilityOneInPerson",
                      checked
                    )
                  }
                />

                <TapingDateField
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
                  virtual={
                    proposal.availabilityTwoVirtual
                  }
                  inPerson={
                    proposal.availabilityTwoInPerson
                  }
                  onVirtualChange={(checked) =>
                    updateField(
                      "availabilityTwoVirtual",
                      checked
                    )
                  }
                  onInPersonChange={(checked) =>
                    updateField(
                      "availabilityTwoInPerson",
                      checked
                    )
                  }
                />

                <TapingDateField
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
                  virtual={
                    proposal.availabilityThreeVirtual
                  }
                  inPerson={
                    proposal.availabilityThreeInPerson
                  }
                  onVirtualChange={(checked) =>
                    updateField(
                      "availabilityThreeVirtual",
                      checked
                    )
                  }
                  onInPersonChange={(checked) =>
                    updateField(
                      "availabilityThreeInPerson",
                      checked
                    )
                  }
                />

              </div>

              {/* 04 */}

              <div className="form-section-spacing">

                <FormSectionHeading
                  number="04"
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
                  className="form-textarea"
                />

                <span className="character-count">
                  {proposal.discussion.length}
                  /1500
                </span>

              </label>

              {/* 05 */}

              <div className="form-section-spacing">

                <FormSectionHeading
                  number="05"
                  title="Privacy & Anonymity"
                />

              </div>

              <div className="privacy-box">

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
                  label="Keep names or organizations anonymous"
                />

                <p>
                  Check this box if you want any names,
                  companies, organizations, or other
                  identifying information discussed during
                  the conversation to remain anonymous.
                </p>

              </div>

              {/* 06 */}

              <div className="form-section-spacing">

                <FormSectionHeading
                  number="06"
                  title="Guest Terms of Agreement"
                />

              </div>

              <div className="terms-section">

                <label className="field-label">
                  Guest Terms of Agreement
                </label>

                <select
                  required
                  value={
                    proposal.guestTerms
                  }
                  onChange={(event) =>
                    updateField(
                      "guestTerms",
                      event.target.value
                    )
                  }
                  className="form-select"
                >

                  <option value="">
                    Select Guest Terms of Agreement
                  </option>

                  <option value="Guest Terms of Agreement — Version 1.0">
                    Guest Terms of Agreement — Version 1.0
                  </option>

                </select>

                <p className="terms-note">
                  The Guest Terms of Agreement will be
                  provided for review before a guest
                  proposal can be submitted.
                </p>

                <label className="checkbox-panel">

                  <input
                    type="checkbox"
                    required
                    checked={
                      proposal.guestTermsRead
                    }
                    onChange={(event) =>
                      updateField(
                        "guestTermsRead",
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    I Have Read the Guest Terms of
                    Agreement
                  </span>

                </label>

              </div>

              {/* FINAL ACKNOWLEDGMENT */}

              <label className="checkbox-panel final-consent">

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
                  I understand that submitting a guest
                  proposal does not guarantee an appearance
                  on the podcast. Scotti Brothers
                  Entertainment may contact me or my
                  representative for additional information.
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

        <footer className="contact-footer">

          <div className="footer-inner">

            <div className="footer-brand">

              <img
                src="/images/logo.png"
                alt="Scotti Brothers Entertainment"
              />

              <p>
                © 2026 Scotti Brothers Entertainment.
                All rights reserved.
              </p>

            </div>

            <p className="footer-title">
              Can&apos;t Make This Up!
            </p>

          </div>

        </footer>

      </div>

      {/* =====================================================
          PAGE STYLES
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           PAGE
        ========================================= */

        .contact-page {
          --gold: ${GOLD};

          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(139,0,0,0.17),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 60%,
              rgba(242,201,76,0.07),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #050505 0%,
              #090909 50%,
              #050505 100%
            );

          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .contact-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 15% 25%,
              rgba(139,0,0,0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 82% 68%,
              rgba(242,201,76,0.05),
              transparent 30%
            );
        }

        .contact-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.01) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.01) 1px,
              transparent 1px
            );

          background-size: 42px 42px;
          opacity: 0.3;
        }

        .contact-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* =========================================
           HEADER
        ========================================= */

        .contact-header {
          width: 100%;

          padding:
            24px
            42px
            0;

          display: flex;
          justify-content: flex-end;
        }

        .contact-nav {
          display: flex;
          align-items: center;

          gap: 4px;

          padding:
            8px
            10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid
            rgba(255,255,255,0.12);

          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .contact-nav-link {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            8px
            12px;

          border-radius: 999px;

          color: #fff;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          white-space: nowrap;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .contact-nav-link:hover {
          color: var(--gold);
        }

        .contact-nav-link.active {
          background: #8b0000;
          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .contact-hero {
          position: relative;

          width: 100%;
          max-width: 1250px;

          min-height: 500px;

          margin: 0 auto;

          padding:
            45px
            45px
            75px;

          display: flex;
          align-items: center;

          overflow: hidden;
        }

        .hero-logo {
          position: absolute;

          left: 2%;

          top: 50%;

          transform:
            translateY(-50%);

          width: 44%;

          max-width: 540px;

          z-index: 2;
        }

        .hero-logo a {
          display: block;
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
              rgba(0,0,0,0.75)
            );
        }

        .contact-hero-copy {
          position: relative;

          z-index: 3;

          width: 55%;

          max-width: 690px;

          margin-left: auto;
          margin-right: 1%;

          padding-top: 20px;
        }

        .eyebrow,
        .section-eyebrow,
        .contact-card-eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 12px;

          font-weight: 900;

          letter-spacing:
            0.45em;

          text-transform:
            uppercase;
        }

        .contact-hero h1 {
          margin:
            18px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              58px,
              7vw,
              92px
            );

          line-height:
            0.9;

          font-weight: 900;

          letter-spacing:
            -0.045em;

          text-transform:
            uppercase;
        }

        .contact-hero h1 span {
          display: block;
          margin-top: 8px;
        }

        .red-text {
          color: #c62828;
        }

        .gold-text {
          color: var(--gold);
        }

        .podcast-label {
          margin:
            24px
            0
            0;

          color: #c62828;

          font-size: 12px;

          font-weight: 900;

          letter-spacing:
            0.38em;

          text-transform:
            uppercase;
        }

        .gold-line {
          display: flex;

          align-items: center;

          gap: 16px;

          width:
            min(
              520px,
              90%
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
          color: var(--gold);
          font-size: 14px;
        }

        .hero-description {
          max-width: 650px;

          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.62
            );

          font-size: 17px;

          line-height: 1.85;
        }

        .hero-description strong {
          color: var(--gold);
        }

        .hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 15px;

          margin-top: 30px;
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
            1px
            solid
            #c62828;

          background:
            #c62828;

          color: #fff;
        }

        .primary-button:hover {
          background: transparent;
          color: #c62828;
        }

        .secondary-button {
          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.5
            );

          color: var(--gold);
        }

        .secondary-button:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: #000;
        }

        /* =========================================
           MARKETING
        ========================================= */

        .marketing-section {
          padding:
            90px
            0;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );
        }

        .section-inner {
          width:
            min(
              1200px,
              calc(100% - 70px)
            );

          margin: 0 auto;
        }

        .marketing-grid {
          display: grid;

          grid-template-columns:
            1.35fr
            0.65fr;

          gap: 55px;
        }

        .marketing-section h2 {
          margin:
            15px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              38px,
              5vw,
              62px
            );

          line-height:
            0.95;

          font-weight: 300;

          text-transform:
            uppercase;

          letter-spacing:
            0.02em;
        }

        .marketing-section h2 span {
          display: block;
          color: rgba(255,255,255,0.32);
        }

        .section-description {
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
              0.62
            );

          font-size: 15px;

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

          margin-top: 35px;
        }

        .marketing-card {
          padding: 28px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.18
            );

          border-radius: 18px;

          background:
            #0d0d0d;
        }

        .red-rule {
          width: 48px;
          height: 4px;

          background:
            #c62828;
        }

        .card-title {
          margin-top: 18px;

          color: var(--gold);

          font-size: 13px;

          font-weight: 900;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;
        }

        .marketing-card > p:last-child {
          margin-top: 15px;

          color:
            rgba(
              255,
              255,
              255,
              0.5
            );

          font-size: 14px;

          line-height: 1.8;
        }

        .marketing-contact {
          position: relative;

          overflow: hidden;

          padding: 35px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.3
            );

          border-radius: 24px;

          background:
            #111;
        }

        .marketing-contact::after {
          content: "";

          position: absolute;

          right: -70px;
          top: -70px;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          background:
            rgba(
              198,
              40,
              40,
              0.1
            );

          filter: blur(30px);
        }

        .marketing-contact h3 {
          margin-top: 20px;

          color: #fff;

          font-size: 27px;

          line-height: 1.05;

          font-weight: 300;

          text-transform:
            uppercase;

          letter-spacing:
            0.03em;
        }

        .marketing-contact h3 span {
          display: block;
          color: var(--gold);
        }

        .marketing-contact > p:not(.contact-card-eyebrow) {
          margin-top: 20px;

          color:
            rgba(
              255,
              255,
              255,
              0.52
            );

          line-height: 1.8;
        }

        .email-link {
          display: block;

          margin-top: 24px;

          color: var(--gold);

          font-size: 14px;

          font-weight: 700;

          word-break: break-word;

          text-decoration: none;
        }

        .email-link:hover {
          color: #c62828;
        }

        .email-button {
          display: inline-flex;

          margin-top: 24px;

          padding:
            13px
            20px;

          border:
            1px
            solid
            #c62828;

          background:
            #c62828;

          color: #fff;

          text-decoration: none;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.22em;

          text-transform:
            uppercase;
        }

        .email-button:hover {
          background: transparent;
          color: #c62828;
        }

        /* =========================================
           GUEST SECTION
        ========================================= */

        .guest-section {
          padding:
            100px
            0;

          background:
            #090909;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );

          border-bottom:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );
        }

        .guest-section-inner {
          width:
            min(
              1100px,
              calc(100% - 50px)
            );

          margin: 0 auto;
        }

        .guest-intro {
          text-align: center;
        }

        .guest-intro h2 {
          margin-top: 15px;

          color: #fff;

          font-size:
            clamp(
              40px,
              5vw,
              58px
            );

          font-weight: 300;

          text-transform:
            uppercase;

          letter-spacing:
            0.03em;
        }

        .guest-intro > p:last-child {
          max-width: 780px;

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

          font-size: 15px;

          line-height: 1.9;
        }

        .guest-intro > p:last-child span {
          color: var(--gold);
        }

        /* =========================================
           FORM
        ========================================= */

        .guest-form {
          margin-top: 50px;

          padding:
            45px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.25
            );

          border-radius: 24px;

          background:
            #050505;

          box-shadow:
            0
            25px
            70px
            rgba(
              0,
              0,
              0,
              0.45
            );
        }

        .form-section-heading {
          display: flex;

          align-items: center;

          gap: 16px;

          padding-bottom: 15px;

          border-bottom:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.1
            );
        }

        .form-section-number {
          color: #c62828;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.3em;
        }

        .form-section-title {
          color: var(--gold);

          font-size: 17px;

          font-weight: 300;

          letter-spacing:
            0.22em;

          text-transform:
            uppercase;
        }

        .form-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap:
            24px;

          margin-top: 28px;
        }

        .form-section-spacing {
          margin-top: 48px;
        }

        .field-label {
          display: block;

          color: var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;
        }

        .required-mark {
          margin-left: 5px;
          color: #c62828;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;

          margin-top: 11px;

          border:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.15
            );

          border-radius: 12px;

          background:
            #fff;

          color: #000;

          outline: none;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .form-input,
        .form-select {
          min-height: 52px;

          padding:
            14px
            16px;
        }

        .form-textarea {
          padding:
            15px
            16px;

          resize: vertical;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          border-color:
            #c62828;

          box-shadow:
            0
            0
            0
            3px
            rgba(
              198,
              40,
              40,
              0.15
            );
        }

        .form-help {
          margin-top: 22px;

          max-width: 800px;

          color:
            rgba(
              255,
              255,
              255,
              0.45
            );

          font-size: 13px;

          line-height: 1.7;
        }

        .self-representing {
          display: flex;

          align-items: flex-start;

          gap: 18px;

          margin-top: 25px;

          padding:
            18px
            20px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.16
            );

          border-radius: 14px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );
        }

        .self-representing > p {
          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.4
            );

          font-size: 12px;

          line-height: 1.6;
        }

        .management-grid {
          margin-top: 22px;
        }

        /* =========================================
           AVAILABILITY
        ========================================= */

        .availability-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );

          gap: 20px;

          margin-top: 28px;
        }

        .taping-date-field {
          width: 100%;

          padding:
            22px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.14
            );

          border-radius: 16px;

          background:
            #0b0b0b;
        }

        .taping-format-options {
          display: flex;

          flex-wrap: wrap;

          align-items: center;

          gap: 18px;

          margin-top: 15px;
        }

        .format-option {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color:
            rgba(
              255,
              255,
              255,
              0.62
            );

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;

          cursor: pointer;
        }

        .format-option input,
        .checkbox-panel input,
        .self-representing input,
        .privacy-box input {
          width: 17px;
          height: 17px;

          margin: 0;

          accent-color:
            #c62828;

          cursor: pointer;

          flex-shrink: 0;
        }

        .format-option input:checked + span {
          color: var(--gold);
        }

        /* =========================================
           SEGMENT
        ========================================= */

        .single-field {
          margin-top: 28px;
        }

        .textarea-field {
          display: block;

          margin-top: 25px;
        }

        .character-count {
          display: block;

          margin-top: 7px;

          text-align: right;

          color:
            rgba(
              255,
              255,
              255,
              0.25
            );

          font-size: 11px;
        }

        /* =========================================
           PRIVACY
        ========================================= */

        .privacy-box {
          display: flex;

          align-items: flex-start;

          gap: 16px;

          margin-top: 25px;

          padding:
            20px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.16
            );

          border-radius: 14px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );
        }

        .privacy-box > p {
          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.42
            );

          font-size: 12px;

          line-height: 1.7;
        }

        /* =========================================
           TERMS
        ========================================= */

        .terms-section {
          margin-top: 28px;
        }

        .terms-note {
          margin-top: 12px;

          color:
            rgba(
              255,
              255,
              255,
              0.35
            );

          font-size: 12px;

          line-height: 1.6;
        }

        .checkbox-panel {
          display: flex;

          align-items: flex-start;

          gap: 15px;

          margin-top: 20px;

          padding:
            18px
            20px;

          border:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.1
            );

          border-radius: 12px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color:
            rgba(
              255,
              255,
              255,
              0.57
            );

          font-size: 13px;

          line-height: 1.7;

          cursor: pointer;
        }

        .checkbox-panel span {
          flex: 1;
        }

        .checkbox-panel input:checked + span {
          color: var(--gold);
        }

        .final-consent {
          margin-top: 35px;
        }

        /* =========================================
           SUBMIT
        ========================================= */

        .submit-button {
          width: 100%;

          margin-top: 28px;

          padding:
            17px
            25px;

          border:
            1px
            solid
            #c62828;

          background:
            #c62828;

          color: #fff;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.32em;

          text-transform:
            uppercase;

          cursor: pointer;

          transition:
            all 0.2s ease;
        }

        .submit-button:hover {
          background: transparent;
          color: #c62828;
        }

        .submitted-message {
          margin-top: 22px;

          text-align: center;

          color: var(--gold);

          font-size: 13px;

          line-height: 1.8;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .contact-footer {
          padding:
            30px
            20px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );

          background:
            #050505;
        }

        .footer-inner {
          width:
            min(
              1200px,
              calc(100% - 40px)
            );

          margin: 0 auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;
        }

        .footer-brand {
          display: flex;

          align-items: center;

          gap: 16px;
        }

        .footer-brand img {
          display: block;

          width: 95px;

          height: auto;
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

          font-size: 9px;

          font-weight: 700;

          letter-spacing:
            0.2em;

          text-transform:
            uppercase;
        }

        .footer-title {
          color:
            rgba(
              242,
              201,
              76,
              0.65
            );
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .contact-hero {
            min-height: 450px;

            padding:
              40px
              25px
              60px;
          }

          .hero-logo {
            width: 42%;
          }

          .contact-hero-copy {
            width: 58%;
          }

          .marketing-grid {
            grid-template-columns:
              1fr;
          }

          .availability-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .contact-header {
            padding:
              18px
              12px
              0;

            justify-content: center;
          }

          .contact-nav {
            flex-wrap: wrap;

            justify-content: center;

            border-radius: 18px;
          }

          .contact-nav-link {
            padding:
              6px
              8px;

            font-size: 10px;
          }

          .contact-hero {
            min-height: 400px;

            padding:
              40px
              16px
              55px;
          }

          .hero-logo {
            left: 0;

            width: 39%;
          }

          .contact-hero-copy {
            width: 60%;

            margin-left: auto;
            margin-right: 0;

            padding-top: 10px;
          }

          .eyebrow {
            font-size: 8px;
            letter-spacing: 0.25em;
          }

          .contact-hero h1 {
            font-size: 45px;

            letter-spacing: -2px;
          }

          .podcast-label {
            font-size: 8px;

            letter-spacing: 0.2em;
          }

          .hero-description {
            font-size: 12px;

            line-height: 1.6;
          }

          .hero-buttons {
            flex-direction: column;

            gap: 8px;
          }

          .primary-button,
          .secondary-button {
            width: 100%;

            padding:
              11px
              10px;

            font-size: 8px;

            letter-spacing:
              0.14em;
          }

          .section-inner {
            width:
              calc(
                100% - 36px
              );
          }

          .marketing-section {
            padding:
              70px
              0;
          }

          .marketing-cards {
            grid-template-columns:
              1fr;
          }

          .guest-section {
            padding:
              70px
              0;
          }

          .guest-section-inner {
            width:
              calc(
                100% - 30px
              );
          }

          .guest-form {
            padding:
              28px
              18px;
          }

          .form-grid {
            grid-template-columns:
              1fr;
          }

          .availability-grid {
            grid-template-columns:
              1fr;
          }

          .form-section-title {
            font-size: 13px;

            letter-spacing:
              0.14em;
          }

          .self-representing {
            flex-direction: column;

            gap: 12px;
          }

          .footer-inner {
            flex-direction: column;

            text-align: center;
          }

          .footer-brand {
            flex-direction: column;
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
    <label className="checkbox-panel">

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
      />

      <span>
        {label}
      </span>

    </label>
  );
}

/* =========================================================
   TAPING DATE FIELD
========================================================= */

function TapingDateField({
  label,
  value,
  onChange,
  virtual,
  inPerson,
  onVirtualChange,
  onInPersonChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  virtual: boolean;
  inPerson: boolean;
  onVirtualChange: (checked: boolean) => void;
  onInPersonChange: (checked: boolean) => void;
}) {
  return (
    <div className="taping-date-field">

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

      <div className="taping-format-options">

        <label className="format-option">

          <input
            type="checkbox"
            checked={virtual}
            onChange={(event) =>
              onVirtualChange(
                event.target.checked
              )
            }
          />

          <span>
            Virtual
          </span>

        </label>

        <label className="format-option">

          <input
            type="checkbox"
            checked={inPerson}
            onChange={(event) =>
              onInPersonChange(
                event.target.checked
              )
            }
          />

          <span>
            In-Person
          </span>

        </label>

      </div>

    </div>
  );
}
