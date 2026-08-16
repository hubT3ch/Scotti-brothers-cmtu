"use client";

import Link from "next/link";

export default function EpisodesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#d9b985",
      }}
    >
      {/* Episodes backdrop */}
      <img
        src="/images/episodes/episodes-background.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 48px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#111",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            SCOTTI BROTHERS
          </Link>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <Link href="/" style={navStyle}>
              Home
            </Link>

            <Link href="/episodes" style={navStyle}>
              Episodes
            </Link>

            <Link href="/guests" style={navStyle}>
              Guests
            </Link>

            <Link href="/merchandise" style={navStyle}>
              Merchandise
            </Link>

            <Link href="/contact" style={navStyle}>
              Contact
            </Link>
          </nav>
        </header>

        <section
          style={{
            padding: "70px 48px 100px",
            maxWidth: "1200px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#111",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Scotti Brothers Entertainment
          </p>

          <h1
            style={{
              margin: 0,
              color: "#111",
              fontSize: "72px",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            Episodes
          </h1>

          <p
            style={{
              marginTop: "20px",
              color: "#111",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Watch &amp; Listen
          </p>
        </section>
      </div>
    </main>
  );
}

const navStyle = {
  color: "#111",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 600,
};
