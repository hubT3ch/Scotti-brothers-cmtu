"use client";

import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#F2C94C";

const merchandise = [
  {
    title: "COMING SOON",
    description:
      "Official Can't Make This Up! merchandise is coming soon.",
  },
  {
    title: "COMING SOON",
    description:
      "Exclusive Scotti Brothers designs, apparel, and collectibles.",
  },
  {
    title: "COMING SOON",
    description:
      "Stay tuned for the first official merchandise collection.",
  },
];

function MobileLogo() {
  return (
    <div className="mobile-logo">
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
  );
}

export default function MerchandisePage() {
  return (
    <main className="merchandise-page">
      {/* BACKGROUND */}
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="page-content">
        {/* =========================================
            HEADER
        ========================================= */}
        <header className="site-header">
          {/* Mobile logo appears first */}
          <MobileLogo />

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/merchandise"
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* =========================================
            HERO
        ========================================= */}
        <section className="hero">
          {/* Desktop / tablet logo */}
          <div className="desktop-logo">
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

          <div className="hero-copy">
            <p className="eyebrow">
              SCOTTI BROTHERS
            </p>

            <h1>MERCHANDISE</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-subtitle">
              Official merchandise from{" "}
              <strong>Can&apos;t Make This Up!</strong>
              <br />
              Wear the stories. Represent the show.
            </p>
          </div>
        </section>

        {/* =========================================
            FEATURED MERCHANDISE
        ========================================= */}
        <section className="merch-section">
          <div className="section-heading">
            <p className="eyebrow">
              OFFICIAL COLLECTION
            </p>

            <h2>SHOP THE SHOW</h2>

            <div className="red-line" />
          </div>

          <div className="merch-grid">
            {merchandise.map((item, index) => (
              <article
                className="merch-card"
                key={`${item.title}-${index}`}
              >
                <div className="gold-frame">
                  <div className="red-frame">
                    <div className="product-image">
                      <div className="product-placeholder">
                        <span>
                          SCOTTI BROTHERS
                        </span>

                        <strong>
                          CAN&apos;T MAKE
                          <br />
                          THIS UP!
                        </strong>

                        <small>
                          OFFICIAL MERCHANDISE
                        </small>
                      </div>
                    </div>

                    <div className="product-info">
                      <h3>{item.title}</h3>

                      <p>
                        {item.description}
                      </p>

                      <div className="coming-soon">
                        COMING SOON
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================
            FEATURE MESSAGE
        ========================================= */}
        <section className="feature-section">
          <div className="feature-content">
            <p className="eyebrow">
              THE OFFICIAL COLLECTION
            </p>

            <h2>
              CAN&apos;T MAKE
              <br />
              THIS UP!
            </h2>

            <div className="gold-line feature-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p>
              Official Scotti Brothers merchandise is
              coming soon. Be ready for apparel,
              collectibles, and exclusive designs
              inspired by the stories behind the show.
            </p>

            <div className="feature-badge">
              OFFICIAL SCOTTI BROTHERS
            </div>
          </div>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}
        <footer className="site-footer">
          <img
            src="/images/logo.png"
            alt="Scotti Brothers Entertainment"
          />

          <p>
            © {new Date().getFullYear()} Scotti Brothers Ent.
            All rights reserved.
          </p>

          <a
            href="https://scottibrothersent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            SCOTTIBROTHERSENT.COM
          </a>

          <span>
            CAN&apos;T MAKE THIS UP!
          </span>
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================================
           PAGE
        ========================================= */

        .merchandise-page {
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

        .background,
        .grid-overlay {
          position: fixed;

          inset: 0;

          pointer-events: none;
        }

        .background {
          z-index: 0;

          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(139, 0, 0, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(242, 201, 76, 0.06),
              transparent 30%
            );
        }

        .grid-overlay {
          z-index: 1;

          opacity: 0.25;

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
        }

        .page-content {
          position: relative;

          z-index: 2;

          width: 100%;
        }

        /* =========================================
           HEADER
        ========================================= */

        .site-header {
          min-height: 82px;

          padding:
            24px
            42px;

          display: flex;

          align-items: center;

          justify-content: flex-end;
        }

        .mobile-logo {
          display: none;
        }

        .site-nav {
          display: flex;

          align-items: center;

          gap: 5px;

          padding:
            8px
            10px;

          border-radius: 999px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          border:
            1px
            solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          backdrop-filter:
            blur(6px);

          -webkit-backdrop-filter:
            blur(6px);
        }

        .site-nav a {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          padding:
            8px
            12px;

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

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #8b0000;

          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .hero {
          width:
            min(
              1280px,
              100%
            );

          min-height: 500px;

          margin:
            0
            auto;

          padding:
            45px
            45px
            75px;

          display: grid;

          grid-template-columns:
            48%
            52%;

          align-items: center;
        }

        .desktop-logo {
          width:
            min(
              100%,
              560px
            );

          justify-self: start;
        }

        .desktop-logo a {
          display: block;

          line-height: 0;
        }

        .desktop-logo img {
          display: block;

          width: 100%;

          height: auto;

          object-fit: contain;
        }

        .hero-copy {
          width: 100%;

          max-width: 650px;

          justify-self: end;

          padding: 20px;

          text-align: center;
        }

        .eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 11px;

          font-weight: 900;

          letter-spacing:
            0.42em;

          text-transform:
            uppercase;
        }

        .hero h1 {
          margin:
            17px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              48px,
              6vw,
              86px
            );

          line-height: 0.92;

          font-weight: 900;

          letter-spacing:
            -0.045em;

          text-transform:
            uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0
            rgba(
              242,
              201,
              76,
              0.30
            );
        }

        .gold-line {
          display: flex;

          align-items: center;

          gap: 16px;

          width:
            min(
              500px,
              90%
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

          font-size: 16px;

          line-height: 1.8;

          font-weight: 600;
        }

        .hero-subtitle strong {
          color: var(--gold);
        }

        /* =========================================
           MERCHANDISE SECTION
        ========================================= */

        .merch-section {
          width:
            min(
              1250px,
              100%
            );

          margin:
            0
            auto;

          padding:
            20px
            32px
            100px;
        }

        .section-heading {
          margin-bottom: 45px;

          text-align: center;
        }

        .section-heading h2 {
          margin:
            9px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              34px,
              5vw,
              58px
            );

          line-height: 1;

          font-weight: 900;

          text-transform:
            uppercase;
        }

        .red-line {
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
           MERCH GRID
        ========================================= */

        .merch-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 30px;
        }

        .merch-card {
          width: 100%;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .merch-card:hover {
          transform:
            translateY(-8px);

          filter:
            brightness(1.08);
        }

        /* =========================================
           FRAMES
        ========================================= */

        .gold-frame {
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
            0
            12px
            30px
            rgba(
              0,
              0,
              0,
              0.65
            );
        }

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
            inset
            0
            0
            0
            2px
            rgba(
              0,
              0,
              0,
              0.5
            );
        }

        /* =========================================
           PRODUCT IMAGE
        ========================================= */

        .product-image {
          width: 100%;

          aspect-ratio:
            1 / 1;

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              rgba(
                242,
                201,
                76,
                0.18
              ),
              transparent 55%
            ),
            linear-gradient(
              145deg,
              #181818,
              #050505
            );

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .product-placeholder {
          width: 80%;

          min-height: 70%;

          padding: 25px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.3
            );

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 12px;
        }

        .product-placeholder span {
          color:
            #c62828;

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.3em;
        }

        .product-placeholder strong {
          color: #fff;

          font-size:
            clamp(
              24px,
              3vw,
              36px
            );

          line-height:
            0.95;

          font-weight: 900;
        }

        .product-placeholder small {
          color:
            var(--gold);

          font-size: 8px;

          font-weight: 800;

          letter-spacing:
            0.22em;
        }

        /* =========================================
           PRODUCT INFO
        ========================================= */

        .product-info {
          padding:
            20px
            15px
            22px;

          text-align:
            center;

          background:
            #750000;
        }

        .product-info h3 {
          margin: 0;

          color:
            var(--gold);

          font-size: 20px;

          font-weight: 900;

          letter-spacing:
            0.5px;
        }

        .product-info p {
          min-height: 42px;

          margin:
            9px
            0
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.78
            );

          font-size: 12px;

          line-height: 1.5;
        }

        .coming-soon {
          display: inline-flex;

          margin-top: 16px;

          padding:
            9px
            14px;

          border:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.6
            );

          color:
            var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing:
            0.2em;
        }

        /* =========================================
           FEATURE SECTION
        ========================================= */

        .feature-section {
          padding:
            110px
            30px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );

          border-bottom:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.12
            );

          background:
            radial-gradient(
              circle at center,
              rgba(
                139,
                0,
                0,
                0.16
              ),
              transparent 50%
            );
        }

        .feature-content {
          width:
            min(
              760px,
              100%
            );

          margin:
            0
            auto;

          text-align:
            center;
        }

        .feature-content h2 {
          margin:
            18px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              48px,
              7vw,
              82px
            );

          line-height:
            0.9;

          font-weight: 900;

          text-shadow:
            4px 4px 0
            #8b0000;
        }

        .feature-line {
          margin:
            32px
            auto;
        }

        .feature-content > p:not(.eyebrow) {
          max-width: 650px;

          margin:
            0
            auto;

          color:
            rgba(
              255,
              255,
              255,
              0.62
            );

          font-size: 16px;

          line-height: 1.8;
        }

        .feature-badge {
          display: inline-flex;

          margin-top: 32px;

          padding:
            13px
            22px;

          border:
            1px
            solid
            var(--gold);

          color:
            var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.25em;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .site-footer {
          padding:
            28px
            42px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          border-top:
            1px
            solid
            rgba(
              242,
              201,
              76,
              0.15
            );

          background:
            #050505;
        }

        .site-footer img {
          display: block;

          width: 110px;

          height: auto;

          object-fit: contain;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.35
            );

          font-size: 9px;

          font-weight: 700;

          letter-spacing:
            0.2em;

          text-transform:
            uppercase;
        }

        .site-footer span {
          color:
            rgba(
              242,
              201,
              76,
              0.8
            );
        }

        .company-link {
          color:
            var(--gold);

          text-decoration: none;

          font-size: 10px;

          font-weight: 900;

          letter-spacing:
            0.15em;

          transition:
            color 0.2s ease;
        }

        .company-link:hover {
          color: #fff;

          text-decoration: underline;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .hero {
            grid-template-columns:
              45%
              55%;

            min-height: 450px;
          }

          .desktop-logo {
            width: 100%;
          }

          .hero-copy {
            padding: 10px;
          }

          .merch-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }
        }

        /* =========================================
           MOBILE PORTRAIT
           LOGO ABOVE EVERYTHING
        ========================================= */

        @media (max-width: 650px) {

          .site-header {
            min-height: auto;

            padding:
              16px
              12px
              10px;

            display: flex;

            flex-direction:
              column;

            justify-content:
              flex-start;

            align-items:
              center;
          }

          /* Logo is the first visible element */
          .mobile-logo {
            display: block;

            width: 78%;

            max-width: 330px;

            margin:
              0
              auto
              18px;
          }

          .mobile-logo a {
            display: block;

            line-height: 0;
          }

          .mobile-logo img {
            display: block;

            width: 100%;

            height: auto;

            object-fit: contain;
          }

          .site-nav {
            width: 100%;

            display: flex;

            flex-wrap: wrap;

            justify-content:
              center;

            gap: 3px;

            padding: 7px;

            border-radius:
              18px;
          }

          .site-nav a {
            font-size: 10px;

            padding:
              6px
              8px;
          }

          /* Hide desktop hero logo */
          .desktop-logo {
            display: none;
          }

          .hero {
            display: block;

            min-height: auto;

            padding:
              35px
              16px
              55px;
          }

          .hero-copy {
            width: 100%;

            max-width: 600px;

            margin:
              0
              auto;

            padding: 0;

            text-align:
              center;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing:
              0.25em;
          }

          .hero h1 {
            font-size: 43px;

            letter-spacing:
              -1.5px;
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

          .merch-section {
            padding:
              10px
              16px
              70px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .merch-grid {
            grid-template-columns:
              1fr;

            max-width: 430px;

            margin:
              0
              auto;

            gap: 30px;
          }

          .feature-section {
            padding:
              80px
              20px;
          }

          .feature-content h2 {
            font-size: 48px;
          }

          .feature-content > p:not(.eyebrow) {
            font-size: 14px;
          }

          .site-footer {
            padding:
              30px
              20px;

            flex-direction:
              column;

            gap: 15px;

            text-align:
              center;
          }

          .site-footer img {
            width: 110px;
          }

          .company-link {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}
