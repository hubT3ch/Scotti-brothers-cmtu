import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Contact", href: "/contact" },
];

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#d9b985",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =========================================================
          SCOTTI BROTHERS HERO ARTWORK
          ========================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero/hero-background.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* Very subtle readability overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.06))",
          zIndex: 1,
        }}
      />

      {/* =========================================================
          LOGO
          ========================================================= */}
      <Link
        href="/"
        aria-label="Scotti Brothers Entertainment"
        style={{
          position: "absolute",
          top: "24px",
          left: "42px",
          zIndex: 10,
          display: "block",
          lineHeight: 0,
        }}
      >
        <img
          src="/images/logo/logo.png"
          alt="Scotti Brothers"
          style={{
            display: "block",
            width: "115px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* =========================================================
          NAVIGATION
          ========================================================= */}
      <header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 10,
          padding: "30px 42px",
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "30px",
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#111",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* =========================================================
          WATCH & LISTEN BUTTON
          Positioned over the main artwork/title area.
          ========================================================= */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <Link
          href="/episodes"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "150px",
            padding: "12px 24px",
            borderRadius: "999px",
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.22)",
          }}
        >
          Watch &amp; Listen
        </Link>
      </div>

      {/* =========================================================
          RESPONSIVE POSITIONING
          ========================================================= */}
      <style>{`
        @media (max-width: 900px) {
          header {
            padding: 24px 24px !important;
          }

          header nav {
            gap: 18px !important;
          }

          header nav a {
            font-size: 13px !important;
          }

          a[aria-label="Scotti Brothers Entertainment"] {
            left: 24px !important;
            top: 20px !important;
          }

          a[aria-label="Scotti Brothers Entertainment"] img {
            width: 95px !important;
          }
        }

        @media (max-width: 650px) {
          header {
            padding: 20px 18px !important;
          }

          header nav {
            gap: 12px !important;
          }

          header nav a {
            font-size: 11px !important;
          }

          a[aria-label="Scotti Brothers Entertainment"] {
            left: 18px !important;
            top: 18px !important;
          }

          a[aria-label="Scotti Brothers Entertainment"] img {
            width: 82px !important;
          }
        }

        @media (max-width: 520px) {
          header {
            top: 8px !important;
            right: 8px !important;
            padding: 12px !important;
          }

          header nav {
            gap: 9px !important;
          }

          header nav a {
            font-size: 10px !important;
          }
        }
      `}</style>
    </main>
  );
}