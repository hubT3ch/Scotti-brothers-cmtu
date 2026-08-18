"use client";

import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const episodes = [
  {
    number: "01",
    title: "Coming Soon",
    description:
      "An unforgettable story from the music and entertainment industry.",
  },
  {
    number: "02",
    title: "Coming Soon",
    description:
      "Real stories, unbelievable moments, and conversations you won't expect.",
  },
  {
    number: "03",
    title: "Coming Soon",
    description:
      "Another story that sounds too crazy to be true — but it happened.",
  },
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

function Navigation() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={item.href === "/episodes" ? "active" : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function EpisodesPage() {
  return (
    <main className="episodes-page">
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {/* HEADER */}
      <header className="site-header">
        <MobileLogo />
        <Navigation />
      </header>

      {/* HERO */}
      <section className="hero">
        {/* Desktop Logo */}
        <div className="desktop-logo">
          <Link href="/" aria-label="Scotti Brothers Can't Make This Up!">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>
        </div>

        {/* Hero Copy */}
        <div className="hero-copy">
          <p className="eyebrow">SCOTTI BROTHERS</p>

          <h1>EPISODES</h1>

          <div className="gold-line">
            <span />
            <b>◆</b>
            <span />
          </div>

          <p className="hero-text">
            <strong>Unbelievable moments! Real stories!</strong>
            <br />
            Conversations from the music and entertainment industry.
            <br />
            Stories and moments you simply{" "}
            <strong>Can&apos;t Make This Up!</strong>
          </p>
        </div>
      </section>

      {/* CURRENT EPISODE */}
      <section className="current-section">
        <div className="section-inner">
          <div className="section-heading">
            <p>NOW PLAYING</p>
            <h2>CURRENT EPISODE</h2>
            <div className="red-line" />
          </div>

          <div className="current-card">
            <div className="current-art">
              <div className="art-inner">
                <span>EPISODE 01</span>

                <div className="mic">🎙</div>

                <h3>COMING SOON</h3>

                <p>CAN&apos;T MAKE THIS UP!</p>
              </div>
            </div>

            <div className="current-info">
              <span className="episode-tag">EPISODE 01</span>

              <h3>THE NEXT STORY</h3>

              <div className="red-line" />

              <p>
                Get ready for another unforgettable conversation with stories,
                music, entertainment, and moments you won&apos;t believe.
              </p>

              <p>
                The next episode of{" "}
                <strong>Can&apos;t Make This Up!</strong> is coming soon.
              </p>

              <div className="coming-soon">COMING SOON</div>
            </div>
          </div>
        </div>
      </section>

      {/* EPISODE ARCHIVE */}
      <section className="archive-section">
        <div className="section-inner">
          <div className="section-heading centered">
            <p>THE SHOW</p>

            <h2>EPISODES</h2>

            <div className="red-line centered-line" />
          </div>

          <div className="episode-grid">
            {episodes.map((episode) => (
              <article className="episode-card" key={episode.number}>
                <div className="episode-number">{episode.number}</div>

                <div className="episode-card-content">
                  <span>EPISODE {episode.number}</span>

                  <h3>{episode.title}</h3>

                  <p>{episode.description}</p>

                  <div className="card-bottom">
                    <span>COMING SOON</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WATCH / LISTEN */}
      <section className="watch-section">
        <div className="watch-content">
          <p className="eyebrow">WATCH • LISTEN • EXPERIENCE</p>

          <h2>CAN&apos;T MAKE THIS UP!</h2>

          <p>
            Follow the show for new episodes, exclusive conversations, and
            stories from the people who lived them.
          </p>

          <Link href="/contact" className="watch-button">
            STAY CONNECTED
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <img
          src="/images/logo.png"
          alt="Scotti Brothers Entertainment"
        />

        <p>
          © 2026 Scotti Brothers Ent. All rights reserved.
        </p>

        <a
          href="https://scottibrothersent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="company-link"
        >
          SCOTTIBROTHERSENT.COM
        </a>

        <span>CAN&apos;T MAKE THIS UP!</span>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .episodes-page {
          --gold: ${GOLD};

          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 15% 25%,
              rgba(139, 0, 0, 0.16),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 60%,
              rgba(242, 201, 76, 0.08),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #050505 0%,
              #101010 50%,
              #050505 100%
            );

          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* =========================================
           BACKGROUND
        ========================================= */

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
              rgba(255, 255, 255, 0.015) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.015) 1px,
              transparent 1px
            );

          background-size: 42px 42px;
        }

        .site-header,
        .hero,
        .current-section,
        .archive-section,
        .watch-section,
        .site-footer {
          position: relative;
          z-index: 2;
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

          justify-content: flex-end;

          align-items: center;
        }

        .mobile-logo {
          display: none;
        }

        .site-nav {
          display: flex;

          align-items: center;

          gap: 30px;
        }

        .site-nav a {
          color:
            rgba(
              255,
              255,
              255,
              0.82
            );

          text-decoration: none;

          font-size: 14px;

          font-weight: 800;

          transition:
            color 0.2s ease;
        }

        .site-nav a:hover,
        .site-nav a.active {
          color: var(--gold);
        }

        /* =========================================
           HERO
        ========================================= */

        .hero {
          width: min(1280px, 100%);

          min-height: 500px;

          margin: 0 auto;

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

        /* =========================================
           DESKTOP LOGO
        ========================================= */

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

        /* =========================================
           HERO COPY
        ========================================= */

        .hero-copy {
          width: 100%;

          max-width: 620px;

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
            16px
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
        }

        .gold-line {
          width:
            min(
              500px,
              90%
            );

          margin:
            28px
            auto;

          display: flex;

          align-items: center;

          gap: 15px;
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
        }

        .hero-text {
          color:
            rgba(
              255,
              255,
              255,
              0.72
            );

          font-size: 16px;

          line-height: 1.8;
        }

        .hero-text strong {
          color: var(--gold);
        }

        /* =========================================
           SHARED SECTIONS
        ========================================= */

        .section-inner {
          width:
            min(
              1200px,
              calc(100% - 70px)
            );

          margin: 0 auto;
        }

        .section-heading p {
          margin: 0;

          color: #c62828;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.4em;
        }

        .section-heading h2 {
          margin:
            10px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              38px,
              5vw,
              62px
            );

          font-weight: 900;

          line-height: 1;
        }

        .red-line {
          width: 65px;

          height: 4px;

          margin-top: 22px;

          background:
            #c62828;
        }

        .centered {
          text-align: center;
        }

        .centered-line {
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================
           CURRENT EPISODE
        ========================================= */

        .current-section {
          padding:
            85px
            0
            100px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.15
            );
        }

        .current-card {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          margin-top: 48px;

          overflow: hidden;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.28
            );

          background: #050505;

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

        .current-art {
          min-height: 500px;

          padding: 45px;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            radial-gradient(
              circle,
              rgba(
                242,
                201,
                76,
                0.17
              ),
              transparent 58%
            ),
            linear-gradient(
              135deg,
              #151515,
              #030303
            );
        }

        .art-inner {
          width:
            min(
              100%,
              420px
            );

          min-height: 390px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.25
            );

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .art-inner > span {
          color: #fff;

          background:
            #c62828;

          padding:
            8px
            13px;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.2em;
        }

        .mic {
          margin:
            25px
            0
            10px;

          font-size: 65px;
        }

        .art-inner h3 {
          margin: 0;

          font-size: 34px;

          font-weight: 900;
        }

        .art-inner p {
          color: var(--gold);

          font-size: 11px;

          font-weight: 800;

          letter-spacing:
            0.3em;
        }

        .current-info {
          padding: 60px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background:
            #101010;
        }

        .episode-tag {
          align-self: flex-start;

          padding:
            8px
            13px;

          background:
            #c62828;

          color: #fff;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.2em;
        }

        .current-info h3 {
          margin:
            25px
            0
            0;

          font-size:
            clamp(
              34px,
              4vw,
              52px
            );

          line-height: 1;
        }

        .current-info p {
          color:
            rgba(
              255,
              255,
              255,
              0.57
            );

          font-size: 15px;

          line-height: 1.9;
        }

        .current-info strong {
          color: var(--gold);
        }

        .coming-soon {
          align-self: flex-start;

          margin-top: 28px;

          padding:
            13px
            22px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.55
            );

          color: var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.25em;
        }

        /* =========================================
           EPISODE ARCHIVE
        ========================================= */

        .archive-section {
          padding:
            100px
            0;

          background:
            rgba(
              0,
              0,
              0,
              0.28
            );

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

        .episode-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap: 25px;

          margin-top: 55px;
        }

        .episode-card {
          min-height: 360px;

          position: relative;

          overflow: hidden;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.22
            );

          background:
            #0b0b0b;
        }

        .episode-number {
          position: absolute;

          top: 20px;

          right: 22px;

          color:
            rgba(
              242,
              201,
              76,
              0.18
            );

          font-size: 75px;

          font-weight: 900;
        }

        .episode-card-content {
          min-height: 360px;

          height: 100%;

          padding: 32px;

          display: flex;

          flex-direction: column;
        }

        .episode-card-content > span {
          align-self: flex-start;

          padding:
            7px
            11px;

          background:
            #c62828;

          color: #fff;

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.18em;
        }

        .episode-card h3 {
          margin-top: 55px;

          font-size: 28px;

          font-weight: 900;
        }

        .episode-card p {
          color:
            rgba(
              255,
              255,
              255,
              0.52
            );

          font-size: 14px;

          line-height: 1.8;
        }

        .card-bottom {
          margin-top: auto;

          padding-top: 22px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.14
            );

          color: var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.25em;
        }

        /* =========================================
           WATCH / LISTEN
        ========================================= */

        .watch-section {
          padding:
            110px
            30px;

          text-align: center;
        }

        .watch-content {
          max-width: 760px;

          margin: auto;
        }

        .watch-content h2 {
          margin-top: 16px;

          font-size:
            clamp(
              42px,
              7vw,
              78px
            );

          line-height: 0.95;
        }

        .watch-content > p:not(.eyebrow) {
          color:
            rgba(
              255,
              255,
              255,
              0.57
            );

          line-height: 1.8;
        }

        .watch-button {
          display: inline-flex;

          margin-top: 35px;

          padding:
            15px
            28px;

          border:
            1px
            solid
            var(--gold);

          color: var(--gold);

          text-decoration: none;

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.25em;
        }

        .watch-button:hover {
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
  color: #4da3ff;
  text-decoration: none;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.12em;
  transition: color 0.2s ease;
}

