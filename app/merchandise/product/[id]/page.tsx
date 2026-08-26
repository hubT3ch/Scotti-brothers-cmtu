"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  formatMoney,
  getPublicMerchandiseCatalog,
  type MerchandiseProduct,
} from "@/lib/commerce";

const GOLD = "#F2C94C";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

function ProductNotFound() {
  return (
    <main className="product-page">
      <div className="page-content">
        <header className="site-header">
          <Link href="/" className="logo">
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>

          <nav className="site-nav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="not-found">
          <p className="eyebrow">
            MERCHANDISE
          </p>

          <h1>PRODUCT NOT FOUND</h1>

          <div className="gold-line">
            <span />
            <b>◆</b>
            <span />
          </div>

          <p>
            This merchandise item is
            unavailable or is no longer
            published.
          </p>

          <Link
            href="/merchandise"
            className="gold-button"
          >
            RETURN TO MERCHANDISE
          </Link>
        </section>
      </div>
    </main>
  );
}

export default function ProductPage() {
  const params = useParams();

  const productId =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : "";

  const product = useMemo(() => {
    return getPublicMerchandiseCatalog().find(
      (item) =>
        item.id === productId &&
        item.active &&
        item.publicDisplay,
    );
  }, [productId]);

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [quantity, setQuantity] =
    useState(1);

  if (!product) {
    return <ProductNotFound />;
  }

  const customerPrice =
    product.salePrice ??
    product.price;

  const hasSale =
    product.salePrice !== null &&
    product.salePrice < product.price;

  const available =
    product.inventoryQuantity > 0 &&
    customerPrice > 0;

  const images =
    product.images.length > 0
      ? product.images
      : ["/images/logo.png"];

  const currentImage =
    images[
      Math.min(
        selectedImage,
        images.length - 1,
      )
    ];

  function increaseQuantity() {
    setQuantity((current) =>
      Math.min(
        current + 1,
        product.inventoryQuantity,
      ),
    );
  }

  function decreaseQuantity() {
    setQuantity((current) =>
      Math.max(current - 1, 1),
    );
  }

  function addToCart() {
    /*
     * Checkout/cart integration will be
     * connected after the payment processor
     * is activated.
     *
     * For now this deliberately does not
     * attempt to process payment.
     */
    alert(
      "This product is ready for checkout. Payment processing will be activated when the Scotti Brothers payment account is connected.",
    );
  }

  return (
    <main className="product-page">
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
          <Link
            href="/"
            className="logo"
            aria-label="Scotti Brothers Can't Make This Up!"
          >
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>

          <nav
            className="site-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
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
            ))}
          </nav>
        </header>

        {/* BREADCRUMB */}

        <div className="breadcrumb-wrap">
          <Link href="/merchandise">
            Merchandise
          </Link>

          <span> / </span>

          <Link
            href={`/merchandise/${getCategorySlug(
              product.category,
            )}`}
          >
            {product.category}
          </Link>

          <span> / </span>

          <strong>
            {product.name}
          </strong>
        </div>

        {/* PRODUCT */}

        <section className="product-section">
          {/* IMAGE AREA */}

          <div className="product-gallery">
            <div className="main-image-frame">
              <div className="main-image">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={product.name}
                  />
                ) : (
                  <div className="placeholder">
                    SCOTTI BROTHERS
                  </div>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div className="thumbnail-row">
                {images.map(
                  (image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() =>
                        setSelectedImage(
                          index,
                        )
                      }
                      className={
                        selectedImage ===
                        index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                    >
                      <img
                        src={image}
                        alt={`${product.name} image ${
                          index + 1
                        }`}
                      />
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          {/* PRODUCT DETAILS */}

          <div className="product-details">
            <p className="eyebrow">
              {product.category}
            </p>

            {product.featured && (
              <div className="featured">
                FEATURED
              </div>
            )}

            <h1>{product.name}</h1>

            <div className="red-line" />

            <div className="price">
              {customerPrice > 0 ? (
                <>
                  {hasSale && (
                    <span className="old-price">
                      {formatMoney(
                        product.price,
                      )}
                    </span>
                  )}

                  <strong>
                    {formatMoney(
                      customerPrice,
                    )}
                  </strong>
                </>
              ) : (
                <strong>
                  COMING SOON
                </strong>
              )}
            </div>

            <p className="description">
              {product.description ||
                "Official Scotti Brothers merchandise from Can't Make This Up!"}
            </p>

            <div className="product-divider" />

            <div className="availability">
              <span>AVAILABILITY</span>

              <strong
                className={
                  available
                    ? "available"
                    : "unavailable"
                }
              >
                {product.inventoryQuantity >
                0
                  ? `${product.inventoryQuantity} IN STOCK`
                  : "SOLD OUT"}
              </strong>
            </div>

            {available && (
              <div className="purchase-area">
                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={
                      decreaseQuantity
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={
                      increaseQuantity
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={addToCart}
                  className="add-button"
                >
                  ADD TO CART
                </button>
              </div>
            )}

            {!available && (
              <div className="sold-out-button">
                {customerPrice <= 0
                  ? "COMING SOON"
                  : "SOLD OUT"}
              </div>
            )}

            <div className="product-meta">
              <div>
                <span>SKU</span>
                <strong>
                  {product.sku}
                </strong>
              </div>

              <div>
                <span>CATEGORY</span>
                <strong>
                  {product.category}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* RETURN */}

        <section className="return-section">
          <Link href="/merchandise">
            ← BACK TO MERCHANDISE
          </Link>
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

        .product-page {
          --gold: ${GOLD};

          min-height: 100vh;

          position: relative;

          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(139,0,0,0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 60%,
              rgba(242,201,76,0.08),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #050505,
              #090909 50%,
              #050505
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
        }

        .grid-overlay {
          z-index: 1;
          opacity: .25;

          background-image:
            linear-gradient(
              rgba(255,255,255,.012) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.012) 1px,
              transparent 1px
            );

          background-size: 42px 42px;
        }

        .page-content {
          position: relative;
          z-index: 2;
        }

        .site-header {
          min-height: 82px;

          padding:
            24px
            42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 25px;
        }

        .logo {
          display: block;

          width: 145px;

          line-height: 0;
        }

        .logo img {
          width: 100%;
          height: auto;
        }

        .site-nav {
          display: flex;
          align-items: center;

          gap: 5px;

          padding: 8px 10px;

          border-radius: 999px;

          background:
            rgba(255,255,255,.08);

          border:
            1px solid
            rgba(255,255,255,.12);

          backdrop-filter: blur(6px);
        }

        .site-nav a {
          padding:
            8px
            12px;

          border-radius: 999px;

          color: #fff;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;
        }

        .site-nav a:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #8b0000;
        }

        .breadcrumb-wrap {
          width:
            min(
              1250px,
              100%
            );

          margin:
            0
            auto;

          padding:
            15px
            32px;

          color:
            rgba(255,255,255,.4);

          font-size: 10px;

          letter-spacing: .08em;

          text-transform: uppercase;
        }

        .breadcrumb-wrap a {
          color: var(--gold);

          text-decoration: none;
        }

        .breadcrumb-wrap span {
          margin: 0 7px;
        }

        .breadcrumb-wrap strong {
          color:
            rgba(255,255,255,.7);
        }

        .product-section {
          width:
            min(
              1200px,
              100%
            );

          margin:
            30px
            auto
            0;

          padding:
            20px
            32px
            90px;

          display: grid;

          grid-template-columns:
            minmax(0,1fr)
            minmax(0,1fr);

          gap: 70px;

          align-items: start;
        }

        .product-gallery {
          min-width: 0;
        }

        .main-image-frame {
          padding: 8px;

          background:
            linear-gradient(
              135deg,
              #fff0a3,
              #f2c94c 18%,
              #9f7612 45%,
              #f7d85d 65%,
              #a67b12
            );
        }

        .main-image {
          aspect-ratio: 1 / 1;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            radial-gradient(
              circle,
              rgba(242,201,76,.18),
              transparent 55%
            ),
            #090909;
        }

        .main-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .placeholder {
          color: var(--gold);

          font-size: 20px;
          font-weight: 900;

          letter-spacing: .2em;
        }

        .thumbnail-row {
          display: flex;

          gap: 10px;

          margin-top: 15px;

          overflow-x: auto;
        }

        .thumbnail {
          width: 75px;
          height: 75px;

          flex-shrink: 0;

          padding: 3px;

          border:
            1px solid
            rgba(242,201,76,.3);

          background: #090909;

          cursor: pointer;
        }

        .thumbnail.active {
          border-color: var(--gold);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .product-details {
          padding-top: 10px;
        }

        .eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .35em;

          text-transform: uppercase;
        }

        .featured {
          display: inline-flex;

          margin-top: 16px;

          padding:
            5px
            9px;

          border:
            1px solid
            rgba(242,201,76,.45);

          color: var(--gold);

          font-size: 8px;
          font-weight: 900;

          letter-spacing: .2em;
        }

        .product-details h1 {
          margin:
            18px
            0
            0;

          font-size:
            clamp(
              38px,
              5vw,
              68px
            );

          line-height: .95;

          font-weight: 900;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #8b0000;
        }

        .red-line {
          width: 65px;
          height: 4px;

          margin-top: 24px;

          background: #c62828;
        }

        .price {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 28px;
        }

        .price strong {
          color: var(--gold);

          font-size: 32px;
          font-weight: 900;
        }

        .old-price {
          color:
            rgba(255,255,255,.35);

          font-size: 16px;

          text-decoration: line-through;
        }

        .description {
          margin-top: 25px;

          max-width: 600px;

          color:
            rgba(255,255,255,.65);

          font-size: 15px;

          line-height: 1.8;
        }

        .product-divider {
          margin:
            30px
            0;

          border-top:
            1px solid
            rgba(255,255,255,.1);
        }

        .availability {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding-bottom: 20px;
        }

        .availability span {
          color:
            rgba(255,255,255,.4);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .18em;
        }

        .availability strong {
          font-size: 10px;

          letter-spacing: .12em;
        }

        .available {
          color: var(--gold);
        }

        .unavailable {
          color: #e11d22;
        }

        .purchase-area {
          display: flex;

          gap: 12px;
        }

        .quantity-control {
          display: flex;

          align-items: center;

          border:
            1px solid
            rgba(242,201,76,.4);
        }

        .quantity-control button {
          width: 42px;
          height: 48px;

          border: 0;

          background: #111;

          color: var(--gold);

          font-size: 20px;

          cursor: pointer;
        }

        .quantity-control span {
          min-width: 42px;

          text-align: center;

          font-weight: 900;
        }

        .add-button,
        .sold-out-button,
        .gold-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 48px;

          padding:
            0
            24px;

          border:
            1px solid
            var(--gold);

          background: #8b0000;

          color: #fff;

          text-decoration: none;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .18em;

          cursor: pointer;
        }

        .add-button:hover,
        .gold-button:hover {
          background: #a80000;
        }

        .sold-out-button {
          width: 100%;

          opacity: .65;

          cursor: default;
        }

        .product-meta {
          margin-top: 35px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(255,255,255,.1);
        }

        .product-meta div {
          display: flex;

          justify-content: space-between;

          padding:
            8px
            0;
        }

        .product-meta span {
          color:
            rgba(255,255,255,.35);

          font-size: 9px;

          letter-spacing: .15em;
        }

        .product-meta strong {
          color:
            rgba(255,255,255,.75);

          font-size: 10px;
        }

        .return-section {
          width:
            min(
              1200px,
              100%
            );

          margin: 0 auto;

          padding:
            0
            32px
            80px;
        }

        .return-section a {
          color: var(--gold);

          text-decoration: none;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .16em;
        }

        .not-found {
          width:
            min(
              800px,
              100%
            );

          margin:
            100px
            auto;

          padding:
            50px
            30px;

          text-align: center;
        }

        .not-found h1 {
          margin-top: 15px;

          font-size:
            clamp(
              38px,
              6vw,
              70px
            );

          font-weight: 900;
        }

        .not-found p {
          color:
            rgba(255,255,255,.5);

          line-height: 1.7;
        }

        .gold-line {
          display: flex;
          align-items: center;

          gap: 16px;

          width: min(500px,90%);

          margin:
            28px
            auto;
        }

        .gold-line span {
          flex: 1;

          height: 1px;

          background:
            rgba(242,201,76,.7);
        }

        .gold-line b {
          color: var(--gold);
        }

        .gold-button {
          margin-top: 20px;
        }

        .site-footer {
          padding:
            28px
            42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 25px;

          border-top:
            1px solid
            rgba(242,201,76,.15);

          background: #050505;
        }

        .site-footer img {
          width: 110px;
        }

        .site-footer p,
        .site-footer span {
          margin: 0;

          color:
            rgba(255,255,255,.35);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: .2em;

          text-transform: uppercase;
        }

        .site-footer span {
          color:
            rgba(242,201,76,.8);
        }

        .company-link {
          color: #4da3ff;

          text-decoration: none;

          font-size: 9px;

          letter-spacing: .12em;
        }

        @media (max-width: 800px) {
          .site-header {
            padding: 20px;
            flex-direction: column;
          }

          .product-section {
            grid-template-columns: 1fr;

            gap: 40px;

            padding:
              20px
              18px
              60px;
          }

          .breadcrumb-wrap {
            padding:
              15px
              18px;
          }

          .return-section {
            padding:
              0
              18px
              60px;
          }
        }

        @media (max-width: 600px) {
          .logo {
            width: 190px;
          }

          .site-nav {
            width: 100%;

            justify-content: center;

            flex-wrap: wrap;

            border-radius: 18px;
          }

          .site-nav a {
            font-size: 10px;
            padding: 6px 8px;
          }

          .product-details h1 {
            font-size: 38px;
          }

          .purchase-area {
            flex-direction: column;
          }

          .quantity-control {
            width: 100%;

            justify-content: center;
          }

          .add-button {
            width: 100%;
          }

          .site-footer {
            flex-direction: column;

            text-align: center;

            padding: 30px 20px;
          }
        }
      `}</style>
    </main>
  );
}

function getCategorySlug(
  category: string,
) {
  const normalized =
    category
      .trim()
      .toLowerCase();

  if (
    normalized.includes(
      "apparel",
    )
  ) {
    return "apparel";
  }

  if (
    normalized.includes(
      "collectible",
    )
  ) {
    return "collectibles";
  }

  if (
    normalized.includes(
      "collection",
    )
  ) {
    return "collection";
  }

  return "merchandise";
}
