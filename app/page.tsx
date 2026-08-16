"use client";

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
    <main className="site-home">
      <section className="hero">
        {/* Existing Scotti Brothers hero artwork */}
        <div className="hero-background" />

        {/* Subtle readability overlay */}
        <div className="hero-overlay" />

        {/* Navigation */}
        <header className="site-header">
          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Centered Watch & Listen button near the top */}
        <div className="hero-content">
          <Link href="/episodes" className="primary-button">
            Watch &amp; Listen
          </Link>
        </div>
      </section>
    </main>
  );
}