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

      {/* =====================================================
          HERO ARTWORK
          ===================================================== */}
      <div
        aria-hidden="true"
        className="home-artwork"
      />

      {/* =====================================================
          NAVIGATION
          ===================================================== */}
      <header className="home-header">
        <nav
          className="home-nav"
          aria-label="Main navigation"
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

      {/* =====================================================
          WATCH & LISTEN
          ===================================================== */}
      <div className="watch-listen-area">
        <Link
          href="/episodes"
          className="watch-listen-button"
        >
          Watch &amp; Listen
        </Link>
      </div>

      {/* =====================================================
          PAGE STYLES
          ===================================================== */}
      <style>{`

        /* ===================================================
           DOCUMENT / OVERSCROLL
           =================================================== */

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

        /* ===================================================
           PAGE
           =================================================== */

        .home-page {
          position: relative;

          width: 100%;
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

        /* ===================================================
           ARTWORK — DESKTOP
           =================================================== */

        .home-artwork {
          position: absolute;

          inset: 0;

          z-index: 0;

          background-image:
            url('/images/hero/hero-background.png');

          background-repeat:
            no-repeat;

          background-position:
            center center;

          background-size:
            contain;

          background-color:
            #000000;

          pointer-events:
            none;
        }

        /* ===================================================
           NAVIGATION
           =================================================== */

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

          gap:
            30px;
        }

        .home-nav-link {
          color:
            #ffffff;

          text-decoration:
            none;

          font-size:
            15px;

          font-weight:
            700;

          letter-spacing:
            0.2px;

          white-space:
            nowrap;

          text-shadow:
            0 2px 5px
            rgba(0,0,0,0.9);
        }

        .home-nav-link:hover {
          opacity:
            0.75;
        }

        /* ===================================================
           WATCH / LISTEN — DESKTOP
           =================================================== */

        .watch-listen-area {
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

          min-width:
            155px;

          padding:
            13px
            26px;

          border-radius:
            999px;

          background:
            #111111;

          color:
            #ffffff;

          border:
            2px solid
            rgba(255,255,255,0.9);

          text-decoration:
            none;

          font-size:
            15px;

          font-weight:
            800;

          letter-spacing:
            0.2px;

          box-shadow:
            0 6px 20px
            rgba(0,0,0,0.5);
        }

        /* ===================================================
           TABLET
           =================================================== */

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

        /* ===================================================
           PORTRAIT PHONE
           
           Artwork fills roughly the upper half.
           Watch & Listen sits immediately below it.
           =================================================== */

        @media (max-width: 650px) and (orientation: portrait) {

          .home-page {
            min-height:
              100svh;

            background:
              #000000;
          }

          .home-artwork {
            top:
              0;

            left:
              0;

            right:
              0;

            bottom:
              auto;

            width:
              100%;

            /*
             * Give the artwork enough vertical space to
             * occupy roughly half the phone.
             */
            height:
              58svh;

            background-size:
              contain;

            background-position:
              center top;

            background-repeat:
              no-repeat;

            background-color:
              #000000;
          }

          .home-header {
            top:
              0;

            right:
              0;

            padding:
              14px
              12px;
          }

          .home-nav {
            gap:
              8px;
          }

          .home-nav-link {
            font-size:
              9px;

            letter-spacing:
              0;

            text-shadow:
              0 2px 5px
              rgba(0,0,0,0.95);
          }

          /*
           * Button is placed just below the artwork
           * instead of near the bottom edge.
           */
          .watch-listen-area {
            left:
              0;

            right:
              0;

            top:
              62svh;

            bottom:
              auto;

            transform:
              none;

            width:
              100%;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;
          }

          .watch-listen-button {
            min-width:
              155px;

            padding:
              12px
              24px;

            font-size:
              14px;
          }

        }

        /* ===================================================
           SMALL PORTRAIT PHONE
           =================================================== */

        @media (max-width: 390px) and (orientation: portrait) {

          .home-artwork {
            height:
              56svh;

            background-size:
              contain;

            background-position:
              center top;
          }

          .watch-listen-area {
            top:
              60svh;
          }

          .home-nav {
            gap:
              6px;
          }

          .home-nav-link {
            font-size:
              8px;
          }

        }

        /* ===================================================
           LANDSCAPE PHONE
           
           Artwork stays on left.
           Button moves toward center-right rather than
           being pushed against the edge.
           =================================================== */

        @media (max-width: 900px) and (orientation: landscape) {

          .home-page {
            min-height:
              100svh;

            background:
              #000000;
          }

          .home-artwork {
            top:
              0;

            left:
              0;

            right:
              auto;

            bottom:
              0;

            width:
              72vw;

            height:
              100svh;

            background-size:
              contain;

            background-position:
              left center;

            background-repeat:
              no-repeat;

            background-color:
              #000000;
          }

          .home-header {
            top:
              0;

            right:
              0;

            padding:
              12px
              18px;
          }

          .home-nav {
            gap:
              11px;
          }

          .home-nav-link {
            font-size:
              10px;

            letter-spacing:
              0;

            text-shadow:
              0 2px 5px
              rgba(0,0,0,0.95);
          }

          /*
           * Move the button left from the previous position.
           */
          .watch-listen-area {
            left:
              76vw;

            right:
              auto;

            top:
              50%;

            bottom:
              auto;

            transform:
              translate(-50%, -50%);

            width:
              26vw;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;
          }

          .watch-listen-button {
            min-width:
              145px;

            padding:
              11px
              18px;

            font-size:
              12px;
          }

        }

        /* ===================================================
           VERY SMALL LANDSCAPE PHONE
           =================================================== */

        @media (max-width: 700px) and (orientation: landscape) {

          .home-artwork {
            width:
              68vw;
          }

          .watch-listen-area {
            left:
              74vw;

            width:
              28vw;
          }

          .watch-listen-button {
            min-width:
              135px;

            font-size:
              11px;
          }

        }

      `}</style>
    </main>
  );
}
