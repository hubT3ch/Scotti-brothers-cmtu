"use client";

import Image from "next/image";
import Link from "next/link";

type Episode = {
  number: string;
  guest: string;
  topic: string;
  description: string;
  image?: string;
  featured?: boolean;
};

const episodes: Episode[] = [
  {
    number: "01",
    guest: "JAHEIM",
    topic: "The Comeback, the Struggle & the Blessings",
    description:
      "Jaheim gets real about his journey, the music industry, staying grounded and why faith keeps him moving forward.",
    image: "/images/episodes/jaheim.png",
    featured: true,
  },
  {
    number: "11",
    guest: "CLIFF LIGHTY",
    topic: "Building Brands, Taking Risks & Staying True",
    image: "/images/episodes/episode-11.png",
  },
  {
    number: "10",
    guest: "SPECIAL GUEST",
    topic: "The Early Days & Lessons Learned",
    image: "/images/episodes/episode-10.png",
  },
  {
    number: "09",
    guest: "MUSIC INDUSTRY VETERAN",
    topic: "Stories From Behind the Scenes",
    image: "/images/episodes/episode-09.png",
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
  const featuredEpisode = episodes.find((episode) => episode.featured);
  const regularEpisodes = episodes.filter((episode) => !episode.featured);

  return (
    <main className="episodes-page">
      {/* HEADER */}
      <header className="episodes-header">
        <Link href="/" className="episodes-logo">
          <Image
            src="/images/logo/logo.png"
            alt="Scotti Brothers Can't Make This Up Podcast"
            fill
            priority
            sizes="220px"
            className="episodes-logo-image"
          />
        </Link>

        <nav className="episodes-navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`episodes-nav-link ${
                item.href === "/episodes" ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* INTRO */}
      <section className="episodes-intro-section">
        <div className="episodes-title-block">
          <h1>EPISODES</h1>

          <div className="red-title-line" />

          <p>
            Unbelievable moments. Real stories.
            <br />
            Music industry insanity.
          </p>
        </div>

        <div className="watch-listen-heading">
          <div className="brush-heading">
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

      {/* FEATURED EPISODE */}
      {featuredEpisode && (
        <section className="featured-episode">
          <div className="featured-image">
            {featuredEpisode.image ? (
              <Image
                src={featuredEpisode.image}
                alt={featuredEpisode.guest}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className="featured-guest-photo"
              />
            ) : (
              <div className="image-placeholder">
                <span>JAHEIM</span>
              </div>
            )}

            <div className="latest-ribbon">
              ★ LATEST EPISODE ★
            </div>

            <div className="live-now">
              <span className="play-dot">▶</span>
              LIVE NOW
              <span className="broadcast">◉</span>
            </div>
          </div>

          <div className="featured-information">
            <div className="information-label">GUEST</div>

            <h2>{featuredEpisode.guest}</h2>

            <div className="information-label topic-label">TOPIC</div>

            <h3>{featuredEpisode.topic}</h3>

            <div className="gold-line" />

            <p>{featuredEpisode.description}</p>

            <Link
              href="/episodes/episode-1"
              className="watch-button featured-watch"
            >
              <span className="button-play">▶</span>
              WATCH &amp; LISTEN
            </Link>
          </div>
        </section>
      )}

      {/* ALL EPISODES */}
      <section className="all-episodes">
        <div className="all-episodes-heading">
          <h2>ALL EPISODES</h2>
          <div className="heading-line" />
        </div>

        <div className="episode-list">
          {regularEpisodes.map((episode) => (
            <article className="episode-row" key={episode.number}>
              <div className="episode-thumbnail">
                {episode.image ? (
                  <Image
                    src={episode.image}
                    alt={episode.guest}
                    fill
                    sizes="160px"
                    className="episode-thumbnail-image"
                  />
                ) : (
                  <div className="thumbnail-placeholder">
                    <span className="thumbnail-play">▶</span>
                  </div>
                )}

                <div className="episode-number">
                  EP. {episode.number}
                </div>

                <div className="thumbnail-play-overlay">▶</div>
              </div>

              <div className="episode-row-information">
                <div className="row-label">GUEST</div>

                <h3>{episode.guest}</h3>

                <div className="row-label topic-row-label">
                  TOPIC
                </div>

                <p>{episode.topic}</p>
              </div>

              <Link
                href={`/episodes/episode-${episode.number}`}
                className="watch-button row-watch-button"
              >
                <span className="button-play">▶</span>
                WATCH &amp; LISTEN
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* DECORATIVE RIGHT-SIDE PODCAST ART */}
      <div className="podcast-decoration" aria-hidden="true">
        <div className="headphones">
          <div className="earcup left-earcup" />
          <div className="earcup right-earcup" />
          <div className="headband" />
        </div>

        <div className="podcast-cup">
          <div className="cup-lid" />
          <div className="straw" />
          <div className="cup-label">
            <small>THE SCOTTI BROTHERS</small>
            <strong>
              CAN'T MAKE
              <br />
              THIS UP!
            </strong>
            <span>★ PODCAST ★</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="episodes-footer">
        © {new Date().getFullYear()} SCOTTI BROTHERS ENTERTAINMENT
      </footer>

      <style jsx>{`
        .episodes-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          color: #17130f;
          background:
            radial-gradient(
              ellipse at 15% 15%,
              rgba(255, 255, 255, 0.35),
              transparent 32%
            ),
            radial-gradient(
              ellipse at 80% 70%,
              rgba(150, 90, 35, 0.08),
              transparent 40%
            ),
            #d9b98a;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .episodes-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.22;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(90, 52, 20, 0.08) 0px,
              rgba(90, 52, 20, 0.08) 1px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.07) 0px,
              rgba(255, 255, 255, 0.07) 1px,
              transparent 1px,
              transparent 5px
            );
          z-index: 0;
        }

        .episodes-header,
        .episodes-intro-section,
        .featured-episode,
        .all-episodes,
        .episodes-footer {
          position: relative;
          z-index: 2;
        }

        .episodes-header {
          width: min(1180px, 92%);
          margin: 0 auto;
          min-height: 110px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .episodes-logo {
          position: relative;
          display: block;
          width: 220px;
          height: 105px;
          flex-shrink: 0;
        }

        .episodes-logo-image {
          object-fit: contain;
          object-position: left center;
        }

        .episodes-navigation {
          display: flex;
          align-items: center;
          gap: clamp(22px, 3vw, 52px);
        }

        .episodes-nav-link {
          position: relative;
          color: #17130f;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-decoration: none;
        }

        .episodes-nav-link:hover,
        .episodes-nav-link.active {
          color: #8e1c1b;
        }

        .episodes-nav-link.active::after {
          content: "";
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: -12px;
          height: 5px;
          border-radius: 3px;
          background: #8e1c1b;
        }

        .episodes-intro-section {
          width: min(1180px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          padding: 60px 0 30px;
        }

        .episodes-title-block h1 {
          margin: 0;
          font-size: clamp(66px, 8vw, 110px);
          line-height: 0.85;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .red-title-line {
          width: 150px;
          height: 7px;
          margin-top: 18px;
          background: #a52320;
        }

        .episodes-title-block > p {
          margin: 14px 0 0;
          font-size: 19px;
          line-height: 1.25;
          font-weight: 800;
        }

        .watch-listen-heading {
          padding-top: 5px;
        }

        .brush-heading {
          position: relative;
          display: inline-block;
          padding: 13px 42px;
          background: #090909;
          transform: rotate(-1deg);
          color: #e5aa27;
          font-size: 31px;
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: 700;
        }

        .brush-heading::before,
        .brush-heading::after {
          content: "";
          position: absolute;
          left: -8px;
          right: -8px;
          height: 5px;
          background: #090909;
        }

        .brush-heading::before {
          top: 4px;
        }

        .brush-heading::after {
          bottom: 4px;
        }

        .watch-listen-heading > p {
          margin: 25px 0 0;
          font-size: 17px;
          line-height: 1.55;
        }

        .watch-listen-heading strong {
          font-style: italic;
        }

        .featured-episode {
          width: min(1180px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 55% 45%;
          min-height: 375px;
          overflow: hidden;
          border: 2px solid rgba(142, 28, 27, 0.35);
          border-radius: 9px;
          background: rgba(245, 222, 184, 0.7);
        }

        .featured-image {
          position: relative;
          min-height: 375px;
          overflow: hidden;
          background: #171717;
        }

        .featured-guest-photo {
          object-fit: cover;
          object-position: center;
        }

        .image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #171717;
          color: #fff;
          font-size: 50px;
          font-weight: 900;
        }

        .latest-ribbon {
          position: absolute;
          left: 0;
          top: 0;
          padding: 9px 22px;
          background: #a91e1d;
          color: white;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .live-now {
          position: absolute;
          bottom: 14px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          background: rgba(0, 0, 0, 0.82);
          color: white;
          font-size: 13px;
          font-weight: 900;
        }

        .play-dot {
          color: white;
          font-size: 11px;
        }

        .broadcast {
          color: #a91e1d;
        }

        .featured-information {
          padding: 25px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .information-label,
        .row-label {
          color: #982321;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .featured-information h2 {
          margin: 2px 0 12px;
          font-size: 48px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .topic-label {
          margin-top: 5px;
        }

        .featured-information h3 {
          max-width: 440px;
          margin: 5px 0 0;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 900;
        }

        .gold-line {
          width: 105px;
          height: 3px;
          margin: 13px 0;
          background: #c28a20;
        }

        .featured-information > p {
          max-width: 440px;
          margin: 0;
          font-size: 15px;
          line-height: 1.45;
        }

        .watch-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: fit-content;
          border: 0;
          border-radius: 999px;
          background: #a51f1e;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .watch-button:hover {
          background: #821817;
          transform: translateY(-2px);
        }

        .featured-watch {
          margin-top: 18px;
          padding: 12px 22px;
        }

        .button-play {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          color: #a51f1e;
          font-size: 9px;
        }

        .all-episodes {
          width: min(1180px, 92%);
          margin: 0 auto;
          padding: 15px 0 100px;
        }

        .all-episodes-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 12px 0 7px;
        }

        .all-episodes-heading h2 {
          margin: 0;
          color: #a51f1e;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.03em;
        }

        .heading-line {
          height: 2px;
          flex: 1;
          background: rgba(142, 28, 27, 0.55);
        }

        .episode-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .episode-row {
          display: grid;
          grid-template-columns: 160px minmax(0, 1fr) 185px;
          align-items: center;
          min-height: 78px;
          overflow: hidden;
          border: 1px solid rgba(142, 28, 27, 0.18);
          border-radius: 6px;
          background: rgba(242, 219, 181, 0.72);
        }

        .episode-thumbnail {
          position: relative;
          align-self: stretch;
          min-height: 78px;
          overflow: hidden;
          background: #111;
        }

        .episode-thumbnail-image {
          object-fit: cover;
        }

        .thumbnail-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(
              135deg,
              #181818,
              #292929
            );
        }

        .thumbnail-play {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          border: 2px solid white;
          border-radius: 50%;
          color: white;
          font-size: 14px;
        }

        .episode-number {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 6px 10px;
          background: #a51f1e;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
        }

        .thumbnail-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
        }

        .episode-row-information {
          padding: 8px 20px;
        }

        .episode-row-information h3 {
          margin: 1px 0 1px;
          font-size: 19px;
          line-height: 1;
          font-weight: 900;
        }

        .topic-row-label {
          display: inline-block;
          margin-right: 6px;
        }

        .episode-row-information p {
          display: inline;
          margin: 0;
          font-size: 13px;
          font-weight: 600;
        }

        .row-watch-button {
          justify-self: end;
          margin-right: 18px;
          padding: 10px 15px;
          font-size: 10px;
          white-space: nowrap;
        }

        .podcast-decoration {
          position: absolute;
          z-index: 1;
          right: -10px;
          bottom: -15px;
          width: 280px;
          height: 500px;
          pointer-events: none;
        }

        .headphones {
          position: absolute;
          bottom: 70px;
          left: 10px;
          width: 220px;
          height: 175px;
          transform: rotate(-14deg);
        }

        .headband {
          position: absolute;
          left: 25px;
          top: 0;
          width: 165px;
          height: 125px;
          border: 23px solid #171717;
          border-bottom: 0;
          border-radius: 100px 100px 0 0;
        }

        .earcup {
          position: absolute;
          bottom: 8px;
          width: 65px;
          height: 82px;
          border-radius: 25px;
          background: #111;
          border: 7px solid #252525;
          box-shadow: inset 0 0 0 7px #050505;
        }

        .left-earcup {
          left: 0;
        }

        .right-earcup {
          right: 0;
        }

        .podcast-cup {
          position: absolute;
          right: 5px;
          bottom: 0;
          width: 130px;
          height: 230px;
          border-radius: 12px 12px 32px 32px;
          background: linear-gradient(90deg, #831817, #d32b25 48%, #921b1b);
          transform: rotate(4deg);
          box-shadow: -8px 10px 20px rgba(0, 0, 0, 0.25);
        }

        .cup-lid {
          position: absolute;
          top: -10px;
          left: -7px;
          width: 144px;
          height: 25px;
          border-radius: 50%;
          background: #151515;
          border: 4px solid #292929;
        }

        .straw {
          position: absolute;
          top: -105px;
          right: 25px;
          width: 8px;
          height: 130px;
          background: #a51f1e;
          transform: rotate(18deg);
          transform-origin: bottom;
        }

        .cup-label {
          position: absolute;
          left: 14px;
          right: 14px;
          top: 70px;
          padding: 10px 5px;
          text-align: center;
          border: 2px solid #dca32b;
          border-radius: 50%;
          background: #111;
          color: #fff;
          transform: rotate(-4deg);
        }

        .cup-label small {
          display: block;
          font-size: 6px;
          font-weight: 900;
        }

        .cup-label strong {
          display: block;
          margin: 2px 0;
          color: #e2a929;
          font-size: 16px;
          line-height: 0.85;
          font-weight: 900;
        }

        .cup-label span {
          display: block;
          color: #d71920;
          font-size: 7px;
          font-weight: 900;
        }

        .episodes-footer {
          padding: 30px 20px;
          border-top: 1px solid rgba(100, 55, 20, 0.25);
          text-align: center;
          color: rgba(30, 20, 10, 0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        @media (max-width: 950px) {
          .episodes-header {
            flex-direction: column;
            padding: 20px 0;
          }

          .episodes-navigation {
            gap: 18px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .episodes-intro-section {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .featured-episode {
            grid-template-columns: 1fr;
          }

          .featured-image {
            min-height: 430px;
          }

          .featured-information {
            padding: 35px;
          }

          .podcast-decoration {
            opacity: 0.28;
          }
        }

        @media (max-width: 700px) {
          .episodes-navigation {
            gap: 12px 16px;
          }

          .episodes-nav-link {
            font-size: 10px;
          }

          .episodes-logo {
            width: 190px;
            height: 90px;
          }

          .episodes-title-block h1 {
            font-size: 65px;
          }

          .featured-information h2 {
            font-size: 42px;
          }

          .episode-row {
            grid-template-columns: 105px minmax(0, 1fr);
          }

          .row-watch-button {
            grid-column: 2;
            justify-self: start;
            margin: 0 0 12px 20px;
          }

          .episode-thumbnail {
            grid-row: span 2;
          }

          .episode-row-information {
            padding: 12px 15px 4px;
          }

          .episode-row-information h3 {
            font-size: 16px;
          }

          .episode-row-information p {
            font-size: 11px;
          }

          .podcast-decoration {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .episodes-intro-section,
          .featured-episode,
          .all-episodes {
            width: 94%;
          }

          .episodes-title-block h1 {
            font-size: 55px;
          }

          .episodes-title-block > p {
            font-size: 16px;
          }

          .brush-heading {
            font-size: 24px;
            padding: 11px 25px;
          }

          .featured-image {
            min-height: 320px;
          }

          .featured-information {
            padding: 25px;
          }

          .featured-information h2 {
            font-size: 38px;
          }

          .episode-row {
            grid-template-columns: 95px minmax(0, 1fr);
          }

          .episode-thumbnail {
            min-height: 105px;
          }
        }
      `}</style>
    </>
  );
}
