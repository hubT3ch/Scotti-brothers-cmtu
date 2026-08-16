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
  description: string;
  videoUrl?: string;
  audioUrl?: string;
};

const episodes: Episode[] = [
  {
    slug: "episode-1",
    episodeNumber: "EPISODE 01",
    title: "Can't Make This Up!",
    guestName: "Jaheim",
    guestSubtitle: "R&B Singer & Songwriter",
    guestImage: "/images/episodes/jaheim.jpg",
    description:
      "The Scotti Brothers sit down with Jaheim for an unforgettable conversation.",
    videoUrl: "",
    audioUrl: "",
  },

  // Future episodes will be added here.
];

export default function EpisodesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#d9b985",
        color: "#111",
      }}
    >
      {/* FULL EPISODES BACKDROP */}
      <img
        src="/images/episodes/episodes-background.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Very light readability overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.04)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* PAGE CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
        }}
      >
        {/* NAVIGATION */}
        <header
          style={{
            width: "100%",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={navLink}>
              Home
            </Link>

            <Link href="/episodes" style={activeNavLink}>
              Episodes
            </Link>

            <Link href="/guests" style={navLink}>
              Guests
            </Link>

            <Link href="/merchandise" style={navLink}>
              Merchandise
            </Link>

            <Link href="/contact" style={navLink}>
              Contact
            </Link>
          </nav>
        </header>

        {/* PAGE INTRO */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "70px 32px 45px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#191919",
            }}
          >
            Scotti Brothers Entertainment
          </p>

          <h1
            style={{
              margin: "12px 0 0",
              fontSize: "clamp(48px, 8vw, 88px)",
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: "-3px",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Episodes
          </h1>

          <p
            style={{
              margin: "22px auto 0",
              maxWidth: "650px",
              fontSize: "20px",
              lineHeight: 1.5,
              fontWeight: 600,
              color: "#242424",
            }}
          >
            Real conversations. Real stories. No script. No filter.
          </p>
        </section>

        {/* EPISODES */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 32px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#333",
                }}
              >
                Watch &amp; Listen
              </p>

              <h2
                style={{
                  margin: "7px 0 0",
                  fontSize: "34px",
                  lineHeight: 1.1,
                  fontWeight: 900,
                  color: "#111",
                }}
              >
                Latest Episodes
              </h2>
            </div>
          </div>

          {episodes.length === 0 ? (
            <div
              style={{
                padding: "50px 30px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(0,0,0,0.12)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Episodes coming soon.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
                gap: "30px",
              }}
            >
              {episodes.map((episode) => (
                <article
                  key={episode.slug}
                  style={{
                    overflow: "hidden",
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.88)",
                    border: "1px solid rgba(0,0,0,0.12)",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* GUEST PHOTO */}
                  <Link
                    href={`/episodes/${episode.slug}`}
                    style={{
                      display: "block",
                      position: "relative",
                      aspectRatio: "4 / 3",
                      overflow: "hidden",
                      background: "#222",
                    }}
                  >
                    <Image
                      src={episode.guestImage}
                      alt={episode.guestName}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        padding: "9px 14px",
                        borderRadius: "999px",
                        background: "rgba(0,0,0,0.82)",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                      }}
                    >
                      {episode.episodeNumber}
                    </div>
                  </Link>

                  {/* EPISODE INFORMATION */}
                  <div
                    style={{
                      padding: "24px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#666",
                      }}
                    >
                      {episode.guestSubtitle}
                    </p>

                    <h3
                      style={{
                        margin: "7px 0 0",
                        fontSize: "30px",
                        lineHeight: 1,
                        fontWeight: 900,
                        color: "#111",
                      }}
                    >
                      {episode.guestName}
                    </h3>

                    <p
                      style={{
                        margin: "10px 0 0",
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#222",
                      }}
                    >
                      {episode.title}
                    </p>

                    <p
                      style={{
                        margin: "14px 0 0",
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "#555",
                      }}
                    >
                      {episode.description}
                    </p>

                    {/* BUTTONS */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginTop: "22px",
                      }}
                    >
                      <Link
                        href={`/episodes/${episode.slug}`}
                        style={primaryButton}
                      >
                        View Episode
                      </Link>

                      {episode.videoUrl && (
                        <a
                          href={episode.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={secondaryButton}
                        >
                          Watch
                        </a>
                      )}

                      {episode.audioUrl && (
                        <a
                          href={episode.audioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={secondaryButton}
                        >
                          Listen
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer
          style={{
            padding: "35px 25px",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#555",
            }}
          >
            © {new Date().getFullYear()} Scotti Brothers Entertainment
          </p>
        </footer>
      </div>
    </main>
  );
}

const navLink = {
  color: "#111",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 700,
};

const activeNavLink = {
  ...navLink,
  textDecoration: "underline",
  textUnderlineOffset: "5px",
};

const primaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "999px",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 800,
};

const secondaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "999px",
  background: "transparent",
  color: "#111",
  border: "1px solid rgba(0,0,0,0.25)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 800,
};