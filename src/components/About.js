import React, { useState, useEffect } from "react";

function About() {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const paragraphs = [
    "Hey there! Meet a passionate Civil Engineer transforming visions into concrete reality. With every project, I don't just build structures - I create legacies.",
    "From the first stroke of the blueprint to the final bolt in place, I thrive where precision meets creativity. My work bridges more than rivers - it connects communities.",
    "Specializing in structural innovation and sustainable development, I approach each project with three core principles: integrity, durability, and vision.",
  ];

  const skills = [
    { name: "Structural Design", icon: "🏗️" },
    { name: "Project Management", icon: "📋" },
    { name: "AutoCAD", icon: "📐" },
    { name: "Sustainable Materials", icon: "🌱" },
    { name: "Site Supervision", icon: "👷" },
    { name: "Cost Estimation", icon: "💰" },
  ];

  // Safe animation injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideUnderline {
        0% { transform: translateX(-50%) scaleX(0.6); opacity: 0.6; }
        50% { transform: translateX(-50%) scaleX(1); opacity: 1; }
        100% { transform: translateX(-50%) scaleX(0.8); opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="about" style={styles.about}>
      {/* Header */}
      <div style={styles.headerWrapper}>
        <h2 style={styles.heading}>
          Building The Future
          <span style={styles.underline} />
        </h2>
        <p style={styles.subheading}>My Journey in Civil Engineering</p>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {paragraphs.map((text, index) => (
          <div
            key={index}
            style={{
              ...styles.paragraphWrapper,
              transform:
                hoveredParagraph === index ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredParagraph(index)}
            onMouseLeave={() => setHoveredParagraph(null)}
          >
            <p style={styles.paragraph}>{text}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={styles.skillsSection}>
        <h3 style={styles.skillsHeading}>My Engineering Toolkit</h3>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                ...styles.skillItem,
                transform:
                  hoveredSkill === index ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span style={styles.skillIcon}>{skill.icon}</span>
              <span style={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={styles.quoteContainer}>
        <p style={styles.quote}>
          “We shape our buildings; thereafter they shape us.”
          <span style={styles.quoteAuthor}>— Winston Churchill</span>
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    width: "100%",
    minHeight: "100vh",
    padding: "4rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    scrollMarginTop: "80px", // 🔥 FIX for navbar overlap
  },
  headerWrapper: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#333",
    position: "relative",
    display: "inline-block",
  },
  underline: {
    position: "absolute",
    bottom: "-6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90px",
    height: "4px",
    borderRadius: "2px",
    background: "linear-gradient(90deg, #4a90e2, #1976d2)",
    animation: "slideUnderline 1.5s infinite",
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#666",
    fontStyle: "italic",
    marginTop: "0.5rem",
  },
  content: {
    width: "80%",
    marginBottom: "3rem",
  },
  paragraphWrapper: {
    marginBottom: "1.8rem",
    padding: "1.2rem",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    transition: "transform 0.3s ease",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#444",
  },
  skillsSection: {
    width: "80%",
    marginBottom: "3rem",
  },
  skillsHeading: {
    fontSize: "1.4rem",
    fontWeight: 600,
    textAlign: "center",
    color: "#4a90e2",
    marginBottom: "1.5rem",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1rem",
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "0.9rem 1.1rem",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  skillIcon: {
    fontSize: "1.4rem",
  },
  skillName: {
    color: "#333",
    fontWeight: 500,
  },
  quoteContainer: {
    width: "80%",
    padding: "2rem",
    background: "linear-gradient(135deg, #4a90e2, #1976d2)",
    borderRadius: "10px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    margin: 0,
  },
  quoteAuthor: {
    display: "block",
    marginTop: "0.8rem",
    fontSize: "1rem",
    opacity: 0.9,
  },
};

export default About;
