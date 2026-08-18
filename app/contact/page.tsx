"use client";

import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#F2C94C";

function MobileLogo() {
  return (
    <div className="mobile-logo">
      <Link href="/" aria-label="Scotti Brothers Can't Make This Up!">
        <img
          src="/images/logo.png"
          alt="Scotti Brothers Can't Make This Up!"
        />
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="site-header">
        <MobileLogo />

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

      <section className="hero">
        <div className="desktop-logo">
          <Link href="/" aria-label="Scotti Brothers Can't Make This Up!">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">SCOTTI BROTHERS ENTERTAINMENT</p>

          <h1>
            CONTACT
            <span>CAN&apos;T MAKE</span>
            <strong>THIS UP!</strong>
          </h1>

          <div className="gold-line">
            <span />
            <b>◆</b>
            <span />
          </div>

          <p className="description">
            Promotions, marketing, sponsorships, media requests, partnerships,
            publicity, and guest opportunities for the{" "}
            <strong>Can&apos;t Make This Up!</strong> Podcast.
          </p>

          <div className="contact-buttons">
            <Link href="/contact" className="primary-button">
              BE OUR GUEST
            </Link>

            <a href="mailto:info@scottibrothersent.com" className="secondary-button">
              MARKETING INQUIRIES
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-heading">
          <p>LET&apos;S CONNECT</p>
          <h2>PROMOTIONS &amp; MARKETING</h2>
          <div className="red-line" />
        </div>

        <div className="contact-card">
          <h3>CAN&apos;T MAKE THIS UP!</h3>

          <p>
            For media, promotional, marketing, sponsorship, partnership, and
            guest inquiries, reach out to the Scotti Brothers Entertainment
            team.
          </p>

          <a
            href="mailto:info@scottibrothersent.com"
            className="email-button"
          >
            CONTACT US
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <img
          src="/images/logo.png"
          alt="Scotti Brothers Entertainment"
        />

        <p>© 2026 Scotti Brothers Ent. All rights reserved.</p>

        <span>CAN&apos;T MAKE THIS UP!</span>
      </footer>

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
            radial-gradient(circle at 15% 30%,rgba(139,0,0,.20),transparent 35%),
            radial-gradient(circle at 85% 65%,rgba(242,201,76,.07),transparent 35%),
            linear-gradient(180deg,#050505,#0a0a0a,#050505);
          color: #fff;
          font-family: Arial,Helvetica,sans-serif;
        }

        .background,
        .grid-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .background {
          z-index: 0;
        }

        .grid-overlay {
          z-index: 1;
          opacity: .25;
          background-image:
            linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);
          background-size: 42px 42px;
        }

        .site-header,
        .hero,
        .contact-section,
        .site-footer {
          position: relative;
          z-index: 2;
        }

        .site-header {
          min-height: 82px;
          padding: 24px 42px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
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
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
        }

        .site-nav a {
          color: #fff;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
        }

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #b00000;
          color: #fff;
        }

        .hero {
          width: min(1280px,100%);
          min-height: 560px;
          margin: auto;
          padding: 45px 45px 80px;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
        }

        .desktop-logo {
          width: min(100%,560px);
        }

        .desktop-logo a {
          display: block;
          line-height: 0;
        }

        .desktop-logo img {
          display: block;
          width: 100%;
          height: auto;
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
          letter-spacing: .42em;
        }

        .hero h1 {
          margin: 18px 0 0;
          display: flex;
          flex-direction: column;
          font-size: clamp(48px,6vw,82px);
          line-height: .92;
          font-weight: 900;
          text-transform: uppercase;
        }

        .hero h1 span {
          color: #c62828;
        }

        .hero h1 strong {
          color: var(--gold);
        }

        .gold-line {
          width: min(500px,90%);
          margin: 28px auto;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .gold-line span {
          flex: 1;
          height: 1px;
          background: rgba(242,201,76,.7);
        }

        .gold-line b {
          color: var(--gold);
        }

        .description {
          color: rgba(255,255,255,.68);
          font-size: 15px;
          line-height: 1.8;
        }

        .description strong {
          color: var(--gold);
        }

        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 25px;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .22em;
        }

        .primary-button {
          background: #c62828;
          color: #fff;
        }

        .secondary-button {
          border: 1px solid rgba(242,201,76,.55);
          color: var(--gold);
        }

        .contact-section {
          width: min(1200px,calc(100% - 70px));
          margin: auto;
          padding: 30px 0 110px;
        }

        .section-heading {
          margin-bottom: 35px;
        }

        .section-heading p {
          margin: 0;
          color: var(--gold);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .4em;
        }

        .section-heading h2 {
          margin: 10px 0 0;
          font-size: clamp(30px,4vw,48px);
          font-weight: 900;
        }

        .red-line {
          width: 65px;
          height: 4px;
          margin-top: 20px;
          background: #c62828;
        }

        .contact-card {
          max-width: 760px;
          margin: auto;
          padding: 55px 40px;
          text-align: center;
          border: 1px solid rgba(242,201,76,.25);
          background:
            linear-gradient(145deg,rgba(133,0,0,.85),rgba(30,0,0,.95));
          box-shadow: 0 20px 50px rgba(0,0,0,.5);
        }

        .contact-card h3 {
          margin: 0;
          color: #fff;
          font-size: 38px;
          font-weight: 900;
        }

        .contact-card p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.7);
          font-size: 15px;
          line-height: 1.8;
        }

        .email-button {
          display: inline-flex;
          margin-top: 28px;
          padding: 14px 25px;
          background: #c62828;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .2em;
        }

        .site-footer {
          padding: 28px 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-top: 1px solid rgba(242,201,76,.15);
          background: #050505;
        }

        .site-footer img {
          width: 110px;
          height: auto;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;
          color: rgba(255,255,255,.35);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .site-footer span {
          color: rgba(242,201,76,.8);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 45% 55%;
          }

          .hero h1 {
            font-size: 52px;
          }
        }

        @media (max-width: 650px) {
          .site-header {
            min-height: auto;
            padding: 16px 12px 10px;
            flex-direction: column;
          }

          .mobile-logo {
            display: block;
            width: 78%;
            max-width: 330px;
            margin: 0 auto 18px;
          }

          .mobile-logo a {
            display: block;
            line-height: 0;
          }

          .mobile-logo img {
            display: block;
            width: 100%;
            height: auto;
          }

          .site-nav {
            width: 100%;
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
            padding: 35px 16px 55px;
          }

          .hero-copy {
            width: 100%;
            margin: auto;
            padding: 0;
          }

          .hero h1 {
            font-size: 43px;
          }

          .description {
            font-size: 12px;
            line-height: 1.6;
          }

          .contact-section {
            width: calc(100% - 36px);
            padding-bottom: 70px;
          }

          .contact-card {
            padding: 40px 22px;
          }

          .contact-card h3 {
            font-size: 29px;
          }

          .site-footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
