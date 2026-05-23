import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const NAV_LINKS = [
  { label: "Home",     id: "home" },
  { label: "About",    id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact",  id: "contact" },
  { label: "Who We Are", id: "contact" },
];

function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header style={{ ...s.header, ...(scrolled ? s.scrolled : {}) }}>
        {/* Logo + Brand */}
        <div style={s.brand} onClick={() => scrollTo("home")}>
          <img src={logo} alt="JeetLink Logo" style={s.logo} />
          <div style={s.brandText}>
            <span style={s.brandName}>JeetLink</span>
            <span style={s.brandSub}>Infrastructure Pvt. Ltd.</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={s.nav}>
          <ul style={s.ul}>
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                onClick={() => scrollTo(link.id)}
                style={{
                  ...s.li,
                  ...(active === link.id ? s.liActive : {}),
                }}
              >
                {link.label}
                {active === link.id && <span style={s.dot} />}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button */}
        <a
          href="https://wa.me/919201945430"
          target="_blank"
          rel="noopener noreferrer"
          style={s.cta}
        >
          Get in Touch
        </a>

        {/* Hamburger */}
        <button
          style={s.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ ...s.bar, ...(menuOpen ? s.bar1Open : {}) }} />
          <span style={{ ...s.bar, ...(menuOpen ? s.barMidOpen : {}) }} />
          <span style={{ ...s.bar, ...(menuOpen ? s.bar3Open : {}) }} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={s.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              onClick={() => scrollTo(link.id)}
              style={{
                ...s.mobileItem,
                ...(active === link.id ? s.mobileItemActive : {}),
              }}
            >
              {link.label}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}

const s = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 40px",
    backgroundColor: "rgba(244,247,252,0.85)",
    backdropFilter: "blur(12px)",
    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
    gap: "16px",
  },
  scrolled: {
    backgroundColor: "rgba(255,255,255,0.97)",
    boxShadow: "0 4px 24px rgba(10,22,40,0.1)",
    padding: "8px 40px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    flexShrink: 0,
  },
  logo: {
    height: "44px",
    width: "44px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #2563c8",
    animation: "float 3.5s ease-in-out infinite",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.2,
  },
  brandName: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "#0a1628",
    letterSpacing: "0.02em",
  },
  brandSub: {
    fontSize: "0.68rem",
    color: "#2563c8",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  nav: { flex: 1, display: "flex", justifyContent: "center" },
  ul: {
    display: "flex",
    listStyle: "none",
    gap: "4px",
    margin: 0,
    padding: 0,
  },
  li: {
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#3a5070",
    padding: "7px 14px",
    borderRadius: "8px",
    position: "relative",
    transition: "color 0.25s, background 0.25s",
  },
  liActive: {
    color: "#2563c8",
    fontWeight: 600,
    background: "#deeafc",
  },
  dot: {
    position: "absolute",
    bottom: 3,
    left: "50%",
    transform: "translateX(-50%)",
    width: 4,
    height: 4,
    borderRadius: "50%",
    backgroundColor: "#2563c8",
  },
  cta: {
    flexShrink: 0,
    padding: "9px 20px",
    background: "linear-gradient(135deg, #2563c8, #1a3a6e)",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "0.87rem",
    fontWeight: 600,
    letterSpacing: "0.03em",
    boxShadow: "0 4px 14px rgba(37,99,200,0.35)",
    transition: "opacity 0.25s, transform 0.25s",
    cursor: "pointer",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
  },
  bar: {
    display: "block",
    width: "22px",
    height: "2px",
    background: "#0a1628",
    borderRadius: "2px",
    transition: "transform 0.3s, opacity 0.3s",
  },
  bar1Open: { transform: "translateY(7px) rotate(45deg)" },
  barMidOpen: { opacity: 0 },
  bar3Open: { transform: "translateY(-7px) rotate(-45deg)" },
  mobileMenu: {
    position: "fixed",
    top: "64px",
    left: 0,
    right: 0,
    zIndex: 999,
    background: "#fff",
    boxShadow: "0 8px 32px rgba(10,22,40,0.12)",
    padding: "12px 0",
  },
  mobileItem: {
    padding: "14px 32px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#3a5070",
    borderBottom: "1px solid #f0f4fa",
    transition: "background 0.2s",
  },
  mobileItemActive: {
    color: "#2563c8",
    background: "#f0f6ff",
    fontWeight: 600,
  },
};

export default Header;