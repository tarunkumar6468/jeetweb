import React, { useState } from "react";

function Home() {
  const [activeWord, setActiveWord] = useState(null);

  const description =
    "We are JeetLink Infrastructure Pvt Ltd — turning innovative civil engineering designs into strong, lasting infrastructure. From bridges to highways, we connect communities with precision and excellence.";

  return (
    <section style={styles.home}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>
          JeetLink Infrastructure <span style={styles.highlight}> </span>
        </h1>

        <h2 style={styles.subheading}>
          Civil Engineering | Bridges, Roads & Infrastructure
        </h2>

        <p style={styles.description}>
          {description.split(" ").map((word, i) => (
            <span
              key={i}
              onClick={() => setActiveWord(i)}
              style={{
                ...styles.word,
                color: activeWord === i ? "#000" : "#444",
                textDecoration: activeWord === i ? "underline" : "none",
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
    width: "100%",
    minHeight: "100vh", // FIXED
    padding: "1rem",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  wrapper: {
    maxWidth: "800px",
    padding: "1rem",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)", // RESPONSIVE
    fontWeight: 800,
    marginBottom: "0.8rem",
    color: "#000",
  },
  highlight: {
    color: "#000",
  },
  subheading: {
    fontSize: "clamp(1.1rem, 3vw, 1.6rem)", // RESPONSIVE
    fontWeight: 500,
    marginBottom: "1.5rem",
    color: "#333",
  },
  description: {
    fontSize: "clamp(1rem, 2.5vw, 1.15rem)", // RESPONSIVE
    lineHeight: 1.7,
    marginBottom: "1.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    color: "#444",
  },
  word: {
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "clamp(1rem, 3vw, 1.2rem)", // RESPONSIVE
    color: "#555",
  },
};

export default Home;
