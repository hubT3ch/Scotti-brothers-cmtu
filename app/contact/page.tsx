"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#F2C94C";
const RED = "#D60000";
const BRIGHT_RED = "#F20D0D";

export default function ContactPage() {
  const [selfRepresented, setSelfRepresented] = useState(false);
  const [appearanceType, setAppearanceType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="page-content">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="site-header">
          <div className="mobile-logo">
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

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.href === "/contact" ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero">

          <div className="desktop-logo">
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

          <div className="hero-copy">
            <p className="eyebrow">
              SCOTTI BROTHERS
            </p>

            <h1>CONTACT</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-subtitle">
              Want to be a guest on{" "}
              <strong>Can&apos;t Make This Up!</strong>?
              <br />
              Tell us your story and let&apos;s talk.
            </p>
          </div>

        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="intro-section">

          <p className="eyebrow">
            GUEST APPEARANCE INQUIRIES
          </p>

          <h2>
            HAVE A STORY?
          </h2>

          <div className="red-line" />

          <p className="intro-copy">
            The Scotti Brothers &quot;Can&apos;t Make This Up!&quot;
            Podcast is looking for unforgettable stories,
            unbelievable moments, music-industry experiences,
            behind-the-scenes insight, and conversations that
            people will be talking about long after the episode ends.
          </p>

          <p className="intro-copy">
            Complete the guest inquiry form below. Our team will
            review your information and contact you if your story
            is a potential fit for the show.
          </p>

        </section>

        {/* =====================================================
            GUEST FORM
        ====================================================== */}

        <section className="form-section">

          <div className="section-heading">

            <p className="eyebrow">
              LET&apos;S CONNECT
            </p>

            <h2>
              GUEST INQUIRY FORM
            </h2>

            <div className="red-line" />

            <p>
              Please provide as much information as possible.
              Fields marked with <strong>*</strong> are required.
            </p>

          </div>

          {submitted && (
            <div className="success-message">
              <strong>THANK YOU.</strong>

              <span>
                Your guest inquiry has been prepared for submission.
                Our team will review your information.
              </span>
            </div>
          )}

          <form
            className="guest-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                01 — GUEST INFORMATION
            ================================================== */}

            <div className="form-card">

              <div className="form-card-header">
                <span>01</span>

                <div>
                  <p>GUEST INFORMATION</p>
                  <h3>TELL US ABOUT YOU</h3>
                </div>
              </div>

              <div className="form-body">

                <div className="form-grid">

                  <Field
                    label="Full Name"
                    name="fullName"
                    required
                  />

                  <Field
                    label="Professional / Stage Name"
                    name="professionalName"
                  />

                  <Field
                    label="Organization / Company"
                    name="organization"
                  />

                  <Field
                    label="Title / Position"
                    name="title"
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    required
                  />

                  <div className="field full">
                    <label htmlFor="address">
                      Mailing Address
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Street address, city, state, ZIP"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                02 — REPRESENTATION
            ================================================== */}

            <div className="form-card">

              <div className="form-card-header">
                <span>02</span>

                <div>
                  <p>REPRESENTATION</p>
                  <h3>MANAGEMENT / REPRESENTATIVE</h3>
                </div>
              </div>

              <div className="form-body">

                <label className="check-row featured-check">

                  <input
                    type="checkbox"
                    name="selfRepresented"
                    checked={selfRepresented}
                    onChange={(event) =>
                      setSelfRepresented(event.target.checked)
                    }
                  />

                  <span>
                    I am self-represented and do not have a
                    manager, agent, attorney, publicist, or other
                    professional representative for this appearance.
                  </span>

                </label>

                {!selfRepresented && (
                  <div className="form-grid management-fields">

                    <Field
                      label="Manager / Representative Name"
                      name="managerName"
                    />

                    <Field
                      label="Management / Agency / Company"
                      name="managementCompany"
                    />

                    <Field
                      label="Management Email"
                      name="managementEmail"
                      type="email"
                    />

                    <Field
                      label="Management Phone"
                      name="managementPhone"
                      type="tel"
                    />

                  </div>
                )}

              </div>
            </div>

            {/* =================================================
                03 — STORY
            ================================================== */}

            <div className="form-card">

              <div className="form-card-header">
                <span>03</span>

                <div>
                  <p>YOUR STORY</p>
                  <h3>CAN&apos;T MAKE THIS UP!</h3>
                </div>
              </div>

              <div className="form-body">

                <div className="form-grid">

                  <Field
                    label="Story / Episode Topic"
                    name="storyTopic"
                    required
                  />

                  <Field
                    label="How Did You Hear About The Podcast?"
                    name="referralSource"
                  />

                  <div className="field full">

                    <label htmlFor="story">
                      Tell Us Your Story *
                    </label>

                    <textarea
                      id="story"
                      name="story"
                      rows={7}
                      required
                      placeholder="Tell us what happened, why it matters, and why you believe it would make a great conversation on Can't Make This Up!"
                    />

                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                04 — TAPING AVAILABILITY
            ================================================== */}

            <div className="form-card">

              <div className="form-card-header">
                <span>04</span>

                <div>
                  <p>TAPING AVAILABILITY</p>
                  <h3>WHEN CAN WE RECORD?</h3>
                </div>
              </div>

              <div className="form-body">

                <div className="availability-label">
                  Preferred Appearance Format *
                </div>

                <div className="choice-grid">

                  <label className="choice-card">

                    <input
                      type="radio"
                      name="appearanceType"
                      value="Live"
                      required
                      checked={appearanceType === "Live"}
                      onChange={(event) =>
                        setAppearanceType(event.target.value)
                      }
                    />

                    <span className="choice-title">
                      LIVE
                    </span>

                    <small>
                      In-person taping
                    </small>

                  </label>

                  <label className="choice-card">

                    <input
                      type="radio"
                      name="appearanceType"
                      value="Virtual"
                      checked={appearanceType === "Virtual"}
                      onChange={(event) =>
                        setAppearanceType(event.target.value)
                      }
                    />

                    <span className="choice-title">
                      VIRTUAL
                    </span>

                    <small>
                      Remote recording
                    </small>

                  </label>

                  <label className="choice-card">

                    <input
                      type="radio"
                      name="appearanceType"
                      value="Either"
                      checked={appearanceType === "Either"}
                      onChange={(event) =>
                        setAppearanceType(event.target.value)
                      }
                    />

                    <span className="choice-title">
                      EITHER
                    </span>

                    <small>
                      Live or virtual
                    </small>

                  </label>

                </div>

                <div className="availability-label">
                  Preferred Taping Dates
                </div>

                <div className="form-grid">

                  <div className="field">
                    <label htmlFor="dateOne">
                      First Choice
                    </label>

                    <input
                      id="dateOne"
                      name="dateOne"
                      type="date"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="dateTwo">
                      Second Choice
                    </label>

                    <input
                      id="dateTwo"
                      name="dateTwo"
                      type="date"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="dateThree">
                      Third Choice
                    </label>

                    <input
                      id="dateThree"
                      name="dateThree"
                      type="date"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="timePreference">
                      Preferred Time / Time Zone
                    </label>

                    <input
                      id="timePreference"
                      name="timePreference"
                      type="text"
                      placeholder="Example: Afternoons ET"
                    />
                  </div>

                </div>

                <div className="field full availability-notes">

                  <label htmlFor="availabilityNotes">
                    Additional Availability Notes
                  </label>

                  <textarea
                    id="availabilityNotes"
                    name="availabilityNotes"
                    rows={4}
                    placeholder="Let us know about scheduling restrictions, travel, blackout dates, etc."
                  />

                </div>

              </div>
            </div>

            {/* =================================================
                05 — EMERGENCY CONTACT
            ================================================== */}

            {(appearanceType === "Live" ||
              appearanceType === "Either") && (

              <div className="form-card">

                <div className="form-card-header">
                  <span>05</span>

                  <div>
                    <p>LIVE TAPINGS</p>
                    <h3>EMERGENCY CONTACT</h3>
                  </div>
                </div>

                <div className="form-body">

                  <div className="optional-banner">
                    OPTIONAL — FOR LIVE TAPINGS USE ONLY
                  </div>

                  <p className="field-help">
                    This information is requested only for
                    in-person/live tapings and is optional.
                  </p>

                  <div className="form-grid">

                    <Field
                      label="Emergency Contact Name"
                      name="emergencyContact"
                    />

                    <Field
                      label="Relationship"
                      name="emergencyRelationship"
                    />

                    <Field
                      label="Emergency Contact Phone"
                      name="emergencyPhone"
                      type="tel"
                    />

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                06 — PRIVACY
            ================================================== */}

            <div className="form-card">

              <div className="form-card-header">
                <span>06</span>

                <div>
                  <p>PRIVACY PREFERENCES</p>
                  <h3>NAME &amp; ORGANIZATION</h3>
                </div>
              </div>

              <div className="form-body">

                <p className="privacy-intro">
                  Please tell us if you would like your identity
                  or organization kept anonymous in connection
                  with the podcast.
                </p>

                <label className="check-row">

                  <input
                    type="checkbox"
                    name="anonymousName"
                  />

                  <span>
                    Keep my name anonymous in published podcast
                    content and promotional materials unless I
                    later provide written authorization otherwise.
                  </span>

                </label>

                <label className="check-row">

                  <input
                    type="checkbox"
                    name="anonymousOrganization"
                  />

                  <span>
                    Keep my organization/company name anonymous
                    in published podcast content and promotional
                    materials unless I later provide written
                    authorization otherwise.
                  </span>

                </label>

              </div>
            </div>

            {/* =================================================
                AGREEMENT — SMALL FINAL STEP
            ================================================== */}

            <div className="agreement-final">

              <div className="agreement-final-heading">

                <p className="eyebrow">
                  REQUIRED BEFORE RECORDING
                </p>

                <h3>
                  PODCAST APPEARANCE &amp; RELEASE AGREEMENT
                </h3>

                <p>
                  Please review the agreement before submitting
                  your guest inquiry.
                </p>

              </div>

              <a
                href="/documents/scotti-brothers-podcast-guest-appearance-release-agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="agreement-link-button"
              >
                READ &amp; SIGN AGREEMENT
                <span>↗</span>
              </a>

              <div className="final-checks">

                <label className="check-row required-check">

                  <input
                    type="checkbox"
                    name="agreementRead"
                    required
                  />

                  <span>
                    <strong>
                      I have read the Podcast Appearance &amp;
                      Release Agreement and understand that I must
                      review and sign the agreement before my
                      appearance is recorded. *
                    </strong>
                  </span>

                </label>

                <label className="check-row required-check">

                  <input
                    type="checkbox"
                    name="recordingConsent"
                    required
                  />

                  <span>
                    I understand that my appearance may be
                    audio and/or video recorded and may be edited,
                    published, distributed, and promoted in
                    accordance with the Agreement. *
                  </span>

                </label>

                <label className="check-row required-check">

                  <input
                    type="checkbox"
                    name="informationAccurate"
                    required
                  />

                  <span>
                    I certify that the information I have provided
                    in this guest inquiry is accurate to the best
                    of my knowledge. *
                  </span>

                </label>

              </div>

            </div>

            {/* =================================================
                SUBMIT
            ================================================== */}

            <div className="submit-section">

              <p>
                By submitting this inquiry, you are requesting
                consideration as a guest on the Scotti Brothers
                &quot;Can&apos;t Make This Up!&quot; Podcast.
                Submission does not guarantee an appearance.
              </p>

              <button
                type="submit"
                className="submit-button"
              >
                SUBMIT GUEST INQUIRY
                <span>→</span>
              </button>

            </div>

          </form>

        </section>

        {/* =====================================================
            CONNECT
        ====================================================== */}

        <section className="connect-section">

          <div className="connect-content">

            <p className="eyebrow">
              WATCH • LISTEN • FOLLOW
            </p>

            <h2>
              STAY CONNECTED
            </h2>

            <p>
              Follow{" "}
              <strong>
                Can&apos;t Make This Up!
              </strong>{" "}
              for new episodes, guests, stories, and everything
              happening with the Scotti Brothers.
            </p>

            <Link
              href="/"
              className="home-button"
            >
              BACK TO HOME
            </Link>

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="site-footer">

          <img
            src="/images/logo.png"
            alt="Scotti Brothers Entertainment"
          />

          <p>
            © {new Date().getFullYear()} Scotti Brothers Ent.
            All rights reserved.
          </p>

          <a
            href="https://scottibrothersent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            SCOTTIBROTHERSENT.COM
          </a>

          <span>
            CAN&apos;T MAKE THIS UP!
          </span>

        </footer>

      </div>

      {/* =======================================================
          STYLES
      ======================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 18% 15%,
              rgba(214,0,0,0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 82% 50%,
              rgba(242,201,76,0.08),
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

        .background,
        .grid-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .background {
          z-index: 0;

          background:
            radial-gradient(
              circle at 25% 25%,
              rgba(139,0,0,0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(242,201,76,0.06),
              transparent 30%
            );
        }

        .grid-overlay {
          z-index: 1;
          opacity: 0.24;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            );

          background-size: 42px 42px;
        }

        .page-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* HEADER */

        .site-header {
          min-height: 82px;

          padding:
            24px
            42px;

          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .mobile-logo {
          display: none;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 5px;

          padding:
            8px
            10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid
            rgba(255,255,255,0.12);

          backdrop-filter:
            blur(8px);
        }

        .site-nav a {
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
            color .2s ease,
            background .2s ease;
        }

        .site-nav a:hover {
          color: ${GOLD};
        }

        .site-nav a.active {
          background: ${RED};
          color: #fff;
        }

        /* HERO */

        .hero {
          width:
            min(
              1280px,
              100%
            );

          min-height: 460px;

          margin: 0 auto;

          padding:
            35px
            45px
            65px;

          display: grid;

          grid-template-columns:
            48%
            52%;

          align-items: center;
        }

        .desktop-logo {
          width:
            min(
              100%,
              560px
            );

          justify-self: start;
        }

        .desktop-logo a {
          display: block;
          line-height: 0;
        }

        .desktop-logo img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .hero-copy {
          width: 100%;
          max-width: 650px;

          justify-self: end;

          padding: 20px;

          text-align: center;
        }

        .eyebrow {
          margin: 0;

          color: ${GOLD};

          font-size: 11px;
          font-weight: 900;

          letter-spacing: .42em;

          text-transform: uppercase;
        }

        .hero h1 {
          margin:
            17px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              55px,
              7vw,
              96px
            );

          line-height: .9;

          font-weight: 900;

          letter-spacing: -.045em;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 ${RED},
            8px 8px 0 rgba(242,201,76,.30);
        }

        .gold-line {
          display: flex;
          align-items: center;
          gap: 16px;

          width:
            min(
              500px,
              90%
            );

          margin:
            28px
            auto;
        }

        .gold-line span {
          flex: 1;
          height: 1px;

          background:
            rgba(242,201,76,.7);
        }

        .gold-line b {
          color: ${GOLD};
          font-size: 14px;
        }

        .hero-subtitle {
          max-width: 650px;

          margin: 0 auto;

          color:
            rgba(255,255,255,.78);

          font-size: 16px;
          line-height: 1.8;
          font-weight: 600;
        }

        .hero-subtitle strong {
          color: ${GOLD};
        }

        /* INTRO */

        .intro-section {
          width:
            min(
              850px,
              100%
            );

          margin:
            0 auto;

          padding:
            35px
            30px
            70px;

          text-align: center;
        }

        .intro-section h2 {
          margin:
            14px
            0
            0;

          font-size:
            clamp(
              38px,
              6vw,
              68px
            );

          line-height: .95;

          font-weight: 900;

          text-shadow:
            4px 4px 0 ${RED};
        }

        .intro-copy {
          max-width: 750px;

          margin:
            22px
            auto
            0;

          color:
            rgba(255,255,255,.68);

          font-size: 15px;
          line-height: 1.85;
        }

        .red-line {
          width: 65px;
          height: 4px;

          margin:
            20px
            auto
            0;

          background:
            ${BRIGHT_RED};
        }

        /* FORM */

        .form-section {
          width:
            min(
              1100px,
              100%
            );

          margin:
            0 auto;

          padding:
            15px
            25px
            100px;
        }

        .section-heading {
          margin-bottom:
            45px;

          text-align:
            center;
        }

        .section-heading h2 {
          margin:
            10px
            0
            0;

          font-size:
            clamp(
              34px,
              5vw,
              58px
            );

          line-height: 1;

          font-weight: 900;

          text-transform:
            uppercase;
        }

        .section-heading > p:not(.eyebrow) {
          margin:
            20px
            auto
            0;

          max-width:
            720px;

          color:
            rgba(255,255,255,.58);

          font-size:
            13px;

          line-height:
            1.7;
        }

        .guest-form {
          display:
            flex;

          flex-direction:
            column;

          gap:
            28px;
        }

        .form-card {
          overflow:
            hidden;

          background:
            #101010;

          border:
            1px
            solid
            rgba(242,201,76,.28);

          box-shadow:
            0
            18px
            45px
            rgba(0,0,0,.42);
        }

        .form-card-header {
          display:
            flex;

          align-items:
            center;

          gap:
            20px;

          padding:
            20px
            26px;

          background:
            linear-gradient(
              135deg,
              #8b0000,
              #c00000
            );

          border-bottom:
            2px
            solid
            ${GOLD};
        }

        .form-card-header > span {
          width:
            48px;

          height:
            48px;

          flex:
            0
            0
            48px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            2px
            solid
            ${GOLD};

          border-radius:
            50%;

          color:
            ${GOLD};

          font-size:
            12px;

          font-weight:
            900;
        }

        .form-card-header p {
          margin: 0;

          color:
            ${GOLD};

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            .28em;
        }

        .form-card-header h3 {
          margin:
            5px
            0
            0;

          color:
            #fff;

          font-size:
            22px;

          line-height:
            1;

          font-weight:
            900;
        }

        .form-body {
          padding:
            32px;
        }

        .form-grid {
          display:
            grid;

          grid-template-columns:
            1fr
            1fr;

          gap:
            22px;
        }

        .field {
          display:
            flex;

          flex-direction:
            column;

          gap:
            8px;
        }

        .field.full {
          grid-column:
            1 / -1;
        }

        .field label,
        .availability-label {
          color:
            ${GOLD};

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            .14em;

          text-transform:
            uppercase;
        }

        .field input,
        .field textarea,
        .field select {
          width:
            100%;

          border:
            2px
            solid
            #dedede;

          border-radius:
            4px;

          background:
            #fff;

          color:
            #111;

          padding:
            13px
            14px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            14px;

          outline:
            none;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .field textarea {
          resize:
            vertical;

          min-height:
            120px;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color:
            #888;
        }

        .field input:focus,
        .field textarea:focus,
        .field select:focus {
          border-color:
            ${GOLD};

          box-shadow:
            0
            0
            0
            3px
            rgba(242,201,76,.15);
        }

        .management-fields {
          margin-top:
            25px;
        }

        .featured-check {
          padding:
            18px
            20px;

          background:
            rgba(242,201,76,.08);

          border:
            1px
            solid
            rgba(242,201,76,.3);
        }

        /* CHECKBOXES */

        .check-row {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            13px;

          margin-top:
            16px;

          color:
            rgba(255,255,255,.75);

          font-size:
            13px;

          line-height:
            1.6;

          cursor:
            pointer;
        }

        .check-row input {
          width:
            20px;

          height:
            20px;

          flex:
            0
            0
            20px;

          margin:
            2px
            0
            0;

          accent-color:
            ${RED};

          cursor:
            pointer;
        }

        .privacy-intro {
          margin:
            0
            0
            20px;

          color:
            rgba(255,255,255,.6);

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* AVAILABILITY */

        .availability-label {
          margin-bottom:
            13px;
        }

        .choice-grid {
          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            14px;

          margin-bottom:
            30px;
        }

        .choice-card {
          position:
            relative;

          min-height:
            105px;

          padding:
            18px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          border:
            2px
            solid
            rgba(255,255,255,.14);

          background:
            #171717;

          cursor:
            pointer;

          transition:
            border-color .2s ease,
            background .2s ease;
        }

        .choice-card:hover {
          border-color:
            ${GOLD};
        }

        .choice-card input {
          position:
            absolute;

          top:
            14px;

          right:
            14px;

          accent-color:
            ${RED};
        }

        .choice-title {
          color:
            #fff;

          font-size:
            18px;

          font-weight:
            900;
        }

        .choice-card small {
          margin-top:
            7px;

          color:
            rgba(255,255,255,.48);

          font-size:
            10px;

          font-weight:
            700;
        }

        .availability-notes {
          margin-top:
            24px;
        }

        /* EMERGENCY */

        .optional-banner {
          display:
            inline-flex;

          padding:
            9px
            13px;

          background:
            ${GOLD};

          color:
            #050505;

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            .18em;
        }

        .field-help {
          margin:
            14px
            0
            22px;

          color:
            rgba(255,255,255,.55);

          font-size:
            12px;
        }

        /* =====================================================
           FINAL AGREEMENT
        ====================================================== */

        .agreement-final {
          padding:
            30px
            32px;

          border-top:
            2px
            solid
            ${GOLD};

          border-bottom:
            2px
            solid
            ${GOLD};

          background:
            rgba(255,255,255,.035);
        }

        .agreement-final-heading {
          text-align:
            center;
        }

        .agreement-final-heading h3 {
          margin:
            8px
            0
            0;

          color:
            #fff;

          font-size:
            24px;

          line-height:
            1.1;

          font-weight:
            900;

          text-transform:
            uppercase;
        }

        .agreement-final-heading > p:not(.eyebrow) {
          margin:
            10px
            auto
            0;

          color:
            rgba(255,255,255,.55);

          font-size:
            12px;
        }

        .agreement-link-button {
          width:
            fit-content;

          margin:
            22px
            auto
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            12px;

          padding:
            14px
            23px;

          background:
            ${RED};

          border:
            2px
            solid
            ${GOLD};

          color:
            #fff;

          text-decoration:
            none;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            .18em;

          transition:
            transform .2s ease,
            background .2s ease,
            box-shadow .2s ease;
        }

        .agreement-link-button span {
          color:
            ${GOLD};

          font-size:
            16px;
        }

        .agreement-link-button:hover {
          transform:
            translateY(-2px);

          background:
            #ff1717;

          box-shadow:
            0
            0
            22px
            rgba(242,201,76,.22);
        }

        .final-checks {
          max-width:
            850px;

          margin:
            22px
            auto
            0;
        }

        .required-check {
          padding:
            13px
            15px;

          border:
            1px
            solid
            rgba(255,255,255,.09);

          background:
            rgba(255,255,255,.025);
        }

        .required-check strong {
          color:
            #fff;
        }

        /* SUCCESS */

        .success-message {
          margin-bottom:
            30px;

          padding:
            20px
            25px;

          display:
            flex;

          flex-direction:
            column;

          gap:
            7px;

          background:
            #fff;

          border-left:
            7px
            solid
            ${GOLD};

          color:
            #111;
        }

        .success-message strong {
          color:
            ${RED};

          font-size:
            15px;

          letter-spacing:
            .1em;
        }

        .success-message span {
          font-size:
            13px;

          color:
            #555;
        }

        /* SUBMIT */

        .submit-section {
          padding:
            20px
            0
            10px;

          text-align:
            center;
        }

        .submit-section p {
          max-width:
            700px;

          margin:
            0
            auto
            25px;

          color:
            rgba(255,255,255,.48);

          font-size:
            11px;

          line-height:
            1.7;
        }

        .submit-button {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            20px;

          padding:
            18px
            34px;

          background:
            ${BRIGHT_RED};

          border:
            2px
            solid
            ${GOLD};

          color:
            #fff;

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            .2em;

          cursor:
            pointer;

          transition:
            transform .2s ease,
            box-shadow .2s ease,
            background .2s ease;
        }

        .submit-button span {
          color:
            ${GOLD};

          font-size:
            20px;
        }

        .submit-button:hover {
          transform:
            translateY(-2px);

          background:
            #ff1717;

          box-shadow:
            0
            0
            28px
            rgba(242,201,76,.25);
        }

        /* CONNECT */

        .connect-section {
          padding:
            100px
            30px;

          border-top:
            1px
            solid
            rgba(242,201,76,.12);

          border-bottom:
            1px
            solid
            rgba(242,201,76,.12);

          text-align:
            center;

          background:
            radial-gradient(
              circle at center,
              rgba(139,0,0,.18),
              transparent 50%
            );
        }

        .connect-content {
          width:
            min(
              760px,
              100%
            );

          margin:
            0
            auto;
        }

        .connect-content h2 {
          margin:
            18px
            0
            0;

          color:
            #fff;

          font-size:
            clamp(
              45px,
              7vw,
              78px
            );

          line-height:
            .95;

          font-weight:
            900;

          text-shadow:
            4px 4px 0 ${RED};
        }

        .connect-content > p:not(.eyebrow) {
          max-width:
            650px;

          margin:
            25px
            auto
            0;

          color:
            rgba(255,255,255,.62);

          font-size:
            16px;

          line-height:
            1.8;
        }

        .connect-content strong {
          color:
            ${GOLD};
        }

        .home-button {
          display:
            inline-flex;

          margin-top:
            35px;

          padding:
            15px
            28px;

          border:
            1px
            solid
            ${GOLD};

          color:
            ${GOLD};

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            .25em;

          transition:
            all .2s ease;
        }

        .home-button:hover {
          background:
            ${RED};

          border-color:
            ${RED};

          color:
            #fff;
        }

        /* FOOTER */

        .site-footer {
          padding:
            28px
            42px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            25px;

          border-top:
            1px
            solid
            rgba(242,201,76,.15);

          background:
            #050505;
        }

        .site-footer img {
          display:
            block;

          width:
            110px;

          height:
            auto;

          object-fit:
            contain;
        }

        .site-footer p,
        .site-footer span {
          margin:
            0;

          color:
            rgba(255,255,255,.35);

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            .2em;

          text-transform:
            uppercase;
        }

        .site-footer span {
          color:
            rgba(242,201,76,.8);
        }

        .company-link {
          color:
            #4da3ff;

          text-decoration:
            none;

          font-size:
            9px;

          font-weight:
            400;

          letter-spacing:
            .12em;

          transition:
            color .2s ease;
        }

        .company-link:hover {
          color:
            #7fc1ff;

          text-decoration:
            underline;
        }

        /* TABLET */

        @media (max-width: 900px) {

          .hero {
            grid-template-columns:
              45%
              55%;

            min-height:
              430px;
          }

          .desktop-logo {
            width:
              100%;
          }

          .hero-copy {
            padding:
              10px;
          }

        }

        /* MOBILE */

        @media (max-width: 650px) {

          .site-header {
            min-height:
              auto;

            padding:
              16px
              12px
              10px;

            flex-direction:
              column;

            justify-content:
              flex-start;

            align-items:
              center;
          }

          .mobile-logo {
            display:
              block;

            width:
              78%;

            max-width:
              330px;

            margin:
              0
              auto
              18px;
          }

          .mobile-logo a {
            display:
              block;

            line-height:
              0;
          }

          .mobile-logo img {
            display:
              block;

            width:
              100%;

            height:
              auto;
          }

          .site-nav {
            width:
              100%;

            flex-wrap:
              wrap;

            justify-content:
              center;

            gap:
              3px;

            padding:
              7px;

            border-radius:
              18px;
          }

          .site-nav a {
            font-size:
              10px;

            padding:
              6px
              8px;
          }

          .desktop-logo {
            display:
              none;
          }

          .hero {
            display:
              block;

            min-height:
              auto;

            padding:
              35px
              16px
              45px;
          }

          .hero-copy {
            width:
              100%;

            max-width:
              600px;

            margin:
              0
              auto;

            padding:
              0;
          }

          .eyebrow {
            font-size:
              8px;

            letter-spacing:
              .25em;
          }

          .hero h1 {
            font-size:
              48px;

            letter-spacing:
              -2px;
          }

          .hero-subtitle {
            font-size:
              12px;

            line-height:
              1.6;
          }

          .gold-line {
            width:
              90%;

            margin:
              20px
              auto;
          }

          .intro-section {
            padding:
              25px
              20px
              55px;
          }

          .intro-section h2 {
            font-size:
              40px;
          }

          .form-section {
            padding:
              10px
              14px
              70px;
          }

          .section-heading h2 {
            font-size:
              30px;
          }

          .form-card-header {
            padding:
              17px
              18px;
          }

          .form-card-header > span {
            width:
              40px;

            height:
              40px;

            flex:
              0
              0
              40px;
          }

          .form-card-header h3 {
            font-size:
              17px;
          }

          .form-body {
            padding:
              22px
              17px;
          }

          .form-grid {
            grid-template-columns:
              1fr;
          }

          .field.full {
            grid-column:
              auto;
          }

          .choice-grid {
            grid-template-columns:
              1fr;
          }

          .agreement-final {
            padding:
              25px
              18px;
          }

          .agreement-final-heading h3 {
            font-size:
              19px;
          }

          .agreement-link-button {
            width:
              100%;

            text-align:
              center;
          }

          .submit-button {
            width:
              100%;
          }

          .connect-section {
            padding:
              75px
              20px;
          }

          .connect-content h2 {
            font-size:
              45px;
          }

          .site-footer {
            padding:
              30px
              20px;

            flex-direction:
              column;

            gap:
              15px;

            text-align:
              center;
          }

          .site-footer img {
            width:
              110px;
          }

        }

      `}</style>
    </main>
  );
}

/* ============================================================
   REUSABLE FIELD
============================================================ */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="field">

      <label htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
      />

    </div>
  );
}
