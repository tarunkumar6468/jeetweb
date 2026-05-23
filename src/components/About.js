<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";

const SKILLS = [
  { name: "Highway Engineering",        icon: "🛣️", pct: 95 },
  { name: "Bridge & Structural Design", icon: "🌉", pct: 93 },
  { name: "Traffic Planning",           icon: "🚦", pct: 88 },
  { name: "Geotechnical & Survey",      icon: "📡", pct: 85 },
  { name: "Project Consultancy",        icon: "📋", pct: 90 },
  { name: "Cost & Contracts Mgmt",      icon: "💰", pct: 87 },
];

const VALUES = [
  {
    icon: "💡",
    title: "Innovation Integration",
    desc: "We don't just follow standards — we set them. Every project gets the latest technology, tools, and thinking baked in from day one.",
  },
  {
    icon: "🤝",
    title: "Partnership First",
    desc: "We treat every client like a long-term partner, not a one-time contract. Trust, transparency, and clear communication guide every step.",
  },
  {
    icon: "♻️",
    title: "Built to Last",
    desc: "Infrastructure that outlives deadlines. Our designs integrate sustainability so the structures we build serve communities for generations.",
  },
];
=======
import React, { useState, useEffect } from "react";
>>>>>>> 0d24f5b (update code on 01/28/2026)

