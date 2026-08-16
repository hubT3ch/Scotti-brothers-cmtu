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
        minHeight: "100svh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#d9b985",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO ARTWORK */}
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

      {/* LIGHT READABILITY OVERLAY */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.12))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100svh",
          width: "100%",
        }}
      >
        {/* NAVIGATION */}
        <header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            padding: "24px 34px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "9px 12px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.48)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              boxShadow: "0 5px 20px rgba(0,0,0,0.18)",
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.1px",
                  whiteSpace: "nowrap",
                  padding: "8px 12px",
                  borderRadius: "999px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* WATCH & LISTEN */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "7.5%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <Link
            href="/episodes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "160px",
              padding: "13px 25px",
              borderRadius: "999px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 900,
              letterSpacing: "0.2px",
              boxShadow: "0 7px 22px rgba(0,0,0,0.28)",
            }}
          >
            Watch &amp; Listen
          </Link>
        </div>
      </div>

      {/* RESPONSIVE NAVIGATION */}
      <style>{`
        @media (max-width: 900px) {
          header {
            padding: 18px 20px !important;
          }

          nav {
            gap: 3px !important;
            padding: 7px 8px !important;
          }

          nav a {
            font-size: 12px !important;
            padding: 7px 8px !important;
          }
        }

        @media (max-width: 650px) {
          header {
            justify-content: center !important;
          }

          nav {
            width: calc(100% - 10px) !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
            border-radius: 18px !important;
          }

          nav a {
            font-size: 11px !important;
            padding: 6px 7px !important;
          }

          div[style*="bottom: 7.5%"] {
            bottom: 5% !important;
          }
        }
      `}</style>
    </main>
  );
}
