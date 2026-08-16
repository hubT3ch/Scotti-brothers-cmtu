"use client";

import Link from "next/link";

type Episode = {
  number: string;
  guest: string;
  topic: string;
  description?: string;
  image?: string;
  href: string;
  latest?: boolean;
};

const episodes: Episode[] = [
  {
    number: "01",
    guest: "JAHEIM",
    topic: "The Comeback, the Struggle & the Blessings",
    description:
      "Jaheim gets real about his journey, the music industry, staying grounded and why faith keeps him moving forward.",
    image: "/images/episodes/jaheim.png",
    href: "/episodes/episode-1",
    latest: true,
  },
  {
    number: "11",
    guest: "CLIFF LIGHTY",
    topic: "Building Brands, Taking Risks & Staying True",
    href: "/episodes/episode-11",
  },
  {
    number: "10",
    guest: "SPECIAL GUEST",
    topic: "The Early Days & Lessons Learned",
    href: "/episodes/episode-10",
  },
  {
    number: "09",
    guest: "MUSIC INDUSTRY VETERAN",
    topic: "Stories From Behind the Scenes",
    href: "/episodes/episode-9",
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
  const latestEpisode = episodes.find((episode) => episode.latest);
  const olderEpisodes = episodes.filter((episode) => !episode.latest);

  return (
    <main className="episodes-page">
      {/* =========================================
          NAVIGATION
      ========================================= */}
      <header className="episodes-header">
        <div className="header-inner">
          <Link href="/" className="brand-link" aria-label="Scotti Brothers Home">
            <img
              src="/images/logo/logo.png"
              alt="Scotti Brothers Can't Make This Up Podcast"
              className="brand-logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
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

      {/* =========================================
          PAGE INTRO
      ========================================= */}
      <section className="intro-section">
        <div className="intro-left">
          <h1>EPISODES</h1>

          <div className="red-rule" />

          <p>
            Unbelievable moments. Real stories.
            <br />
            Music industry insanity.
          </p>
        </div>

        <div className="watch-intro">
          <div className="watch-brush">
            <span>Watch &amp; Listen</span>
          </div>

          <p>
            The latest episodes of
            <br />
            <strong>Scotti Brothers Can&apos;t Make This Up!</strong>
            <br />
            are available now.
          </p>
        </div>
      </section>

      {/* =========================================
          FEATURED / LATEST EPISODE
      ========================================= */}
      {latestEpisode && (
        <section className="featured-section">
          <div className="featured-card">
            {/* GUEST IMAGE */}
            <div className="featured-image-wrap">
              <div className="latest-ribbon">
                ★ LATEST EPISODE ★
              </div>

              {latestEpisode.image ? (
                <img
                  src={latestEpisode.image}
                  alt={latestEpisode.guest}
                  className="featured-image"
                />
              ) : (
                <div className="image-placeholder">
                  <span>{latestEpisode.guest}</span>
                </div>
              )}

              <div className="live-now">
                <span className="play-dot">◉</span>
                LIVE NOW
                <span className="signal">◉</span>
              </div>
            </div>

            {/* FEATURED INFORMATION */}
            <div className="featured-info">
              <div className="info-label">GUEST</div>

              <h2>{latestEpisode.guest}</h2>

              <div className="info-label topic-label">TOPIC</div>

              <h3>{latestEpisode.topic}</h3>

              <div className="gold-rule" />

              <p>{latestEpisode.description}</p>

              <Link
                href={latestEpisode.href}
                className="watch-button"
              >
                <span className="button-play">▶</span>
                WATCH &amp; LISTEN
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          ALL EPISODES
      ========================================= */}
      <section className="all-episodes-section">
        <div className="section-heading">
          <h2>ALL EPISODES</h2>
          <div className="heading-line" />
        </div>

        <div className="episode-list">
          {olderEpisodes.map((episode) => (
            <article className="episode-row" key={episode.number}>
              {/* VIDEO THUMBNAIL */}
              <div className="episode-thumbnail">
                <div className="film-top" />

                <div className="thumbnail-content">
                  <div className="small-play">▶</div>
                </div>

                <div className="episode-number">
                  EP. {episode.number}
                </div>
              </div>

              {/* EPISODE INFORMATION */}
              <div className="episode-info">
                <div className="small-label">GUEST</div>

                <h3>{episode.guest}</h3>

                <div className="small-label topic-small">
                  TOPIC
                </div>

                <p>{episode.topic}</p>
              </div>

              {/* BUTTON */}
              <div className="episode-action">
                <Link
                  href={episode.href}
                  className="small-watch-button"
                >
                  <span>▶</span>
                  WATCH &amp; LISTEN
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="episodes-footer">
        <p>
          © {new Date().getFullYear()} SCOTTI BROTHERS ENTERTAINMENT
        </p>
      </footer>

      {/* =========================================
          PAGE STYLES
      ========================================= */}
      <style jsx>{`
        .episodes-page {
          min-height: 100vh;
          color: #17110b;
          background:
            radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, 0.18) 0%,
              rgba(255, 255, 255, 0) 60%
            ),
            repeating-linear-gradient(
              0deg,
              rgba(105, 65, 25, 0.025) 0px,
              rgba(105, 65, 25, 0.025) 1px,
              transparent 1px,
              transparent 4px
            ),
            #e9d2aa;
          overflow-x: hidden;
        }

        .episodes-header {
          width: 100%;
          background: rgba(235, 214, 177, 0.96);
          border-bottom: 1px solid rgba(85, 47, 15, 0.15);
        }

        .header-inner {
          max-width: 1180px;
          min-height: 115px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .brand-logo {
          width: 245px;
          height: 105px;
          object-fit: contain;
          object-position: left center;
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 52px;
        }

        .nav-link {
          position: relative;
          color: #16110c;
          text-decoration: none;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.04em;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #9e1619;
        }

        .nav-link.active {
          color: #9e1619;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -12px;
          height: 5px;
          border-radius: 999px;
          background: #9e1619;
        }

        .intro-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 35px 24px 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .intro-left h1 {
          margin: 0;
          font-size: clamp(62px, 7vw, 94px);
          line-height: 0.9;
          letter-spacing: -0.035em;
          font-weight: 950;
          color: #050505;
        }

        .red-rule {
          width: 128px;
          height: 8px;
          margin-top: 15px;
          background: #a7191c;
        }

        .intro-left p {
          margin: 14px 0 0;
          font-size: 19px;
          line-height: 1.25;
          font-weight: 750;
        }

        .watch-intro {
          padding-top: 8px;
          max-width: 440px;
          justify-self: end;
          width: 100%;
        }

        .watch-brush {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 330px;
          min-height: 74px;
          padding: 0 35px;
          background: #050505;
          color: #e9ad18;
          clip-path: polygon(
            2% 18%,
            7% 11%,
            17% 15%,
            29% 9%,
            42% 13%,
            57% 7%,
            72% 13%,
            84% 8%,
            96% 16%,
            99% 32%,
            96% 52%,
            100% 70%,
            92% 84%,
            80% 79%,
            65% 88%,
            51% 82%,
            35% 90%,
            20% 83%,
            8% 88%,
            2% 74%,
            5% 54%,
            1% 36%
          );
        }

        .watch-brush span {
          font-size: 30px;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.02em;
        }

        .watch-intro p {
          margin: 17px 0 0;
          font-size: 18px;
          line-height: 1.45;
        }

        .watch-intro strong {
          font-style: italic;
        }

        .featured-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px 18px;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          min-height: 365px;
          overflow: hidden;
          border: 2px solid rgba(125, 65, 26, 0.4);
          border-radius: 11px;
          background: rgba(249, 231, 198, 0.55);
          box-shadow: 0 2px 0 rgba(95, 47, 15, 0.05);
        }

        .featured-image-wrap {
          position: relative;
          min-height: 365px;
          overflow: hidden;
          background: #171717;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          min-height: 365px;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          min-height: 365px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle, #343434 0%, #171717 60%, #090909 100%);
          color: white;
          font-size: 36px;
          font-weight: 900;
        }

        .latest-ribbon {
          position: absolute;
          z-index: 3;
          left: 0;
          top: 0;
          padding: 9px 20px;
          background: #a7191c;
          color: white;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .live-now {
          position: absolute;
          z-index: 3;
          left: 14px;
          bottom: 14px;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .play-dot,
        .signal {
          color: #b51a1e;
          margin: 0 5px;
        }

        .featured-info {
          padding: 30px 42px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .info-label {
          color: #9e1619;
          font-size: 17px;
          font-weight: 950;
          letter-spacing: 0.04em;
        }

        .featured-info h2 {
          margin: 2px 0 15px;
          font-size: clamp(40px, 4vw, 55px);
          line-height: 0.95;
          font-weight: 950;
          letter-spacing: -0.025em;
        }

        .topic-label {
          margin-top: 3px;
        }

        .featured-info h3 {
          max-width: 450px;
          margin: 5px 0 0;
          font-size: 25px;
          line-height: 1.08;
          font-weight: 900;
        }

        .gold-rule {
          width: 95px;
          height: 4px;
          margin: 13px 0 13px;
          background: #c99a22;
        }

        .featured-info p {
          max-width: 470px;
          margin: 0;
          font-size: 16px;
          line-height: 1.4;
        }

        .watch-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: fit-content;
          margin-top: 20px;
          padding: 11px 19px;
          border-radius: 999px;
          background: #a7191c;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 0.035em;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .watch-button:hover {
          transform: translateY(-2px);
          background: #7f1114;
        }

        .button-play {
          width: 23px;
          height: 23px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          border-radius: 50%;
          font-size: 9px;
        }

        .all-episodes-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px 50px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 7px;
        }

        .section-heading h2 {
          margin: 0;
          color: #a7191c;
          font-size: 20px;
          font-weight: 950;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .heading-line {
          height: 2px;
          flex: 1;
          background: rgba(130, 75, 25, 0.45);
        }

        .episode-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .episode-row {
          min-height: 75px;
          display: grid;
          grid-template-columns: 160px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 0 20px 0 0;
          overflow: hidden;
          border: 1px solid rgba(125, 65, 26, 0.2);
          border-radius: 7px;
          background: rgba(248, 231, 199, 0.62);
        }

        .episode-thumbnail {
          position: relative;
          height: 75px;
          overflow: hidden;
          background: #111;
        }

        .film-top {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 7px;
          background: repeating-linear-gradient(
            90deg,
            #111 0px,
            #111 12px,
            #d7d7d7 12px,
            #d7d7d7 20px
          );
          opacity: 0.8;
        }

        .thumbnail-content {
          position: absolute;
          inset: 7px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at center,
              rgba(55, 55, 55, 0.9),
              #111 70%
            );
        }

        .small-play {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          border-radius: 50%;
          color: white;
          font-size: 14px;
          padding-left: 3px;
        }

        .episode-number {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 5px 10px;
          background: #a7191c;
          color: white;
          font-size: 12px;
          font-weight: 950;
        }

        .episode-info {
          padding: 8px 0;
        }

        .small-label {
          color: #a7191c;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.04em;
        }

        .episode-info h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1;
          font-weight: 950;
        }

        .topic-small {
          margin-top: 5px;
        }

        .episode-info p {
          margin: 1px 0 0;
          font-size: 14px;
          line-height: 1.15;
          font-weight: 500;
        }

        .episode-action {
          padding-left: 10px;
        }

        .small-watch-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 15px;
          border-radius: 999px;
          background: #a7191c;
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.03em;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .small-watch-button:hover {
          transform: translateY(-1px);
          background: #7f1114;
        }

        .small-watch-button span {
          width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid white;
          border-radius: 50%;
          font-size: 7px;
          padding-left: 1px;
        }

        .episodes-footer {
          padding: 30px 20px;
          border-top: 1px solid rgba(100, 55, 20, 0.2);
          text-align: center;
        }

        .episodes-footer p {
          margin: 0;
          color: rgba(30, 20, 10, 0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        @media (max-width: 900px) {
          .header-inner {
            min-height: 95px;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
          }

          .brand-logo {
            width: 190px;
            height: 72px;
          }

          .main-nav {
            gap: 20px;
            width: 100%;
            justify-content: center;
          }

          .nav-link {
            font-size: 11px;
          }

          .intro-section {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .watch-intro {
            justify-self: start;
          }

          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-image-wrap,
          .featured-image,
          .image-placeholder {
            min-height: 420px;
          }

          .episode-row {
            grid-template-columns: 130px 1fr;
            padding-right: 14px;
          }

          .episode-action {
            grid-column: 2;
            padding: 0 0 12px;
          }
        }

        @media (max-width: 600px) {
          .header-inner {
            padding: 8px 14px 14px;
          }

          .brand-logo {
            width: 170px;
            height: 65px;
          }

          .main-nav {
            gap: 12px;
          }

          .nav-link {
            font-size: 9px;
            letter-spacing: 0.02em;
          }

          .nav-link.active::after {
            bottom: -7px;
            height: 3px;
          }

          .intro-section {
            padding: 25px 16px 18px;
          }

          .intro-left h1 {
            font-size: 58px;
          }

          .intro-left p {
            font-size: 16px;
          }

          .watch-brush {
            min-width: 0;
            width: 100%;
            min-height: 62px;
          }

          .watch-brush span {
            font-size: 25px;
          }

          .watch-intro p {
            font-size: 15px;
          }

          .featured-section,
          .all-episodes-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .featured-image-wrap,
          .featured-image,
          .image-placeholder {
            min-height: 300px;
          }

          .featured-info {
            padding: 25px 22px 30px;
          }

          .featured-info h2 {
            font-size: 42px;
          }

          .featured-info h3 {
            font-size: 21px;
          }

          .featured-info p {
            font-size: 14px;
          }

          .episode-row {
            grid-template-columns: 100px 1fr;
            gap: 12px;
          }

          .episode-thumbnail {
            height: 68px;
          }

          .episode-info h3 {
            font-size: 16px;
          }

          .episode-info p {
            font-size: 12px;
          }

          .small-watch-button {
            font-size: 10px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </main>
  );
}
     
      
