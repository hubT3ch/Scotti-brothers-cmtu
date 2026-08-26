"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  formatMoney,
  getPublicMerchandiseCatalog,
  type MerchandiseProduct,
} from "@/lib/commerce";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#F2C94C";

type CartItem = {
  product: MerchandiseProduct;
  quantity: number;
};

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
  /*
   * PUBLIC MERCHANDISE CATALOG
   *
   * This page now uses the same merchandise catalog
   * used by the CMTU Merchandise Desk.
   *
   * Product visibility is controlled by:
   *   active
   *   publicDisplay
   *   displayOrder
   *
   * Product images come from:
   *   product.images[]
   *
   * The existing gallery images are NOT deleted,
   * moved, or modified.
   */
  const products = useMemo(
    () => getPublicMerchandiseCatalog(),
    [],
  );

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          products
            .filter(
              (product) =>
                product.active &&
                product.publicDisplay,
            )
            .map(
              (product) =>
                product.category,
            )
            .filter(Boolean),
        ),
      ),
    ];
  }, [products]);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        !product.active ||
        !product.publicDisplay
      ) {
        return false;
      }

      if (category === "All") {
        return true;
      }

      return product.category === category;
    });
  }, [category, products]);

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0,
  );

  const cartTotal = cart.reduce(
    (total, item) => {
      const customerPrice =
        item.product.salePrice ??
        item.product.price;

      return (
        total +
        customerPrice *
          item.quantity
      );
    },
    0,
  );

  function getCustomerPrice(
    product: MerchandiseProduct,
  ) {
    return (
      product.salePrice ??
      product.price
    );
  }

  function addToCart(
    product: MerchandiseProduct,
  ) {
    const customerPrice =
      getCustomerPrice(product);

    if (
      product.inventoryQuantity <=
        0 ||
      customerPrice <= 0
    ) {
      return;
    }

    setCart((current) => {
      const existing =
        current.find(
          (item) =>
            item.product.id ===
            product.id,
        );

      if (existing) {
        return current.map(
          (item) =>
            item.product.id ===
            product.id
              ? {
                  ...item,
                  quantity:
                    Math.min(
                      item.quantity +
                        1,
                      product.inventoryQuantity,
                    ),
                }
              : item,
        );
      }

      return [
        ...current,
        {
          product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }

  function updateCartQuantity(
    productId: string,
    quantity: number,
  ) {
    const cartItem = cart.find(
      (item) =>
        item.product.id ===
        productId,
    );

    if (!cartItem) {
      return;
    }

    if (quantity <= 0) {
      setCart((current) =>
        current.filter(
          (item) =>
            item.product.id !==
            productId,
        ),
      );

      return;
    }

    setCart((current) =>
      current.map((item) => {
        if (
          item.product.id !==
          productId
        ) {
          return item;
        }

        return {
          ...item,
          quantity: Math.min(
            quantity,
            item.product
              .inventoryQuantity,
          ),
        };
      }),
    );
  }

  function removeFromCart(
    productId: string,
  ) {
    setCart((current) =>
      current.filter(
        (item) =>
          item.product.id !==
          productId,
      ),
    );
  }

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
        {/* =========================================
            HEADER
        ========================================= */}

        <header className="site-header">
          <MobileLogo />

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

            <button
              type="button"
              className="cart-button"
              onClick={() =>
                setCartOpen(true)
              }
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              CART

              <span className="cart-count">
                {cartCount}
              </span>
            </button>
          </nav>
        </header>

        {/* =========================================
            HERO
        ========================================= */}

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

            <h1>MERCHANDISE</h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            <p className="hero-subtitle">
              Official merchandise
              from{" "}
              <strong>
                Can&apos;t Make This Up!
              </strong>
              <br />
              Wear the stories.
              Represent the show.
            </p>

            <button
              type="button"
              className="hero-shop-button"
              onClick={() => {
                document
                  .getElementById(
                    "shop-the-show",
                  )
                  ?.scrollIntoView({
                    behavior:
                      "smooth",
                  });
              }}
            >
              SHOP THE COLLECTION
            </button>
          </div>
        </section>

        {/* =========================================
            SHOP SECTION
        ========================================= */}

        <section
          id="shop-the-show"
          className="merch-section"
        >
          <div className="section-heading">
            <p className="eyebrow">
              OFFICIAL COLLECTION
            </p>

            <h2>SHOP THE SHOW</h2>

            <div className="red-line" />

            <p className="section-description">
              Official Scotti
              Brothers and
              Can&apos;t Make This Up!
              merchandise.
            </p>
          </div>

          {/* CATEGORY FILTER */}

          {categories.length > 1 && (
            <div className="category-filter">
              {categories.map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setCategory(
                        item,
                      )
                    }
                    className={
                      category ===
                      item
                        ? "category-button active"
                        : "category-button"
                    }
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          )}

          {/* PRODUCT GRID */}

          <div className="merch-grid">
            {visibleProducts.map(
              (product) => {
                const customerPrice =
                  getCustomerPrice(
                    product,
                  );

                const available =
                  product.inventoryQuantity >
                    0 &&
                  customerPrice > 0;

                const primaryImage =
                  product.images[0] ??
                  null;

                const hasSale =
                  product.salePrice !==
                    null &&
                  product.salePrice <
                    product.price;

                return (
                  <article
                    className="merch-card"
                    key={product.id}
                  >
                    <div className="gold-frame">
                      <div className="red-frame">
                        {/* PRODUCT IMAGE */}

                        <div className="product-image">
                          {primaryImage ? (
                            <img
                              src={
                                primaryImage
                              }
                              alt={
                                product.name
                              }
                            />
                          ) : (
                            <div className="product-placeholder">
                              <span>
                                SCOTTI
                                BROTHERS
                              </span>

                              <strong>
                                CAN&apos;T
                                MAKE
                                <br />
                                THIS UP!
                              </strong>

                              <small>
                                OFFICIAL
                                MERCHANDISE
                              </small>
                            </div>
                          )}
                        </div>

                        {/* PRODUCT INFORMATION */}

                        <div className="product-info">
                          {product.featured && (
                            <div className="featured-label">
                              FEATURED
                            </div>
                          )}

                          <p className="product-category">
                            {
                              product.category
                            }
                          </p>

                          <h3>
                            {
                              product.name
                            }
                          </h3>

                          <p className="product-description">
                            {
                              product.description
                            }
                          </p>

                          <div className="product-price">
                            {customerPrice >
                            0 ? (
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

                          {available ? (
                            <button
                              type="button"
                              onClick={() =>
                                addToCart(
                                  product,
                                )
                              }
                              className="add-cart-button"
                            >
                              ADD TO CART
                            </button>
                          ) : (
                            <div className="coming-soon">
                              {product.inventoryQuantity ===
                              0
                                ? "SOLD OUT"
                                : "COMING SOON"}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              },
            )}

            {visibleProducts.length ===
              0 && (
              <div className="empty-catalog">
                <p>
                  MERCHANDISE COMING
                  SOON
                </p>

                <span>
                  The official
                  collection is being
                  prepared.
                </span>
              </div>
            )}
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
              Official Scotti
              Brothers merchandise
              inspired by the stories
              and personalities behind
              Can&apos;t Make This Up!
              is available here.
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

      {/* =========================================
          CART DRAWER
      ========================================= */}

      {cartOpen && (
        <div
          className="cart-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <button
            type="button"
            className="cart-backdrop"
            aria-label="Close shopping cart"
            onClick={() =>
              setCartOpen(false)
            }
          />

          <aside className="cart-drawer">
            <div className="cart-header">
              <div>
                <p className="eyebrow">
                  YOUR SELECTION
                </p>

                <h2>
                  SHOPPING CART
                </h2>
              </div>

              <button
                type="button"
                className="cart-close"
                onClick={() =>
                  setCartOpen(false)
                }
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            {cart.length ===
            0 ? (
              <div className="empty-cart">
                <p>
                  YOUR CART IS
                  EMPTY
                </p>

                <span>
                  Add merchandise
                  to begin your
                  order.
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setCartOpen(false)
                  }
                  className="continue-shopping"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(
                    (item) => {
                      const customerPrice =
                        getCustomerPrice(
                          item.product,
                        );

                      const primaryImage =
                        item.product
                          .images[0] ??
                        null;

                      return (
                        <div
                          className="cart-item"
                          key={
                            item
                              .product
                              .id
                          }
                        >
                          <div className="cart-item-image">
                            {primaryImage ? (
                              <img
                                src={
                                  primaryImage
                                }
                                alt=""
                              />
                            ) : (
                              <span>
                                CMTU
                              </span>
                            )}
                          </div>

                          <div className="cart-item-details">
                            <h3>
                              {
                                item
                                  .product
                                  .name
                              }
                            </h3>

                            <p>
                              {formatMoney(
                                customerPrice,
                              )}
                            </p>

                            <div className="quantity-row">
                              <button
                                type="button"
                                onClick={() =>
                                  updateCartQuantity(
                                    item
                                      .product
                                      .id,
                                    item.quantity -
                                      1,
                                  )
                                }
                                aria-label={`Decrease quantity of ${item.product.name}`}
                              >
                                −
                              </button>

                              <span>
                                {
                                  item.quantity
                                }
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateCartQuantity(
                                    item
                                      .product
                                      .id,
                                    item.quantity +
                                      1,
                                  )
                                }
                                aria-label={`Increase quantity of ${item.product.name}`}
                              >
                                +
                              </button>

                              <button
                                type="button"
                                className="remove-item"
                                onClick={() =>
                                  removeFromCart(
                                    item
                                      .product
                                      .id,
                                  )
                                }
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>
                      SUBTOTAL
                    </span>

                    <strong>
                      {formatMoney(
                        cartTotal,
                      )}
                    </strong>
                  </div>

                  <p>
                    Shipping and
                    taxes will be
                    calculated during
                    checkout.
                  </p>

                  <button
                    type="button"
                    className="checkout-button"
                    disabled
                  >
                    CHECKOUT
                  </button>

                  <small>
                    Secure payment
                    checkout will be
                    activated when the
                    Scotti Brothers
                    payment account is
                    connected.
                  </small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
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

        .site-nav a,
        .cart-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 8px 12px;

          border: 0;
          border-radius: 999px;

          background: transparent;

          color: #fff;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .site-nav a:hover,
        .cart-button:hover {
          color: var(--gold);
        }

        .site-nav a.active {
          background: #8b0000;
          color: #fff;
        }

        .cart-button {
          gap: 7px;
          margin-left: 3px;
        }

        .cart-count {
          min-width: 20px;
          height: 20px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: var(--gold);
          color: #000;

          font-size: 9px;
          font-weight: 900;
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

        .hero-subtitle strong {
          color: var(--gold);
        }

        .hero-shop-button {
          margin-top: 28px;

          padding: 14px 24px;

          border:
            1px solid
            var(--gold);

          background: #8b0000;

          color: #fff;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.2em;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .hero-shop-button:hover {
          transform: translateY(-2px);
          background: #a80000;
        }

        /* MERCH SECTION */

        .merch-section {
          width: min(1250px, 100%);

          margin: 0 auto;

          padding:
            20px
            32px
            100px;
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

        /* CATEGORY FILTER */

        .category-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          gap: 8px;

          margin-bottom: 35px;
        }

        .category-button {
          padding: 9px 14px;

          border:
            1px solid
            rgba(242,201,76,0.35);

          background: transparent;

          color:
            rgba(255,255,255,0.65);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.15em;

          text-transform: uppercase;

          cursor: pointer;
        }

        .category-button:hover,
        .category-button.active {
          border-color: var(--gold);
          background: #750000;
          color: var(--gold);
        }

        /* GRID */

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

        .coming-soon {
          display: inline-flex;

          margin-top: 16px;

          padding: 9px 14px;

          border:
            1px solid
            rgba(242,201,76,0.6);

          color: var(--gold);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .add-cart-button {
          margin-top: 16px;

          padding: 11px 18px;

          border:
            1px solid
            var(--gold);

          background: #000;

          color: var(--gold);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.18em;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .add-cart-button:hover {
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

        /* FEATURE */

        .feature-section {
          padding: 110px 30px;

          border-top:
            1px solid
            rgba(242,201,76,0.12);

          border-bottom:
            1px solid
            rgba(242,201,76,0.12);

          background:
            radial-gradient(
              circle at center,
              rgba(139,0,0,0.16),
              transparent 50%
            );
        }

        .feature-content {
          width: min(760px, 100%);
          margin: 0 auto;

          text-align: center;
        }

        .feature-content h2 {
          margin: 18px 0 0;

          color: #fff;

          font-size:
            clamp(48px, 7vw, 82px);

          line-height: 0.9;

          font-weight: 900;

          text-shadow:
            4px 4px 0 #8b0000;
        }

        .feature-line {
          margin: 32px auto;
        }

        .feature-content > p:not(.eyebrow) {
          max-width: 650px;

          margin: 0 auto;

          color:
            rgba(255,255,255,0.62);

          font-size: 16px;

          line-height: 1.8;
        }

        .feature-badge {
          display: inline-flex;

          margin-top: 32px;

          padding: 13px 22px;

          border:
            1px solid
            var(--gold);

          color: var(--gold);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.25em;
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

          transition:
            color 0.2s ease;
        }

        .company-link:hover {
          color: #7fc1ff;
          text-decoration: underline;
        }

        /* CART */

        .cart-overlay {
          position: fixed;
          inset: 0;

          z-index: 100;

          display: flex;
          justify-content: flex-end;
        }

        .cart-backdrop {
          position: absolute;
          inset: 0;

          border: 0;

          background:
            rgba(0,0,0,0.72);

          cursor: pointer;
        }

        .cart-drawer {
          position: relative;
          z-index: 2;

          width: min(470px, 94vw);
          height: 100%;

          overflow-y: auto;

          padding: 28px;

          border-left:
            1px solid
            rgba(242,201,76,0.45);

          background:
            linear-gradient(
              180deg,
              #090909,
              #050505
            );

          box-shadow:
            -20px 0 60px
            rgba(0,0,0,0.6);
        }

        .cart-header {
          display: flex;

          align-items: flex-start;
          justify-content: space-between;

          padding-bottom: 20px;

          border-bottom:
            1px solid
            rgba(255,255,255,0.1);
        }

        .cart-header h2 {
          margin: 8px 0 0;

          font-size: 26px;

          font-weight: 900;
        }

        .cart-close {
          width: 40px;
          height: 40px;

          border:
            1px solid
            rgba(242,201,76,0.4);

          background: transparent;

          color: var(--gold);

          font-size: 28px;

          cursor: pointer;
        }

        .cart-items {
          padding-top: 10px;
        }

        .cart-item {
          display: flex;
          gap: 14px;

          padding: 18px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);
        }

        .cart-item-image {
          width: 82px;
          height: 82px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          border:
            1px solid
            rgba(242,201,76,0.4);

          background: #151515;

          color: var(--gold);

          font-size: 10px;
          font-weight: 900;
        }

        .cart-item-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .cart-item-details {
          flex: 1;
          min-width: 0;
        }

        .cart-item-details h3 {
          margin: 0;

          color: #fff;

          font-size: 14px;
          font-weight: 900;
        }

        .cart-item-details > p {
          margin: 5px 0 0;

          color: var(--gold);

          font-size: 12px;
          font-weight: 800;
        }

        .quantity-row {
          display: flex;
          align-items: center;

          gap: 7px;

          margin-top: 12px;
        }

        .quantity-row > button:not(.remove-item) {
          width: 28px;
          height: 28px;

          border:
            1px solid
            rgba(242,201,76,0.35);

          background: #111;

          color: #fff;

          cursor: pointer;
        }

        .quantity-row > span {
          min-width: 24px;

          text-align: center;

          font-size: 12px;
          font-weight: 800;
        }

        .remove-item {
          margin-left: auto;

          border: 0;

          background: transparent;

          color:
            rgba(255,255,255,0.35);

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.12em;

          cursor: pointer;
        }

        .remove-item:hover {
          color: #e11d22;
        }

        .cart-summary {
          margin-top: 25px;

          padding-top: 22px;

          border-top:
            1px solid
            rgba(242,201,76,0.25);
        }

        .cart-summary > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cart-summary > div span {
          color:
            rgba(255,255,255,0.55);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.18em;
        }

        .cart-summary > div strong {
          color: var(--gold);

          font-size: 24px;
          font-weight: 900;
        }

        .cart-summary > p {
          margin: 10px 0 0;

          color:
            rgba(255,255,255,0.4);

          font-size: 11px;
          line-height: 1.5;
        }

        .checkout-button {
          width: 100%;

          margin-top: 20px;

          padding: 15px;

          border: 0;

          background: #8b0000;

          color: #fff;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.2em;

          cursor: not-allowed;

          opacity: 0.65;
        }

        .cart-summary small {
          display: block;

          margin-top: 12px;

          color:
            rgba(255,255,255,0.3);

          font-size: 9px;
          line-height: 1.5;

          text-align: center;
        }

        .empty-cart {
          padding: 80px 20px;

          text-align: center;
        }

        .empty-cart p {
          margin: 0;

          color: var(--gold);

          font-size: 13px;
          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .empty-cart span {
          display: block;

          margin-top: 12px;

          color:
            rgba(255,255,255,0.4);

          font-size: 12px;
        }

        .continue-shopping {
          margin-top: 25px;

          padding: 12px 18px;

          border:
            1px solid
            var(--gold);

          background: transparent;

          color: var(--gold);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.16em;

          cursor: pointer;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 45% 55%;
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
              repeat(2, minmax(0, 1fr));
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

            display: flex;

            flex-direction: column;

            justify-content: flex-start;

            align-items: center;
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

            object-fit: contain;
          }

          .site-nav {
            width: 100%;

            display: flex;
            flex-wrap: wrap;

            justify-content: center;

            gap: 3px;

            padding: 7px;

            border-radius: 18px;
          }

          .site-nav a,
          .cart-button {
            font-size: 10px;
            padding: 6px 8px;
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
            margin: 20px auto;
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

          .cart-drawer {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </main>
  );
}
