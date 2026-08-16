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
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#d9b985",
        color: "#111",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Hero background */}
      <div
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

      {/* Subtle overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(0,0,0,0.08))",
          zIndex: 1,
        }}
      />

      {/* Page content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <header
          style={{
            width: "100%",
            padding: "24px 42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Scotti Brothers Entertainment"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
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

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
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

        {/* Hero content */}
        <section
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "42vh",
            paddingLeft: "24px",
            paddingRight: "24px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <Link
            href="/episodes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 24px",
              minWidth: "150px",
              borderRadius: "999px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.2px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            }}
          >
            Watch &amp; Listen
          </Link>
        </section>
      </div>

      {/* Mobile navigation adjustment */}
      <style>{`
        @media (max-width: 800px) {
          header {
            padding: 18px 20px !important;
            align-items: flex-start !important;
          }

          nav {
            gap: 12px !important;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          nav a {
            font-size: 12px !important;
          }
        }

        @media (max-width: 560px) {
          header {
            flex-direction: column !important;
            gap: 16px !important;
          }

          nav {
            width: 100%;
            justify-content: center !important;
            gap: 14px !important;
          }

          section {
            padding-top: 38vh !important;
          }
        }
      `}</style>
    </main>
  );
}
