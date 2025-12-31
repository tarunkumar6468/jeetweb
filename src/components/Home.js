import React, { useState, useEffect } from "react";

function Home() {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [gradientAngle, setGradientAngle] = useState(45);

  // Animate gradient slowly
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prev) => (prev >= 360 ? 0 : prev + 0.2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const description =
    "We are JeetLink Infrastructure Pvt Ltd — turning innovative civil engineering designs into strong, lasting infrastructure. From bridges to highways, we connect communities with precision and excellence.";

  return (
    <section
      id="home"
      style={{
        ...styles.home,
        background: `linear-gradient(${gradientAngle}deg, #4a90e2, #1dd1a1, #ff6b6b)`,
      }}
    >
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>
          Welcome to <span style={styles.highlight}>JeetLink!</span>
        </h1>

        <h2 style={styles.subheading}>
          Civil Engineering | Bridges, Roads & Infrastructure
        </h2>

        <p style={styles.description}>
          {description.split(" ").map((word, i) => (
            <span
              key={i}
              onMouseEnter={() => setHoveredWord(i)}
              onMouseLeave={() => setHoveredWord(null)}
              style={{
                ...styles.word,
                color: hoveredWord === i ? "#ffffff" : "#e0eafc",
                transform: hoveredWord === i ? "translateY(-2px)" : "translateY(0)",
                textShadow: hoveredWord === i ? "0 0 6px #ffffff" : "none",
              }}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div style={styles.quote}>
          “Engineering isn't just building — it's creating impact.”
        </div>

        <div style={styles.scrollIndicator}>
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              style={{ ...styles.scrollDot, animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  home: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
    transition: "background 0.5s linear",
  },
  wrapper: {
    maxWidth: "800px",
    padding: "2rem",
    borderRadius: "12px",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: 800,
    marginBottom: "1rem",
    color: "#fff",
  },
  highlight: {
    color: "#a52323ff",
  },
  subheading: {
    fontSize: "1.8rem",
    fontWeight: 500,
    marginBottom: "2rem",
    color: "#e0eafc",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
  },
  word: {
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "1.3rem",
    color: "#fff",
    marginBottom: "2rem",
  },
  scrollIndicator: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
  },
  scrollDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.6)",
    animation: "bounce 1.5s infinite ease-in-out",
  },
};

// Keyframes for scroll animation
const sheet = document.styleSheets[0];
sheet.insertRule(`
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`, sheet.cssRules.length);

export default Home;
