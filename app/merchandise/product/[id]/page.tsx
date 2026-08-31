import Link from "next/link";
import { notFound } from "next/navigation";

import { getSupabaseAdminClient } from "@/lib/supabase-server";
import { formatMoney } from "@/lib/commerce";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type MerchandiseProduct = {
  id: string;
  name: string;
  description: string;
  sku: string;
  category: string;
  price: number;
  salePrice: number | null;
  images: string[];
  active: boolean;
  publicDisplay: boolean;
  featured: boolean;
  inventoryQuantity: number;
  displayOrder: number;
};

/**
 * Load one real public merchandise product
 * directly from Supabase.
 *
 * This replaces the old hard-coded
 * getPublicMerchandiseCatalog() lookup.
 */
async function getPublicProduct(
  id: string,
): Promise<MerchandiseProduct | null> {
  const supabase =
    getSupabaseAdminClient();

  const {
    data: product,
    error: productError,
  } = await supabase
    .from("merchandise_products")
    .select("*")
    .eq("id", id)
    .eq("active", true)
    .eq("public_display", true)
    .maybeSingle();

  if (productError) {
    console.error(
      "Merchandise product lookup error:",
      productError,
    );

    return null;
  }

  if (!product) {
    return null;
  }

  const {
    data: imageRows,
    error: imageError,
  } = await supabase
    .from(
      "merchandise_product_images",
    )
    .select("*")
    .eq("product_id", product.id)
    .order("display_order", {
      ascending: true,
    });

  if (imageError) {
    console.error(
      "Merchandise product image lookup error:",
      imageError,
    );
  }

  const images =
    (imageRows ?? [])
      .map((image: any) =>
        supabase.storage
          .from("cmtu-merchandise")
          .getPublicUrl(
            image.storage_path,
          ).data.publicUrl,
      )
      .filter(
        (url: string) =>
          Boolean(url),
      );

  return {
    id: product.id,
    name: product.name,
    description:
      product.description ?? "",
    sku: product.sku ?? "",
    category:
      product.category ?? "Collection",
    price: Number(
      product.price ?? 0,
    ),
    salePrice:
      product.sale_price === null ||
      product.sale_price === undefined
        ? null
        : Number(
            product.sale_price,
          ),
    images,
    active: Boolean(
      product.active,
    ),
    publicDisplay: Boolean(
      product.public_display,
    ),
    featured: Boolean(
      product.featured,
    ),
    inventoryQuantity: Math.max(
      0,
      Number(
        product.inventory_quantity ??
          0,
      ),
    ),
    displayOrder: Number(
      product.display_order ?? 0,
    ),
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product =
    await getPublicProduct(id);

  if (!product) {
    notFound();
  }

  const customerPrice =
    product.salePrice ??
    product.price;

  const hasSale =
    product.salePrice !== null &&
    product.salePrice <
      product.price;

  const available =
    product.inventoryQuantity > 0 &&
    customerPrice > 0;

  const images =
    product.images.length > 0
      ? product.images
      : [];

  const category =
    categoryPath(
      product.category,
    );

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
            href="/merchandise"
            className="back-link"
          >
            ← BACK TO MERCHANDISE
          </Link>

          <Link
            href="/"
            className="header-logo"
            aria-label="Scotti Brothers Can't Make This Up!"
          >
            <img
              src="/images/logo.png"
              alt="Scotti Brothers Can't Make This Up!"
            />
          </Link>

          <Link
            href={`/merchandise/${category}`}
            className="cart-link"
          >
            {product.category.toUpperCase()}
          </Link>
        </header>

        {/* PRODUCT */}

        <section className="product-section">

          {/* GALLERY */}

          <div className="product-gallery">
            {images.length > 0 ? (
              <div className="image-grid">
                {images.map(
                  (
                    image,
                    index,
                  ) => (
                    <div
                      className="image-frame"
                      key={`${image}-${index}`}
                    >
                      <div className="image-inner">
                        <img
                          src={image}
                          alt={`${product.name} ${
                            index + 1
                          }`}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <div className="no-image-frame">
                <div className="no-image">
                  <span>
                    SCOTTI BROTHERS
                  </span>

                  <strong>
                    CAN&apos;T MAKE
                    <br />
                    THIS UP!
                  </strong>

                  <small>
                    OFFICIAL
                    MERCHANDISE
                  </small>

                  <p>
                    PRODUCT IMAGE
                    COMING SOON
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* DETAILS */}

          <div className="product-details">

            <p className="eyebrow">
              {product.category}
            </p>

            <h1>
              {product.name}
            </h1>

            <div className="gold-line">
              <span />
              <b>◆</b>
              <span />
            </div>

            {product.featured && (
              <div className="featured">
                FEATURED COLLECTION
              </div>
            )}

            <p className="description">
              {product.description ||
                "Official Scotti Brothers merchandise from Can't Make This Up!"}
            </p>

            {/* PRICE */}

            <div className="price">
              {hasSale && (
                <span className="regular-price">
                  {formatMoney(
                    product.price,
                  )}
                </span>
              )}

              {customerPrice > 0 ? (
                <span>
                  {formatMoney(
                    customerPrice,
                  )}
                </span>
              ) : (
                <span>
                  COMING SOON
                </span>
              )}
            </div>

            {/* AVAILABILITY */}

            <div className="availability">
              {available ? (
                <>
                  <span className="available-dot" />
                  IN STOCK
                </>
              ) : product.inventoryQuantity ===
                0 ? (
                <>
                  <span className="sold-dot" />
                  SOLD OUT
                </>
              ) : (
                <>
                  <span className="coming-dot" />
                  COMING SOON
                </>
              )}
            </div>

            {/* CHECKOUT PLACEHOLDER */}

            {available && (
              <button
                type="button"
                className="add-button"
                onClick={() => {
                  window.alert(
                    "Shopping cart checkout will be connected when the merchandise payment processor is activated.",
                  );
                }}
              >
                ADD TO CART
              </button>
            )}

            {/* PRODUCT META */}

            <div className="product-meta">

              <div>
                <span>
                  CATEGORY
                </span>

                <strong>
                  {product.category}
                </strong>
              </div>

              <div>
                <span>
                  SKU
                </span>

                <strong>
                  {product.sku}
                </strong>
              </div>

              {product.inventoryQuantity >
                0 && (
                <div>
                  <span>
                    AVAILABILITY
                  </span>

                  <strong>
                    {
                      product.inventoryQuantity
                    }{" "}
                    AVAILABLE
                  </strong>
                </div>
              )}

            </div>

            {/* CATEGORY LINK */}

            <Link
              href={`/merchandise/${category}`}
              className="category-link"
            >
              ← VIEW MORE{" "}
              {product.category.toUpperCase()}
            </Link>

          </div>
        </section>

        {/* SHOP MORE */}

        <section className="shop-more">

          <p className="eyebrow">
            OFFICIAL COLLECTION
          </p>

          <h2>
            MORE FROM THE SHOW
          </h2>

          <div className="red-line" />

          <p>
            Explore more official
            Scotti Brothers and
            Can&apos;t Make This Up!
            merchandise.
          </p>

          <div className="shop-links">

            <Link href="/merchandise">
              ALL MERCHANDISE
            </Link>

            <Link href="/merchandise/apparel">
              APPAREL
            </Link>

            <Link href="/merchandise/collection">
              COLLECTIONS
            </Link>

            <Link href="/merchandise/collectibles">
              COLLECTIBLES
            </Link>

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

        .product-page {
          --gold: #F2C94C;

          min-height: 100vh;

          position: relative;

          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(139,0,0,0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 65%,
              rgba(242,201,76,0.07),
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

        .background {
          position: fixed;

          inset: 0;

          z-index: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 30% 40%,
              rgba(139,0,0,0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 75% 70%,
              rgba(242,201,76,0.05),
              transparent 30%
            );
        }

        .grid-overlay {
          position: fixed;

          inset: 0;

          z-index: 1;

          pointer-events: none;

          opacity: 0.22;

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
          min-height: 90px;

          padding:
            20px 42px;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;

          gap: 25px;

          border-bottom:
            1px solid
            rgba(242,201,76,0.15);
        }

        .back-link,
        .cart-link {
          color:
            rgba(255,255,255,0.55);

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 0.18em;

          text-decoration: none;

          transition:
            color 0.2s ease;
        }

        .back-link:hover,
        .cart-link:hover {
          color: var(--gold);
        }

        .cart-link {
          justify-self: end;
        }

        .header-logo {
          display: block;

          width: 130px;

          line-height: 0;
        }

        .header-logo img {
          display: block;

          width: 100%;

          height: auto;
        }

        /* PRODUCT SECTION */

        .product-section {
          width:
            min(1250px, 100%);

          margin: 0 auto;

          padding:
            70px
            32px
            100px;

          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(360px, 0.85fr);

          gap: 70px;

          align-items: start;
        }

        /* GALLERY */

        .product-gallery {
          width: 100%;
        }

        .image-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .image-frame,
        .no-image-frame {
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
            0 15px 35px
            rgba(0,0,0,0.65);
        }

        .image-inner {
          padding: 8px;

          background:
            linear-gradient(
              145deg,
              #b30000,
              #650000 55%,
              #9b0000
            );
        }

        .image-inner img {
          display: block;

          width: 100%;

          aspect-ratio: 1 / 1;

          object-fit: cover;

          background: #111;
        }

        .no-image-frame {
          width: 100%;
        }

        .no-image {
          min-height: 600px;

          padding:
            50px 30px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(242,201,76,0.14),
              transparent 50%
            ),
            linear-gradient(
              145deg,
              #151515,
              #050505
            );

          border:
            8px solid
            #650000;
        }

        .no-image span {
          color: #c62828;

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 0.3em;
        }

        .no-image strong {
          margin-top: 18px;

          color: #fff;

          font-size:
            clamp(42px, 6vw, 78px);

          line-height: 0.88;

          font-weight: 900;

          text-shadow:
            4px 4px 0 #8b0000;
        }

        .no-image small {
          margin-top: 25px;

          color: var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.25em;
        }

        .no-image p {
          margin-top: 40px;

          padding:
            12px 18px;

          border:
            1px solid
            rgba(242,201,76,0.4);

          color:
            rgba(255,255,255,0.4);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.2em;
        }

        /* DETAILS */

        .product-details {
          position: sticky;

          top: 30px;

          padding:
            15px 0;
        }

        .eyebrow {
          margin: 0;

          color: var(--gold);

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 0.35em;

          text-transform: uppercase;
        }

        .product-details h1 {
          margin:
            14px
            0
            0;

          color: #fff;

          font-size:
            clamp(40px, 5vw, 70px);

          line-height: 0.95;

          font-weight: 900;

          letter-spacing: -0.04em;

          text-transform: uppercase;

          text-shadow:
            4px 4px 0 #8b0000;
        }

        .gold-line {
          display: flex;

          align-items: center;

          gap: 14px;

          margin:
            28px
            0;

          width: 100%;
        }

        .gold-line span {
          flex: 1;

          height: 1px;

          background:
            rgba(242,201,76,0.65);
        }

        .gold-line b {
          color: var(--gold);

          font-size: 13px;
        }

        .featured {
          display: inline-flex;

          padding:
            6px 10px;

          border:
            1px solid
            rgba(242,201,76,0.55);

          color: var(--gold);

          font-size: 8px;

          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .description {
          margin:
            25px
            0
            0;

          color:
            rgba(255,255,255,0.68);

          font-size: 15px;

          line-height: 1.8;
        }

        .price {
          margin-top: 28px;

          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 12px;

          color: #fff;

          font-size: 32px;

          font-weight: 900;
        }

        .regular-price {
          color:
            rgba(255,255,255,0.35);

          font-size: 18px;

          text-decoration: line-through;
        }

        .availability {
          margin-top: 14px;

          display: flex;

          align-items: center;

          gap: 8px;

          color:
            rgba(255,255,255,0.45);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.2em;
        }

        .available-dot,
        .sold-dot,
        .coming-dot {
          width: 7px;

          height: 7px;

          display: inline-block;

          border-radius: 50%;
        }

        .available-dot {
          background: var(--gold);

          box-shadow:
            0 0 10px
            rgba(242,201,76,0.5);
        }

        .sold-dot {
          background: #e11d22;
        }

        .coming-dot {
          background:
            rgba(255,255,255,0.35);
        }

        .add-button {
          width: 100%;

          margin-top: 30px;

          padding: 17px;

          border:
            1px solid
            var(--gold);

          background: #8b0000;

          color: #fff;

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 0.22em;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .add-button:hover {
          background: #a80000;

          transform:
            translateY(-2px);
        }

        .product-meta {
          margin-top: 35px;

          border-top:
            1px solid
            rgba(255,255,255,0.1);
        }

        .product-meta > div {
          padding:
            15px 0;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);
        }

        .product-meta span {
          color:
            rgba(255,255,255,0.35);

          font-size: 8px;

          font-weight: 900;

          letter-spacing: 0.18em;
        }

        .product-meta strong {
          color:
            rgba(255,255,255,0.72);

          font-size: 10px;

          font-weight: 900;

          text-align: right;
        }

        .category-link {
          display: inline-block;

          margin-top: 28px;

          color: var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.18em;

          text-decoration: none;
        }

        .category-link:hover {
          text-decoration: underline;
        }

        /* SHOP MORE */

        .shop-more {
          padding:
            100px
            25px;

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
              transparent 55%
            );

          text-align: center;
        }

        .shop-more h2 {
          margin:
            12px
            0
            0;

          font-size:
            clamp(34px, 5vw, 58px);

          font-weight: 900;

          line-height: 1;
        }

        .red-line {
          width: 65px;

          height: 4px;

          margin:
            20px auto;

          background: #c62828;
        }

        .shop-more > p:not(.eyebrow) {
          max-width: 600px;

          margin: 0 auto;

          color:
            rgba(255,255,255,0.48);

          font-size: 13px;

          line-height: 1.7;
        }

        .shop-links {
          margin-top: 30px;

          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 10px;
        }

        .shop-links a {
          padding:
            12px 18px;

          border:
            1px solid
            rgba(242,201,76,0.4);

          color: var(--gold);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.15em;

          text-decoration: none;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .shop-links a:hover {
          border-color: var(--gold);

          background: #750000;
        }

        /* FOOTER */

        .site-footer {
          padding:
            30px 42px;

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
          width: 110px;

          height: auto;
        }

        .site-footer p,
        .site-footer span,
        .site-footer a {
          margin: 0;

          font-size: 9px;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          text-decoration: none;
        }

        .site-footer p,
        .site-footer span {
          color:
            rgba(255,255,255,0.35);
        }

        .site-footer a {
          color: #4da3ff;
        }

        .site-footer a:hover {
          text-decoration: underline;
        }

        .site-footer span {
          color:
            rgba(242,201,76,0.8);
        }

        /* TABLET */

        @media (max-width: 950px) {
          .product-section {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .product-details {
            position: static;

            max-width: 700px;

            margin: 0 auto;

            width: 100%;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .site-header {
            padding:
              18px 15px;

            grid-template-columns:
              1fr auto;

            grid-template-areas:
              "logo logo"
              "back merch";

            gap: 18px;
          }

          .header-logo {
            grid-area: logo;

            width: 150px;

            justify-self: center;
          }

          .back-link {
            grid-area: back;
          }

          .cart-link {
            grid-area: merch;
          }

          .product-section {
            padding:
              40px
              15px
              70px;

            gap: 35px;
          }

          .image-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .no-image {
            min-height: 430px;
          }

          .product-details h1 {
            font-size: 43px;
          }

          .description {
            font-size: 13px;
          }

          .price {
            font-size: 28px;
          }

          .shop-more {
            padding:
              75px 20px;
          }

          .shop-links {
            flex-direction: column;

            max-width: 320px;

            margin-left: auto;
            margin-right: auto;
          }

          .shop-links a {
            width: 100%;
          }

          .site-footer {
            padding:
              30px 20px;

            flex-direction: column;

            text-align: center;

            gap: 15px;
          }
        }

      `}</style>
    </main>
  );
}

/**
 * Convert the database category into
 * the public category URL.
 */
function categoryPath(
  category: string,
): string {
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

  return "collection";
}
