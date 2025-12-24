import React, { useState } from "react";

function About() {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleParagraphHover = (index) => {
    setHoveredParagraph(index);
  };

  const handleSkillHover = (index) => {
    setHoveredSkill(index);
  };

  return (
    <section id="about" style={styles.about}>
      <div style={styles.headerWrapper}>
        <h2 style={styles.heading}>
          <span style={styles.headingText}>Building The Future</span>
          <span style={styles.headingLine} />
        </h2>
        <p style={styles.subheading}>My Journey in Civil Engineering</p>
      </div>

      <div style={styles.content}>
        {[
          "Hey there! Meet a passionate Civil Engineer transforming visions into concrete reality. With every project, I don't just build structures - I create legacies.",
          "From the first stroke of the blueprint to the final bolt in place, I thrive where precision meets creativity. My work bridges more than rivers - it connects communities.",
          "Specializing in structural innovation and sustainable development, I approach each project with three core principles: integrity, durability, and vision.",
        ].map((text, index) => (
          <div
            key={index}
            style={{
              ...styles.paragraphWrapper,
              transform: hoveredParagraph === index ? "translateX(10px)" : "translateX(0)",
              borderLeft: hoveredParagraph === index ? "4px solidrgb(169, 183, 200)" : "4px solid transparent",
            }}
            onMouseEnter={() => handleParagraphHover(index)}
            onMouseLeave={() => setHoveredParagraph(null)}
          >
            <p style={styles.paragraph}>
              {text.split(/\s/).map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  <span
                    style={{
                      display: 'inline-block',
                      transition: `all 0.3s ease ${wordIndex * 0.05}s`,
                      color: hoveredParagraph === index ? 
                        (wordIndex % 2 === 0 ? "#4a90e2" : "#2c3e50") : "#2c3e50",
                      fontWeight: hoveredParagraph === index ? 
                        (wordIndex % 3 === 0 ? 600 : 400) : 400,
                    }}
                  >
                    {word}
                  </span>
                  {' '}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div style={styles.skillsSection}>
        <h3 style={styles.skillsHeading}>My Engineering Toolkit</h3>
        <div style={styles.skillsGrid}>
          {[
            "Structural Design",
            "Project Management",
            "AutoCAD",
            "Sustainable Materials",
            "Site Supervision",
            "Cost Estimation",
          ].map((skill, index) => (
            <div
              key={index}
              style={{
                ...styles.skillItem,
                transform: hoveredSkill === index ? "scale(1.05)" : "scale(1)",
                boxShadow: hoveredSkill === index ? 
                  "0 5px 15px rgba(74, 144, 226, 0.3)" : 
                  "0 2px 8px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={() => handleSkillHover(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              aria-label={skill}
            >
              <div style={{
                ...styles.skillIcon,
                backgroundColor: hoveredSkill === index ? "#e8f2ff" : "transparent",
                transform: hoveredSkill === index ? "rotate(5deg)" : "rotate(0)"
              }} aria-hidden="true">
                {index % 2 === 0 ? "🏗️" : "📐"}
              </div>
              <span style={{
                fontWeight: hoveredSkill === index ? 600 : 400,
                color: hoveredSkill === index ? "#4a90e2" : "#2c3e50"
              }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.quoteContainer}>
        <p style={styles.quote}>
          "We shape our buildings; thereafter they shape us."
          <span style={styles.quoteAuthor}>- Winston Churchill</span>
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    maxWidth: "800px",
    margin: "4rem auto",
    padding: "3rem 4rem",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
    color: "#2c3e50",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s ease",
    lineHeight: 1.7,
  },
  headerWrapper: {
    textAlign: "center",
    marginBottom: "3rem",
    position: "relative",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: 800,
    color: "#30475e",
    marginBottom: "0.5rem",
    position: "relative",
    display: "inline-block",
  },
  headingText: {
    position: "relative",
    zIndex: 2,
    background: "linear-gradient(135deg, #4a90e2 0%, #30475e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headingLine: {
    position: "absolute",
    bottom: "8px",
    left: 0,
    width: "100%",
    height: "15px",
    background: "rgba(74, 144, 226, 0.2)",
    zIndex: 1,
    borderRadius: "10px",
    transform: "skewX(-15deg)",
  },
  subheading: {
    fontSize: "1.3rem",
    color: "#6b7c93",
    fontStyle: "italic",
    marginTop: "1rem",
    fontWeight: 500,
  },
  content: {
    margin: "2.5rem 0",
  },
  paragraphWrapper: {
    marginBottom: "2rem",
    paddingLeft: "1.5rem",
    transition: "all 0.3s ease",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: 1.9,
    margin: 0,
    cursor: "default",
  },
  skillsSection: {
    margin: "4rem 0",
    padding: "2rem",
    backgroundColor: "#f8faff",
    borderRadius: "12px",
    border: "1px solid #e0e9ff",
  },
  skillsHeading: {
    textAlign: "center",
    color: "#4a90e2",
    marginBottom: "2rem",
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1.2rem",
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.2rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  skillIcon: {
    fontSize: "1.5rem",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  quoteContainer: {
    marginTop: "4rem",
    padding: "2rem",
    backgroundColor: "#4a90e2",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
    transform: "rotate(-1deg)",
    boxShadow: "0 5px 20px rgba(74, 144, 226, 0.3)",
  },
  quote: {
    fontSize: "1.4rem",
    fontStyle: "italic",
    fontWeight: 500,
    margin: 0,
    lineHeight: 1.7,
  },
  quoteAuthor: {
    display: "block",
    marginTop: "1rem",
    fontSize: "1.1rem",
    fontWeight: 400,
    opacity: 0.9,
  },
};

export default About;