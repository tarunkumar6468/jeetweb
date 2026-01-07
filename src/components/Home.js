import React, { useState } from "react";

function Home() {
  const [hoveredWord, setHoveredWord] = useState(null);

  const description =
    "We are JeetLink Infrastructure Pvt Ltd — turning innovative civil engineering designs into strong, lasting infrastructure. From bridges to highways, we connect communities with precision and excellence.";

  return (
    <section id="home" style={styles.home}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>
          Welcome to <span style={styles.highlight}>JeetLink</span>
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
                color: hoveredWord === i ? "#000" : "#444",
                textDecoration: hoveredWord === i ? "underline" : "none",
              }}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div style={styles.quote}>
          “Engineering isn't just building — it's creating impact.”
        </div>
      </div>
    </section>
  );
}

const styles = {
  home: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  wrapper: {
    maxWidth: "800px",
    padding: "2rem",
  },
  heading: {
    fontSize: "3.2rem",
    fontWeight: 800,
    marginBottom: "1rem",
    color: "#000",
  },
  highlight: {
    color: "#000",
  },
  subheading: {
    fontSize: "1.6rem",
    fontWeight: 500,
    marginBottom: "2rem",
    color: "#333",
  },
  description: {
    fontSize: "1.15rem",
    lineHeight: 1.8,
    marginBottom: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    color: "#444",
  },
  word: {
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default Home;
