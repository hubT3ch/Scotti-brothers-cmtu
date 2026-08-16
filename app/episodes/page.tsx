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
];

export default function EpisodesPage() {
  const currentEpisode = episodes[0];
  const additionalEpisodes = episodes.slice(1);

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#d9b985",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "url('/images/episodes/episodes-background.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* LIGHT OVERLAY */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.05)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* NAVIGATION */}
        <header
          style={{
            width: "100%",
            padding: "24px 34px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 12px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
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

        {/* EPISODES HERO */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "30px 32px 35px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(260px, 0.8fr) minmax(420px, 1.2fr)",
              alignItems: "center",
              gap: "55px",
            }}
          >
            {/* LEFT SIDE */}
            <div
              style={{
                minHeight: "230px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/logo/logo.png"
                alt="Scotti Brothers"
                style={{
                  width: "min(330px, 100%)",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.15))",
                }}
              />
            </div>

            {/* RIGHT SIDE */}
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                Scotti Brothers Entertainment
              </p>

              <h1
                style={{
                  margin: "10px 0 0",
                  fontSize: "clamp(52px, 7vw, 82px)",
                  lineHeight: 0.9,
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  textTransform: "uppercase",
                }}
              >
                Episodes
              </h1>

              <p
                style={{
                  margin: "20px 0 0",
                  maxWidth: "650px",
                  fontSize: "19px",
                  lineHeight: 1.45,
                  fontWeight: 700,
                }}
              >
                Real conversations. Real stories. No script. No filter.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT EPISODE */}
        {currentEpisode && (
          <section
            style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "10px 32px 45px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Watch &amp; Listen
            </p>

            <h2
              style={{
                margin: "0 0 18px",
                fontSize: "34px",
                lineHeight: 1,
                fontWeight: 900,
              }}
            >
              Current Episode
            </h2>

            <article
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(280px, 380px) 1fr",
                minHeight: "300px",
                overflow: "hidden",
                borderRadius: "24px",
                background: "rgba(20,20,20,0.96)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.20)",
              }}
            >
              {/* GUEST IMAGE */}
              <div
                style={{
                  position: "relative",
                  minHeight: "300px",
                  background: "#171717",
                  overflow: "hidden",
                }}
              >
                <img
                  src={currentEpisode.guestImage}
                  alt={currentEpisode.guestName}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "300px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    padding: "8px 13px",
                    borderRadius: "999px",
                    background: "#050505",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                  }}
                >
                  {currentEpisode.episodeNumber}
                </div>
              </div>

              {/* EPISODE CONTENT */}
              <div
                style={{
                  padding: "34px 38px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#d9b985",
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {currentEpisode.guestSubtitle}
                </p>

                <h3
                  style={{
                    margin: "8px 0 0",
                    color: "#fff",
                    fontSize: "clamp(38px, 5vw, 58px)",
                    lineHeight: 0.95,
                    fontWeight: 900,
                  }}
                >
                  {currentEpisode.guestName}
                </h3>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 800,
                  }}
                >
                  {currentEpisode.title}
                </p>

                <p
                  style={{
                    margin: "15px 0 0",
                    maxWidth: "600px",
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {currentEpisode.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "22px",
                  }}
                >
                  <Link
                    href={`/episodes/${currentEpisode.slug}`}
                    style={featuredButton}
                  >
                    View Episode
                  </Link>

                  {currentEpisode.videoUrl && (
                    <a
                      href={currentEpisode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={featuredSecondaryButton}
                    >
                      Watch
                    </a>
                  )}

                  {currentEpisode.audioUrl && (
                    <a
                      href={currentEpisode.audioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={featuredSecondaryButton}
                    >
                      Listen
                    </a>
                  )}
                </div>
              </div>
            </article>
          </section>
        )}

        {/* EPISODE REELS */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px 80px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  fontWeight: 900,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                More From The Show
              </p>

              <h2
                style={{
                  margin: "6px 0 0",
                  fontSize: "32px",
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                Episode Reels
              </h2>
            </div>
          </div>

          {additionalEpisodes.length > 0 ? (
            <div
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                paddingBottom: "12px",
                scrollSnapType: "x mandatory",
              }}
            >
              {additionalEpisodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/episodes/${episode.slug}`}
                  style={{
                    flex: "0 0 280px",
                    scrollSnapAlign: "start",
                    textDecoration: "none",
                    color: "#111",
                  }}
                >
                  <article
                    style={{
                      overflow: "hidden",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(0,0,0,0.12)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "175px",
                        overflow: "hidden",
                        background: "#222",
                      }}
                    >
                      <img
                        src={episode.guestImage}
                        alt={episode.guestName}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          padding: "7px 10px",
                          borderRadius: "999px",
                          background: "#111",
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 900,
                          letterSpacing: "1.5px",
                        }}
                      >
                        {episode.episodeNumber}
                      </span>
                    </div>

                    <div style={{ padding: "17px" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#666",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                        }}
                      >
                        {episode.guestSubtitle}
                      </p>

                      <h3
                        style={{
                          margin: "5px 0 0",
                          fontSize: "25px",
                          fontWeight: 900,
                        }}
                      >
                        {episode.guestName}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "18px",
                overflowX: "auto",
                paddingBottom: "12px",
              }}
            >
              {[2, 3, 4].map((number) => (
                <div
                  key={number}
                  style={{
                    flex: "0 0 280px",
                    height: "210px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(145deg, rgba(20,20,20,0.94), rgba(45,45,45,0.94))",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.14)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      letterSpacing: "2px",
                      color: "#d9b985",
                    }}
                  >
                    EPISODE {String(number).padStart(2, "0")}
                  </span>

                  <strong
                    style={{
                      marginTop: "10px",
                      fontSize: "24px",
                      fontWeight: 900,
                    }}
                  >
                    Coming Soon
                  </strong>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer
          style={{
            padding: "30px 25px",
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

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 850px) {
          header {
            padding: 18px 20px !important;
          }

          nav {
            gap: 3px !important;
            padding: 7px 8px !important;
          }

          nav a {
            font-size: 12px !important;
            padding: 7px 8px !important;
          }

          section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          article[style*="grid-template-columns: minmax(280px"] {
            grid-template-columns: 1fr !important;
          }

          article[style*="grid-template-columns: minmax(280px"] > div:first-child {
            height: 260px !important;
            min-height: 260px !important;
          }

          article[style*="grid-template-columns: minmax(280px"] > div:first-child img {
            min-height: 260px !important;
          }
        }

        @media (max-width: 600px) {
          header {
            justify-content: center !important;
          }

          nav {
            flex-wrap: wrap !important;
            justify-content: center !important;
            border-radius: 18px !important;
          }

          nav a {
            font-size: 11px !important;
            padding: 6px 7px !important;
          }

          section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          article[style*="grid-template-columns: minmax(280px"] > div:last-child {
            padding: 26px 22px !important;
          }
        }
      `}</style>
    </main>
  );
}

const navLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 800,
  whiteSpace: "nowrap",
  padding: "8px 12px",
  borderRadius: "999px",
};

const activeNavLink = {
  ...navLink,
  background: "rgba(255,255,255,0.16)",
};

const featuredButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 19px",
  borderRadius: "999px",
  background: "#d9b985",
  color: "#111",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 900,
};

const featuredSecondaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 19px",
  borderRadius: "999px",
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.35)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 800,
};
