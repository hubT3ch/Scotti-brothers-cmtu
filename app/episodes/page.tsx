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
        .episodes-footer {
          padding: 30px 20px;
          border-top: 1px solid rgba(100, 55, 20, 0.25);
          text-align: center;
          color: rgba(30, 20, 10, 0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }
      `}</style>
    </main>
  );
}
     
      
