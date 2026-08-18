"use client";

import Link from "next/link";

type Guest = {
  name: string;
  role: string;
  image: string;
};

const guests: Guest[] = [];

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

export default function GuestsPage() {
  return (
    <main className="guests-page">
      <div className="background" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="page-content">
        <header className="site-header">
          <MobileLogo />

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.href === "/guests" ? "active" : ""}
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

            <h1>GUESTS</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p>
              Meet the artists, entertainers, creators, and personalities
              <br />
              with unbelievable stories of their industry encounters.
            </p>
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-heading">
            <p className="eyebrow">THE PEOPLE BEHIND THE STORIES</p>
            <h2>GUEST GALLERY</h2>
            <div className="red-line" />
          </div>

          {guests.length > 0 ? (
            <div className="guest-gallery">
              {guests.map((guest, index) => (
                <article
                  key={`${guest.name}-${index}`}
                  className="guest-card"
                >
                  <div className="gold-frame">
                    <div className="red-frame">
                      <div className="guest-photo">
                        <img src={guest.image} alt={guest.name} />
                      </div>

                      <div className="guest-info">
                        <h3>{guest.name}</h3>
                        {guest.role && <p>{guest.role}</p>}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <div className="empty-frame">
                <div className="empty-inner">
                  <div className="empty-icon">+</div>

                  <h3>GUESTS COMING SOON</h3>

                  <p>
                    New guest portraits will appear here as the stories
                    unfold.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer className="site-footer">
          © {new Date().getFullYear()} Scotti Brothers Ent
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .guests-page {
          --gold: ${GOLD};
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 20% 20%,rgba(139,0,0,.18),transparent 30%),
            radial-gradient(circle at 80% 60%,rgba(242,201,76,.08),transparent 32%),
            linear-gradient(180deg,#050505 0%,#090909 50%,#050505 100%);
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

        .page-content {
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
          backdrop-filter: blur(6px);
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
          padding: 45px 45px 70px;
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
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-copy {
          width: 100%;
          max-width: 620px;
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
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 17px 0 0;
          color: #fff;
          font-size: clamp(55px,7vw,96px);
          line-height: .9;
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

        .gallery-section {
          width: min(1250px,100%);
          margin: auto;
          padding: 20px 32px 90px;
        }

        .section-heading {
          margin-bottom: 32px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 8px 0 0;
          font-size: 42px;
          font-weight: 900;
        }

        .red-line {
          width: 65px;
          height: 4px;
          margin: 20px auto 0;
          background: #c62828;
        }

        .guest-gallery {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: 30px;
        }

        .gold-frame {
          padding: 7px;
          background: linear-gradient(
            135deg,
            #fff0a3,
            #f2c94c,
            #9f7612,
            #f7d85d,
            #a67b12
          );
          box-shadow: 0 12px 30px rgba(0,0,0,.65);
        }

        .red-frame {
          padding: 8px;
          background: linear-gradient(145deg,#b30000,#650000,#9b0000);
        }

        .guest-photo {
          aspect-ratio: 4/5;
          overflow: hidden;
          background: #151515;
        }

        .guest-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .guest-info {
          padding: 18px 12px 16px;
          text-align: center;
          background: #750000;
        }

        .guest-info h3 {
          margin: 0;
          color: var(--gold);
          font-size: 21px;
          font-weight: 900;
        }

        .guest-info p {
          margin: 7px 0 0;
          color: rgba(255,255,255,.82);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .gallery-empty {
          display: flex;
          justify-content: center;
        }

        .empty-frame {
          width: 100%;
          max-width: 540px;
          padding: 8px;
          background: linear-gradient(
            135deg,
            #fff0a3,
            #f2c94c,
            #80600e,
            #f7d85d
          );
          box-shadow: 0 18px 45px rgba(0,0,0,.55);
        }

        .empty-inner {
          min-height: 280px;
          padding: 45px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(145deg,#850000,#4f0000);
        }

        .empty-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
          font-size: 32px;
        }

        .empty-inner h3 {
          margin: 18px 0 0;
          color: var(--gold);
          font-size: 27px;
          font-weight: 900;
        }

        .empty-inner p {
          max-width: 350px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.5;
        }

        .site-footer {
          padding: 28px 20px;
          text-align: center;
          border-top: 1px solid rgba(242,201,76,.15);
          color: rgba(255,255,255,.45);
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 45% 55%;
          }

          .guest-gallery {
            grid-template-columns: repeat(3,minmax(0,1fr));
          }
        }

        @media (max-width: 650px) {
          .site-header {
            min-height: auto;
            padding: 16px 12px 10px;
            flex-direction: column;
            justify-content: flex-start;
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
            font-size: 48px;
          }

          .hero-copy > p:last-child {
            font-size: 12px;
            line-height: 1.6;
          }

          .gallery-section {
            padding: 10px 16px 70px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .guest-gallery {
            grid-template-columns: 1fr;
            max-width: 430px;
            margin: auto;
          }
        }
      `}</style>
    </main>
  );
}