.company-link:hover {
  color: #7fc1ff;
  text-decoration: underline;
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

          .current-card {
            grid-template-columns: 1fr;
          }

          .episode-grid {
            grid-template-columns:
              1fr
              1fr;
          }

        }

        /* =========================================
           MOBILE PORTRAIT
        ========================================= */

        @media (max-width: 650px) {

          /* -----------------------------------------
             HEADER
             LOGO IS FIRST ELEMENT
          ----------------------------------------- */

          .site-header {
            min-height: auto;

            padding:
              16px
              12px
              10px;

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

            justify-content: center;

            gap: 3px;

            padding: 7px;

            border-radius: 18px;

            background:
              rgba(
                255,
                255,
                255,
                0.07
              );

            border:
              1px
              solid
              rgba(
                255,
                255,
                255,
                0.10
              );
          }

          .site-nav a {
            font-size: 10px;

            padding:
              6px
              8px;
          }

          /* -----------------------------------------
             HIDE DESKTOP LOGO
          ----------------------------------------- */

          .desktop-logo {
            display: none;
          }

          /* -----------------------------------------
             HERO
          ----------------------------------------- */

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

            text-align: center;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing:
              0.25em;
          }

          .hero h1 {
            font-size: 48px;
          }

          .hero-text {
            font-size: 12px;

            line-height: 1.6;
          }

          .gold-line {
            width: 90%;

            margin:
              20px
              auto;
          }

          /* -----------------------------------------
             SECTIONS
          ----------------------------------------- */

          .section-inner {
            width:
              calc(
                100% - 36px
              );
          }

          .current-section,
          .archive-section {
            padding:
              70px
              0;
          }

          .current-art {
            min-height: 330px;

            padding: 25px;
          }

          .art-inner {
            min-height: 280px;
          }

          .current-info {
            padding:
              35px
              25px;
          }

          .episode-grid {
            grid-template-columns:
              1fr;
          }

          /* -----------------------------------------
             WATCH
          ----------------------------------------- */

          .watch-section {
            padding:
              80px
              20px;
          }

          .watch-content h2 {
            font-size: 43px;
          }

          /* -----------------------------------------
             FOOTER
          ----------------------------------------- */

          .site-footer {
            padding:
              30px
              20px;

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
