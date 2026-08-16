"use client";

import Link from "next/link";

type Episode = {
  slug: string;
  number: string;
  guest: string;
  subtitle: string;
  description: string;
};

const episodes: Episode[] = [
  {
    slug: "episode-1",
    number: "01",
    guest: "JAHEIM",
    subtitle: "R&B SINGER • SONGWRITER • MUSIC INDUSTRY",
    description:
      "The Scotti Brothers sit down with Jaheim for an unforgettable conversation filled with real stories, music industry moments, and things you simply can't make up.",
  },
];

const navigation = [
  { label: "HOME", href: "/" },
  { label: "EPISODES", href: "/episodes" },
  { label: "GUESTS", href: "/guests" },
  { label: "MERCHANDISE", href: "/merchandise" },
  { label: "CONTACT", href: "/contact" },
];

export default function EpisodesPage() {
  return (
    <>
      <main className="episodes-page">
        {/* HEADER */}
        <header className="episodes-header">
          <Link href="/" className="episodes-wordmark">
            <span className="wordmark-scotti">SCOTTI</span>
            <span className="wordmark-brothers">BROTHERS</span>
          </Link>

          <nav className="episodes-nav">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/episodes"
                    ? "episodes-nav-link active"
                    : "episodes-nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* PAGE TITLE */}
        <section className="episodes-title">
          <p className="episodes-eyebrow">SCOTTI BROTHERS</p>

          <h1>EPISODES</h1>

          <div className="episodes-red-line" />

          <p className="episodes-intro">
            UNBELIEVABLE MOMENTS. REAL STORIES. MUSIC INDUSTRY CONVERSATIONS.
          </p>

          <p className="episodes-tagline">
            Welcome to <strong>CAN'T MAKE THIS UP!</strong>
          </p>
        </section>

        {/* EPISODE LIST */}
        <section className="episodes-list">
          <div className="episodes-section-heading">
            <span>WATCH &amp; LISTEN</span>
            <h2>LATEST EPISODE</h2>
          </div>

          {episodes.map((episode) => (
            <article className="episode-card" key={episode.slug}>
              {/* GUEST IMAGE AREA */}
              <div className="episode-guest-image">
                <div className="episode-number">
                  EPISODE {episode.number}
                </div>

                <div className="guest-placeholder">
                  <div className="guest-placeholder-number">
                    {episode.number}
                  </div>

                  <div className="guest-placeholder-label">
                    GUEST PHOTO
                  </div>

                  <div className="guest-placeholder-note">
                    JAHEIM'S PHOTO WILL BE CONNECTED FROM SUPABASE
                  </div>
                </div>
              </div>

              {/* EPISODE INFORMATION */}
              <div className="episode-information">
                <p className="episode-featured">FEATURED GUEST</p>

                <h3>{episode.guest}</h3>

                <p className="episode-subtitle">
                  {episode.subtitle}
                </p>

                <div className="episode-divider" />

                <p className="episode-description">
                  {episode.description}
                </p>

                <div className="episode-buttons">
                  <Link
                    href={`/episodes/${episode.slug}`}
                    className="episode-watch-button"
                  >
                    WATCH EPISODE
                  </Link>

                  <Link
                    href={`/episodes/${episode.slug}`}
                    className="episode-listen-button"
                  >
                    LISTEN
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* MORE EPISODES */}
        <section className="more-episodes">
          <p>COMING SOON</p>

          <h2>
            MORE EPISODES.
            <br />
            MORE GUESTS.
            <br />
            MORE STORIES.
          </h2>

          <div className="more-red-line" />

          <p className="more-description">
            New episodes will appear here as they are released.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="episodes-footer">
          © {new Date().getFullYear()} SCOTTI BROTHERS ENTERTAINMENT
        </footer>
      </main>

      <style jsx>{`
        .episodes-page {
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .episodes-header {
          width: 100%;
          min-height: 90px;
          padding: 22px 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: #000;
        }

        .episodes-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 0.82;
          text-decoration: none;
          flex-shrink: 0;
        }

        .wordmark-scotti {
          color: #fff;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .wordmark-brothers {
          color: #f4b400;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .episodes-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .episodes-nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.82);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .episodes-nav-link:hover,
        .episodes-nav-link.active {
          color: #f4b400;
        }

        .episodes-title {
          max-width: 1200px;
          margin: 0 auto;
          padding: 95px 5vw 75px;
        }

        .episodes-eyebrow {
          margin: 0 0 14px;
          color: #f4b400;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.3em;
        }

        .episodes-title h1 {
          margin: 0;
          font-size: clamp(56px, 9vw, 110px);
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.045em;
        }

        .episodes-red-line {
          width: 90px;
          height: 5px;
          margin-top: 28px;
          background: #d71920;
        }

        .episodes-intro {
          max-width: 700px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 15px;
          line-height: 1.7;
          letter-spacing: 0.08em;
        }

        .episodes-tagline {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.42);
          font-size: 14px;
          letter-spacing: 0.04em;
        }

        .episodes-tagline strong {
          color: #fff;
        }

        .episodes-list {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 5vw 100px;
        }

        .episodes-section-heading {
          margin-bottom: 35px;
        }

        .episodes-section-heading span {
          color: #d71920;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.28em;
        }

        .episodes-section-heading h2 {
          margin: 10px 0 0;
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .episode-card {
          display: grid;
          grid-template-columns: 380px minmax(0, 1fr);
          min-height: 440px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0b0b0b;
        }

        .episode-guest-image {
          position: relative;
          min-height: 440px;
          background:
            radial-gradient(
              circle at center,
              rgba(244, 180, 0, 0.08),
              transparent 55%
            ),
            #151515;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .episode-number {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          padding: 10px 14px;
          background: #d71920;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .guest-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 30px;
        }

        .guest-placeholder-number {
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #f4b400;
          border-radius: 50%;
          color: #f4b400;
          font-size: 36px;
          font-weight: 900;
        }

        .guest-placeholder-label {
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .guest-placeholder-note {
          max-width: 230px;
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.2);
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: 0.05em;
        }

        .episode-information {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 55px;
        }

        .episode-featured {
          margin: 0;
          color: #f4b400;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .episode-information h3 {
          margin: 10px 0 0;
          color: #fff;
          font-size: clamp(50px, 7vw, 82px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
        }

        .episode-subtitle {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.42);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .episode-divider {
          width: 100%;
          height: 1px;
          margin: 28px 0;
          background: rgba(255, 255, 255, 0.1);
        }

        .episode-description {
          max-width: 650px;
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 16px;
          line-height: 1.8;
        }

        .episode-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .episode-watch-button,
        .episode-listen-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 26px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-decoration: none;
        }

        .episode-watch-button {
          background: #d71920;
          color: #fff;
        }

        .episode-listen-button {
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
        }

        .episode-watch-button:hover {
          background: #ef2027;
        }

        .episode-listen-button:hover {
          border-color: #f4b400;
          color: #f4b400;
        }

        .more-episodes {
          padding: 90px 5vw;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #080808;
        }

        .more-episodes > p:first-child {
          margin: 0;
          color: #f4b400;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.3em;
        }

        .more-episodes h2 {
          margin: 18px 0 0;
          font-size: clamp(38px, 6vw, 65px);
          font-weight: 900;
          line-height: 1;
        }

        .more-red-line {
          width: 70px;
          height: 4px;
          margin: 25px auto;
          background: #d71920;
        }

        .more-description {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
        }

        .episodes-footer {
          padding: 35px 20px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        @media (max-width: 800px) {
          .episodes-header {
            flex-direction: column;
            justify-content: center;
          }

          .episodes-nav {
            gap: 14px 18px;
          }

          .episode-card {
            grid-template-columns: 1fr;
          }

          .episode-guest-image {
            min-height: 360px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .episode-information {
            padding: 40px 25px;
          }
        }

        @media (max-width: 500px) {
          .episodes-title {
            padding-top: 65px;
            padding-bottom: 55px;
          }

          .episodes-nav-link {
            font-size: 9px;
          }

          .episode-information h3 {
            font-size: 54px;
          }

          .episode-buttons {
            flex-direction: column;
          }

          .episode-watch-button,
          .episode-listen-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
