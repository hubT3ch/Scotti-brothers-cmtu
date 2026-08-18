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

export default function ContactPage() {
  const [selfRepresented, setSelfRepresented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <main className="contact-page">
      {/* BACKGROUND */}
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="page-content">

        {/* =========================================
            HEADER
        ========================================= */}
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
                className={
                  item.href === "/contact" ? "active" : ""
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* =========================================
            HERO
        ========================================= */}
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
              Tell us your story and connect with the Scotti Brothers team.
            </p>
          </div>
        </section>

        {/* =========================================
            GUEST INQUIRY SECTION
        ========================================= */}
        <section className="contact-section">

          <div className="section-heading">
            <p className="eyebrow">
              CAN&apos;T MAKE THIS UP!
            </p>

            <h2>
              PODCAST GUEST INQUIRY
            </h2>

            <div className="red-line" />

            <p className="section-description">
              Interested in appearing on{" "}
              <strong>Can&apos;t Make This Up!</strong>?
              Complete the guest inquiry form below. Our production
              team will review your information and contact you
              regarding potential booking opportunities.
            </p>
          </div>

          <form
            className="guest-form"
            onSubmit={handleSubmit}
          >

            {/* =========================================
                GUEST INFORMATION
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>01</span>

                <div>
                  <p>GUEST INFORMATION</p>
                  <h3>Tell Us About You</h3>
                </div>
              </div>

              <div className="form-grid two">

                <div className="field">
                  <label htmlFor="fullName">
                    FULL NAME *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="First and last name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="professionalName">
                    PROFESSIONAL / STAGE NAME
                  </label>

                  <input
                    id="professionalName"
                    name="professionalName"
                    type="text"
                    placeholder="Professional or stage name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="organization">
                    ORGANIZATION / COMPANY
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Company or organization"
                  />
                </div>

                <div className="field">
                  <label htmlFor="title">
                    TITLE / POSITION
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title or position"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">
                    EMAIL *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    PHONE *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                  />
                </div>

                <div className="field">
                  <label htmlFor="website">
                    WEBSITE
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://"
                  />
                </div>

                <div className="field">
                  <label htmlFor="socialMedia">
                    SOCIAL MEDIA
                  </label>

                  <input
                    id="socialMedia"
                    name="socialMedia"
                    type="text"
                    placeholder="@username or profile links"
                  />
                </div>

              </div>
            </div>

            {/* =========================================
                MANAGEMENT
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>02</span>

                <div>
                  <p>REPRESENTATION</p>
                  <h3>Management / Representation</h3>
                </div>
              </div>

              <label className="checkbox-card">
                <input
                  type="checkbox"
                  name="selfRepresented"
                  checked={selfRepresented}
                  onChange={(event) =>
                    setSelfRepresented(event.target.checked)
                  }
                />

                <span className="custom-checkbox" />

                <div>
                  <strong>
                    I am self-represented.
                  </strong>

                  <small>
                    I am authorized to discuss and coordinate my
                    podcast appearance directly.
                  </small>
                </div>
              </label>

              <div
                className={
                  selfRepresented
                    ? "management-fields disabled"
                    : "management-fields"
                }
              >

                <div className="form-grid two">

                  <div className="field">
                    <label htmlFor="managerName">
                      MANAGER / REPRESENTATIVE NAME
                    </label>

                    <input
                      id="managerName"
                      name="managerName"
                      type="text"
                      disabled={selfRepresented}
                      placeholder="Full name"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="managerOrganization">
                      MANAGEMENT / AGENCY
                    </label>

                    <input
                      id="managerOrganization"
                      name="managerOrganization"
                      type="text"
                      disabled={selfRepresented}
                      placeholder="Company or agency"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="managerEmail">
                      REPRESENTATIVE EMAIL
                    </label>

                    <input
                      id="managerEmail"
                      name="managerEmail"
                      type="email"
                      disabled={selfRepresented}
                      placeholder="Representative email"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="managerPhone">
                      REPRESENTATIVE PHONE
                    </label>

                    <input
                      id="managerPhone"
                      name="managerPhone"
                      type="tel"
                      disabled={selfRepresented}
                      placeholder="Representative phone"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* =========================================
                BACKGROUND
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>03</span>

                <div>
                  <p>GUEST PROFILE</p>
                  <h3>Your Story</h3>
                </div>
              </div>

              <div className="form-grid">

                <div className="field">
                  <label htmlFor="profession">
                    PROFESSION / INDUSTRY *
                  </label>

                  <input
                    id="profession"
                    name="profession"
                    type="text"
                    required
                    placeholder="Music, entertainment, business, sports, etc."
                  />
                </div>

                <div className="field">
                  <label htmlFor="bio">
                    SHORT BIO *
                  </label>

                  <textarea
                    id="bio"
                    name="bio"
                    required
                    rows={5}
                    placeholder="Tell us briefly about yourself and your career."
                  />
                </div>

                <div className="field">
                  <label htmlFor="story">
                    WHAT MAKES YOUR STORY SOMETHING WE CAN&apos;T MAKE UP? *
                  </label>

                  <textarea
                    id="story"
                    name="story"
                    required
                    rows={6}
                    placeholder="Tell us about the story, experience, or perspective you would like to share."
                  />
                </div>

                <div className="field">
                  <label htmlFor="topics">
                    TOPICS YOU WOULD LIKE TO DISCUSS
                  </label>

                  <textarea
                    id="topics"
                    name="topics"
                    rows={5}
                    placeholder="List the topics, projects, experiences, or stories you would like to discuss."
                  />
                </div>

              </div>
            </div>

            {/* =========================================
                AVAILABILITY
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>04</span>

                <div>
                  <p>PRODUCTION SCHEDULING</p>
                  <h3>Taping Availability</h3>
                </div>
              </div>

              <p className="form-help">
                Please provide several dates when you may be available
                for recording. Dates are subject to production
                scheduling and confirmation.
              </p>

              <div className="form-grid three">

                <div className="field">
                  <label htmlFor="dateOne">
                    AVAILABLE DATE 1 *
                  </label>

                  <input
                    id="dateOne"
                    name="dateOne"
                    type="date"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="dateTwo">
                    AVAILABLE DATE 2
                  </label>

                  <input
                    id="dateTwo"
                    name="dateTwo"
                    type="date"
                  />
                </div>

                <div className="field">
                  <label htmlFor="dateThree">
                    AVAILABLE DATE 3
                  </label>

                  <input
                    id="dateThree"
                    name="dateThree"
                    type="date"
                  />
                </div>

              </div>

              <div className="form-grid two">

                <div className="field">
                  <label htmlFor="preferredTime">
                    PREFERRED TIME / AVAILABILITY WINDOW
                  </label>

                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="text"
                    placeholder="Example: Weekdays after 3:00 PM"
                  />
                </div>

                <div className="field">
                  <label htmlFor="timeZone">
                    TIME ZONE
                  </label>

                  <select
                    id="timeZone"
                    name="timeZone"
                    defaultValue=""
                  >
                    <option value="">
                      Select time zone
                    </option>
                    <option value="Eastern">
                      Eastern
                    </option>
                    <option value="Central">
                      Central
                    </option>
                    <option value="Mountain">
                      Mountain
                    </option>
                    <option value="Pacific">
                      Pacific
                    </option>
                    <option value="Alaska">
                      Alaska
                    </option>
                    <option value="Hawaii">
                      Hawaii
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              <div className="field">
                <label htmlFor="availabilityNotes">
                  ADDITIONAL AVAILABILITY INFORMATION
                </label>

                <textarea
                  id="availabilityNotes"
                  name="availabilityNotes"
                  rows={4}
                  placeholder="Anything else we should know about your availability?"
                />
              </div>
            </div>

            {/* =========================================
                APPEARANCE
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>05</span>

                <div>
                  <p>APPEARANCE</p>
                  <h3>Live or Virtual?</h3>
                </div>
              </div>

              <div className="radio-grid">

                <label className="choice-card">
                  <input
                    type="radio"
                    name="appearanceType"
                    value="Live / In Person"
                    required
                  />

                  <span className="choice-mark" />

                  <div>
                    <strong>
                      LIVE / IN PERSON
                    </strong>

                    <small>
                      Available to record in person.
                    </small>
                  </div>
                </label>

                <label className="choice-card">
                  <input
                    type="radio"
                    name="appearanceType"
                    value="Virtual"
                  />

                  <span className="choice-mark" />

                  <div>
                    <strong>
                      VIRTUAL
                    </strong>

                    <small>
                      Available to record remotely.
                    </small>
                  </div>
                </label>

                <label className="choice-card">
                  <input
                    type="radio"
                    name="appearanceType"
                    value="Either"
                  />

                  <span className="choice-mark" />

                  <div>
                    <strong>
                      EITHER
                    </strong>

                    <small>
                      Open to either format.
                    </small>
                  </div>
                </label>

              </div>

              <div className="field location-field">
                <label htmlFor="location">
                  LOCATION / CITY / STATE
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City, State"
                />
              </div>
            </div>

            {/* =========================================
                PRODUCTION INFORMATION
            ========================================= */}
            <div className="form-section">

              <div className="form-section-heading">
                <span>06</span>

                <div>
                  <p>PRODUCTION NOTES</p>
                  <h3>Anything Else?</h3>
                </div>
              </div>

              <div className="field">
                <label htmlFor="productionNotes">
                  ADDITIONAL INFORMATION FOR THE PRODUCTION TEAM
                </label>

                <textarea
                  id="productionNotes"
                  name="productionNotes"
                  rows={6}
                  placeholder="Anything the Scotti Brothers production team should know before contacting you?"
                />
              </div>
            </div>

            {/* =========================================
                AGREEMENTS
            ========================================= */}
            <div className="form-section agreement-section">

              <div className="form-section-heading">
                <span>07</span>

                <div>
                  <p>REQUIRED ACKNOWLEDGMENTS</p>
                  <h3>Terms & Permissions</h3>
                </div>
              </div>

              <label className="checkbox-card required-check">

                <input
                  type="checkbox"
                  name="termsAgreement"
                  required
                />

                <span className="custom-checkbox" />

                <div>
                  <strong>
                    I have read and agree to the Terms of Agreement. *
                  </strong>

                  <small>
                    I understand that submitting this inquiry does
                    not guarantee an appearance on the podcast.
                  </small>
                </div>

              </label>

              <label className="checkbox-card">

                <input
                  type="checkbox"
                  name="recordingAuthorization"
                  required
                />

                <span className="custom-checkbox" />

                <div>
                  <strong>
                    I understand that the podcast appearance may
                    be recorded, edited, reproduced, and distributed. *
                  </strong>

                  <small>
                    I understand that production may use portions
                    of the recorded conversation for podcast,
                    promotional, social, digital, and related media.
                  </small>
                </div>

              </label>

              <label className="checkbox-card">

                <input
                  type="checkbox"
                  name="nameAndLikeness"
                  required
                />

                <span className="custom-checkbox" />

                <div>
                  <strong>
                    I authorize use of my name, likeness, voice,
                    and submitted information in connection with
                    the podcast. *
                  </strong>

                  <small>
                    This acknowledgment is subject to the applicable
                    Terms of Agreement.
                  </small>
                </div>

              </label>

              <label className="checkbox-card">

                <input
                  type="checkbox"
                  name="anonymity"
                />

                <span className="custom-checkbox" />

                <div>
                  <strong>
                    I request anonymity for my name and/or organization.
                  </strong>

                  <small>
                    Check this box if you are requesting that your
                    name and/or organization not be publicly identified.
                    The production team will review this request.
                  </small>
                </div>

              </label>

            </div>

            {/* =========================================
                SUBMIT
            ========================================= */}
            <div className="submit-area">

              {!submitted ? (
                <>
                  <button
                    type="submit"
                    className="submit-button"
                  >
                    SUBMIT GUEST INQUIRY
                  </button>

                  <p>
                    By submitting this form, you acknowledge the
                    information and permissions above.
                  </p>
                </>
              ) : (
                <div className="success-message">
                  <div className="success-symbol">
                    ✓
                  </div>

                  <h3>
                    INQUIRY RECEIVED
                  </h3>

                  <p>
                    Thank you for your interest in{" "}
                    <strong>
                      Can&apos;t Make This Up!
                    </strong>
                    . Your guest inquiry has been recorded.
                  </p>
                </div>
              )}

            </div>

          </form>
        </section>

        {/* =========================================
            CONNECT SECTION
        ========================================= */}
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
              <strong>Can&apos;t Make This Up!</strong>{" "}
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

        {/* =========================================
            FOOTER
        ========================================= */}
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

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          --gold: ${GOLD};

          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(139, 0, 0, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 60%,
              rgba(242, 201, 76, 0.08),
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
              circle at 20% 30%,
              rgba(139, 0, 0, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(242, 201, 76, 0.06),
              transparent 30%
            );
        }

        .grid-overlay {
          z-index: 1;
          opacity: 0.25;

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
          padding: 24px 42px;

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

          padding: 8px 10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid
            rgba(255,255,255,0.12);

          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .site-nav a {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 8px 12px;

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

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #8b0000;
          color: #fff;
        }

        /* HERO */

        .hero {
          width: min(1280px, 100%);
          min-height: 500px;

          margin: 0 auto;
          padding: 45px 45px 75px;

          display: grid;
          grid-template-columns: 48% 52%;

          align-items: center;
        }

        .desktop-logo {
          width: min(100%, 560px);
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

          color: var(--gold);

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 0.42em;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 17px 0 0;

          color: #fff;

          font-size: clamp(55px, 7vw, 96px);
          line-height: 0.9;

          font-weight: 900;
          letter-spacing: -0.045em;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0 rgba(242,201,76,0.30);
        }

        .gold-line {
          display: flex;
          align-items: center;
          gap: 16px;

          width: min(500px, 90%);

          margin: 28px auto;
        }

        .gold-line span {
          flex: 1;
          height: 1px;

          background:
            rgba(242,201,76,0.7);
        }

        .gold-line b {
          color: var(--gold);
          font-size: 14px;
        }

        .hero-subtitle {
          max-width: 650px;

          margin: 0 auto;

          color:
            rgba(255,255,255,0.78);

          font-size: 16px;
          line-height: 1.8;
          font-weight: 600;
        }

        .hero-subtitle strong {
          color: var(--gold);
        }

        /* CONTACT */

        .contact-section {
          width: min(1100px, 100%);

          margin: 0 auto;

          padding: 20px 32px 100px;
        }

        .section-heading {
          margin-bottom: 55px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 9px 0 0;

          color: #fff;

          font-size: clamp(34px, 5vw, 58px);
          line-height: 1;

          font-weight: 900;

          text-transform: uppercase;
        }

        .red-line {
          width: 65px;
          height: 4px;

          margin: 20px auto 0;

          background: #c62828;
        }

        .section-description {
          max-width: 760px;

          margin: 25px auto 0;

          color:
            rgba(255,255,255,0.62);

          font-size: 15px;
          line-height: 1.8;
        }

        .section-description strong {
          color: var(--gold);
        }

        /* FORM */

        .guest-form {
          width: 100%;
        }

        .form-section {
          margin-bottom: 35px;

          padding: 35px;

          background:
            rgba(13,13,13,0.92);

          border:
            1px solid
            rgba(242,201,76,0.20);

          box-shadow:
            0 18px 45px
            rgba(0,0,0,0.35);
        }

        .form-section-heading {
          display: flex;
          align-items: center;
          gap: 18px;

          margin-bottom: 30px;

          padding-bottom: 20px;

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);
        }

        .form-section-heading > span {
          width: 42px;
          height: 42px;

          flex: 0 0 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            var(--gold);

          border-radius: 50%;

          color: var(--gold);

          font-size: 11px;
          font-weight: 900;
        }

        .form-section-heading p {
          margin: 0 0 5px;

          color: #c62828;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.25em;
        }

        .form-section-heading h3 {
          margin: 0;

          color: #fff;

          font-size: 25px;
          font-weight: 900;

          text-transform: uppercase;
        }

        .form-grid {
          display: grid;
          gap: 22px;
        }

        .form-grid.two {
          grid-template-columns: 1fr 1fr;
        }

        .form-grid.three {
          grid-template-columns:
            repeat(3, 1fr);
        }

        .field {
          width: 100%;
        }

        .field label {
          display: block;

          margin-bottom: 9px;

          color: var(--gold);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .field input,
        .field textarea,
        .field select {
          width: 100%;

          padding: 14px 15px;

          border:
            1px solid
            rgba(255,255,255,0.13);

          border-radius: 0;

          outline: none;

          background:
            rgba(0,0,0,0.55);

          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 13px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .field textarea {
          min-height: 130px;
          resize: vertical;
          line-height: 1.7;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color:
            rgba(255,255,255,0.27);
        }

        .field input:focus,
        .field textarea:focus,
        .field select:focus {
          border-color:
            rgba(242,201,76,0.75);

          box-shadow:
            0 0 0 2px
            rgba(242,201,76,0.08);
        }

        .field input:disabled {
          opacity: 0.28;
          cursor: not-allowed;
        }

        .field select option {
          background: #090909;
          color: #fff;
        }

        .form-help {
          margin: -10px 0 25px;

          color:
            rgba(255,255,255,0.48);

          font-size: 12px;
          line-height: 1.7;
        }

        .location-field {
          margin-top: 22px;
        }

        /* MANAGEMENT */

        .management-fields {
          transition:
            opacity 0.25s ease;
        }

        .management-fields.disabled {
          opacity: 0.32;
        }

        /* CHECKBOXES */

        .checkbox-card {
          position: relative;

          display: flex;
          align-items: flex-start;

          gap: 15px;

          margin-bottom: 15px;

          padding: 18px;

          cursor: pointer;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.08);

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .checkbox-card:hover {
          border-color:
            rgba(242,201,76,0.35);

          background:
            rgba(242,201,76,0.035);
        }

        .checkbox-card input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .custom-checkbox {
          width: 20px;
          height: 20px;

          flex: 0 0 20px;

          margin-top: 2px;

          border:
            1px solid
            rgba(242,201,76,0.65);

          background:
            #050505;

          position: relative;
        }

        .checkbox-card input:checked + .custom-checkbox {
          background: var(--gold);
        }

        .checkbox-card input:checked + .custom-checkbox::after {
          content: "✓";

          position: absolute;

          inset: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #050505;

          font-size: 13px;
          font-weight: 900;
        }

        .checkbox-card strong {
          display: block;

          color: #fff;

          font-size: 12px;
          line-height: 1.5;
        }

        .checkbox-card small {
          display: block;

          margin-top: 5px;

          color:
            rgba(255,255,255,0.42);

          font-size: 11px;
          line-height: 1.6;
        }

        /* RADIO */

        .radio-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;
        }

        .choice-card {
          position: relative;

          display: flex;

          align-items: flex-start;

          gap: 13px;

          padding: 20px;

          cursor: pointer;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.08);
        }

        .choice-card input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .choice-mark {
          width: 19px;
          height: 19px;

          flex: 0 0 19px;

          margin-top: 2px;

          border:
            1px solid
            var(--gold);

          border-radius: 50%;
        }

        .choice-card input:checked + .choice-mark {
          box-shadow:
            inset 0 0 0 5px #050505;

          background:
            var(--gold);
        }

        .choice-card strong {
          display: block;

          color: #fff;

          font-size: 11px;
          font-weight: 900;
        }

        .choice-card small {
          display: block;

          margin-top: 6px;

          color:
            rgba(255,255,255,0.42);

          font-size: 10px;
          line-height: 1.5;
        }

        /* SUBMIT */

        .submit-area {
          padding: 45px 25px;

          text-align: center;

          border:
            1px solid
            rgba(242,201,76,0.20);

          background:
            linear-gradient(
              135deg,
              rgba(139,0,0,0.35),
              rgba(5,5,5,0.95)
            );
        }

        .submit-button {
          padding:
            17px
            35px;

          border:
            1px solid
            var(--gold);

          background:
            var(--gold);

          color:
            #050505;

          cursor: pointer;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 0.25em;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .submit-button:hover {
          transform:
            translateY(-2px);

          background:
            #fff0a3;

          box-shadow:
            0 10px 30px
            rgba(242,201,76,0.18);
        }

        .submit-area > p {
          margin: 18px auto 0;

          max-width: 600px;

          color:
            rgba(255,255,255,0.35);

          font-size: 10px;

          line-height: 1.6;
        }

        .success-message {
          max-width: 600px;
          margin: 0 auto;
        }

        .success-symbol {
          width: 55px;
          height: 55px;

          margin: 0 auto 15px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            var(--gold);

          border-radius: 50%;

          color:
            var(--gold);

          font-size: 25px;
        }

        .success-message h3 {
          margin: 0;

          color: var(--gold);

          font-size: 28px;
          font-weight: 900;
        }

        .success-message p {
          margin: 15px 0 0;

          color:
            rgba(255,255,255,0.60);

          font-size: 13px;
          line-height: 1.7;
        }

        .success-message strong {
          color: var(--gold);
        }

        /* CONNECT */

        .connect-section {
          padding: 110px 30px;

          border-top:
            1px solid
            rgba(242,201,76,0.12);

          border-bottom:
            1px solid
            rgba(242,201,76,0.12);

          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(139,0,0,0.16),
              transparent 50%
            );
        }

        .connect-content {
          width: min(760px, 100%);
          margin: 0 auto;
        }

        .connect-content h2 {
          margin: 18px 0 0;

          color: #fff;

          font-size:
            clamp(45px, 7vw, 78px);

          line-height: 0.95;

          font-weight: 900;

          text-shadow:
            4px 4px 0 #8b0000;
        }

        .connect-content > p:not(.eyebrow) {
          max-width: 650px;

          margin: 25px auto 0;

          color:
            rgba(255,255,255,0.62);

          font-size: 16px;
          line-height: 1.8;
        }

        .connect-content strong {
          color: var(--gold);
        }

        .home-button {
          display: inline-flex;

          margin-top: 35px;

          padding:
            15px 28px;

          border:
            1px solid
            var(--gold);

          color:
            var(--gold);

          text-decoration: none;

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 0.25em;

          transition: all 0.2s ease;
        }

        .home-button:hover {
          background: #c62828;

          border-color: #c62828;

          color: #fff;
        }

        /* FOOTER */

        .site-footer {
          padding: 28px 42px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 25px;

          border-top:
            1px solid
            rgba(242,201,76,0.15);

          background: #050505;
        }

        .site-footer img {
          display: block;

          width: 110px;
          height: auto;

          object-fit: contain;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;

          color:
            rgba(255,255,255,0.35);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.2em;

          text-transform: uppercase;
        }

        .site-footer span {
          color:
            rgba(242,201,76,0.8);
        }

        .company-link {
          color: #4da3ff;

          text-decoration: none;

          font-size: 9px;
          font-weight: 400;

          letter-spacing: 0.12em;

          transition:
            color 0.2s ease;
        }

        .company-link:hover {
          color: #7fc1ff;
          text-decoration: underline;
        }

        /* TABLET */

        @media (max-width: 900px) {

          .hero {
            grid-template-columns:
              45% 55%;

            min-height: 450px;
          }

          .desktop-logo {
            width: 100%;
          }

          .hero-copy {
            padding: 10px;
          }

          .form-grid.three {
            grid-template-columns:
              1fr;
          }

          .radio-grid {
            grid-template-columns:
              1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {

          .site-header {
            min-height: auto;

            padding:
              16px 12px 10px;

            display: flex;

            flex-direction: column;

            justify-content: flex-start;

            align-items: center;
          }

          .mobile-logo {
            display: block;

            width: 78%;
            max-width: 330px;

            margin:
              0 auto 18px;
          }

          .mobile-logo a {
            display: block;
            line-height: 0;
          }

          .mobile-logo img {
            display: block;

            width: 100%;
            height: auto;

            object-fit: contain;
          }

          .site-nav {
            width: 100%;

            display: flex;

            flex-wrap: wrap;

            justify-content: center;

            gap: 3px;

            padding: 7px;

            border-radius: 18px;
          }

          .site-nav a {
            font-size: 10px;
            padding: 6px 8px;
          }

          .desktop-logo {
            display: none;
          }

          .hero {
            display: block;

            min-height: auto;

            padding:
              35px 16px 55px;
          }

          .hero-copy {
            width: 100%;

            max-width: 600px;

            margin: 0 auto;

            padding: 0;

            text-align: center;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing: 0.25em;
          }

          .hero h1 {
            font-size: 48px;

            letter-spacing: -2px;
          }

          .hero-subtitle {
            font-size: 12px;

            line-height: 1.6;
          }

          .gold-line {
            width: 90%;

            margin: 20px auto;
          }

          .contact-section {
            padding:
              10px 12px 70px;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: 29px;

            line-height: 1.05;
          }

          .section-description {
            font-size: 12px;
            line-height: 1.7;
          }

          .form-section {
            padding: 23px 18px;

            margin-bottom: 20px;
          }

          .form-section-heading {
            gap: 12px;
          }

          .form-section-heading > span {
            width: 35px;
            height: 35px;

            flex: 0 0 35px;
          }

          .form-section-heading h3 {
            font-size: 18px;
          }

          .form-section-heading p {
            font-size: 7px;
          }

          .form-grid.two {
            grid-template-columns:
              1fr;
          }

          .field input,
          .field textarea,
          .field select {
            font-size: 13px;

            padding:
              13px 12px;
          }

          .checkbox-card {
            padding: 15px;
          }

          .checkbox-card strong {
            font-size: 11px;
          }

          .checkbox-card small {
            font-size: 10px;
          }

          .submit-area {
            padding:
              35px 15px;
          }

          .submit-button {
            width: 100%;

            padding:
              16px 15px;

            font-size: 10px;
          }

          .connect-section {
            padding:
              80px 20px;
          }

          .connect-content h2 {
            font-size: 45px;
          }

          .connect-content > p:not(.eyebrow) {
            font-size: 14px;
          }

          .site-footer {
            padding:
              30px 20px;

            flex-direction: column;

            gap: 15px;

            text-align: center;
          }

          .site-footer img {
            width: 110px;
          }

          .company-link {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}
