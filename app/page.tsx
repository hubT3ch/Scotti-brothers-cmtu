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
    <main className="home-page">
      {/* =========================================================
          HERO ARTWORK
          ========================================================= */}
      <div
        aria-hidden="true"
        className="home-hero-background"
      />

      {/* =========================================================
          NAVIGATION
          ========================================================= */}
      <header className="home-header">
        <nav
          aria-label="Main navigation"
          className="home-nav"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="home-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* =========================================================
          WATCH & LISTEN
          ========================================================= */}
      <div className="watch-listen-position">
        <Link
          href="/episodes"
          className="watch-listen-button"
        >
          Watch &amp; Listen
        </Link>
      </div>

      {/* =========================================================
          PAGE STYLES
          ========================================================= */}
      <style>{`
        /* =====================================================
           IMPORTANT:
           Keep the browser/overscroll area BLACK.
           This prevents the tan color from appearing when the
           page is pulled sideways on iPhone/iPad.
           ===================================================== */

        :global(html) {
          background: #000000 !important;
          overscroll-behavior-x: none;
          overscroll-behavior-y: none;
        }

        :global(body) {
          margin: 0 !important;
          padding: 0 !important;
          background: #000000 !important;
          overscroll-behavior-x: none;
          overscroll-behavior-y: none;
        }

        /* =====================================================
           PAGE
           ===================================================== */

        .home-page {
          position: relative;

          width: 100%;
          min-width: 100%;
          min-height: 100vh;
          min-height: 100svh;

          overflow: hidden;

          background: #000000;

          color: #ffffff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overscroll-behavior-x: none;
        }

        /* =====================================================
           HERO BACKGROUND
           ===================================================== */

        .home-hero-background {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-image:
            url('/images/hero/hero-background.png');

          background-position:
            center top;

          background-repeat:
            no-repeat;

          /*
           * Desktop/tablet:
           * Keep the complete artwork visible.
           */
          background-size:
            contain;

          background-color:
            #000000;

          z-index: 0;

          pointer-events: none;
        }

        /* =====================================================
           NAVIGATION
           ===================================================== */

        .home-header {
          position: absolute;

          top: 0;
          right: 0;

          z-index: 20;

          padding:
            30px
            42px;
        }

        .home-nav {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          gap: 30px;
        }

        .home-nav-link {
          color: #ffffff;

          text-decoration: none;

          font-size: 15px;

          font-weight: 700;

          letter-spacing:
            0.2px;

          white-space: nowrap;

          text-shadow:
            0 2px 5px
            rgba(0,0,0,0.9);

          transition:
            opacity 0.2s ease;
        }

        .home-nav-link:hover {
          opacity: 0.75;
        }

        /* =====================================================
           WATCH & LISTEN
           ===================================================== */

        .watch-listen-position {
          position: absolute;

          left: 50%;
          top: 33%;

          transform:
            translate(-50%, -50%);

          z-index: 20;
        }

        .watch-listen-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-width: 155px;

          padding:
            13px
            26px;

          border-radius:
            999px;

          background-color:
            #111111;

          color:
            #ffffff;

          border:
            2px solid
            rgba(255,255,255,0.9);

          text-decoration: none;

          font-size: 15px;

          font-weight: 800;

          letter-spacing:
            0.2px;

          box-shadow:
            0 6px 20px
            rgba(0,0,0,0.5);

          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
        }

        .watch-listen-button:hover {
          background-color:
            #222222;

          transform:
            translateY(-1px);
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 900px) {

          .home-header {
            padding:
              24px
              24px;
          }

          .home-nav {
            gap:
              18px;
          }

          .home-nav-link {
            font-size:
              13px;
          }

        }

        /* =====================================================
           PORTRAIT PHONE
           ===================================================== */

        @media (max-width: 650px) {

          /*
           * Slightly smaller than the previous version.
           *
           * 94% gives us a little breathing room while keeping
           * the artwork large enough to read.
           */
          .home-hero-background {
            width: 100%;
            height: 100%;

            background-size:
              auto 94%;

            background-position:
              center center;

            background-repeat:
              no-repeat;

            background-color:
              #000000;
          }

          .home-header {
            padding:
              20px
              18px;
          }

          .home-nav {
            gap:
              12px;
          }

          .home-nav-link {
            font-size:
              11px;
          }

        }

        /* =====================================================
           SMALL PHONE
           ===================================================== */

        @media (max-width: 520px) {

          .home-header {
            top:
              8px;

            right:
              8px;

            padding:
              12px;
          }

          .home-nav {
            gap:
              9px;
          }

          .home-nav-link {
            font-size:
              10px;
          }

          /*
           * Slightly more breathing room on very small phones.
           */
          .home-hero-background {
            background-size:
              auto 92%;
          }

        }
      `}</style>
    </main>
  );
}
