"use client";

import Image from "next/image";
import Link from "next/link";

type Episode = {
  slug: string;
  episodeNumber: string;
  title: string;
  guestName: string;
  guestSubtitle: string;
  guestImage: string;
  topic: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

/*
 * EPISODES
 *
 * Every future episode can be added here using the same structure.
 *
 * Example:
 *
 * {
 *   slug: "episode-2",
 *   episodeNumber: "02",
 *   title: "Can't Make This Up!",
 *   guestName: "Guest Name",
 *   guestSubtitle: "Artist • Singer • Songwriter",
 *   guestImage: "/images/episodes/guest-name.jpg",
 *   topic: "Episode topic",
 *   description: "Episode description...",
 *   videoUrl: "",
 *   audioUrl: "",
 * }
 */
const episodes: Episode[] = [
  {
    slug: "episode-1",
    episodeNumber: "01",
    title: "Can't Make This Up!",
    guestName: "Jaheim",
    guestSubtitle: "R&B Singer • Songwriter • Music Industry",
    guestImage: "/images/episodes/jaheim.jpg",
    topic: "The Comeback, the Struggle & the Blessings",
    description:
      "Jaheim gets real about his journey, the music industry, staying grounded, and why faith keeps him moving forward.",
    videoUrl: "",
    audioUrl: "",
  },
];

const latestEpisode = episodes[0];

export default function EpisodesPage() {
  return (
    <main className="episodes-page">
      {/* =========================================================
          PAGE BACKGROUND
      ========================================================= */}

      <div className="paper-texture" />

      {/* =========================================================
          DECORATIVE RED CUP
      ========================================================= */}

      <div className="cup-decoration" aria-hidden="true">
        <div className="cup-splash" />

        <div className="cup-headphones">
          <div className="headphone-band" />
          <div className="ear-left" />
          <div className="ear-right" />
        </div>

        <div className="red-cup">
          <div className="cup-lid">
            <div className="straw" />
          </div>

          <div className="cup-body">
            <div className="cup-logo">
              <span>THE SCOTTI BROTHERS</span>
              <strong>SCOTTI</strong>
              <strong className="gold">BROTHERS</strong>
              <small>CAN'T MAKE THIS UP!</small>
              <em>PODCAST</em>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="site-logo" aria-label="Scotti Brothers Home">
            <Image
              src="/images/logo/logo.png"
              alt="Scotti Brothers Can't Make This Up Podcast"
              width={270}
              height={180}
              priority
              className="logo-image"
            />
          </Link>

          <nav className="site-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  item.href === "/episodes" ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="episodes-container">
        {/* =======================================================
            TOP INTRO
        ======================================================= */}

        <section className="episodes-intro">
          <div className="intro-left">
            <h1>EPISODES</h1>

            <div className="red-rule" />

            <p>
              Unbelievable moments. Real stories.
              <br />
              Music industry insanity.
            </p>
          </div>

          <div className="intro-right">
            <div className="watch-heading">
              <span>Watch &amp; Listen</span>
            </div>

            <p>
              The latest episodes of
              <br />
              <strong>Scotti Brothers Can't Make This Up!</strong>
              <br />
              are available now.
            </p>
          </div>
        </section>

        {/* =======================================================
            LATEST EPISODE
        ======================================================= */}

        {latestEpisode && (
          <section className="latest-episode">
            {/* Guest photo */}

            <div className="latest-photo">
              <div className="latest-label">
                ★ LATEST EPISODE ★
              </div>

              {latestEpisode.guestImage ? (
                <Image
                  src={latestEpisode.guestImage}
                  alt={latestEpisode.guestName}
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                  className="guest-photo"
                />
              ) : (
                <div className="photo-placeholder">
                  <span>GUEST PHOTO</span>
                </div>
              )}

              <div className="live-now">
                <span className="live-dot" />
                LIVE NOW
              </div>
            </div>

            {/* Episode information */}

            <div className="latest-info">
              <div className="info-label">GUEST</div>

              <h2>{latestEpisode.guestName}</h2>

              <div className="topic-label">TOPIC</div>

              <h3>{latestEpisode.topic}</h3>

              <div className="gold-rule" />

              <p className="episode-description">
                {latestEpisode.description}
              </p>

              <div className="episode-actions">
                {latestEpisode.videoUrl ? (
                  <a
                    href={latestEpisode.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watch-button"
                  >
                    <span className="play-icon">▶</span>
                    WATCH &amp; LISTEN
                  </a>
                ) : (
                  <Link
                    href={`/episodes/${latestEpisode.slug}`}
                    className="watch-button"
                  >
                    <span className="play-icon">▶</span>
                    WATCH &amp; LISTEN
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* =======================================================
            ALL EPISODES
        ======================================================= */}

        <section className="all-episodes">
          <div className="section-heading">
            <h2>ALL EPISODES</h2>
            <div className="heading-line" />
          </div>

          <div className="episode-list">
            {episodes.map((episode) => (
              <article key={episode.slug} className="episode-row">
                {/* Episode thumbnail */}

                <div className="episode-thumbnail">
                  {episode.guestImage ? (
                    <Image
                      src={episode.guestImage}
                      alt={episode.guestName}
                      fill
                      sizes="180px"
                      className="thumbnail-image"
                    />
                  ) : (
                    <div className="thumbnail-placeholder" />
                  )}

                  <div className="thumbnail-overlay">
                    <span className="small-play">▶</span>
                  </div>

                  <div className="episode-number">
                    EP. {episode.episodeNumber}
                  </div>
                </div>

                {/* Episode text */}

                <div className="episode-row-info">
                  <span className="row-label">GUEST</span>

                  <h3>{episode.guestName}</h3>

                  <span className="row-label topic-row-label">
                    TOPIC
                  </span>

                  <p>{episode.topic}</p>
                </div>

                {/* Watch button */}

                <div className="row-action">
                  {episode.videoUrl ? (
                    <a
                      href={episode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row-watch-button"
                    >
                      <span>▶</span>
                      WATCH &amp; LISTEN
                    </a>
                  ) : (
                    <Link
                      href={`/episodes/${episode.slug}`}
                      className="row-watch-button"
                    >
                      <span>▶</span>
                      WATCH &amp; LISTEN
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =======================================================
            FUTURE EPISODES
        ======================================================= */}

        <section className="future-episodes">
          <p>MORE EPISODES COMING SOON</p>
        </section>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </p>
      </footer>

      {/* =========================================================
          PAGE-SPECIFIC CSS
      ========================================================= */}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #d8b887;
        }

        .episodes-page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          color: #15100c;
          background:
            radial-gradient(
              circle at 20% 15%,
              rgba(255, 255, 255, 0.2),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(105, 61, 22, 0.08),
              transparent 35%
            ),
            #d8b887;
        }

        .paper-texture {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.24;
          background-image:
            radial-gradient(
              rgba(83, 48, 18, 0.18) 0.7px,
              transparent 0.8px
            ),
            radial-gradient(
              rgba(255, 255, 255, 0.18) 0.8px,
              transparent 0.9px
            );
          background-size: 7px 7px, 11px 11px;
          background-position: 0 0, 4px 5px;
          mix-blend-mode: multiply;
        }

        .site-header,
        .episodes-container,
        .site-footer {
          position: relative;
          z-index: 5;
        }

        .site-header {
          width: 100%;
          padding: 18px 4vw 0;
        }

        .header-inner {
          width: min(1400px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
        }

        .site-logo {
          display: block;
          width: 250px;
          height: 150px;
          flex: 0 0 250px;
          position: relative;
          z-index: 10;
        }

        /*
         * The logo asset may contain a light/white rectangular area.
         * This treatment lets the sandy page show through as much as
         * possible without altering the actual source image.
         */
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: left top;
          mix-blend-mode: multiply;
        }

        .site-navigation {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(24px, 3.4vw, 54px);
          padding-top: 22px;
          padding-right: 3vw;
        }

        .nav-link {
          position: relative;
          color: #17120e;
          text-decoration: none;
          font-size: clamp(13px, 1.15vw, 19px);
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .nav-link:hover {
          color: #9c1c18;
          transform: translateY(-1px);
        }

        .nav-link.active {
          color: #9c1c18;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -12px;
          height: 4px;
          border-radius: 999px;
          background: #9c1c18;
        }

        .episodes-container {
          width: min(1240px, calc(100% - 8vw));
          margin: 0 auto;
        }

        .episodes-intro {
          display: grid;
          grid-template-columns: 1fr 0.72fr;
          gap: 80px;
          align-items: start;
          padding: 18px 20px 30px;
        }

        .intro-left h1 {
          margin: 0;
          font-size: clamp(58px, 7vw, 108px);
          line-height: 0.9;
          letter-spacing: -0.045em;
          font-weight: 950;
          color: #090705;
        }

        .red-rule {
          width: 155px;
          height: 7px;
          margin-top: 14px;
          background: #9d1b17;
        }

        .intro-left > p {
          margin: 14px 0 0;
          font-size: clamp(16px, 1.45vw, 23px);
          line-height: 1.15;
          font-weight: 800;
        }

        .intro-right {
          padding-top: 18px;
        }

        .watch-heading {
          display: inline-block;
          position: relative;
          padding: 13px 28px 14px;
          margin-bottom: 17px;
          color: #f4b321;
          background: #080605;
          transform: rotate(-1deg);
        }

        .watch-heading::before,
        .watch-heading::after {
          content: "";
          position: absolute;
          left: -12px;
          right: -12px;
          top: 6px;
          bottom: 5px;
          z-index: -1;
          background: #080605;
          border-radius: 48% 52% 46% 54%;
        }

        .watch-heading span {
          font-family: Georgia, serif;
          font-size: clamp(24px, 2.5vw, 42px);
          font-style: italic;
          font-weight: 800;
          white-space: nowrap;
        }

        .intro-right > p {
          margin: 0;
          max-width: 450px;
          font-size: clamp(15px, 1.25vw, 20px);
          line-height: 1.35;
        }

        .intro-right strong {
          font-style: italic;
          font-weight: 900;
        }

        .latest-episode {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.8fr);
          min-height: 370px;
          overflow: hidden;
          border: 2px solid rgba(126, 44, 28, 0.55);
          border-radius: 12px;
          background: rgba(245, 225, 190, 0.5);
          box-shadow: 0 8px 22px rgba(58, 29, 12, 0.08);
        }

        .latest-photo {
          position: relative;
          min-height: 370px;
          overflow: hidden;
          background: #1a1715;
        }

        .guest-photo {
          object-fit: cover;
          object-position: center;
        }

        .latest-label {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 4;
          padding: 8px 20px;
          color: #fff;
          background: #a31919;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 0.04em;
        }

        .photo-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.55);
          background: #28221e;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .live-now {
          position: absolute;
          left: 16px;
          bottom: 15px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          color: white;
          background: rgba(0, 0, 0, 0.88);
          font-size: 13px;
          font-weight: 950;
        }

        .live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #e41c24;
          box-shadow: 0 0 0 3px rgba(228, 28, 36, 0.18);
        }

        .latest-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(28px, 4vw, 55px);
        }

        .info-label,
        .topic-label,
        .row-label {
          color: #8e2019;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 0.08em;
        }

        .latest-info h2 {
          margin: 3px 0 18px;
          color: #11100e;
          font-size: clamp(42px, 4vw, 68px);
          line-height: 0.92;
          text-transform: uppercase;
          font-weight: 950;
        }

        .latest-info h3 {
          max-width: 470px;
          margin: 7px 0 0;
          color: #16110d;
          font-size: clamp(20px, 1.7vw, 28px);
          line-height: 1.12;
          font-weight: 900;
        }

        .gold-rule {
          width: 74px;
          height: 3px;
          margin: 18px 0;
          background: #c89620;
        }

        .episode-description {
          max-width: 500px;
          margin: 0;
          font-size: clamp(15px, 1.2vw, 19px);
          line-height: 1.4;
        }

        .episode-actions {
          margin-top: 20px;
        }

        .watch-button,
        .row-watch-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: white;
          text-decoration: none;
          background: #a51c19;
          border-radius: 999px;
          font-weight: 950;
          letter-spacing: 0.04em;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .watch-button {
          padding: 12px 22px;
          font-size: 14px;
        }

        .watch-button:hover,
        .row-watch-button:hover {
          background: #7e1312;
          transform: translateY(-1px);
        }

        .play-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 23px;
          height: 23px;
          border: 2px solid white;
          border-radius: 50%;
          font-size: 10px;
        }

        .all-episodes {
          margin-top: 18px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 7px;
        }

        .section-heading h2 {
          margin: 0;
          color: #9a201b;
          font-size: 24px;
          font-weight: 950;
          letter-spacing: 0.02em;
        }

        .heading-line {
          height: 2px;
          flex: 1;
          background: rgba(143, 46, 28, 0.55);
        }

        .episode-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .episode-row {
          display: grid;
          grid-template-columns: 160px minmax(0, 1fr) 190px;
          align-items: center;
          gap: 20px;
          min-height: 92px;
          padding: 0 15px 0 0;
          overflow: hidden;
          border-radius: 8px;
          background: rgba(244, 226, 195, 0.68);
          box-shadow: 0 2px 5px rgba(75, 42, 16, 0.06);
        }

        .episode-thumbnail {
          position: relative;
          height: 92px;
          overflow: hidden;
          background: #111;
        }

        .thumbnail-image {
          object-fit: cover;
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.22);
        }

        .small-play {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          border: 2px solid white;
          border-radius: 50%;
          color: white;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.4);
        }

        .episode-number {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 4px 10px;
          color: white;
          background: #9f1c19;
          font-size: 12px;
          font-weight: 950;
        }

        .thumbnail-placeholder {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              #111 0%,
              #242424 50%,
              #111 100%
            );
        }

        .episode-row-info {
          min-width: 0;
        }

        .episode-row-info h3 {
          margin: 0;
          color: #15100c;
          font-size: clamp(18px, 1.5vw, 24px);
          line-height: 1;
          text-transform: uppercase;
          font-weight: 950;
        }

        .topic-row-label {
          display: block;
          margin-top: 8px;
          font-size: 11px;
        }

        .episode-row-info p {
          margin: 2px 0 0;
          overflow: hidden;
          color: #2a211b;
          font-size: 14px;
          line-height: 1.2;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .row-action {
          display: flex;
          justify-content: flex-end;
        }

        .row-watch-button {
          min-width: 160px;
          padding: 10px 14px;
          font-size: 12px;
        }

        .row-watch-button span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 19px;
          height: 19px;
          border: 1px solid white;
          border-radius: 50%;
          font-size: 8px;
        }

        .future-episodes {
          padding: 34px 0 55px;
          text-align: center;
        }

        .future-episodes p {
          margin: 0;
          color: #8d2019;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.16em;
        }

        .site-footer {
          padding: 25px;
          text-align: center;
          border-top: 1px solid rgba(80, 40, 15, 0.18);
        }

        .site-footer p {
          margin: 0;
          color: rgba(30, 20, 12, 0.55);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* =======================================================
           CUP DECORATION
        ======================================================= */

        .cup-decoration {
          position: absolute;
          z-index: 2;
          right: -20px;
          bottom: 15px;
          width: 260px;
          height: 520px;
          pointer-events: none;
        }

        .cup-splash {
          position: absolute;
          right: 10px;
          bottom: 220px;
          width: 280px;
          height: 280px;
          opacity: 0.18;
          background:
            radial-gradient(
              circle at 40% 45%,
              #422715 0 2px,
              transparent 3px
            ),
            radial-gradient(
              circle at 65% 25%,
              #422715 0 2px,
              transparent 3px
            ),
            radial-gradient(
              circle at 75% 60%,
              #422715 0 3px,
              transparent 4px
            );
          background-size: 29px 29px, 37px 37px, 43px 43px;
          transform: rotate(-18deg);
        }

        .red-cup {
          position: absolute;
          right: 22px;
          bottom: 0;
          width: 155px;
          height: 260px;
          transform: rotate(4deg);
        }

        .cup-lid {
          position: absolute;
          top: 0;
          left: -4px;
          width: 163px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(#321e17, #0e0b09);
          border: 4px solid #1a120f;
          z-index: 3;
        }

        .straw {
          position: absolute;
          right: 27px;
          bottom: 18px;
          width: 8px;
          height: 170px;
          border-radius: 8px;
          background: #9e241b;
          transform: rotate(19deg);
          transform-origin: bottom;
        }

        .cup-body {
          position: absolute;
          top: 15px;
          left: 0;
          width: 155px;
          height: 245px;
          border-radius: 9px 9px 28px 28px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              #821711 0%,
              #c52a20 30%,
              #a31a17 65%,
              #70100d 100%
            );
          box-shadow:
            inset 7px 0 12px rgba(255, 255, 255, 0.13),
            5px 10px 20px rgba(45, 20, 10, 0.25);
          border: 2px solid #68100d;
        }

        .cup-logo {
          position: absolute;
          left: 17px;
          right: 17px;
          top: 65px;
          padding: 10px 7px;
          text-align: center;
          color: white;
          border: 2px solid #f3b21d;
          background: #17110e;
          transform: rotate(-3deg);
        }

        .cup-logo span {
          display: block;
          font-size: 6px;
          font-weight: 900;
        }

        .cup-logo strong {
          display: block;
          font-size: 23px;
          line-height: 0.85;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .cup-logo .gold {
          color: #f4b321;
        }

        .cup-logo small {
          display: block;
          margin-top: 6px;
          font-size: 7px;
          line-height: 1;
          font-weight: 950;
        }

        .cup-logo em {
          display: block;
          margin-top: 5px;
          color: #ef2027;
          font-size: 8px;
          font-style: normal;
          font-weight: 950;
        }

        .cup-headphones {
          position: absolute;
          right: 98px;
          bottom: 0;
          width: 170px;
          height: 180px;
          transform: rotate(-8deg);
        }

        .headphone-band {
          position: absolute;
          left: 18px;
          top: 10px;
          width: 120px;
          height: 130px;
          border: 15px solid #151515;
          border-bottom-color: transparent;
          border-radius: 70px 70px 0 0;
        }

        .ear-left,
        .ear-right {
          position: absolute;
          bottom: 8px;
          width: 48px;
          height: 72px;
          border-radius: 15px;
          background: linear-gradient(90deg, #111, #353535, #101010);
          box-shadow: inset 0 0 0 5px #080808;
        }

        .ear-left {
          left: 0;
        }

        .ear-right {
          right: 0;
        }

        /* =======================================================
           TABLET
        ======================================================= */

        @media (max-width: 1000px) {
          .site-header {
            padding-left: 25px;
            padding-right: 25px;
          }

          .header-inner {
            flex-direction: column;
            align-items: center;
          }

          .site-logo {
            width: 210px;
            height: 125px;
          }

          .site-navigation {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            padding: 0 0 15px;
            gap: 18px 28px;
          }

          .episodes-intro {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .intro-right {
            padding-top: 0;
          }

          .latest-episode {
            grid-template-columns: 1fr;
          }

          .latest-photo {
            min-height: 430px;
          }

          .cup-decoration {
            opacity: 0.75;
            transform: scale(0.8);
            transform-origin: bottom right;
          }
        }

        /* =======================================================
           MOBILE
        ======================================================= */

        @media (max-width: 680px) {
          .site-header {
            padding-top: 8px;
          }

          .site-logo {
            width: 190px;
            height: 110px;
          }

          .site-navigation {
            gap: 14px 18px;
          }

          .nav-link {
            font-size: 10px;
            letter-spacing: 0.05em;
          }

          .nav-link.active::after {
            bottom: -7px;
            height: 3px;
          }

          .episodes-container {
            width: min(100% - 24px, 1240px);
          }

          .episodes-intro {
            padding: 10px 5px 22px;
          }

          .intro-left h1 {
            font-size: 55px;
          }

          .intro-right {
            padding-bottom: 5px;
          }

          .watch-heading span {
            font-size: 25px;
          }

          .latest-photo {
            min-height: 300px;
          }

          .latest-info {
            padding: 25px 20px 30px;
          }

          .latest-info h2 {
            font-size: 48px;
          }

          .episode-row {
            grid-template-columns: 105px minmax(0, 1fr);
            gap: 12px;
            padding-right: 10px;
          }

          .episode-thumbnail {
            height: 80px;
          }

          .row-action {
            grid-column: 2;
            justify-content: flex-start;
            margin-top: -4px;
            margin-bottom: 10px;
          }

          .row-watch-button {
            min-width: 145px;
            padding: 8px 10px;
            font-size: 10px;
          }

          .episode-row-info p {
            white-space: normal;
          }

          .cup-decoration {
            right: -70px;
            bottom: 15px;
            opacity: 0.55;
            transform: scale(0.62);
            transform-origin: bottom right;
          }
        }
      `}</style>
    </main>
  );
}
