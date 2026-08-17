import Link from "next/link";

type Episode = {
  slug: string;
  episodeNumber: string;
  title: string;
  guestName: string;
  guestSubtitle: string;
  guestImage?: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
};

/*
 * NO GUEST IS CURRENTLY CONFIRMED.
 *
 * When the first guest is confirmed, we can add the episode here.
 *
 * Example:
 *
 * {
 *   slug: "episode-1",
 *   episodeNumber: "EPISODE 01",
 *   title: "Can't Make This Up!",
 *   guestName: "Guest Name",
 *   guestSubtitle: "Guest Description",
 *   guestImage: "/images/episodes/guest-name.jpg",
 *   description: "Episode description.",
 * }
 */

const episodes: Episode[] = [];

/*
 * These are placeholders until actual episodes are added.
 * They make sure the Episode Reels section is visible now.
 */
const comingSoonEpisodes = [2, 3, 4];

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function EpisodesPage() {
  const currentEpisode = episodes[0] ?? null;
  const additionalEpisodes = episodes.slice(1);

  return (
    <main className="episodes-page">
      {/* BACKGROUND */}
      <div
        className="episodes-background"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="episodes-content">

        {/* NAVIGATION */}
        <header className="episodes-header">
          <nav
            className="episodes-nav"
            aria-label="Main navigation"
          >
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

        {/* PAGE HERO */}
        <section className="episodes-hero">
          <div className="episodes-hero-copy">
            <p className="eyebrow">
              Scotti Brothers Entertainment
            </p>

            <h1>Episodes</h1>

            <p className="hero-subtitle">
              Real conversations. Real stories. No script. No filter.
            </p>
          </div>
        </section>

        {/* CURRENT EPISODE */}
        <section className="current-section">
          <div className="section-heading">
            <p className="eyebrow">Watch &amp; Listen</p>

            <h2>Current Episode</h2>
          </div>

          {currentEpisode ? (
            <article className="current-episode-card">

              <div className="current-episode-image">
                {currentEpisode.guestImage ? (
                  <img
                    src={currentEpisode.guestImage}
                    alt={currentEpisode.guestName}
                  />
                ) : (
                  <div className="image-placeholder">
                    Guest Image Coming Soon
                  </div>
                )}

                <span className="episode-badge">
                  {currentEpisode.episodeNumber}
                </span>
              </div>

              <div className="current-episode-content">
                <p className="guest-subtitle">
                  {currentEpisode.guestSubtitle}
                </p>

                <h3>{currentEpisode.guestName}</h3>

                <p className="episode-title">
                  {currentEpisode.title}
                </p>

                <p className="episode-description">
                  {currentEpisode.description}
                </p>

                <div className="episode-buttons">
                  <Link
                    href={`/episodes/${currentEpisode.slug}`}
                    className="primary-button"
                  >
                    View Episode
                  </Link>

                  {currentEpisode.videoUrl && (
                    <a
                      href={currentEpisode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button"
                    >
                      Watch
                    </a>
                  )}

                  {currentEpisode.audioUrl && (
                    <a
                      href={currentEpisode.audioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button"
                    >
                      Listen
                    </a>
                  )}
                </div>
              </div>
            </article>
          ) : (
            /*
             * COMPACT PLACEHOLDER
             *
             * This replaces the oversized black Jaheim card
             * until an actual episode is confirmed.
             */
            <div className="current-placeholder">
              <div>
                <span className="episode-badge">
                  EPISODE 01
                </span>

                <h3>Coming Soon</h3>

                <p>
                  Our first episode is coming soon.
                  Check back for the official guest announcement.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* EPISODE REELS */}
        <section className="reels-section">
          <div className="section-heading reels-heading">
            <div>
              <p className="eyebrow">
                More From The Show
              </p>

              <h2>Episode Reels</h2>
            </div>
          </div>

          {additionalEpisodes.length > 0 ? (
            <div className="reels-row">
              {additionalEpisodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/episodes/${episode.slug}`}
                  className="reel-card"
                >
                  <div className="reel-image">
                    {episode.guestImage ? (
                      <img
                        src={episode.guestImage}
                        alt={episode.guestName}
                      />
                    ) : (
                      <div className="reel-placeholder">
                        Guest Image Coming Soon
                      </div>
                    )}

                    <span className="episode-badge">
                      {episode.episodeNumber}
                    </span>
                  </div>

                  <div className="reel-content">
                    <p>{episode.guestSubtitle}</p>
                    <h3>{episode.guestName}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="reels-row">
              {comingSoonEpisodes.map((number) => (
                <div
                  key={number}
                  className="reel-card coming-soon-card"
                >
                  <div className="reel-coming-soon">
                    <span className="episode-badge">
                      EPISODE {String(number).padStart(2, "0")}
                    </span>

                    <strong>Coming Soon</strong>

                    <p>
                      New episode
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="episodes-footer">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .episodes-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background: #d9b985;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
        }

        .episodes-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.035),
              rgba(255,255,255,0.035)
            ),
            url("/images/episodes/episodes-background.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .episodes-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* NAVIGATION */

        .episodes-header {
          width: 100%;
          padding: 24px 42px 0;
          display: flex;
          justify-content: flex-end;
        }

        .episodes-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.48);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .episodes-nav-link {
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
        }

        .episodes-nav-link.active {
          background: rgba(255,255,255,0.18);
        }

        /* HERO */

        .episodes-hero {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 310px;
          padding: 90px 32px 50px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .episodes-hero-copy {
          width: 58%;
          padding-right: 30px;
        }

        .eyebrow {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #191919;
        }

        .episodes-hero h1 {
          margin: 10px 0 0;
          font-size: clamp(54px, 7vw, 86px);
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -3px;
          text-transform: uppercase;
        }

        .hero-subtitle {
          margin: 20px 0 0;
          max-width: 650px;
          font-size: 19px;
          line-height: 1.45;
          font-weight: 700;
        }

        /* CURRENT EPISODE */

        .current-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 45px;
        }

        .section-heading {
          margin-bottom: 18px;
        }

        .section-heading h2 {
          margin: 6px 0 0;
          font-size: 34px;
          line-height: 1;
          font-weight: 900;
        }

        .current-episode-card {
          display: grid;
          grid-template-columns: 300px 1fr;
          min-height: 250px;
          overflow: hidden;
          border-radius: 22px;
          background: rgba(20,20,20,0.96);
          box-shadow: 0 14px 32px rgba(0,0,0,0.18);
        }

        .current-episode-image {
          position: relative;
          min-height: 250px;
          background: #191919;
          overflow: hidden;
        }

        .current-episode-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          font-weight: 700;
        }

        .episode-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 11px;
          border-radius: 999px;
          background: #050505;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.8px;
          white-space: nowrap;
        }

        .current-episode-image .episode-badge {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .current-episode-content {
          padding: 28px 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .guest-subtitle {
          margin: 0;
          color: #d9b985;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .current-episode-content h3 {
          margin: 7px 0 0;
          color: #fff;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 0.95;
          font-weight: 900;
        }

        .episode-title {
          margin: 9px 0 0;
          color: #fff;
          font-size: 18px;
          font-weight: 800;
        }

        .episode-description {
          margin: 12px 0 0;
          max-width: 650px;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          line-height: 1.55;
        }

        .episode-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 18px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 17px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
        }

        .primary-button {
          background: #d9b985;
          color: #111;
        }

        .secondary-button {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.35);
        }

        /* CURRENT PLACEHOLDER */

        .current-placeholder {
          min-height: 145px;
          padding: 24px 30px;
          display: flex;
          align-items: center;
          border-radius: 20px;
          background: rgba(20,20,20,0.94);
          box-shadow: 0 14px 32px rgba(0,0,0,0.16);
          color: #fff;
        }

        .current-placeholder h3 {
          margin: 10px 0 5px;
          font-size: 30px;
          line-height: 1;
          font-weight: 900;
        }

        .current-placeholder p {
          margin: 0;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
        }

        /* REELS */

        .reels-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 80px;
        }

        .reels-heading {
          margin-bottom: 16px;
        }

        .reels-row {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding: 4px 2px 14px;
          scroll-snap-type: x mandatory;
        }

        .reel-card {
          flex: 0 0 280px;
          min-width: 280px;
          overflow: hidden;
          border-radius: 18px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          text-decoration: none;
          color: #111;
          scroll-snap-align: start;
        }

        .reel-image {
          position: relative;
          height: 165px;
          overflow: hidden;
          background: #222;
        }

        .reel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .reel-image .episode-badge {
          position: absolute;
          top: 12px;
          left: 12px;
        }

        .reel-content {
          padding: 15px 17px 18px;
        }

        .reel-content p {
          margin: 0;
          color: #666;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .reel-content h3 {
          margin: 5px 0 0;
          font-size: 24px;
          font-weight: 900;
        }

        /* COMING SOON REELS */

        .coming-soon-card {
          height: 205px;
          background: rgba(20,20,20,0.94);
          color: #fff;
        }

        .reel-coming-soon {
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .reel-coming-soon strong {
          margin-top: 12px;
          font-size: 23px;
          font-weight: 900;
        }

        .reel-coming-soon p {
          margin: 6px 0 0;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
        }

        /* FOOTER */

        .episodes-footer {
          padding: 28px 20px;
          text-align: center;
          border-top: 1px solid rgba(0,0,0,0.12);
          color: #555;
          font-size: 13px;
        }

        /* TABLET */

        @media (max-width: 850px) {
          .episodes-header {
            padding: 18px 20px 0;
          }

          .episodes-hero {
            min-height: 280px;
            padding: 70px 20px 40px;
          }

          .episodes-hero-copy {
            width: 65%;
            padding-right: 0;
          }

          .current-section,
          .reels-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .current-episode-card {
            grid-template-columns: 250px 1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .episodes-header {
            justify-content: center;
          }

          .episodes-nav {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 18px;
          }

          .episodes-nav-link {
            font-size: 11px;
            padding: 6px 8px;
          }

          .episodes-hero {
            min-height: 250px;
            padding: 55px 16px 35px;
            justify-content: center;
          }

          .episodes-hero-copy {
            width: 100%;
            text-align: center;
          }

          .episodes-hero h1 {
            font-size: 58px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .current-section,
          .reels-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .current-episode-card {
            grid-template-columns: 1fr;
          }

          .current-episode-image {
            min-height: 220px;
          }

          .image-placeholder {
            min-height: 220px;
          }

          .current-episode-content {
            padding: 24px 22px;
          }

          .current-placeholder {
            min-height: 135px;
            padding: 22px;
          }

          .current-placeholder h3 {
            font-size: 27px;
          }

          .reel-card {
            flex-basis: 260px;
            min-width: 260px;
          }
        }
      `}</style>
    </main>
  );
}