function About() {
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible]   = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
<<<<<<< HEAD
    <section id="about" style={s.section} ref={ref}>
      {/* Diagonal accent */}
      <div style={s.diagonalBg} aria-hidden="true" />
      <div style={s.dotPattern} aria-hidden="true" />

      <div style={s.inner}>
        {/* Header — fade+slide up */}
        <div
          style={{
            ...s.headerWrap,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
        >
          <p style={s.eyebrow}>Who We Are</p>
          <h2 style={s.heading}>
            We Don't Just Design Infrastructure —<br />
            <span style={s.headingAccent}>We Engineer Legacies</span>
          </h2>
          <div style={s.divider} />
        </div>

        {/* Story block — staggered fade */}
        <div
          style={{
            ...s.storyGrid,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.75s ease 0.18s, transform 0.75s ease 0.18s",
          }}
        >
          <div style={s.storyLeft}>
            <p style={s.storyPara}>
              Founded in 2025, <strong>Jeetlink Infrastructure Pvt. Ltd.</strong> was built
              on a simple but powerful belief — that great infrastructure is the backbone of a
              growing nation. We are a forward-thinking civil engineering consulting firm
              headquartered in India, committed to delivering solutions that go beyond blueprints.
            </p>
            <p style={s.storyPara}>
              From the first site survey to the final quality check, we bring together deep
              technical expertise, modern tools, and a genuine passion for precision. Our team
              specializes in highways, bridges, traffic systems, and geotechnical work — handling
              every phase of a project with the same level of care and accountability.
            </p>
            <p style={s.storyPara}>
              What makes us different is not just the work we do — it's how we do it. Data-driven
              decisions. Client-first communication. Designs that balance durability, safety, and
              sustainability. Because when you build something that connects people, it deserves
              to be built right.
            </p>
=======
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
>>>>>>> 0d24f5b (update code on 01/28/2026)
          </div>

<<<<<<< HEAD
          <div style={s.storyRight}>
            {VALUES.map((v, i) => (
              <div
                key={i}
                style={{
                  ...s.valueCard,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(30px)",
                  transition: `opacity 0.65s ease ${0.28 + i * 0.13}s, transform 0.65s ease ${0.28 + i * 0.13}s`,
                }}
              >
                <span style={s.valueIcon}>{v.icon}</span>
                <div>
                  <h4 style={s.valueTitle}>{v.title}</h4>
                  <p style={s.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            ...s.skillsWrap,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.75s ease 0.35s, transform 0.75s ease 0.35s",
          }}
        >
          <div style={s.skillsHeader}>
            <h3 style={s.skillsHeading}>Technical Expertise</h3>
            <p style={s.skillsSub}>The tools and disciplines we've mastered — so your project doesn't have to wait.</p>
          </div>
          <div style={s.skillsGrid}>
            {SKILLS.map((sk, i) => (
              <div key={i} style={s.skillCard}>
                <div style={s.skillTop}>
                  <span style={s.skillIcon}>{sk.icon}</span>
                  <span style={s.skillName}>{sk.name}</span>
                  <span style={s.skillPct}>{sk.pct}%</span>
                </div>
                <div style={s.trackBg}>
                  <div
                    style={{
                      ...s.trackFill,
                      width: animated ? `${sk.pct}%` : "0%",
                      transitionDelay: `${0.4 + i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div
          style={{
            ...s.toolStrip,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <span style={s.toolLabel}>Tools We Use:</span>
          {["Civil 3D", "MX Road", "MIDAS", "AutoCAD", "DGPS", "Drone Mapping", "LiDAR", "Total Station"].map((t, i) => (
            <span key={i} style={s.toolBadge}>{t}</span>
=======
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
>>>>>>> 0d24f5b (update code on 01/28/2026)
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            ...s.quoteWrap,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          <span style={s.quoteMarks}>"</span>
          <p style={s.quoteText}>We shape our buildings; thereafter they shape us.</p>
          <p style={s.quoteCredit}>— Winston Churchill</p>
        </div>
      </div>

<<<<<<< HEAD
      <style>{`
        #about strong { color: #1a4d2e; }
        @media (max-width: 700px) {
          #about .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
=======
      {/* Quote */}
      <div style={styles.quoteContainer}>
        <p style={styles.quote}>
          “We shape our buildings; thereafter they shape us.”
          <span style={styles.quoteAuthor}>— Winston Churchill</span>
        </p>
      </div>
>>>>>>> 0d24f5b (update code on 01/28/2026)
    </section>
  );
}

<<<<<<< HEAD
const s = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "0 0 90px",
    fontFamily: "'DM Sans', sans-serif",
    background: "#ffffff",
  },
  diagonalBg: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "340px",
    background: "linear-gradient(170deg, #0d2b1a 0%, #1a4d2e 60%, #2d7a4f 100%)",
    clipPath: "polygon(0 0, 100% 0, 100% 72%, 0 100%)",
    zIndex: 0,
  },
  dotPattern: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "340px",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
    backgroundSize: "28px 28px",
    zIndex: 1,
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "80px 24px 0",
  },
  headerWrap: {
    textAlign: "center",
    marginBottom: "56px",
  },
  eyebrow: {
    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "12px",
=======
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
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.8rem, 3.8vw, 2.7rem)",
    fontWeight: 700, color: "#fff",
    lineHeight: 1.22, marginBottom: "20px",
  },
<<<<<<< HEAD
  headingAccent: {
    color: "#c9a84c",
=======
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
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  divider: {
    width: "60px", height: "4px",
    background: "linear-gradient(90deg, #c9a84c, rgba(255,255,255,0.4))",
    borderRadius: "2px", margin: "0 auto",
  },
  storyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    marginBottom: "56px",
    background: "#fff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 8px 40px rgba(10,40,22,0.12)",
  },
<<<<<<< HEAD
  storyLeft: {
    display: "flex", flexDirection: "column", gap: "18px",
=======
  paragraphWrapper: {
    marginBottom: "1.8rem",
    padding: "1.2rem",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    transition: "transform 0.3s ease",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  storyPara: {
    fontSize: "0.97rem", color: "#2d4a38",
    lineHeight: 1.82,
  },
  storyRight: {
    display: "flex", flexDirection: "column", gap: "20px",
    justifyContent: "center",
  },
  valueCard: {
    display: "flex", gap: "14px", alignItems: "flex-start",
    background: "#f4faf6",
    border: "1px solid #c8e6d4",
    borderRadius: "12px",
    padding: "18px 20px",
  },
  valueIcon: { fontSize: "1.6rem", flexShrink: 0, marginTop: "2px" },
  valueTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1rem", fontWeight: 700,
    color: "#0d2b1a", marginBottom: "5px",
  },
  valueDesc: {
    fontSize: "0.87rem", color: "#5a8070", lineHeight: 1.65,
  },
  skillsWrap: {
    background: "linear-gradient(135deg, #0d2b1a 0%, #1a4d2e 100%)",
    borderRadius: "20px", padding: "44px 40px",
    marginBottom: "24px",
    boxShadow: "0 8px 32px rgba(10,40,22,0.22)",
  },
  skillsHeader: {
    textAlign: "center", marginBottom: "32px",
  },
  skillsHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.5rem", color: "#fff", marginBottom: "8px",
  },
  skillsSub: {
    fontSize: "0.88rem", color: "#7ecfa0", fontStyle: "italic",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
<<<<<<< HEAD
  skillCard: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "10px", padding: "16px 20px",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  skillTop: {
    display: "flex", alignItems: "center",
    gap: "10px", marginBottom: "10px",
=======
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
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  skillIcon: { fontSize: "1.2rem" },
  skillName: { flex: 1, fontSize: "0.9rem", fontWeight: 500, color: "#d4f0e0" },
  skillPct: { fontSize: "0.85rem", fontWeight: 700, color: "#c9a84c" },
  trackBg: {
    height: "6px", background: "rgba(255,255,255,0.1)",
    borderRadius: "3px", overflow: "hidden",
  },
<<<<<<< HEAD
  trackFill: {
    height: "100%",
    background: "linear-gradient(90deg, #2d7a4f, #c9a84c)",
    borderRadius: "3px",
    transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
  },
  toolStrip: {
    display: "flex", alignItems: "center",
    flexWrap: "wrap", gap: "10px",
    background: "#f0faf4",
    borderRadius: "12px", padding: "16px 20px",
    marginBottom: "36px",
    border: "1px solid #c8e6d4",
  },
  toolLabel: {
    fontSize: "0.78rem", fontWeight: 700, color: "#1a4d2e",
    textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "4px",
  },
  toolBadge: {
    background: "#fff", border: "1px solid #c8e6d4",
    color: "#1a4d2e", fontSize: "0.82rem", fontWeight: 600,
    padding: "4px 12px", borderRadius: "100px",
    boxShadow: "0 1px 4px rgba(29,100,60,0.08)",
  },
  quoteWrap: {
    background: "#fff", border: "1px solid #c8e6d4",
    borderLeft: "5px solid #c9a84c",
    borderRadius: "14px", padding: "32px 40px",
=======
  quoteContainer: {
    width: "80%",
    padding: "2rem",
    background: "linear-gradient(135deg, #4a90e2, #1976d2)",
    borderRadius: "10px",
>>>>>>> 0d24f5b (update code on 01/28/2026)
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(29,100,60,0.07)",
  },
  quoteMarks: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "5rem", lineHeight: 0.6,
    color: "#c8e6d4", display: "block",
    marginBottom: "12px", userSelect: "none",
  },
  quoteText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.25rem", fontStyle: "italic",
    color: "#0d2b1a", lineHeight: 1.6, marginBottom: "10px",
  },
  quoteCredit: {
    fontSize: "0.85rem", color: "#2d7a4f",
    fontWeight: 600, letterSpacing: "0.04em",
  },
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 0d24f5b (update code on 01/28/2026)
