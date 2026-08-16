import Link from "next/link";

type Product = {
  name: string;
  description: string;
  image?: string;
  price?: string;
  href?: string;
};

/*
 * MERCHANDISE
 *
 * Add products here when the merchandise is ready.
 *
 * Example:
 *
 * {
 *   name: "Can't Make This Up! T-Shirt",
 *   description: "Official show merchandise.",
 *   image: "/images/merchandise/cmtu-shirt.png",
 *   price: "$35",
 *   href: "https://your-store-link.com",
 * }
 */

const products: Product[] = [];

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function MerchandisePage() {
  return (
    <main className="merch-page">

      {/* BACKGROUND */}
      <div
        className="merch-background"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="merch-content">

        {/* NAVIGATION */}
        <header className="merch-header">
          <nav
            className="merch-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/merchandise"
                    ? "merch-nav-link active"
                    : "merch-nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* HERO */}
        <section className="merch-hero">

          <div className="merch-hero-copy">

            <p className="eyebrow">
              Scotti Brothers Entertainment
            </p>

            <h1>
              Merchandise
            </h1>

            <p className="hero-subtitle">
              Wear the conversation. Rep the stories.
              Bring a little Can't Make This Up! with you.
            </p>

          </div>

        </section>

        {/* STORE */}
        <section className="store-section">

          <div className="section-heading">

            <p className="eyebrow">
              Official Show Gear
            </p>

            <h2>
              Shop The Show
            </h2>

          </div>

          {products.length > 0 ? (

            <div className="product-grid">

              {products.map((product, index) => {

                const content = (
                  <>
                    <div className="product-image">

                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                        />
                      ) : (
                        <div className="product-image-placeholder">
                          <span>
                            Can't Make
                            <br />
                            This Up!
                          </span>
                        </div>
                      )}

                    </div>

                    <div className="product-content">

                      <p className="product-category">
                        Official Merchandise
                      </p>

                      <h3>
                        {product.name}
                      </h3>

                      <p className="product-description">
                        {product.description}
                      </p>

                      <div className="product-bottom">

                        {product.price && (
                          <span className="product-price">
                            {product.price}
                          </span>
                        )}

                        <span className="shop-button">
                          Shop
                        </span>

                      </div>

                    </div>
                  </>
                );

                if (product.href) {
                  return (
                    <a
                      key={`${product.name}-${index}`}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={`${product.name}-${index}`}
                    className="product-card"
                  >
                    {content}
                  </div>
                );
              })}

            </div>

          ) : (

            /* COMING SOON */
            <div className="store-coming-soon">

              <div className="store-card">

                <div className="store-card-inner">

                  <div className="store-mark">
                    CMTU
                  </div>

                  <p className="store-card-eyebrow">
                    Official Merchandise
                  </p>

                  <h3>
                    Coming Soon
                  </h3>

                  <p>
                    The official Can't Make This Up!
                    merchandise collection is on the way.
                  </p>

                  <span className="store-status">
                    SHOP WILL OPEN SOON
                  </span>

                </div>

              </div>

            </div>

          )}

        </section>

        {/* FEATURE STRIP */}
        <section className="merch-strip">

          <div className="strip-item">
            <strong>
              OFFICIAL
            </strong>
            <span>
              Can't Make This Up! merchandise
            </span>
          </div>

          <div className="strip-divider" />

          <div className="strip-item">
            <strong>
              ORIGINAL
            </strong>
            <span>
              Designed for the show
            </span>
          </div>

          <div className="strip-divider" />

          <div className="strip-item">
            <strong>
              COMING SOON
            </strong>
            <span>
              More gear. More stories.
            </span>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="merch-footer">
          © {new Date().getFullYear()} Scotti Brothers Entertainment
        </footer>

      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           PAGE
        ========================================= */

        .merch-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;

          background: #050505;
          color: #fff;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .merch-background {
          position: fixed;
          inset: 0;
          z-index: 0;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(139,0,0,0.25),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(212,175,55,0.10),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #100000 45%,
              #050505 100%
            );
        }

        .merch-content {
          position: relative;
          z-index: 2;

          width: 100%;
        }

        /* =========================================
           NAVIGATION
        ========================================= */

        .merch-header {
          width: 100%;

          padding:
            24px
            42px
            0;

          display: flex;
          justify-content: flex-end;
        }

        .merch-nav {
          display: flex;
          align-items: center;

          gap: 4px;

          padding:
            8px
            10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid
            rgba(255,255,255,0.12);

          backdrop-filter:
            blur(6px);

          -webkit-backdrop-filter:
            blur(6px);
        }

        .merch-nav-link {
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
        }

        .merch-nav-link.active {
          background: #8b0000;
          color: #fff;
        }

        /* =========================================
           HERO
        ========================================= */

        .merch-hero {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          min-height: 360px;

          padding:
            90px
            32px
            55px;

          display: flex;

          align-items: center;
          justify-content: center;

          text-align: center;
        }

        .merch-hero-copy {
          width: 100%;
          max-width: 950px;
        }

        .eyebrow {
          margin: 0;

          color: #d4af37;

          font-size: 13px;
          font-weight: 900;

          letter-spacing: 4px;

          text-transform: uppercase;
        }

        .merch-hero h1 {
          margin:
            12px
            0
            0;

          color: #fff;

          font-size:
            clamp(
              52px,
              8vw,
              92px
            );

          line-height: 0.9;

          font-weight: 900;

          letter-spacing: -4px;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0 rgba(212,175,55,0.35);
        }

        .hero-subtitle {
          margin:
            25px
            auto
            0;

          max-width: 760px;

          color:
            rgba(255,255,255,0.78);

          font-size: 19px;

          line-height: 1.55;

          font-weight: 700;
        }

        /* =========================================
           STORE
        ========================================= */

        .store-section {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          padding:
            0
            32px
            70px;
        }

        .section-heading {
          margin-bottom: 28px;

          text-align: center;
        }

        .section-heading h2 {
          margin:
            7px
            0
            0;

          color: #fff;

          font-size: 38px;

          line-height: 1;

          font-weight: 900;

          text-transform: uppercase;
        }

        /* =========================================
           PRODUCT GRID
        ========================================= */

        .product-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 28px;
        }

        .product-card {
          overflow: hidden;

          color: #fff;

          text-decoration: none;

          background:
            #111;

          border:
            1px solid
            rgba(212,175,55,0.45);

          box-shadow:
            0 15px 35px
            rgba(0,0,0,0.5);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .product-card:hover {
          transform:
            translateY(-7px);

          border-color:
            #d4af37;
        }

        .product-image {
          position: relative;

          width: 100%;

          aspect-ratio: 1 / 1;

          overflow: hidden;

          background:
            #1b1b1b;
        }

        .product-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }

        .product-card:hover
        .product-image img {
          transform:
            scale(1.05);
        }

        .product-image-placeholder {
          width: 100%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          text-align: center;

          background:
            linear-gradient(
              145deg,
              #8b0000,
              #350000
            );
        }

        .product-image-placeholder span {
          color: #f5d76e;

          font-size: 28px;

          line-height: 0.95;

          font-weight: 900;

          text-transform: uppercase;

          text-shadow:
            2px 2px 0 #000;
        }

        .product-content {
          padding:
            22px;
        }

        .product-category {
          margin: 0;

          color:
            #d4af37;

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .product-content h3 {
          margin:
            8px
            0
            0;

          color: #fff;

          font-size: 25px;

          line-height: 1;

          font-weight: 900;
        }

        .product-description {
          margin:
            10px
            0
            0;

          color:
            rgba(255,255,255,0.62);

          font-size: 13px;

          line-height: 1.5;
        }

        .product-bottom {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 20px;
        }

        .product-price {
          color:
            #f5d76e;

          font-size: 19px;

          font-weight: 900;
        }

        .shop-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            9px
            16px;

          border-radius: 999px;

          background:
            #8b0000;

          color: #fff;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        /* =========================================
           COMING SOON
        ========================================= */

        .store-coming-soon {
          display: flex;

          justify-content: center;

          width: 100%;
        }

        .store-card {
          width: 100%;

          max-width: 680px;

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
            0 20px 50px
            rgba(0,0,0,0.55);
        }

        .store-card-inner {
          min-height: 340px;

          padding:
            45px
            30px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          background:
            linear-gradient(
              145deg,
              #850000,
              #430000
            );

          border:
            7px solid
            #8b0000;
        }

        .store-mark {
          width: 72px;
          height: 72px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            2px solid
            #d4af37;

          border-radius: 50%;

          color:
            #f5d76e;

          font-size: 15px;

          font-weight: 900;

          letter-spacing: 1px;
        }

        .store-card-eyebrow {
          margin:
            22px
            0
            0;

          color:
            #d4af37;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .store-card h3 {
          margin:
            9px
            0
            0;

          color:
            #fff;

          font-size: 42px;

          line-height: 1;

          font-weight: 900;

          text-transform: uppercase;
        }

        .store-card-inner > p:not(.store-card-eyebrow) {
          max-width: 480px;

          margin:
            14px
            0
            0;

          color:
            rgba(255,255,255,0.72);

          font-size: 15px;

          line-height: 1.55;
        }

        .store-status {
          margin-top:
            24px;

          padding:
            9px
            16px;

          border:
            1px solid
            rgba(212,175,55,0.7);

          border-radius:
            999px;

          color:
            #f5d76e;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            2px;
        }

        /* =========================================
           STRIP
        ========================================= */

        .merch-strip {
          width: 100%;

          max-width: 1200px;

          margin:
            0 auto;

          padding:
            30px
            32px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 30px;

          border-top:
            1px solid
            rgba(212,175,55,0.25);

          border-bottom:
            1px solid
            rgba(212,175,55,0.25);
        }

        .strip-item {
          display: flex;

          flex-direction: column;

          text-align: center;
        }

        .strip-item strong {
          color:
            #f5d76e;

          font-size: 12px;

          font-weight: 900;

          letter-spacing: 2px;
        }

        .strip-item span {
          margin-top:
            5px;

          color:
            rgba(255,255,255,0.55);

          font-size: 11px;
        }

        .strip-divider {
          width: 1px;

          height: 38px;

          background:
            rgba(212,175,55,0.35);
        }

        /* =========================================
           FOOTER
        ========================================= */

        .merch-footer {
          padding:
            30px
            20px;

          text-align: center;

          color:
            rgba(255,255,255,0.4);

          font-size: 13px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .product-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .merch-strip {
            gap: 20px;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .merch-header {
            padding:
              18px
              20px
              0;

            justify-content: center;
          }

          .merch-nav {
            flex-wrap: wrap;

            justify-content: center;

            border-radius:
              18px;
          }

          .merch-nav-link {
            padding:
              6px
              8px;

            font-size: 11px;
          }

          .merch-hero {
            min-height: 280px;

            padding:
              55px
              16px
              35px;
          }

          .merch-hero h1 {
            font-size: 58px;

            letter-spacing: -2px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .store-section {
            padding:
              0
              16px
              60px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .product-grid {
            grid-template-columns:
              1fr;

            max-width: 430px;

            margin:
              0 auto;
          }

          .store-card-inner {
            min-height: 300px;

            padding:
              35px
              20px;
          }

          .store-card h3 {
            font-size: 34px;
          }

          .merch-strip {
            flex-direction: column;

            gap: 18px;

            padding:
              28px
              20px;
          }

          .strip-divider {
            width: 60px;
            height: 1px;
          }

        }

      `}</style>

    </main>
  );
}
