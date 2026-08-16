import Link from "next/link";

type Guest = {
  id: string;
  name: string;
  episodeNumber: string;
  airDate: string;
  topic: string;
  bio: string;
  image?: string;
  frame: "red" | "gold";
};

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
      <div className="gallery-background" />

      {/* CONTENT */}
      <div className="guests-content">
        {/* NAVIGATION */}
        <header className="guests-header">
          <nav className="guests-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/guests"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* PAGE HEADER */}
        <section className="gallery-header">
          <p className="eyebrow">Scotti Brothers Entertainment</p>

          <h1>Guests</h1>

          <p className="gallery-intro">
            Meet the artists, entertainers, creators, and personalities
            who sit down with the Scotti Brothers.
          </p>
        </section>

        {/* GALLERY */}
        <section className="gallery-section">
          {guests.length > 0 ? (
            <div className="guest-gallery">
              {guests.map((guest) => (
                <article
                  key={guest.id}
                  className={`guest-frame ${guest.frame}`}
                >
                  <div className="frame-inner">
                    <div className="portrait">
                      {guest.image ? (
                        <img
                          src={guest.image}
                          alt={guest.name}
                        />
                      ) : (
                        <div className="portrait-placeholder">
                          Guest Portrait
                        </div>
                      )}
                    </div>

                    <div className="guest-info">
                      <p className="episode-number">
                        {guest.episodeNumber}
                      </p>

                      <h2>{guest.name}</h2>

                      <p className="air-date">
                        Airs {guest.airDate}
                      </p>

                      <h3>{guest.topic}</h3>

                      <p className="guest-bio">
                        {guest.bio}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-gallery">
              <div className="empty-frame red">
                <div className="empty-inner">
                  <div className="empty-portrait">
                    <span>GUEST</span>
                    <strong>01</strong>
                  </div>

                  <div className="empty-label">
                    <p>FIRST GUEST</p>
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="empty-frame gold">
                <div className="empty-inner">
                  <div className="empty-portrait">
                    <span>GUEST</span>
                    <strong>02</strong>
                  </div>

                  <div className="empty-label">
                    <p>UP NEXT</p>
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="empty-frame red">
                <div className="empty-inner">
                  <div className="empty-portrait">
                    <span>GUEST</span>
                    <strong>03</strong>
                  </div>

                  <div className="empty-label">
                    <p>UP NEXT</p>
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="gallery-footer">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .guests-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background: #050505;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .gallery-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(120,0,0,0.12),
              transparent 42%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(190,145,20,0.08),
              transparent 35%
            ),
            #050505;
        }

        .guests-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* NAVIGATION */

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
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .nav-link {
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

        .nav-link.active {
          background: #b40016;
        }

        .nav-link:hover {
          background: rgba(255,255,255,0.12);
        }

        .nav-link.active:hover {
          background: #d0001b;
        }

        /* HEADER */

        .gallery-header {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 32px 55px;
          text-align: center;
        }

        .eyebrow {
          margin: 0;
          color: #d5ae3a;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .gallery-header h1 {
          margin: 10px 0 0;
          font-size: clamp(58px, 9vw, 105px);
          line-height: 0.88;
          font-weight: 900;
          letter-spacing: -4px;
          text-transform: uppercase;
        }

        .gallery-intro {
          max-width: 650px;
          margin: 22px auto 0;
          color: rgba(255,255,255,0.68);
          font-size: 17px;
          line-height: 1.6;
        }

        /* GALLERY */

        .gallery-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px 90px;
        }

        .guest-gallery {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 34px;
          align-items: start;
        }

        .guest-frame {
          padding: 10px;
          background: #b40016;
          box-shadow:
            0 20px 45px rgba(0,0,0,0.55),
            0 0 25px rgba(180,0,22,0.15);
        }

        .guest-frame.gold {
          background: linear-gradient(
            135deg,
            #8c6718,
            #e0bc52,
            #9b731d,
            #f0d36c,
            #8c6718
          );
          box-shadow:
            0 20px 45px rgba(0,0,0,0.55),
            0 0 25px rgba(224,188,82,0.14);
        }

        .frame-inner {
          background: #0b0b0b;
          padding: 8px;
        }

        .portrait {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #161616;
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .portrait-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.25);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .guest-info {
          padding: 18px 14px 20px;
          text-align: center;
        }

        .episode-number {
          margin: 0;
          color: #d5ae3a;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .guest-info h2 {
          margin: 6px 0 0;
          color: #fff;
          font-size: 27px;
          font-weight: 900;
        }

        .air-date {
          margin: 5px 0 0;
          color: #b40016;
          font-size: 12px;
          font-weight: 800;
        }

        .guest-info h3 {
          margin: 14px 0 0;
          color: #d5ae3a;
          font-size: 15px;
          line-height: 1.3;
          font-weight: 900;
        }

        .guest-bio {
          margin: 10px 0 0;
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          line-height: 1.55;
        }

        /* EMPTY GALLERY */

        .empty-gallery {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 34px;
        }

        .empty-frame {
          padding: 10px;
          background: #b40016;
          box-shadow:
            0 20px 45px rgba(0,0,0,0.55),
            0 0 25px rgba(180,0,22,0.15);
        }

        .empty-frame.gold {
          background: linear-gradient(
            135deg,
            #8c6718,
            #e0bc52,
            #9b731d,
            #f0d36c,
            #8c6718
          );
        }

        .empty-inner {
          background: #0b0b0b;
          padding: 8px;
        }

        .empty-portrait {
          aspect-ratio: 3 / 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,0.05),
              transparent 55%
            ),
            #111;
        }

        .empty-portrait span {
          color: #d5ae3a;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .empty-portrait strong {
          margin-top: 8px;
          color: rgba(255,255,255,0.13);
          font-size: 72px;
          line-height: 1;
          font-weight: 900;
        }

        .empty-label {
          padding: 18px 12px 20px;
          text-align: center;
        }

        .empty-label p {
          margin: 0;
          color: #d5ae3a;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .empty-label h2 {
          margin: 6px 0 0;
          color: #fff;
          font-size: 24px;
          font-weight: 900;
        }

        /* FOOTER */

        .gallery-footer {
          padding: 28px 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
          text-align: center;
          font-size: 12px;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .guests-header {
            padding: 18px 20px 0;
          }

          .gallery-header {
            padding: 65px 20px 45px;
          }

          .gallery-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .guest-gallery,
          .empty-gallery {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .guests-header {
            justify-content: center;
          }

          .guests-nav {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 18px;
          }

          .nav-link {
            font-size: 11px;
            padding: 6px 8px;
          }

          .gallery-header {
            padding: 55px 16px 40px;
          }

          .gallery-header h1 {
            font-size: 62px;
            letter-spacing: -3px;
          }

          .gallery-intro {
            font-size: 15px;
          }

          .gallery-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .guest-gallery,
          .empty-gallery {
            grid-template-columns: 1fr;
            max-width: 430px;
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
}
