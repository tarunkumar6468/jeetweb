import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
        <h1 style={styles.title}>
          JeetLink Infrastructure Private Limited
        </h1>
      </div>

      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem} onClick={() => scrollToSection("home")}>Home</li>
          <li style={styles.navItem} onClick={() => scrollToSection("about")}>About</li>
          <li style={styles.navItem} onClick={() => scrollToSection("projects")}>Projects</li>
          <li style={styles.navItem} onClick={() => scrollToSection("contact")}>Contact</li>
          <li style={styles.navItem} onClick={() => scrollToSection("contact")}>Who We Are</li>
        </ul>
      </nav>

      <style>{`
        .floating-logo {
          height: 40px;
          margin-right: 10px;
          border-radius: 10px;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
          cursor: pointer;
        }

        .floating-logo:hover {
          transform: scale(1.2);
          border-radius: 50%;
        }

        .clicked {
          transform: scale(1.3);
          border-radius: 50%;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    color: "#800000",

    position: "sticky",
    top: 0,
    zIndex: 1000,

    backgroundColor: "transparent",   // initial
    transform: "translateY(-100%)",   // hidden at first
    transition: "all 0.4s ease",
  },

  headerScrolled: {
    backgroundColor: "#fffefeff",     // visible on scroll
    transform: "translateY(0)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: "10px 20px",
    backgroundColor: "#051638ff",
    borderRadius: "6px",
  },

  navItem: {
    cursor: "pointer",
    color: "#e9e8e8ff",
    fontWeight: "500",
  },
};

export default Header;
