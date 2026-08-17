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
          BASE BACKGROUND
          ===================================================== */}
      <div
        aria-hidden="true"
        className="home-background"
      />

      {/* =====================================================
          HERO ARTWORK
          ===================================================== */}
      <div
        aria-hidden="true"
        className="home-artwork"
      />

      {/* =====================================================
          ARTWORK TRANSITION / BLEND
          Used whenever the artwork does not fill the
          available screen area.
          ===================================================== */}
      <div
        aria-hidden="true"
        className="artwork-blend"
      />

      {/* =====================================================
          DECORATIVE STARS / SPARKLES
          ===================================================== */}
      <div
        aria-hidden="true"
        className="artwork-stars"
      >
        <span className="star star-1">✦</span>
        <span className="star star-2">✧</span>
        <span className="star star-3">✦</span>
        <span className="star star-4">·</span>
        <span className="star star-5">✧</span>
        <span className="star star-6">·</span>
        <span className="star star-7">✦</span>
        <span className="star star-8">✧</span>
        <span className="star star-9">·</span>
        <span className="star star-10">✦</span>
      </div>

      {/* =====================================================
          DECORATIVE BRUSH STROKES
          ===================================================== */}
      <div
        aria-hidden="true"
        className="brush brush-one"
      />

      <div
        aria-hidden="true"
        className="brush brush-two"
      />

      <div
        aria-hidden="true"
        className="brush brush-three"
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
           DOCUMENT
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

          background:
            #000000;

          color:
            #ffffff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overscroll-behavior-x:
            none;
        }

        /* ===================================================
           BASE BACKGROUND
           =================================================== */

        .home-background {
          position: absolute;

          inset: 0;

          z-index: 0;

          background:
            radial-gradient(
              circle at 45% 35%,
              rgba(242,201,76,0.035),
              transparent 32%
            ),
            radial-gradient(
              circle at 70% 70%,
              rgba(139,0,0,0.08),
              transparent 36%
            ),
            #000000;

          pointer-events:
            none;
        }

        /* ===================================================
           HERO ARTWORK — DESKTOP
           =================================================== */

        .home-artwork {
          position: absolute;

          inset: 0;

          z-index: 1;

          background-image:
            url('/images/hero/hero-background.png');

          background-repeat:
            no-repeat;

          background-position:
            center center;

          background-size:
            contain;

          background-color:
            transparent;

          pointer-events:
            none;
        }

        /* ===================================================
           ARTWORK BLEND
           =================================================== */

        .artwork-blend {
          position: absolute;

          z-index: 2;

          pointer-events:
            none;

          opacity:
            0;

          background:
            radial-gradient(
              ellipse at center,
              rgba(242,201,76,0.13),
              rgba(198,40,40,0.06) 35%,
              transparent 72%
            );

          filter:
            blur(18px);
        }

        /* ===================================================
           STARS
           =================================================== */

        .artwork-stars {
          position: absolute;

          inset: 0;

          z-index: 3;

          pointer-events:
            none;

          opacity:
            0;
        }

        .star {
          position: absolute;

          display: block;

          color:
            rgba(242,201,76,0.48);

          text-shadow:
            0 0 8px
            rgba(242,201,76,0.25);

          line-height:
            1;
        }

        .star-1 {
          font-size: 13px;
          left: 48%;
          top: 61%;
        }

        .star-2 {
          font-size: 18px;
          left: 55%;
          top: 68%;
        }

        .star-3 {
          font-size: 10px;
          left: 62%;
          top: 73%;
        }

        .star-4 {
          font-size: 22px;
          left: 68%;
          top: 64%;
        }

        .star-5 {
          font-size: 14px;
          left: 74%;
          top: 76%;
        }

        .star-6 {
          font-size: 11px;
          left: 80%;
          top: 68%;
        }

        .star-7 {
          font-size: 16px;
          left: 58%;
          top: 84%;
        }

        .star-8 {
          font-size: 12px;
          left: 70%;
          top: 87%;
        }

        .star-9 {
          font-size: 20px;
          left: 84%;
          top: 81%;
        }

        .star-10 {
          font-size: 13px;
          left: 91%;
          top: 72%;
        }

        /* ===================================================
           BRUSH STROKES
           =================================================== */

        .brush {
          position: absolute;

          z-index: 3;

          pointer-events:
            none;

          opacity:
            0;

          border-radius:
            50%;

          transform:
            rotate(-12deg);

          filter:
            blur(0.5px);
        }

        .brush-one {
          width:
            390px;

          height:
            65px;

          left:
            48%;

          top:
            72%;

          border-top:
            2px solid
            rgba(242,201,76,0.18);

          border-bottom:
            1px solid
            rgba(139,0,0,0.18);

          box-shadow:
            0 0 18px
            rgba(242,201,76,0.08);
        }

        .brush-two {
          width:
            300px;

          height:
            42px;

          left:
            61%;

          top:
            82%;

          transform:
            rotate(8deg);

          border-top:
            1px solid
            rgba(198,40,40,0.18);

          box-shadow:
            0 0 15px
            rgba(198,40,40,0.08);
        }

        .brush-three {
          width:
            430px;

          height:
            55px;

          left:
            70%;

          top:
            60%;

          transform:
            rotate(-5deg);

          border-top:
            1px solid
            rgba(242,201,76,0.11);

          box-shadow:
            0 0 18px
            rgba(242,201,76,0.05);
        }

        /* ===================================================
           NAVIGATION
           =================================================== */

        .home-header {
          position: absolute;

          top:
            0;

          right:
            0;

          z-index:
            20;

          padding:
            30px
            42px;
        }

        .home-nav {
          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-end;

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
           WATCH / LISTEN
           =================================================== */

        .watch-listen-area {
          position:
            absolute;

          left:
            50%;

          top:
            33%;

          transform:
            translate(-50%, -50%);

          z-index:
            20;
        }

        .watch-listen-button {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

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
           
           Artwork is smaller than viewport.
           The remaining area receives the same visual language
           instead of becoming a hard black cutoff.
           =================================================== */

        @media (max-width: 650px) and (orientation: portrait) {

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

            height:
              58svh;

            background-size:
              contain;

            background-position:
              center top;
          }

          /*
           * Fade the artwork into the lower dark area.
           */
          .artwork-blend {
            left:
              0;

            right:
              0;

            top:
              43svh;

            bottom:
              30svh;

            opacity:
              1;

            background:
              linear-gradient(
                to bottom,
                rgba(0,0,0,0),
                rgba(0,0,0,0.35) 30%,
                rgba(0,0,0,0.82) 75%,
                rgba(0,0,0,1)
              ),
              radial-gradient(
                ellipse at 50% 20%,
                rgba(242,201,76,0.13),
                transparent 68%
              );

            filter:
              none;
          }

          /*
           * Decorative stars live mostly in the transition area.
           */
          .artwork-stars {
            opacity:
              1;
          }

          .star-1 {
            left:
              22%;

            top:
              57%;
          }

          .star-2 {
            left:
              37%;

            top:
              64%;
          }

          .star-3 {
            left:
              53%;

            top:
              55%;
          }

          .star-4 {
            left:
              69%;

            top:
              65%;
          }

          .star-5 {
            left:
              82%;

            top:
              57%;
          }

          .star-6 {
            left:
              29%;

            top:
              72%;
          }

          .star-7 {
            left:
              48%;

            top:
              76%;
          }

          .star-8 {
            left:
              65%;

            top:
              73%;
          }

          .star-9 {
            left:
              79%;

            top:
              79%;
          }

          .star-10 {
            left:
              91%;

            top:
              69%;
          }

          .brush {
            opacity:
              1;
          }

          .brush-one {
            width:
              340px;

            left:
              8%;

            top:
              67%;

            border-top:
              2px solid
              rgba(242,201,76,0.15);
          }

          .brush-two {
            width:
              260px;

            left:
              36%;

            top:
              75%;

            border-top:
              1px solid
              rgba(198,40,40,0.15);
          }

          .brush-three {
            width:
              300px;

            left:
              52%;

            top:
              61%;

            border-top:
              1px solid
              rgba(242,201,76,0.12);
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
          }

          /*
           * Button is positioned in the blended dark area.
           */
          .watch-listen-area {
            left:
              0;

            right:
              0;

            top:
              68svh;

            bottom:
              auto;

            width:
              100%;

            transform:
              none;

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
          }

          .artwork-blend {
            top:
              41svh;

            bottom:
              31svh;
          }

          .watch-listen-area {
            top:
              66svh;
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
           
           Artwork is smaller than viewport horizontally.
           The right-side dark area receives the same visual
           treatment.
           =================================================== */

        @media (max-width: 900px) and (orientation: landscape) {

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
          }

          /*
           * Horizontal fade from artwork into the right side.
           */
          .artwork-blend {
            top:
              0;

            left:
              55vw;

            right:
              0;

            bottom:
              0;

            opacity:
              1;

            background:
              linear-gradient(
                to right,
                rgba(0,0,0,0),
                rgba(0,0,0,0.45) 30%,
                rgba(0,0,0,0.88) 72%,
                rgba(0,0,0,1)
              ),
              radial-gradient(
                ellipse at 10% 50%,
                rgba(242,201,76,0.12),
                transparent 70%
              );

            filter:
              none;
          }

          /*
           * Stars move into the right-hand transition area.
           */
          .artwork-stars {
            opacity:
              1;
          }

          .star-1 {
            left:
              66%;

            top:
              28%;
          }

          .star-2 {
            left:
              75%;

            top:
              38%;
          }

          .star-3 {
            left:
              84%;

            top:
              26%;
          }

          .star-4 {
            left:
              72%;

            top:
              55%;
          }

          .star-5 {
            left:
              91%;

            top:
              43%;
          }

          .star-6 {
            left:
              63%;

            top:
              68%;
          }

          .star-7 {
            left:
              80%;

            top:
              74%;
          }

          .star-8 {
            left:
              93%;

            top:
              65%;
          }

          .star-9 {
            left:
              70%;

            top:
              84%;
          }

          .star-10 {
            left:
              87%;

            top:
              87%;
          }

          .brush {
            opacity:
              1;
          }

          .brush-one {
            width:
              280px;

            left:
              57%;

            top:
              35%;

            transform:
              rotate(-8deg);
          }

          .brush-two {
            width:
              230px;

            left:
              69%;

            top:
              66%;

            transform:
              rotate(7deg);
          }

          .brush-three {
            width:
              300px;

            left:
              62%;

            top:
              52%;

            transform:
              rotate(-3deg);
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
          }

          /*
           * Button sits within the dark transition area,
           * not against the right edge.
           */
          .watch-listen-area {
            left:
              76vw;

            right:
              auto;

            top:
              50%;

            width:
              24vw;

            transform:
              translate(-50%, -50%);

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
           SMALL LANDSCAPE PHONE
           =================================================== */

        @media (max-width: 700px) and (orientation: landscape) {

          .home-artwork {
            width:
              68vw;
          }

          .artwork-blend {
            left:
              52vw;
          }

          .watch-listen-area {
            left:
              74vw;

            width:
              27vw;
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
