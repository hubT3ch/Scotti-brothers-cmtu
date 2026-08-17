import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =========================================================
          HERO ARTWORK
          Desktop/tablet:
          Entire artwork remains visible.

          Portrait phone:
          Artwork fills the height so it remains large enough
          to read and see the podcast title.
          ========================================================= */}
      <div
        aria-hidden="true"
        className="home-hero-background"
      />

      {/* =========================================================
          NAVIGATION
          ========================================================= */}
      <header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 20,
          padding: "30px 42px",
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "30px",
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
                textShadow: "0 2px 5px rgba(0,0,0,0.9)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* =========================================================
          WATCH & LISTEN
          ========================================================= */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "33%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
        }}
      >
        <Link
          href="/episodes"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "155px",
            padding: "13px 26px",
            borderRadius: "999px",
            backgroundColor: "#111111",
            color: "#ffffff",
            border: "2px solid rgba(255,255,255,0.9)",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.2px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
          }}
        >
          Watch &amp; Listen
        </Link>
      </div>

      {/* =========================================================
          RESPONSIVE STYLES
          ========================================================= */}
      <style>{`
        /* =====================================================
           HERO BACKGROUND — DESKTOP / DEFAULT
           ===================================================== */

        .home-hero-background {
          position: absolute;
          inset: 0;

          background-image:
            url('/images/hero/hero-background.png');

          background-position:
            center top;

          background-repeat:
            no-repeat;

          /*
           * Keep the entire artwork visible.
           * This prevents the podcast title at the bottom
           * from being cropped on laptop screens.
           */
          background-size:
            contain;

          background-color:
            #000;

          z-index:
            0;
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 900px) {

          header {
            padding:
              24px
              24px !important;
          }

          header nav {
            gap:
              18px !important;
          }

          header nav a {
            font-size:
              13px !important;
          }

        }

        /* =====================================================
           PORTRAIT PHONE
           ===================================================== */

        @media (max-width: 650px) {

          /*
           * On a portrait phone, contain would make the
           * landscape artwork too small.
           *
           * Instead, make the artwork fill the height.
           * This keeps the important top/bottom content
           * visible while allowing some side cropping.
           */
          .home-hero-background {
            background-size:
              auto 100%;

            background-position:
              center center;

            background-repeat:
              no-repeat;

            background-color:
              #000;
          }

          header {
            padding:
              20px
              18px !important;
          }

          header nav {
            gap:
              12px !important;
          }

          header nav a {
            font-size:
              11px !important;
          }

        }

        /* =====================================================
           SMALL PHONE
           ===================================================== */

        @media (max-width: 520px) {

          header {
            top:
              8px !important;

            right:
              8px !important;

            padding:
              12px !important;
          }

          header nav {
            gap:
              9px !important;
          }

          header nav a {
            font-size:
              10px !important;
          }

        }
      `}</style>
    </main>
  );
}
