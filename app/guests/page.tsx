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

export default function GuestsPage() {
  return (
    <main className="guests-page">
      {/* BACKGROUND */}
      <div
        className="guests-background"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="guests-content">
        <div className="page-logo">
  <Link href="/" aria-label="Can't Make This Up!">
    <img
      src="/images/logo.png"
      alt="Can't Make This Up!"
    />
  </Link>
</div>

        {/* NAVIGATION */}
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

        {/* HERO */}
        <section className="guests-hero">
          <div className="guests-hero-copy">

            <p className="eyebrow">
              Scotti Brothers Entertainment
            </p>

            <h1>Guests</h1>

            <p className="hero-subtitle">
              Meet the artists, entertainers, creators, and personalities
              with unbelievable stories of their industry encounters
            </p>

          </div>
        </section>

        {/* GUEST GALLERY */}
        <section className="gallery-section">

          <div className="section-heading">
            <p className="eyebrow">
              The People Behind The Stories
            </p>

            <h2>Guest Gallery</h2>
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

        {/* FOOTER */}
        <footer className="guests-footer">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </footer>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
          .page-logo {
  position: absolute;
  top: 24px;
  left: 32px;
  z-index: 20;
}

.page-logo img {
  display: block;
  width: 180px;
  height: auto;
}
        }

        /* =========================================
           PAGE
        ========================================= */

        .guests-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background: #050505;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .guests-background {
          position: fixed;
          inset: 0;
          z-index: 0;

          background:
            radial-gradient(
              circle at 20% 15%,
              rgba(130, 0, 0, 0.14),
              transparent 28%
            ),
            radial-gradient(
              circle at 80% 65%,
              rgba(184, 134, 11, 0.08),
              transparent 30%
            ),
            #050505;
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
          padding: 24px 42px 0;
          display: flex;
          justify-content: flex-end;
        }

        .guests-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
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
        }

        .guests-nav-link.active {
          background: #8b0000;
          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .guests-hero {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 330px;
          padding: 90px 32px 55px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
        }

        .guests-hero-copy {
          width: 100%;
          max-width: 950px;
        }

        .eyebrow {
          margin: 0;

          font-size: 13px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;

          color: #d4af37;
        }

        .guests-hero h1 {
          margin: 12px 0 0;

          font-size: clamp(60px, 9vw, 100px);
          line-height: 0.9;

          font-weight: 900;
          letter-spacing: -4px;
          text-transform: uppercase;

          color: #fff;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0 rgba(212,175,55,0.35);
        }

        .hero-subtitle {
          margin: 24px auto 0;

          max-width: 850px;

          color: rgba(255,255,255,0.82);

          font-size: 19px;
          line-height: 1.55;
          font-weight: 700;
        }

        /* =========================================
           GALLERY
        ========================================= */

        .gallery-section {
          width: 100%;
          max-width: 1250px;

          margin: 0 auto;

          padding: 0 32px 90px;
        }

        .section-heading {
          margin-bottom: 28px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 7px 0 0;

          color: #fff;

          font-size: 38px;
          line-height: 1;

          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        /* =========================================
           GUEST GRID
        ========================================= */

        .guest-gallery {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

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
          transform: translateY(-8px);
          filter: brightness(1.08);
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
              #d4af37 18%,
              #8f6b16 45%,
              #f5d76e 65%,
              #9b7418 100%
            );

          box-shadow:
            0 12px 30px rgba(0,0,0,0.65),
            inset 0 0 0 1px rgba(255,255,255,0.35);
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
            inset 0 0 0 2px rgba(0,0,0,0.5);
        }

        /* =========================================
           PHOTO
        ========================================= */

        .guest-photo {
          position: relative;

          width: 100%;
          aspect-ratio: 4 / 5;

          overflow: hidden;

          background: #151515;
        }

        .guest-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }

        .guest-card:hover .guest-photo img {
          transform: scale(1.05);
        }

        /* =========================================
           NAME PLATE
        ========================================= */

        .guest-info {
          padding: 18px 12px 16px;

          text-align: center;

          background: #750000;
        }

        .guest-info h3 {
          margin: 0;

          color: #f5d76e;

          font-size: 21px;
          line-height: 1.05;

          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .guest-info p {
          margin: 7px 0 0;

          color: rgba(255,255,255,0.82);

          font-size: 11px;
          line-height: 1.3;

          font-weight: 800;

          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* =========================================
           EMPTY GALLERY
        ========================================= */

        .gallery-empty {
          width: 100%;

          display: flex;
          justify-content: center;

          padding: 10px 0 20px;
        }

        .empty-frame {
          width: 100%;
          max-width: 520px;

          padding: 8px;

          background:
            linear-gradient(
              135deg,
              #fff0a3,
              #d4af37,
              #80600e,
              #f5d76e,
              #987318
            );

          box-shadow:
            0 18px 45px rgba(0,0,0,0.55);
        }

        .empty-frame-inner {
          min-height: 280px;

          padding: 45px 30px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;

          background:
            linear-gradient(
              145deg,
              #850000,
              #4f0000
            );

          border: 7px solid #8b0000;
        }

        .empty-icon {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border: 2px solid #d4af37;

          color: #d4af37;

          font-size: 32px;
          font-weight: 300;
        }

        .empty-frame-inner h3 {
          margin: 18px 0 0;

          color: #f5d76e;

          font-size: 27px;
          font-weight: 900;

          text-transform: uppercase;
        }

        .empty-frame-inner p {
          max-width: 350px;

          margin: 10px 0 0;

          color: rgba(255,255,255,0.72);

          font-size: 14px;
          line-height: 1.5;
        }

        /* =========================================
           FOOTER
        ========================================= */

        .guests-footer {
          padding: 28px 20px;

          text-align: center;

          border-top:
            1px solid rgba(255,255,255,0.1);

          color: rgba(255,255,255,0.45);

          font-size: 13px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .guest-gallery {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 24px;
          }

        }

        @media (max-width: 800px) {

          .guests-header {
            padding: 18px 20px 0;
          }

          .guests-hero {
            min-height: 280px;
            padding: 65px 20px 40px;
          }

          .gallery-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .guest-gallery {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 22px;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .guests-header {
            justify-content: center;
          }

          .guests-nav {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 18px;
          }

          .guests-nav-link {
            font-size: 11px;
            padding: 6px 8px;
          }

          .guests-hero {
            min-height: 270px;
            padding: 55px 16px 35px;
          }

          .guests-hero h1 {
            font-size: 58px;
            letter-spacing: -2px;
          }

          .hero-subtitle {
            font-size: 16px;
            line-height: 1.5;
          }

          .gallery-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .guest-gallery {
            grid-template-columns: 1fr;
            gap: 30px;
            max-width: 430px;
            margin: 0 auto;
          }

          .guest-card {
            max-width: 430px;
            margin: 0 auto;
          }

          .empty-frame-inner {
            min-height: 240px;
            padding: 35px 20px;
          }

        }
      `}</style>
    </main>
  );
}
