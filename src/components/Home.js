import React, { useState, useEffect } from "react";

function Home() {
  const [position, setPosition] = useState(0);
  const [hoveredWord, setHoveredWord] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 20 ? -20 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const descriptionWords =
    "A passionate Civil Engineer specializing in building bridges, roads, and critical infrastructure. I turn complex designs into strong, functional structures that help connect people and places.".split(
      " "
    );

  return (
    <section id="home" style={styles.home}>
      <div style={styles.backgroundPattern}></div>

      <div style={styles.contentWrapper}>
        <h1
          style={{
            ...styles.heading,
            transform: `translateX(${position}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          Welcome!
        </h1>

        <h2 style={styles.subheading}>
          <span style={styles.nameHighlight}>I'm Parmjeet Singh</span>
          <span style={styles.professionPulse}>Civil Engineer</span>
        </h2>

        <div style={styles.description}>
          {descriptionWords.map((word, index) => (
            <span
              key={index}
              style={{
                ...styles.word,
                color: hoveredWord === index ? "#ffffff" : "#e0eafc",
                transform:
                  hoveredWord === index ? "translateY(-3px)" : "translateY(0)",
                textShadow:
                  hoveredWord === index
                    ? "0 0 8px rgba(255,255,255,0.7)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredWord(index)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              {word}
            </span>
          ))}
        </div>

        <div style={styles.quoteContainer}>
          <p style={styles.quote}>
            <span style={styles.quoteMark}>“</span>
            <span style={styles.quoteText}>
              Engineering isn't just about building — it's about creating
              impact.
            </span>
            <span style={styles.quoteMark}>”</span>
          </p>
          <div style={styles.quoteLine}></div>
        </div>

        <div style={styles.scrollIndicator}>
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.scrollDot,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  home: {
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, rgba(246, 247, 245, 0), rgba(67, 69, 71, 0.9))",
    textAlign: "center",
    color: "#f0f8ff",
    borderRadius: "12px",
    maxWidth: "750px",
    margin: "3rem auto",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    zIndex: 0,
    opacity: 0.5,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
  },
  heading: {
    fontSize: "4rem",
    fontWeight: 800,
    marginBottom: "1rem",
    textShadow: "3px 3px 10px rgba(229, 12, 12, 0.3)",
    letterSpacing: "2px",
  },
  subheading: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  nameHighlight: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: "0.5rem 1.5rem",
    borderRadius: "50px",
    boxShadow: "inset 0 0 10px rgba(37, 13, 13, 0.2)",
  },
  professionPulse: {
    fontSize: "1.5rem",
    fontWeight: 500,
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    animation: "pulse 2s infinite ease-in-out",
  },
  description: {
    fontSize: "1.3rem",
    lineHeight: "1.8",
    margin: "0 auto 2.5rem",
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
  },
  word: {
    transition: "all 0.3s ease",
    display: "inline-block",
    marginRight: "6px",
  },
  quoteContainer: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "1.5rem 0",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "1.4rem",
    color: "#ffffff",
  },
  quoteMark: {
    fontSize: "2rem",
    color: "rgba(255,255,255,0.7)",
  },
  quoteText: {
    padding: "0 0.5rem",
  },
  quoteLine: {
    height: "2px",
    width: "100px",
    background: "rgba(22, 1, 1, 0.5)",
    margin: "1.5rem auto",
    borderRadius: "2px",
  },
  scrollIndicator: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "3rem",
  },
  scrollDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    animation: "bounce 1.5s infinite ease-in-out",
  },
};

// Insert keyframes (for pulse & bounce animations)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`, styleSheet.cssRules.length);

export default Home;
