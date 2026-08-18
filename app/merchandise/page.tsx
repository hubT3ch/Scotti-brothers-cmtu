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

function MobileLogo() {
  return (
    <div className="mobile-logo">
      <Link href="/" aria-label="Scotti Brothers Can't Make This Up!">
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
    <main className="merch-page">
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="site-header">
        <MobileLogo />

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === "/merchandise" ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="desktop-logo">
          <Link href="/" aria-label="Scotti Brothers Can't Make This Up!">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">SCOTTI BROTHERS</p>

          <h1>MERCHANDISE</h1>

          <div className="gold-line">
            <span />
            <b>◆</b>
            <span />
          </div>

          <p>
            Wear the conversation. Rep the stories.
            <br />
            Bring a little <strong>Can&apos;t Make This Up!</strong> with you.
          </p>
        </div>
      </section>

      <section className="shop-section">
        <div className="shop-heading">
          <p>OFFICIAL SHOW GEAR</p>
          <h2>SHOP THE SHOW</h2>
          <div />
        </div>

        <div className="coming-card">
          <div className="cmtu-circle">CMTU</div>

          <p className="small-title">OFFICIAL MERCHANDISE</p>

          <h3>COMING SOON</h3>

          <p>
            The official Can&apos;t Make This Up! merchandise collection is on
            the way.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <img
          src="/images/logo.png"
          alt="Scotti Brothers Entertainment"
        />

        <p>© 2026 Scotti Brothers Ent. All rights reserved.</p>

        <span>CAN&apos;T MAKE THIS UP!</span>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .merch-page {
          --gold: ${GOLD};
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 15% 30%,rgba(139,0,0,.20),transparent 35%),
            radial-gradient(circle at 85% 65%,rgba(242,201,76,.07),transparent 35%),
            linear-gradient(180deg,#050505,#0a0a0a,#050505);
          color: #fff;
          font-family: Arial,Helvetica,sans-serif;
        }

        .background,
        .grid-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .background {
          z-index: 0;
        }

        .grid-overlay {
          z-index: 1;
          opacity: .25;
          background-image:
            linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);
          background-size: 42px 42px;
        }

        .site-header,
        .hero,
        .shop-section,
        .site-footer {
          position: relative;
          z-index: 2;
        }

        .site-header {
          min-height: 82px;
          padding: 24px 42px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .mobile-logo {
          display: none;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
        }

        .site-nav a {
          color: #fff;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
        }

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #b00000;
          color: #fff;
        }

        .hero {
          width: min(1280px,100%);
          min-height: 500px;
          margin: auto;
          padding: 45px 45px 75px;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
        }

        .desktop-logo {
          width: min(100%,560px);
        }

        .desktop-logo a {
          display: block;
          line-height: 0;
        }

        .desktop-logo img {
          width: 100%;
          height: auto;
          display: block;
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
          letter-spacing: .42em;
        }

        .hero h1 {
          margin: 17px 0 0;
          color: #fff;
          font-size: clamp(48px,6.5vw,86px);
          line-height: .95;
          font-weight: 900;
          text-shadow: 4px 4px 0 #8b0000;
        }

        .gold-line {
          width: min(500px,90%);
          margin: 28px auto;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .gold-line span {
          flex: 1;
          height: 1px;
          background: rgba(242,201,76,.7);
        }

        .gold-line b {
          color: var(--gold);
        }

        .hero-copy > p:last-child {
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.8;
          font-weight: 600;
        }

        .hero-copy strong {
          color: var(--gold);
        }

        .shop-section {
          width: min(1200px,calc(100% - 70px));
          margin: auto;
          padding: 20px 0 110px;
        }

        .shop-heading {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .shop-heading p {
          margin: 0;
          color: var(--gold);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .4em;
        }

        .shop-heading h2 {
          margin: 0;
          white-space: nowrap;
          font-size: 42px;
          font-weight: 900;
        }

        .shop-heading div {
          flex: 1;
          height: 4px;
          background: #c62828;
        }

        .coming-card {
          max-width: 700px;
          min-height: 330px;
          margin: 40px auto 0;
          padding: 45px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 7px solid var(--gold);
          background: linear-gradient(145deg,#850000,#4f0000);
          box-shadow: 0 20px 50px rgba(0,0,0,.6);
        }

        .cmtu-circle {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
          font-size: 13px;
          font-weight: 900;
        }

        .small-title {
          margin: 22px 0 0;
          color: var(--gold);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .3em;
        }

        .coming-card h3 {
          margin: 12px 0 0;
          font-size: 40px;
          font-weight: 900;
        }

        .coming-card > p:last-child {
          max-width: 500px;
          color: rgba(255,255,255,.72);
          font-size: 15px;
          line-height: 1.7;
        }

        .site-footer {
          padding: 28px 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(242,201,76,.15);
          background: #050505;
        }

        .site-footer img {
          width: 110px;
          height: auto;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;
          color: rgba(255,255,255,.35);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .site-footer span {
          color: rgba(242,201,76,.8);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 45% 55%;
          }

          .shop-heading {
            flex-wrap: wrap;
          }

          .shop-heading div {
            width: 100%;
            flex-basis: 100%;
          }
        }

        @media (max-width: 650px) {
          .site-header {
            min-height: auto;
            padding: 16px 12px 10px;
            flex-direction: column;
          }

          .mobile-logo {
            display: block;
            width: 78%;
            max-width: 330px;
            margin: 0 auto 18px;
          }

          .mobile-logo a {
            display: block;
            line-height: 0;
          }

          .mobile-logo img {
            display: block;
            width: 100%;
            height: auto;
          }

          .site-nav {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 3px;
            padding: 7px;
            border-radius: 18px;
          }

          .site-nav a {
            font-size: 10px;
            padding: 6px 8px;
          }

          .desktop-logo {
            display: none;
          }

          .hero {
            display: block;
            min-height: auto;
            padding: 35px 16px 55px;
          }

          .hero-copy {
            width: 100%;
            margin: auto;
            padding: 0;
          }

          .hero h1 {
            font-size: 43px;
          }

          .hero-copy > p:last-child {
            font-size: 12px;
            line-height: 1.6;
          }

          .shop-section {
            width: calc(100% - 36px);
            padding-bottom: 70px;
          }

          .shop-heading {
            display: block;
            text-align: center;
          }

          .shop-heading p {
            margin-bottom: 8px;
          }

          .shop-heading h2 {
            font-size: 31px;
          }

          .shop-heading div {
            width: 65px;
            margin: 18px auto 0;
          }

          .coming-card {
            min-height: 280px;
            margin-top: 30px;
          }

          .coming-card h3 {
            font-size: 32px;
          }

          .site-footer {
            flex-direction: column;
            gap: 15px;
            padding: 30px 20px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
