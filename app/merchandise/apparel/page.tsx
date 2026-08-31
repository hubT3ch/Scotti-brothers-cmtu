"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  formatMoney,
  type MerchandiseProduct,
} from "@/lib/commerce";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  {
    label: "All Merchandise",
    href: "/merchandise",
  },
  {
    label: "Apparel",
    href: "/merchandise/apparel",
  },
  {
    label: "Collection",
    href: "/merchandise/collection",
  },
  {
    label: "Collectibles",
    href: "/merchandise/collectibles",
  },
];

const GOLD = "#F2C94C";

function ProductCard({
  product,
}: {
  product: MerchandiseProduct;
}) {
  const customerPrice =
    product.salePrice ?? product.price;

  const primaryImage =
    product.images[0] ?? null;

  const hasSale =
    product.salePrice !== null &&
    product.salePrice < product.price;

  const available =
    product.inventoryQuantity > 0 &&
    customerPrice > 0;

  return (
    <article className="merch-card">
      <Link
        href={`/merchandise/product/${product.id}`}
        className="product-link"
        aria-label={`View ${product.name}`}
      >
        <div className="gold-frame">
          <div className="red-frame">
            <div className="product-image">
              {primaryImage ? (
                <img
                  src={primaryImage}
                  alt={product.name}
                />
              ) : (
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
              )}
            </div>

            <div className="product-info">
              {product.featured && (
                <div className="featured-label">
                  FEATURED
                </div>
              )}

              <p className="product-category">
                {product.category}
              </p>

              <h3>
                {product.name ||
                  "Unnamed Product"}
              </h3>

              <p className="product-description">
                {product.description ||
                  "Official Scotti Brothers merchandise."}
              </p>

              <div className="product-price">
                {customerPrice > 0 ? (
                  <>
                    {hasSale && (
                      <span className="regular-price">
                        {formatMoney(
                          product.price,
                        )}
                      </span>
                    )}

                    <span>
                      {formatMoney(
                        customerPrice,
                      )}
                    </span>
                  </>
                ) : (
                  "COMING SOON"
                )}
              </div>

              <div
                className={
                  available
                    ? "view-product-button"
                    : "coming-soon"
                }
              >
                {available
                  ? "VIEW PRODUCT"
                  : product.inventoryQuantity ===
                    0
                  ? "SOLD OUT"
                  : "COMING SOON"}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ApparelPage() {
  const [products, setProducts] =
    useState<MerchandiseProduct[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  /*
   * LOAD THE REAL PUBLIC CATALOG
   *
   * Apparel page
   *      ↓
   * /api/merchandise
   *      ↓
   * Supabase
   *      ↓
   * merchandise_products
   *      +
   * merchandise_product_images
   *
   * The API already restricts the response
   * to active + public products.
   */
  useEffect(() => {
    let cancelled = false;

    async function loadCatalog() {
      try {
        setLoading(true);
        setError(null);

        const response =
          await fetch(
            "/api/merchandise",
            {
              method: "GET",
              cache: "no-store",
            },
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ||
              "Unable to load merchandise catalog.",
          );
        }

        const loadedProducts =
          Array.isArray(
            data?.products,
          )
            ? data.products
            : [];

        if (!cancelled) {
          setProducts(
            loadedProducts,
          );
        }
      } catch (loadError) {
        console.error(
          "Public apparel catalog error:",
          loadError,
        );

        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load merchandise catalog.",
          );

          setProducts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadCatalog();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * APPAREL PRODUCTS
   *
   * Only products whose actual database
   * category is Apparel are displayed here.
   *
   * This page does NOT use the old
   * hard-coded merchandiseProducts array.
   */
  const apparelProducts =
    useMemo(() => {
      return products
        .filter(
          (product) =>
            product.active &&
            product.publicDisplay &&
            product.category
              ?.trim()
              .toLowerCase() ===
              "apparel",
        )
        .sort(
          (a, b) =>
            a.displayOrder -
            b.displayOrder,
        );
    }, [products]);

  return (
    <main className="merchandise-page">
      <div
        className="background"
        aria-hidden="true"
      />

      <div
        className="grid-overlay"
        aria-hidden="true"
      />

      <div className="page-content">

        {/* HEADER */}

        <header className="site-header">
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

          <nav
            className="site-nav"
            aria-label="Main navigation"
          >
            {navigation.map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.href ===
                    "/merchandise"
                      ? "active"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </header>

        {/* HERO */}

        <section className="hero">
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

            <h1>APPAREL</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-subtitle">
              Official Scotti Brothers
              and Can&apos;t Make This Up!
              apparel.
              <br />
              Wear the stories.
              Represent the show.
            </p>

            <a
              href="#apparel"
              className="hero-shop-button"
            >
              SHOP APPAREL
            </a>
          </div>
        </section>

        {/* CATEGORY NAVIGATION */}

        <section className="category-nav-section">
          <div className="category-nav">
            {categories.map(
              (category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={
                    category.label ===
                    "Apparel"
                      ? "category-nav-link active"
                      : "category-nav-link"
                  }
                >
                  {category.label}
                </Link>
              ),
            )}
          </div>
        </section>

        {/* APPAREL PRODUCTS */}

        <section
          id="apparel"
          className="merch-section"
        >
          <div className="section-heading">
            <p className="eyebrow">
              APPAREL COLLECTION
            </p>

            <h2>WEAR THE SHOW</h2>

            <div className="red-line" />

            <p className="section-description">
              Official apparel from
              Scotti Brothers and
              Can&apos;t Make This Up!
            </p>
          </div>

          <div className="merch-grid">

            {loading ? (
              <div className="empty-catalog">
                <p>
                  LOADING APPAREL
                </p>

                <span>
                  Loading the official
                  CMTU apparel collection.
                </span>
              </div>
            ) : error ? (
              <div className="empty-catalog">
                <p>
                  APPAREL UNAVAILABLE
                </p>

                <span>
                  {error}
                </span>
              </div>
            ) : apparelProducts.length >
              0 ? (
              apparelProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ),
              )
            ) : (
              <div className="empty-catalog">
                <p>
                  APPAREL COMING SOON
                </p>

                <span>
                  Apparel products will
                  appear here once they
                  are published through
                  the Merchandise Desk.
                </span>

                <Link
                  href="/merchandise"
                  className="back-button"
                >
                  VIEW ALL MERCHANDISE
                </Link>
              </div>
            )}

          </div>
        </section>

        {/* FOOTER */}

        <footer className="site-footer">
          <img
            src="/images/logo.png"
            alt="Scotti Brothers Entertainment"
          />

          <p>
            ©{" "}
            {new Date().getFullYear()}{" "}
            Scotti Brothers Ent.
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

        html {
          scroll-behavior: smooth;
        }

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

        /* HEADER */

        .site-header {
          min-height: 82px;
          padding: 24px 42px;

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

        .site-nav a {
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

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #8b0000;
          color: #fff;
        }

        /* HERO */

        .hero {
          width: min(1280px, 100%);
          min-height: 500px;

          margin: 0 auto;

          padding: 45px 45px 75px;

          display: grid;
          grid-template-columns: 48% 52%;

          align-items: center;
        }

        .desktop-logo {
          width: min(100%, 560px);
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

          letter-spacing: 0.42em;

          text-transform: uppercase;
        }

        .hero h1 {
          margin: 17px 0 0;

          color: #fff;

          font-size:
            clamp(48px, 6vw, 86px);

          line-height: 0.92;

          font-weight: 900;

          letter-spacing: -0.045em;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #8b0000,
            8px 8px 0 rgba(242,201,76,0.30);
        }

        .gold-line {
          display: flex;
          align-items: center;
          gap: 16px;

          width: min(500px, 90%);

          margin: 28px auto;
        }

        .gold-line span {
          flex: 1;
          height: 1px;

          background:
            rgba(242,201,76,0.7);
        }

        .gold-line b {
          color: var(--gold);
          font-size: 14px;
        }

        .hero-subtitle {
          max-width: 650px;

          margin: 0 auto;

          color:
            rgba(255,255,255,0.78);

          font-size: 16px;
          line-height: 1.8;

          font-weight: 600;
        }

        .hero-shop-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          margin-top: 28px;

          padding: 14px 24px;

          border:
            1px solid
            var(--gold);

          background: #8b0000;

          color: #fff;

          text-decoration: none;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.2em;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .hero-shop-button:hover {
          transform: translateY(-2px);
          background: #a80000;
        }

        /* CATEGORY NAVIGATION */

        .category-nav-section {
          width: min(1250px, 100%);

          margin: 0 auto;

          padding:
            0
            32px
            20px;
        }

        .category-nav {
          display: flex;
          flex-wrap: wrap;

          justify-content: center;

          gap: 8px;

          padding-bottom: 25px;

          border-bottom:
            1px solid
            rgba(242,201,76,0.15);
        }

        .category-nav-link {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            10px
            16px;

          border:
            1px solid
            rgba(242,201,76,0.25);

          background:
            rgba(0,0,0,0.35);

          color:
            rgba(255,255,255,0.55);

          text-decoration: none;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.15em;

          text-transform: uppercase;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .category-nav-link:hover {
          color: var(--gold);

          border-color:
            rgba(242,201,76,0.6);
        }

        .category-nav-link.active {
          background: #8b0000;

          border-color:
            var(--gold);

          color: var(--gold);
        }

        /* SECTIONS */

        .merch-section {
          width: min(1250px, 100%);

          margin: 0 auto;

          padding:
            20px
            32px
            80px;
        }

        .section-heading {
          margin-bottom: 35px;

          text-align: center;
        }

        .section-heading h2 {
          margin: 9px 0 0;

          color: #fff;

          font-size:
            clamp(34px, 5vw, 58px);

          line-height: 1;

          font-weight: 900;

          text-transform: uppercase;
        }

        .red-line {
          width: 65px;
          height: 4px;

          margin: 20px auto 0;

          background: #c62828;
        }

        .section-description {
          max-width: 620px;

          margin: 18px auto 0;

          color:
            rgba(255,255,255,0.55);

          font-size: 14px;
          line-height: 1.7;
        }

        /* PRODUCT GRID */

        .merch-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 30px;
        }

        .merch-card {
          width: 100%;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .merch-card:hover {
          transform: translateY(-8px);

          filter: brightness(1.08);
        }

        .product-link {
          display: block;

          color: inherit;

          text-decoration: none;
        }

        /* FRAMES */

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
            0 12px 30px
            rgba(0,0,0,0.65);
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
            rgba(0,0,0,0.5);
        }

        /* PRODUCT IMAGE */

        .product-image {
          width: 100%;

          aspect-ratio: 1 / 1;

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              rgba(242,201,76,0.18),
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

        .product-image img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .product-placeholder {
          width: 80%;
          min-height: 70%;

          padding: 25px;

          border:
            1px solid
            rgba(242,201,76,0.3);

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 12px;
        }

        .product-placeholder span {
          color: #c62828;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.3em;
        }

        .product-placeholder strong {
          color: #fff;

          font-size:
            clamp(24px, 3vw, 36px);

          line-height: 0.95;

          font-weight: 900;
        }

        .product-placeholder small {
          color: var(--gold);

          font-size: 8px;
          font-weight: 800;

          letter-spacing: 0.22em;
        }

        /* PRODUCT INFO */

        .product-info {
          padding:
            18px
            15px
            22px;

          text-align: center;

          background: #750000;
        }

        .featured-label {
          display: inline-flex;

          margin-bottom: 8px;

          padding: 5px 9px;

          border:
            1px solid
            rgba(242,201,76,0.45);

          color: var(--gold);

          font-size: 7px;
          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .product-category {
          margin: 0 0 6px;

          color:
            rgba(255,255,255,0.45);

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.18em;

          text-transform: uppercase;
        }

        .product-info h3 {
          margin: 0;

          color: var(--gold);

          font-size: 20px;

          font-weight: 900;
        }

        .product-description {
          min-height: 42px;

          margin: 9px 0 0;

          color:
            rgba(255,255,255,0.78);

          font-size: 12px;

          line-height: 1.5;
        }

        .product-price {
          margin-top: 15px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-wrap: wrap;

          gap: 8px;

          color: #fff;

          font-size: 20px;

          font-weight: 900;
        }

        .regular-price {
          color:
            rgba(255,255,255,0.38);

          font-size: 13px;

          text-decoration: line-through;
        }

        .view-product-button,
        .coming-soon {
          display: inline-flex;

          margin-top: 16px;

          padding: 10px 16px;

          border:
            1px solid
            var(--gold);

          color: var(--gold);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.18em;
        }

        .view-product-button {
          background: #000;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .product-link:hover
          .view-product-button {
          background: var(--gold);

          color: #000;
        }

        .empty-catalog {
          grid-column: 1 / -1;

          padding: 80px 20px;

          border:
            1px solid
            rgba(242,201,76,0.18);

          background:
            rgba(255,255,255,0.02);

          text-align: center;
        }

        .empty-catalog p {
          margin: 0;

          color: var(--gold);

          font-size: 14px;

          font-weight: 900;

          letter-spacing: 0.22em;
        }

        .empty-catalog span {
          display: block;

          margin-top: 12px;

          color:
            rgba(255,255,255,0.4);

          font-size: 12px;
        }

        .back-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          margin-top: 25px;

          padding: 12px 18px;

          border:
            1px solid
            var(--gold);

          background: #8b0000;

          color: var(--gold);

          text-decoration: none;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.16em;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .back-button:hover {
          background: var(--gold);

          color: #000;
        }

        /* FOOTER */

        .site-footer {
          padding: 28px 42px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          border-top:
            1px solid
            rgba(242,201,76,0.15);

          background: #050505;
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
            rgba(255,255,255,0.35);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.2em;

          text-transform: uppercase;
        }

        .site-footer span {
          color:
            rgba(242,201,76,0.8);
        }

        .company-link {
          color: #4da3ff;

          text-decoration: none;

          font-size: 9px;

          font-weight: 400;

          letter-spacing: 0.12em;
        }

        .company-link:hover {
          color: #7fc1ff;

          text-decoration: underline;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .merch-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns:
              45% 55%;

            min-height: 450px;
          }

          .desktop-logo {
            width: 100%;
          }

          .hero-copy {
            padding: 10px;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .site-header {
            min-height: auto;

            padding:
              16px
              12px
              10px;

            flex-direction: column;

            justify-content: flex-start;

            align-items: center;
          }

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

            flex-wrap: wrap;

            justify-content: center;

            gap: 3px;

            padding: 7px;

            border-radius: 18px;
          }

          .site-nav a {
            font-size: 10px;

            padding:
              6px
              8px;
          }

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

            margin: 0 auto;

            padding: 0;

            text-align: center;
          }

          .eyebrow {
            font-size: 8px;

            letter-spacing: 0.25em;
          }

          .hero h1 {
            font-size: 43px;

            letter-spacing: -1.5px;
          }

          .hero-subtitle {
            font-size: 12px;

            line-height: 1.6;
          }

          .hero-shop-button {
            width: 100%;
          }

          .gold-line {
            width: 90%;

            margin:
              20px
              auto;
          }

          .category-nav-section {
            padding:
              0
              16px
              10px;
          }

          .category-nav {
            gap: 5px;

            padding-bottom: 18px;
          }

          .category-nav-link {
            padding:
              8px
              10px;

            font-size: 8px;
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
            grid-template-columns: 1fr;

            max-width: 430px;

            margin: 0 auto;

            gap: 30px;
          }

          .empty-catalog {
            padding:
              60px
              18px;
          }

          .feature-section {
            padding:
              80px
              20px;
          }

          .site-footer {
            padding:
              30px
              20px;

            flex-direction: column;

            gap: 15px;

            text-align: center;
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
