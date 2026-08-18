"use client";

import Link from "next/link";

type Guest = {
  name: string;
  role: string;
  image: string;
};

/*
 * NO GUEST IS CURRENTLY CONFIRMED.
 *
 * When the first guest is confirmed, add the guest here.
 *
 * Example:
 *
 * {
 *   name: "Guest Name",
 *   role: "Artist / Entertainer / Creator",
 *   image: "/images/guests/guest-name.jpg",
 * }
 */

const guests: Guest[] = [];

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#F2C94C";

export default function GuestsPage() {
  return (
    <main className="guests-page">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div
        className="guests-background"
        aria-hidden="true"
      />

      <div
        className="guests-overlay"
        aria-hidden="true"
      />

      <div className="guests-content">

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <header className="guests-header">
          <nav
            className="guests-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/guests"
                    ? "guests-nav-link active"
                    : "guests-nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="guests-hero">

          {/* HERO LOGO — LEFT SIDE */}
          <div className="hero-logo">
            <Link
              href="/"
              aria-label="Scotti Brothers Can't Make This Up!"
            >
              <img
                src="/images/logo.png"
                alt="Scotti Brothers Can't Make This Up!"
              />
            </Link>
          </div>

          {/* HERO CONTENT — RIGHT SIDE */}
          <div className="guests-hero-copy">

            <p className="eyebrow">
              Scotti Brothers
            </p>

            <h1>Guests</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-subtitle">
  Meet the artists, entertainers, creators, and personalities
  <br />
  with unbelievable stories of their industry encounters.
</p>

          </div>
        </section>

        {/* =====================================================
            GUEST GALLERY
        ===================================================== */}
        <section className="gallery-section">

          <div className="section-heading">

            <p className="eyebrow">
              The People Behind The Stories
            </p>

            <h2>
              Guest Gallery
            </h2>

            <div className="heading-line" />

          </div>

          {guests.length > 0 ? (
            <div className="guest-gallery">

              {guests.map((guest, index) => (
                <article
                  key={`${guest.name}-${index}`}
                  className="guest-card"
                >

                  {/* GOLD OUTER FRAME */}
                  <div className="gold-frame">

                    {/* RED INNER FRAME */}
                    <div className="red-frame">

                      {/* PHOTO */}
                      <div className="guest-photo">

                        <img
                          src={guest.image}
                          alt={guest.name}
                        />

                      </div>

                      {/* NAME PLATE */}
                      <div className="guest-info">

                        <h3>
                          {guest.name}
                        </h3>

                        {guest.role && (
                          <p>
                            {guest.role}
                          </p>
                        )}

                      </div>

                    </div>
                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="gallery-empty">

              <div className="empty-frame">

                <div className="empty-frame-inner">

                  <div className="empty-icon">
                    +
                  </div>

                  <h3>
                    Guests Coming Soon
                  </h3>

                  <p>
                    New guest portraits will appear here as the
                    stories unfold.
                  </p>

                </div>

              </div>

            </div>
          )}

        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="guests-footer">
          © {new Date().getFullYear()} Scotti Brothers Ent
        </footer>

      </div>

      {/* =====================================================
          PAGE STYLES
      ===================================================== */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           PAGE
        ========================================= */

        .guests-page {
          --gold: ${GOLD};

          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(139, 0, 0, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 60%,
              rgba(242, 201, 76, 0.08),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #050505 0%,
              #090909 50%,
              #050505 100%
            );

          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .guests-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 20% 25%,
              rgba(130, 0, 0, 0.13),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 65%,
              rgba(242, 201, 76, 0.07),
              transparent 32%
            );
        }

        .guests-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.012) 1px,
              transparent 1px
            );

          background-size: 42px 42px;
          opacity: 0.35;
        }

        .guests-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* =========================================
           NAVIGATION
        ========================================= */

        .guests-header {
          width: 100%;

          padding:
            24px
            42px
            0;

          display: flex;
          justify-content: flex-end;
        }

        .guests-nav {
          display: flex;
          align-items: center;
          gap: 4px;

          padding: 8px 10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid
            rgba(255,255,255,0.12);

          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .guests-nav-link {
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

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .guests-nav-link:hover {
          color: var(--gold);
        }

        .guests-nav-link.active {
          background: #8b0000;
          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .guests-hero {
          position: relative;

          width: 100%;
          max-width: 1250px;

          min-height: 430px;

          margin: 0 auto;

          padding:
            55px
            45px
            70px;

          display: flex;
          align-items: center;

          overflow: hidden;
        }

        /* =========================================
           HERO LOGO
        ========================================= */

      .hero-logo {
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 52%;
  max-width: 650px;
  z-index: 2;
}

        .hero-logo a {
          display: block;
          line-height: 0;
        }

        .hero-logo img {
          display: block;

          width: 100%;
          height: auto;

          object-fit: contain;
        }

        /* =========================================
           HERO COPY
        ========================================= */

        .guests-hero-copy {
          position: relative;

          z-index: 3;

          width: 55%;

          max-width: 690px;

          margin-left: auto;
          margin-right: 2%;

          text-align: center;
        }

        .eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 12px;

          font-weight: 900;

          letter-spacing:
            0.45em;

          text-transform:
            uppercase;
        }

        .guests-hero h1 {
          margin: 17px 0 0;

          color: #fff;

          font-size:
            clamp(
              60px,
              8vw,
              100px
            );

          line-height: 0.9;

          font-weight: 900;

          letter-spacing:
            -0.045em;

          text-transform:
            uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0
            rgba(242,201,76,0.30);
        }

        .gold-line {
          display: flex;
          align-items: center;

          gap: 16px;

          width:
            min(
              500px,
              85%
            );

          margin:
            28px
            auto;
        }

        .gold-line span {
          flex: 1;

          height: 1px;

          background:
            rgba(
              242,
              201,
              76,
              0.7
            );
        }

        .gold-line b {
          color: var(--gold);

          font-size: 14px;
        }

        .hero-subtitle {
          max-width: 650px;

          margin:
            0
            auto;

          color:
            rgba(
              255,
              255,
              255,
              0.78
            );

          font-size: 17px;

          line-height: 1.8;

          font-weight: 600;
        }

        /* =========================================
           GALLERY
        ========================================= */

        .gallery-section {
          width: 100%;
          max-width: 1250px;

          margin: 0 auto;

          padding:
            20px
            32px
            90px;
        }

        .section-heading {
          margin-bottom: 32px;

          text-align: center;
        }

        .section-heading h2 {
          margin:
            8px
            0
            0;

          color: #fff;

          font-size: 42px;

          line-height: 1;

          font-weight: 900;

          text-transform:
            uppercase;

          letter-spacing:
            -1px;
        }

        .heading-line {
          width: 65px;

          height: 4px;

          margin:
            20px
            auto
            0;

          background:
            #c62828;
        }

        /* =========================================
           GUEST GRID
        ========================================= */

        .guest-gallery {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          gap: 30px;

          align-items: start;
        }

        .guest-card {
          width: 100%;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .guest-card:hover {
          transform:
            translateY(-8px);

          filter:
            brightness(1.08);
        }

        /* =========================================
           GOLD FRAME
        ========================================= */

        .gold-frame {
          position: relative;

          padding: 7px;

          background:
            linear-gradient(
              135deg,
              #fff0a3 0%,
              #f2c94c 18%,
              #9f7612 45%,
              #f7d85d 65%,
              #a67b12 100%
            );

          box-shadow:
            0 12px 30px
            rgba(0,0,0,0.65),

            inset 0 0 0 1px
            rgba(255,255,255,0.35);
        }

        /* =========================================
           RED FRAME
        ========================================= */

        .red-frame {
          padding: 8px;

          background:
            linear-gradient(
              145deg,
              #b30000,
              #650000 55%,
              #9b0000
            );

          box-shadow:
            inset 0 0 0 2px
            rgba(0,0,0,0.5);
        }

        /* =========================================
           PHOTO
        ========================================= */

        .guest-photo {
          position: relative;

          width: 100%;

          aspect-ratio:
            4 / 5;

          overflow: hidden;

          background:
            #151515;
        }

        .guest-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }

        .guest-card:hover
        .guest-photo img {
          transform:
            scale(1.05);
        }

        /* =========================================
           NAME PLATE
        ========================================= */

        .guest-info {
          padding:
            18px
            12px
            16px;

          text-align:
            center;

          background:
            #750000;
        }

        .guest-info h3 {
          margin: 0;

          color:
            var(--gold);

          font-size: 21px;

          line-height: 1.05;

          font-weight: 900;

          text-transform:
            uppercase;

          letter-spacing:
            0.5px;
        }

        .guest-info p {
          margin:
            7px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.82
            );

          font-size: 11px;

          line-height: 1.3;

          font-weight: 800;

          letter-spacing:
            1.5px;

          text-transform:
            uppercase;
        }

        /* =========================================
           EMPTY GALLERY
        ========================================= */

        .gallery-empty {
          width: 100%;

          display: flex;

          justify-content:
            center;

          padding:
            10px
            0
            20px;
        }

        .empty-frame {
          width: 100%;

          max-width: 540px;

          padding: 8px;

          background:
            linear-gradient(
              135deg,
              #fff0a3,
              #f2c94c,
              #80600e,
              #f7d85d,
              #987318
            );

          box-shadow:
            0 18px 45px
            rgba(0,0,0,0.55);
        }

        .empty-frame-inner {
          min-height: 280px;

          padding:
            45px
            30px;

          display: flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          background:
            linear-gradient(
              145deg,
              #850000,
              #4f0000
            );

          border:
            7px
            solid
            #8b0000;
        }

        .empty-icon {
          width: 52px;
          height: 52px;

          display: flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          border:
            2px
            solid
            var(--gold);

          color:
            var(--gold);

          font-size: 32px;

          font-weight: 300;
        }

        .empty-frame-inner h3 {
          margin:
            18px
            0
            0;

          color:
            var(--gold);

          font-size: 27px;

          font-weight: 900;

          text-transform:
            uppercase;
        }

        .empty-frame-inner p {
          max-width: 350px;

          margin:
            10px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.72
            );

          font-size: 14px;

          line-height: 1.5;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .guests-footer {
          padding:
            28px
            20px;

          text-align:
            center;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.15
            );

          color:
            rgba(
              255,
              255,
              255,
              0.45
            );

          font-size: 13px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .guest-gallery {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );

            gap: 24px;
          }

        }

        @media (max-width: 900px) {

          .guests-header {
            padding:
              20px
              25px
              0;
          }

          .guests-nav {
            gap: 2px;
          }

          .guests-nav-link {
            font-size: 12px;
            padding:
              7px
              10px;
          }

          .episodes-hero {
            min-height: 400px;
          }

       .hero-logo {
  left: 1%;
  width: 48%;
}

          .guests-hero-copy {
            width: 58%;
            margin-right: 0;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .guests-header {
            padding:
              18px
              12px
              0;

            justify-content:
              center;
          }

          .guests-nav {
            flex-wrap:
              wrap;

            justify-content:
              center;

            border-radius:
              18px;
          }

          .guests-nav-link {
            font-size: 10px;

            padding:
              6px
              8px;
          }

          .guests-hero {
            min-height: 400px;

            padding:
              40px
              16px
              55px;
          }

        .hero-logo {
  left: 1%;
  width: 46%;
}

          .guests-hero-copy {
            width: 60%;

            margin-left:
              auto;

            margin-right: 0;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing:
              0.25em;
          }

          .guests-hero h1 {
            font-size: 48px;

            letter-spacing:
              -2px;
          }

          .hero-subtitle {
            font-size: 12px;

            line-height:
              1.6;
          }

          .gold-line {
            width: 90%;

            margin:
              20px
              auto;
          }

          .gallery-section {
            padding:
              10px
              16px
              70px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .guest-gallery {
            grid-template-columns:
              1fr;

            gap: 30px;

            max-width: 430px;

            margin:
              0
              auto;
          }

          .guest-card {
            max-width: 430px;

            margin:
              0
              auto;
          }

          .empty-frame-inner {
            min-height: 240px;

            padding:
              35px
              20px;
          }

        }

      `}</style>
    </main>
  );
}
