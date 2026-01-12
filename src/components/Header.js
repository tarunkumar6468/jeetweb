import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on click
    }
  };

  const handleLogoClick = () => {
    setClicked(true);
    scrollToSection("home");
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <header
      style={{
        ...styles.header,
        ...(scrolled ? styles.headerScrolled : {}),
      }}
    >
      <div style={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          className={`floating-logo ${clicked ? "clicked" : ""}`}
          onClick={handleLogoClick}
        />
        <h1 style={styles.title}>JeetLink Infrastructure Private Limited</h1>
      </div>

      {/* Hamburger */}
      <div
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav
        style={{
          ...styles.nav,
          ...(menuOpen ? styles.navOpen : {}),
        }}
      >
        <ul style={styles.navList}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
          <li onClick={() => scrollToSection("contact")}>Who We Are</li>
        </ul>
      </nav>

      {/* Animations and Media Queries */}
      <style>{`
        .floating-logo {
          height: 40px;
          margin-right: 10px;
          border-radius: 10px;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
          cursor: pointer;
        }
        .floating-logo:hover { transform: scale(1.2); border-radius: 50%; }
        .clicked { transform: scale(1.3); border-radius: 50%; }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          nav ul {
            flex-direction: column;
            padding: 15px;
          }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
  },

  headerScrolled: {
    backgroundColor: "#ffffffff",
    boxShadow: "0 4px 12px rgba(25, 14, 65, 0.97)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#800000",
  },

  hamburger: {
    display: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#800000",
  },

  nav: {
    display: "flex",
  },

  navOpen: {
    display: "block",
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(25, 14, 65, 0.97)",
    borderRadius: "8px",
  },

  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
    color: "#800000",
  },
};

export default Header;
