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

export default function EpisodesPage() {
  return (
    <main className="episodes-page">
      <div className="episodes-bg" aria-hidden="true" />
      <div className="episodes-overlay" aria-hidden="true" />

      {/* HEADER / NAVIGATION */}
      <header className="site-header">
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
      </header>

      {/* HERO */}
      <section className="episodes-hero">
        <div className="hero-logo">
          <img
            src="/images/logo.png"
            alt="Scotti Brothers Can't Make This Up!"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">SCOTTI BROTHERS</p>

          <h1>EPISODES</h1>

          <div className="gold-line">
            <span />
            <b>◆</b>
            <span />
          </div>

          <p className="hero-copy">
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
            <div className="heading-line" />
          </div>

          <div className="current-card">
            <div className="current-art">
              <div className="art-inner">
                <span>EPISODE 01</span>
                <div className="mic-mark">🎙</div>
                <h3>COMING SOON</h3>
                <p>CAN&apos;T MAKE THIS UP!</p>
              </div>
            </div>

            <div className="current-info">
              <span className="episode-tag">EPISODE 01</span>

              <h3>THE NEXT STORY</h3>

              <div className="red-rule" />

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
            <div className="heading-line centered-line" />
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

        <span>CAN&apos;T MAKE THIS UP!</span>
      </footer>

      <style>{`
        .episodes-page {
          --gold: ${GOLD};
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(198, 40, 40, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 55%,
              rgba(242, 201, 76, 0.10),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #080808 0%,
              #111111 50%,
              #080808 100%
            );
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .episodes-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 25% 35%,
              rgba(198, 40, 40, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 75% 65%,
              rgba(242, 201, 76, 0.08),
              transparent 32%
            );
        }

        .episodes-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.015) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.015) 1px,
              transparent 1px
            );
          background-size: 42px 42px;
          opacity: 0.35;
        }

        .site-header,
        .episodes-hero,
        .current-section,
        .archive-section,
        .watch-section,
        .site-footer {
          position: relative;
          z-index: 2;
        }

        /* HEADER */

        .site-header {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          min-height: 82px;
          padding: 24px 42px;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .site-nav a {
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          transition: color 0.2s ease;
        }

        .site-nav a:hover,
        .site-nav a.active {
          color: var(--gold);
        }

        /* HERO */

        .episodes-hero {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 500px;
          padding: 65px 70px 80px;
          overflow: hidden;
        }

        .hero-logo {
          position: absolute;
          left: 4%;
          top: 50%;
          transform: translateY(-50%);
          width: 44%;
          max-width: 500px;
          z-index: 2;
        }

        .hero-logo img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 52%;
          max-width: 680px;
          margin-left: auto;
          margin-right: 4%;
          text-align: center;
        }

        .eyebrow {
          margin: 0;
          color: #c62828;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.45em;
          text-transform: uppercase;
        }

        .episodes-hero h1 {
          margin: 18px 0 0;
          color: #fff;
          font-size: clamp(58px, 8vw, 100px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.045em;
        }

        .gold-line {
          display: flex;
          align-items: center;
          gap: 16px;
          width: min(500px, 85%);
          margin: 28px auto;
        }

        .gold-line span {
          flex: 1;
          height: 1px;
          background: rgba(242,201,76,0.7);
        }

        .gold-line b {
          color: var(--gold);
          font-size: 14px;
        }

        .hero-copy {
          max-width: 650px;
          margin: 0 auto;
          color: rgba(255,255,255,0.72);
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-copy strong {
          color: var(--gold);
          font-weight: 900;
        }

        /* SHARED SECTION */

        .section-inner {
          width: min(1200px, calc(100% - 70px));
          margin: 0 auto;
        }

        .current-section {
          padding: 85px 0 100px;
          border-top: 1px solid rgba(242,201,76,0.15);
        }

        .section-heading p {
          margin: 0;
          color: #c62828;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.4em;
          text-transform: uppercase;
        }

        .section-heading h2 {
          margin: 10px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 900;
          line-height: 1;
          text-transform: uppercase;
        }

        .heading-line {
          width: 65px;
          height: 4px;
          margin-top: 22px;
          background: #c62828;
        }

        .centered {
          text-align: center;
        }

        .centered-line {
          margin-left: auto;
          margin-right: auto;
        }

        /* CURRENT EPISODE */

        .current-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 48px;
          overflow: hidden;
          border: 1px solid rgba(242,201,76,0.28);
          border-radius: 4px;
          background: #050505;
          box-shadow: 0 25px 70px rgba(0,0,0,0.45);
        }

        .current-art {
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 45px;
          background:
            radial-gradient(
              circle at center,
              rgba(242,201,76,0.17),
              transparent 58%
            ),
            linear-gradient(135deg, #151515, #030303);
        }

        .art-inner {
          width: min(100%, 420px);
          min-height: 390px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(242,201,76,0.25);
          text-align: center;
        }

        .art-inner > span {
          color: #c62828;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.35em;
        }

        .mic-mark {
          margin: 25px 0 10px;
          font-size: 65px;
          filter: grayscale(1);
        }

        .art-inner h3 {
          margin: 0;
          color: #fff;
          font-size: 34px;
          font-weight: 900;
        }

        .art-inner p {
          margin-top: 12px;
          color: var(--gold);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.3em;
        }

        .current-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px;
          background: #101010;
        }

        .episode-tag {
          display: inline-flex;
          align-self: flex-start;
          padding: 8px 13px;
          background: #c62828;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.2em;
        }

        .current-info h3 {
          margin: 25px 0 0;
          color: #fff;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 900;
          line-height: 1;
          text-transform: uppercase;
        }

        .red-rule {
          width: 65px;
          height: 4px;
          margin-top: 25px;
          background: #c62828;
        }

        .current-info p {
          max-width: 520px;
          margin-top: 25px;
          color: rgba(255,255,255,0.57);
          font-size: 15px;
          line-height: 1.9;
        }

        .current-info strong {
          color: var(--gold);
        }

        .coming-soon {
          align-self: flex-start;
          margin-top: 28px;
          padding: 13px 22px;
          border: 1px solid rgba(242,201,76,0.55);
          color: var(--gold);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.25em;
        }

        /* ARCHIVE */

        .archive-section {
          padding: 100px 0;
          background: rgba(0,0,0,0.28);
          border-top: 1px solid rgba(242,201,76,0.12);
          border-bottom: 1px solid rgba(242,201,76,0.12);
        }

        .episode-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 55px;
        }

        .episode-card {
          min-height: 360px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(242,201,76,0.22);
          background: #0b0b0b;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .episode-card:hover {
          transform: translateY(-5px);
          border-color: #c62828;
        }

        .episode-number {
          position: absolute;
          top: 20px;
          right: 22px;
          color: rgba(242,201,76,0.18);
          font-size: 75px;
          font-weight: 900;
          line-height: 1;
        }

        .episode-card-content {
          position: relative;
          height: 100%;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          padding: 32px;
        }

        .episode-card-content > span {
          align-self: flex-start;
          padding: 7px 11px;
          background: #c62828;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .episode-card h3 {
          margin-top: 55px;
          color: #fff;
          font-size: 28px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .episode-card p {
          margin-top: 18px;
          color: rgba(255,255,255,0.52);
          font-size: 14px;
          line-height: 1.8;
        }

        .card-bottom {
          margin-top: auto;
          padding-top: 22px;
          border-top: 1px solid rgba(242,201,76,0.14);
        }

        .card-bottom span {
          color: var(--gold);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.25em;
        }

        /* WATCH / LISTEN */

        .watch-section {
          padding: 110px 30px;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(198,40,40,0.14),
              transparent 45%
            );
        }

        .watch-content {
          max-width: 760px;
          margin: 0 auto;
        }

        .watch-content h2 {
          margin-top: 16px;
          color: #fff;
          font-size: clamp(42px, 7vw, 78px);
          font-weight: 900;
          line-height: 0.95;
        }

        .watch-content > p:not(.eyebrow) {
          margin: 25px auto 0;
          color: rgba(255,255,255,0.57);
          font-size: 16px;
          line-height: 1.8;
        }

        .watch-button {
          display: inline-flex;
          margin-top: 35px;
          padding: 15px 28px;
          border: 1px solid var(--gold);
          color: var(--gold);
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.25em;
          transition: all 0.2s ease;
        }

        .watch-button:hover {
          background: #c62828;
          border-color: #c62828;
          color: #fff;
        }

        /* FOOTER */

        .site-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 28px 42px;
          border-top: 1px solid rgba(242,201,76,0.15);
          background: #050505;
        }

        .site-footer img {
          display: block;
          width: 95px;
          height: auto;
          max-height: 65px;
          object-fit: contain;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;
          color: rgba(255,255,255,0.35);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .site-footer span {
          color: rgba(242,201,76,0.8);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .site-header {
            padding: 20px 25px;
          }

          .site-nav {
            gap: 17px;
          }

          .site-nav a {
            font-size: 11px;
          }

          .episodes-hero {
            min-height: 440px;
            padding: 55px 30px 70px;
          }

          .hero-logo {
            left: 2%;
            width: 42%;
          }

          .hero-content {
            width: 58%;
            margin-right: 2%;
          }

          .hero-copy {
            font-size: 14px;
          }

          .current-card {
            grid-template-columns: 1fr;
          }

          .current-art {
            min-height: 400px;
          }

          .episode-grid {
            grid-template-columns: 1fr 1fr;
          }

          .current-info {
            padding: 45px;
          }
        }

        @media (max-width: 650px) {
          .site-header {
            padding: 18px;
          }

          .site-nav {
            gap: 10px;
            padding-top: 5px;
          }

          .site-nav a {
            font-size: 9px;
            letter-spacing: 0;
          }

          .episodes-hero {
            min-height: 430px;
            padding: 45px 18px 60px;
          }

          .hero-logo {
            left: 1%;
            width: 40%;
          }

          .hero-content {
            width: 59%;
            margin-right: 0;
          }

          .eyebrow {
            font-size: 8px;
            letter-spacing: 0.25em;
          }

          .episodes-hero h1 {
            font-size: 48px;
          }

          .hero-copy {
            font-size: 12px;
            line-height: 1.6;
          }

          .gold-line {
            width: 90%;
            margin: 20px auto;
          }

          .section-inner {
            width: calc(100% - 36px);
          }

          .current-section,
          .archive-section {
            padding: 70px 0;
          }

          .current-art {
            min-height: 330px;
            padding: 25px;
          }

          .art-inner {
            min-height: 280px;
          }

          .current-info {
            padding: 35px 25px;
          }

          .episode-grid {
            grid-template-columns: 1fr;
          }

          .site-footer {
            flex-direction: column;
            padding: 30px 20px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
