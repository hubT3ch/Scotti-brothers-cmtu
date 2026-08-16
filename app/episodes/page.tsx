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

const currentEpisode: Episode = {
  slug: "episode-1",
  episodeNumber: "EPISODE 01",
  title: "Can't Make This Up!",
  guestName: "Guest To Be Announced",
  guestSubtitle: "Guest Information Coming Soon",
  description:
    "The Scotti Brothers bring you real conversations, real stories, and unforgettable moments from the world of entertainment.",
};

const episodeReels = [
  {
    number: "02",
    title: "Coming Soon",
  },
  {
    number: "03",
    title: "Coming Soon",
  },
  {
    number: "04",
    title: "Coming Soon",
  },
];

export default function EpisodesPage() {
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
      {/* =========================================================
          EPISODES BACKGROUND
          The podcast artwork/logo is ALREADY part of this image.
          Do NOT add another logo on top of it.
      ========================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "url('/images/episodes/episodes-background.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* Subtle readability overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.04)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* =========================================================
          PAGE CONTENT
      ========================================================= */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* =======================================================
            NAVIGATION
        ======================================================= */}
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
              gap: "4px",
              padding: "8px 10px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
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

        {/* =======================================================
            EPISODES INTRO
        ======================================================= */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "35px 32px 28px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              marginLeft: "32%",
              maxWidth: "700px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Scotti Brothers Entertainment
            </p>

            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "clamp(50px, 7vw, 82px)",
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
                margin: "18px 0 0",
                maxWidth: "650px",
                fontSize: "19px",
                lineHeight: 1.45,
                fontWeight: 700,
              }}
            >
              Real conversations. Real stories. No script. No filter.
            </p>
          </div>
        </section>

        {/* =======================================================
            CURRENT EPISODE
        ======================================================= */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "25px 32px 28px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Watch &amp; Listen
          </p>

          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "32px",
              lineHeight: 1,
              fontWeight: 900,
            }}
          >
            Current Episode
          </h2>

          <article
            style={{
              display: "grid",
              gridTemplateColumns: "270px 1fr",
              minHeight: "235px",
              maxHeight: "270px",
              overflow: "hidden",
              borderRadius: "22px",
              background: "rgba(20,20,20,0.96)",
              boxShadow: "0 14px 35px rgba(0,0,0,0.18)",
            }}
          >
            {/* =================================================
                GUEST IMAGE PLACEHOLDER

                When the actual guest is confirmed, this area
                can use the uploaded guest image.
            ================================================= */}
            <div
              style={{
                position: "relative",
                minHeight: "235px",
                background:
                  "linear-gradient(145deg, #171717, #292929)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "25px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                }}
              >
                Guest Image
                <br />
                Coming Soon
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  padding: "7px 11px",
                  borderRadius: "999px",
                  background: "#050505",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "2px",
                }}
              >
                {currentEpisode.episodeNumber}
              </div>
            </div>

            {/* =================================================
                CURRENT EPISODE INFORMATION
            ================================================= */}
            <div
              style={{
                padding: "27px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#d9b985",
                  fontSize: "11px",
                  fontWeight: 900,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {currentEpisode.guestSubtitle}
              </p>

              <h3
                style={{
                  margin: "7px 0 0",
                  color: "#fff",
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 0.95,
                  fontWeight: 900,
                }}
              >
                {currentEpisode.guestName}
              </h3>

              <p
                style={{
                  margin: "8px 0 0",
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: 800,
                }}
              >
                {currentEpisode.title}
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  maxWidth: "650px",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                {currentEpisode.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "9px",
                  marginTop: "15px",
                }}
              >
                <span style={featuredButton}>
                  Episode Coming Soon
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* =======================================================
            EPISODE REELS
        ======================================================= */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "8px 32px 70px",
            boxSizing: "border-box",
          }}
        >
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
              margin: "6px 0 18px",
              fontSize: "30px",
              lineHeight: 1,
              fontWeight: 900,
            }}
          >
            Episode Reels
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {episodeReels.map((episode) => (
              <div
                key={episode.number}
                style={{
                  minHeight: "165px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(145deg, rgba(20,20,20,0.96), rgba(42,42,42,0.96))",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.14)",
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
                    fontSize: "10px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    color: "#d9b985",
                  }}
                >
                  EPISODE {episode.number}
                </span>

                <strong
                  style={{
                    marginTop: "9px",
                    fontSize: "23px",
                    fontWeight: 900,
                  }}
                >
                  {episode.title}
                </strong>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
            FOOTER
        ======================================================= */}
        <footer
          style={{
            padding: "28px 25px",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#555",
            }}
          >
            © {new Date().getFullYear()} Scotti Brothers Entertainment
          </p>
        </footer>
      </div>

      {/* =========================================================
          RESPONSIVE
      ========================================================= */}
      <style>{`
        @media (max-width: 900px) {
          header {
            padding: 18px 20px !important;
          }

          nav {
            gap: 2px !important;
            padding: 6px 8px !important;
          }

          nav a {
            font-size: 11px !important;
            padding: 6px 8px !important;
          }

          section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          section > div {
            margin-left: 0 !important;
            max-width: none !important;
          }

          article {
            grid-template-columns: 220px 1fr !important;
          }
        }

        @media (max-width: 650px) {
          header {
            justify-content: center !important;
          }

          nav {
            flex-wrap: wrap !important;
            justify-content: center !important;
            border-radius: 16px !important;
          }

          nav a {
            font-size: 10px !important;
            padding: 5px 6px !important;
          }

          article {
            grid-template-columns: 1fr !important;
            max-height: none !important;
          }

          article > div:first-child {
            min-height: 170px !important;
            height: 170px !important;
          }

          article > div:last-child {
            padding: 24px 22px !important;
          }

          section:last-of-type > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const navLink = {
  color: "#111",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 800,
  whiteSpace: "nowrap",
  padding: "8px 12px",
  borderRadius: "999px",
};

const activeNavLink = {
  ...navLink,
  background: "#111",
  color: "#fff",
};

const featuredButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "9px 15px",
  borderRadius: "999px",
  background: "#d9b985",
  color: "#111",
  fontSize: "11px",
  fontWeight: 900,
};