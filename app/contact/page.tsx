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
  );
}

export default function ContactPage() {
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
          <MobileLogo />

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/contact"
                    ? "active"
                    : ""
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
          {/* Desktop / tablet logo */}
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
              Want to connect with{" "}
              <strong>Can&apos;t Make This Up!</strong>?
              <br />
              Get in touch with the Scotti Brothers team.
            </p>
          </div>
        </section>

        {/* =========================================
            CONTACT SECTION
        ========================================= */}
        <section className="contact-section">
          <div className="section-heading">
            <p className="eyebrow">
              LET&apos;S CONNECT
            </p>

            <h2>GET IN TOUCH</h2>

            <div className="red-line" />
          </div>

          <div className="contact-grid">
            {/* LEFT */}
            <div className="contact-message">
              <div className="message-frame">
                <div className="message-inner">
                  <p className="small-label">
                    CAN&apos;T MAKE THIS UP!
                  </p>

                  <h3>
                    HAVE A STORY?
                  </h3>

                  <p>
                    Have an unbelievable story, want to
                    inquire about the show, discuss
                    appearances, or connect with the
                    Scotti Brothers team?
                  </p>

                  <p>
                    We&apos;d love to hear from you.
                  </p>

                  <div className="gold-line small-line">
                    <span />
                    <b>◆</b>
                    <span />
                  </div>

                  <p className="coming-text">
                    CONTACT INFORMATION COMING SOON
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="contact-card">
              <div className="contact-card-header">
                <span>SCOTTI BROTHERS</span>
                <h3>CONTACT</h3>
              </div>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    @
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <p>CONTACT INFORMATION COMING SOON</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    ★
                  </div>

                  <div>
                    <span>BOOKING / BUSINESS</span>
                    <p>CONTACT INFORMATION COMING SOON</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    +
                  </div>

                  <div>
                    <span>GENERAL INQUIRIES</span>
                    <p>CONTACT INFORMATION COMING SOON</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              for new episodes, guests, stories, and
              everything happening with the Scotti
              Brothers.
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

        /* =========================================
           HEADER
        ========================================= */

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
            rgba(
              255,
              255,
              255,
              0.08
            );

          border:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          backdrop-filter:
            blur(6px);

          -webkit-backdrop-filter:
            blur(6px);
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

        /* =========================================
           HERO
        ========================================= */

        .hero {
          width:
            min(
              1280px,
              100%
            );

          min-height: 500px;

          margin:
            0
            auto;

          padding:
            45px
            45px
            75px;

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

          color: var(--gold);

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.42em;

          text-transform:
            uppercase;
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

          line-height: 0.9;

          font-weight: 900;

          letter-spacing:
            -0.045em;

          text-transform:
            uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0
            rgba(
              242,
              201,
              76,
              0.30
            );
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
            rgba(
              242,
              201,
              76,
              0.7
            );
        }

        .gold-line b {
          color: var(--gold);

          font-size: 14px;
        }

        .hero-subtitle {
          max-width: 650px;

          margin:
            0
            auto;

          color:
            rgba(
              255,
              255,
              255,
              0.78
            );

          font-size: 16px;

          line-height: 1.8;

          font-weight: 600;
        }

        .hero-subtitle strong {
          color: var(--gold);
        }

        /* =========================================
           CONTACT SECTION
        ========================================= */

        .contact-section {
          width:
            min(
              1250px,
              100%
            );

          margin:
            0
            auto;

          padding:
            20px
            32px
            100px;
        }

        .section-heading {
          margin-bottom: 45px;

          text-align: center;
        }

        .section-heading h2 {
          margin:
            9px
            0
            0;

          color: #fff;

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

        .red-line {
          width: 65px;

          height: 4px;

          margin:
            20px
            auto
            0;

          background:
            #c62828;
        }

        /* =========================================
           CONTACT GRID
        ========================================= */

        .contact-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 30px;

          align-items: stretch;
        }

        /* =========================================
           MESSAGE FRAME
        ========================================= */

        .message-frame {
          height: 100%;

          padding: 7px;

          background:
            linear-gradient(
              135deg,
              #fff0a3 0%,
              #f2c94c 18%,
              #9f7612 45%,
              #f7d85d 65%,
              #a67b12 100%
            );

          box-shadow:
            0
            18px
            45px
            rgba(
              0,
              0,
              0,
              0.55
            );
        }

        .message-inner {
          height: 100%;

          min-height: 450px;

          padding:
            55px
            45px;

          display: flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          background:
            linear-gradient(
              145deg,
              #850000,
              #4f0000
            );

          border:
            7px
            solid
            #8b0000;
        }

        .small-label {
          margin: 0;

          color:
            var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.3em;
        }

        .message-inner h3 {
          margin:
            18px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              34px,
              5vw,
              54px
            );

          line-height:
            0.95;

          font-weight: 900;

          text-transform:
            uppercase;
        }

        .message-inner > p:not(.small-label):not(.coming-text) {
          max-width: 500px;

          margin:
            22px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.76
            );

          font-size: 15px;

          line-height: 1.8;
        }

        .small-line {
          width: 300px;

          margin:
            28px
            auto
            5px;
        }

        .coming-text {
          margin:
            18px
            0
            0;

          color:
            var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.22em;
        }

        /* =========================================
           CONTACT CARD
        ========================================= */

        .contact-card {
          min-height: 450px;

          background:
            #0d0d0d;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.25
            );

          box-shadow:
            0
            18px
            45px
            rgba(
              0,
              0,
              0,
              0.5
            );
        }

        .contact-card-header {
          padding:
            30px
            35px;

          background:
            #750000;

          border-bottom:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.25
            );
        }

        .contact-card-header span {
          color:
            var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.3em;
        }

        .contact-card-header h3 {
          margin:
            10px
            0
            0;

          color: #fff;

          font-size: 38px;

          line-height: 1;

          font-weight: 900;
        }

        .contact-items {
          padding:
            15px
            35px
            30px;
        }

        .contact-item {
          display: flex;

          align-items: center;

          gap: 20px;

          padding:
            25px
            0;

          border-bottom:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.08
            );
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-icon {
          width: 50px;

          height: 50px;

          flex:
            0
            0
            50px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px
            solid
            var(--gold);

          border-radius:
            50%;

          color:
            var(--gold);

          font-size: 20px;

          font-weight: 900;
        }

        .contact-item span {
          display: block;

          color:
            #c62828;

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.2em;
        }

        .contact-item p {
          margin:
            6px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.58
            );

          font-size: 11px;

          line-height: 1.4;

          font-weight: 700;
        }

        /* =========================================
           CONNECT
        ========================================= */

        .connect-section {
          padding:
            110px
            30px;

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

          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(
                139,
                0,
                0,
                0.16
              ),
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

          color: #fff;

          font-size:
            clamp(
              45px,
              7vw,
              78px
            );

          line-height:
            0.95;

          font-weight: 900;

          text-shadow:
            4px 4px 0
            #8b0000;
        }

        .connect-content > p:not(.eyebrow) {
          max-width: 650px;

          margin:
            25px
            auto
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.62
            );

          font-size: 16px;

          line-height: 1.8;
        }

        .connect-content strong {
          color:
            var(--gold);
        }

        .home-button {
          display: inline-flex;

          margin-top: 35px;

          padding:
            15px
            28px;

          border:
            1px
            solid
            var(--gold);

          color:
            var(--gold);

          text-decoration:
            none;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.25em;

          transition:
            all 0.2s ease;
        }

        .home-button:hover {
          background:
            #c62828;

          border-color:
            #c62828;

          color:
            #fff;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .site-footer {
          padding:
            28px
            42px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.15
            );

          background:
            #050505;
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

        .site-footer span {
          color:
            rgba(
              242,
              201,
              76,
              0.8
            );
        }

        .company-link {
          color:
            var(--gold);

          text-decoration:
            none;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.15em;

          transition:
            color 0.2s ease;
        }

        .company-link:hover {
          color: #fff;

          text-decoration:
            underline;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .hero {
            grid-template-columns:
              45%
              55%;

            min-height: 450px;
          }

          .desktop-logo {
            width: 100%;
          }

          .hero-copy {
            padding: 10px;
          }

          .contact-grid {
            grid-template-columns:
              1fr;
          }
        }

        /* =========================================
           MOBILE PORTRAIT
           LOGO ABOVE EVERYTHING
        ========================================= */

        @media (max-width: 650px) {
          .site-header {
            min-height: auto;

            padding:
              16px
              12px
              10px;

            display: flex;

            flex-direction:
              column;

            justify-content:
              flex-start;

            align-items:
              center;
          }

          .mobile-logo {
            display: block;

            width: 78%;

            max-width: 330px;

            margin:
              0
              auto
              18px;
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

            justify-content:
              center;

            gap: 3px;

            padding: 7px;

            border-radius:
              18px;
          }

          .site-nav a {
            font-size: 10px;

            padding:
              6px
              8px;
          }

          /* Hide desktop logo */
          .desktop-logo {
            display: none;
          }

          .hero {
            display: block;

            min-height: auto;

            padding:
              35px
              16px
              55px;
          }

          .hero-copy {
            width: 100%;

            max-width: 600px;

            margin:
              0
              auto;

            padding: 0;

            text-align:
              center;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing:
              0.25em;
          }

          .hero h1 {
            font-size: 48px;

            letter-spacing:
              -2px;
          }

          .hero-subtitle {
            font-size: 12px;

            line-height:
              1.6;
          }

          .gold-line {
            width: 90%;

            margin:
              20px
              auto;
          }

          .contact-section {
            padding:
              10px
              16px
              70px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .contact-grid {
            grid-template-columns:
              1fr;

            gap: 25px;
          }

          .message-inner {
            min-height: 400px;

            padding:
              40px
              25px;
          }

          .message-inner h3 {
            font-size: 38px;
          }

          .contact-card {
            min-height: auto;
          }

          .contact-card-header {
            padding:
              25px
              22px;
          }

          .contact-card-header h3 {
            font-size: 32px;
          }

          .contact-items {
            padding:
              10px
              22px
              20px;
          }

          .contact-item {
            gap: 15px;

            padding:
              20px
              0;
          }

          .contact-icon {
            width: 44px;

            height: 44px;

            flex:
              0
              0
              44px;
          }

          .contact-item p {
            font-size: 10px;
          }

          .connect-section {
            padding:
              80px
              20px;
          }

          .connect-content h2 {
            font-size: 45px;
          }

          .connect-content > p:not(.eyebrow) {
            font-size: 14px;
          }

          .site-footer {
            padding:
              30px
              20px;

            flex-direction:
              column;

            gap: 15px;

            text-align:
              center;
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
