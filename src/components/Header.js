import React, { useState } from "react";
import logo from "../assets/logo.jpg";

function Header() {
  const [clicked, setClicked] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setClicked(true);
    scrollToSection("home");
    setTimeout(() => setClicked(false), 300); // Reset after animation
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          style={styles.logo}
          className={`floating-logo ${clicked ? "clicked" : ""}`}
          onClick={handleLogoClick}
        />
        <h1 style={styles.title}>JeetLink Infrastructure Private Limited
</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem} onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li style={styles.navItem} onClick={() => scrollToSection("about")}>
            About
          </li>
          <li style={styles.navItem} onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li style={styles.navItem} onClick={() => scrollToSection("contact")}>
            Contact
          </li>
          <li style={styles.navItem} onClick={() => scrollToSection("contact")}>
            who we are
          </li>
        </ul>
      </nav>

      {/* Style: floating + hover/click round and scale */}
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
    backgroundColor: "#282c34",
    padding: "10px 20px",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "80px",
    marginRight: "20px",
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
    padding: 0,
  },
  navItem: {
    cursor: "pointer",
  },
};

export default Header;
