import React, { useEffect, useState } from "react";

const STATS = [
  { value: "2025", label: "Founded" },
  { value: "5+",   label: "Core Services" },
  { value: "100%", label: "Client Focus" },
  { value: "Pan",  label: "India Presence" },
];

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" style={s.section}>
      {/* Background blueprint grid */}
      <div style={s.gridBg} aria-hidden="true" />
      <div style={s.blob} aria-hidden="true" />

      <div style={{ ...s.content, opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}>
        {/* Badge */}
        <div style={s.badge} className="fade-up">
          <span style={s.badgeDot} />
          Precision in Design, Excellence in Delivery
        </div>

        {/* Heading */}
        <h1 style={s.heading} className="fade-up delay-1">
          JeetLink Infrastructure
          <br />
          <span style={s.headingAccent}>Private Limited</span>
        </h1>

        {/* Divider */}
        <div className="section-divider fade-up delay-2" style={{ margin: "1.4rem auto" }} />

<<<<<<< HEAD
        {/* Sub */}
        <p style={s.sub} className="fade-up delay-2">
          A forward-thinking consulting firm specializing in Highway Engineering,
          Bridge & Structural Design, Traffic Planning, and Infrastructure Consultancy —
          delivering innovative, data-driven solutions across India.
=======
        <p style={styles.description}>
          {description.split(" ").map((word, index) => (
            <span
              key={index}
              onMouseEnter={() => setHoveredWord(index)}
              onMouseLeave={() => setHoveredWord(null)}
              style={{
                ...styles.word,
                color: hoveredWord === index ? "#000" : "#444",
                textDecoration:
                  hoveredWord === index ? "underline" : "none",
              }}
            >
              {word}&nbsp;
            </span>
          ))}
>>>>>>> 0d24f5b (update code on 01/28/2026)
        </p>

        {/* CTAs */}
        <div style={s.ctaRow} className="fade-up delay-3">
          <a
            href="https://wa.me/919201945430"
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnPrimary}
          >
            Start a Project
          </a>
          <button
            style={s.btnSecondary}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Services →
          </button>
        </div>

        {/* Stats */}
        <div style={s.statsRow} className="fade-up delay-4">
          {STATS.map((st, i) => (
            <div key={i} style={s.statBox}>
              <span style={s.statValue}>{st.value}</span>
              <span style={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </div>

        {/* CIN / GST badge */}
        <div style={s.regRow} className="fade-up delay-4">
          <span style={s.regBadge}>CIN: U7O2OOMP2O25PTCO75714</span>
          <span style={s.regBadge}>GST: 23AAGCJ8O63P1Z1</span>
        </div>
      </div>

      <style>{`
        @keyframes blobFloat {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.08); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .delay-1 { animation-delay:0.15s; }
        .delay-2 { animation-delay:0.28s; }
        .delay-3 { animation-delay:0.42s; }
        .delay-4 { animation-delay:0.58s; }
        .section-divider {
          width:60px; height:4px;
          background:linear-gradient(90deg,#2563c8,#c9a84c);
          border-radius:2px;
        }
        #home a:hover, #home button:hover { opacity: 0.88; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

<<<<<<< HEAD
const s = {
  section: {
    position: "relative",
    minHeight: "100vh",
=======
const styles = {
  home: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
>>>>>>> 0d24f5b (update code on 01/28/2026)
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px 60px",
    overflow: "hidden",
    background: "linear-gradient(160deg, #f4f7fc 0%, #deeafc 50%, #f4f7fc 100%)",
    fontFamily: "'DM Sans', sans-serif",
  },
<<<<<<< HEAD
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(37,99,200,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37,99,200,0.06) 1px, transparent 1px)
    `,
    backgroundSize: "44px 44px",
    pointerEvents: "none",
  },
  blob: {
    position: "absolute",
    top: "40%",
    left: "70%",
    transform: "translate(-50%,-50%)",
    width: "520px",
    height: "520px",
    background: "radial-gradient(circle, rgba(37,99,200,0.13) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "blobFloat 7s ease-in-out infinite",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "760px",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(37,99,200,0.1)",
    border: "1px solid rgba(37,99,200,0.25)",
    color: "#2563c8",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    padding: "6px 16px",
    borderRadius: "100px",
    marginBottom: "1.2rem",
  },
  badgeDot: {
    width: 8, height: 8,
    borderRadius: "50%",
    background: "#2563c8",
    boxShadow: "0 0 0 3px rgba(37,99,200,0.25)",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "#0a1628",
    marginBottom: "0.2rem",
=======
  wrapper: {
    maxWidth: "900px",
    padding: "2rem",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "1rem",
    color: "#000",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  headingAccent: {
    background: "linear-gradient(90deg, #2563c8, #1a3a6e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
<<<<<<< HEAD
  sub: {
    fontSize: "clamp(0.98rem, 2.2vw, 1.12rem)",
    color: "#3a5070",
    lineHeight: 1.78,
    maxWidth: "600px",
    margin: "0 auto 2rem",
=======
  subheading: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "2rem",
    color: "#333",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  ctaRow: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
  },
  btnPrimary: {
    padding: "14px 32px",
    background: "linear-gradient(135deg, #2563c8, #1a3a6e)",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "0.95rem",
    letterSpacing: "0.02em",
    boxShadow: "0 6px 20px rgba(37,99,200,0.4)",
    transition: "opacity 0.25s, transform 0.25s",
    cursor: "pointer",
<<<<<<< HEAD
    border: "none",
=======
    transition: "color 0.2s ease, text-decoration 0.2s ease",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  btnSecondary: {
    padding: "14px 32px",
    background: "transparent",
    border: "2px solid #2563c8",
    color: "#2563c8",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "opacity 0.25s, transform 0.25s",
    fontFamily: "'DM Sans', sans-serif",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    border: "1px solid #deeafc",
    borderRadius: "12px",
    padding: "16px 24px",
    minWidth: "120px",
    boxShadow: "0 2px 10px rgba(37,99,200,0.08)",
  },
  statValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#2563c8",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "0.76rem",
    color: "#7a92b0",
    fontWeight: 500,
    marginTop: "6px",
    textAlign: "center",
    letterSpacing: "0.03em",
  },
  regRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  regBadge: {
    fontSize: "0.72rem",
    color: "#7a92b0",
    background: "rgba(255,255,255,0.7)",
    border: "1px solid #deeafc",
    padding: "4px 12px",
    borderRadius: "100px",
    letterSpacing: "0.04em",
    fontWeight: 500,
  },
};

export default Home;