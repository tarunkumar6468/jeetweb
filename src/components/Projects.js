import React, { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    title: "Highway Engineering",
    desc: "From blank terrain to a fully functional highway — we handle it all. Feasibility studies, detailed project reports, geometric design, pavement analysis, and construction supervision, built around national and international safety standards.",
    emoji: "🛣️",
    category: "Highway",
    tag: "Core Service",
    detail: "DPRs · Geometric Design · Pavement Analysis · Site Supervision",
  },
  {
    title: "Bridge & Structural Engineering",
    desc: "Bridges that connect more than riverbanks — they connect communities. We design RCC, PSC, steel, and composite bridges, including cable-stayed structures, ROBs, RUBs, flyovers, and segmental bridges with full structural proof-checking.",
    emoji: "🌉",
    category: "Bridges",
    tag: "Core Service",
    detail: "RCC · PSC · Steel · Cable-Stayed · Flyovers · ROBs",
  },
  {
    title: "Road Safety Audits",
    desc: "Roads should move people, not endanger them. Our RSA team conducts comprehensive audits at design, construction, and operation stages — with blackspot analysis, accident investigation, and Road Safety Improvement Plans for highways and urban corridors.",
    emoji: "🦺",
    category: "Road Safety",
    tag: "Specialized",
    detail: "RSA · Blackspot Analysis · RSIP · IRC Guidelines",
  },
  {
    title: "Traffic Planning & Engineering",
    desc: "Smart cities need smarter traffic systems. We deliver traffic surveys, intersection design, signal optimization, capacity analysis, urban mobility planning, and ITS integration — solutions that reduce congestion and improve safety for every road user.",
    emoji: "🚦",
    category: "Traffic",
    tag: "Specialized",
    detail: "Traffic Surveys · Signal Design · Urban Mobility · ITS",
  },
  {
    title: "Geotechnical & Survey Support",
    desc: "Good design begins with accurate ground data. We conduct topographic surveys, soil investigations, alignment studies, and drone mapping using Total Station, DGPS, and LiDAR — giving your project a foundation it can truly rely on.",
    emoji: "📡",
    category: "Geotechnical",
    tag: "Specialized",
    detail: "DGPS · LiDAR · Soil Testing · Drone Surveys · Total Station",
  },
  {
    title: "Cost & Contracts Consultancy",
    desc: "Projects succeed when the numbers work. We manage end-to-end cost control, BOQ preparation, tender documentation, contractor coordination, and vendor management — ensuring every rupee is accounted for and every deadline is met.",
    emoji: "📑",
    category: "Consultancy",
    tag: "Core Service",
    detail: "BOQ · Tender Docs · Bid Evaluation · Vendor Management",
  },
];

const TAG_COLORS = {
  "Core Service": { bg: "#d4f0e0", color: "#0d5c30" },
  "Specialized":  { bg: "#fff3d4", color: "#9a6800" },
};

function Projects() {
  const [filter, setFilter]   = useState("All");
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

<<<<<<< HEAD
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = ["All", ...new Set(SERVICES.map((p) => p.category))];
  const filtered   = filter === "All" ? SERVICES : SERVICES.filter((p) => p.category === filter);

  return (
    <section id="projects" style={s.section} ref={ref}>
      {/* Radial glow bg */}
      <div style={s.glowLeft}  aria-hidden="true" />
      <div style={s.glowRight} aria-hidden="true" />
      <div style={s.gridOverlay} aria-hidden="true" />
=======
  const projects = [
    {
      title: "Smart Suspension Bridge Design",
      description:
        "Advanced modeling and simulation for enhanced structural integrity and safety.",
      emoji: "🌉",
      category: "Bridges",
    },
    {
      title: "Highway Expansion & Development",
      description:
        "Planning and execution of multi-lane highway systems with sustainable materials.",
      emoji: "🛣️",
      category: "Roads",
    },
    {
      title: "Green Building Construction",
      description:
        "Implementation of eco-friendly materials and energy-efficient architectural designs.",
      emoji: "🏢",
      category: "Buildings",
    },
    {
      title: "Flood Control & Drainage System",
      description:
        "Designing efficient water management systems to prevent urban flooding.",
      emoji: "🌊",
      category: "Hydraulic",
    },
    {
      title: "Urban Infrastructure Renovation",
      description:
        "Revamping old city infrastructure to meet modern safety and usability standards.",
      emoji: "🚧",
      category: "Urban",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // 🔥 FIXED: no empty state, no delete feeling
  useEffect(() => {
    setVisibleItems(filteredProjects);
  }, [filteredProjects]);

  return (
    <section id="projects" style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Highlighted Civil Engineering Projects</h2>
        <p style={styles.subheading}>
          Showcasing innovative solutions that shape our infrastructure
        </p>
>>>>>>> 0d24f5b (update code on 01/28/2026)

      <div style={s.inner}>
        {/* Header — fade up */}
        <div
          style={{
            ...s.headerWrap,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
        >
          <p style={s.eyebrow}>What We Do</p>
          <h2 style={s.heading}>
            Six Disciplines.<br />
            <span style={s.headingAccent}>One Trusted Partner.</span>
          </h2>
          <div style={s.divider} />
          <p style={s.sub}>
            Every infrastructure challenge is different. We bring the right expertise,
            the right tools, and the right mindset — from concept to completion.
          </p>
        </div>

        {/* Filter pills — fade up delayed */}
        <div
          style={{
            ...s.filterRow,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
          }}
        >
          {categories.map((cat) => (
            <button
<<<<<<< HEAD
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ ...s.pill, ...(filter === cat ? s.pillActive : {}) }}
=======
              key={category}
              style={{
                ...styles.filterButton,
                backgroundColor:
                  activeFilter === category ? "#1976d2" : "#e3f2fd",
                color:
                  activeFilter === category ? "#fff" : "#1565c0",
              }}
              onClick={() => setActiveFilter(category)}
>>>>>>> 0d24f5b (update code on 01/28/2026)
            >
              {cat}
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Cards — staggered */}
        <div style={s.grid}>
          {filtered.map((p, i) => (
            <div
              key={i}
              style={{
                ...s.card,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (hovered === i ? "translateY(-6px)" : "translateY(0)")
                  : "translateY(40px)",
                transition: `opacity 0.65s ease ${0.25 + i * 0.08}s, transform 0.65s ease ${0.25 + i * 0.08}s, box-shadow 0.3s ease`,
                boxShadow: hovered === i
                  ? "0 20px 48px rgba(10,40,22,0.18)"
                  : "0 4px 18px rgba(10,40,22,0.08)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={s.cardTop}>
                <div style={s.emojiWrap}>{p.emoji}</div>
                <span style={{ ...s.tag, ...TAG_COLORS[p.tag] }}>{p.tag}</span>
              </div>

              <h3 style={s.cardTitle}>{p.title}</h3>
              <p style={s.cardDesc}>{p.desc}</p>

              <div style={s.detailStrip}>
                {p.detail.split(" · ").map((d, j) => (
                  <span key={j} style={s.detailChip}>{d}</span>
                ))}
              </div>

              <div style={s.cardFooter}>
                <span style={s.categoryBadge}>{p.category}</span>
                <span style={{
                  ...s.arrow,
                  transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 0.3s ease",
                }}>→</span>
              </div>
=======
      <div style={styles.list}>
        {visibleItems.map((project, index) => (
          <div
            key={index}
            style={{
              ...styles.item,
              transform:
                hoveredItem === index
                  ? "translateY(-6px)"
                  : "translateY(0)",
              boxShadow:
                hoveredItem === index
                  ? "0 12px 25px rgba(21,101,192,0.25)"
                  : "0 3px 12px rgba(21,101,192,0.15)",
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div style={styles.emoji}>{project.emoji}</div>
            <div style={styles.projectContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>
                {project.description}
              </p>
              <span style={styles.projectCategory}>
                {project.category}
              </span>
>>>>>>> 0d24f5b (update code on 01/28/2026)
            </div>
          ))}
        </div>

        {/* Bottom CTA — fade up */}
        <div
          style={{
            ...s.bottomCta,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.75s ease 0.55s, transform 0.75s ease 0.55s",
          }}
        >
          <div style={s.ctaLeft}>
            <h3 style={s.ctaHeading}>Have a project in mind?</h3>
            <p style={s.ctaText}>
              Tell us what you're building — and we'll tell you how to build it right.
            </p>
          </div>
          <div style={s.ctaRight}>
            <a
              href="https://wa.me/919201945430"
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaBtn}
            >
              Get a Free Consultation
            </a>
            <a
              href="https://www.jeetlinkinfra.com"
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaBtnOutline}
            >
              Visit Our Website →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
const s = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "90px 0 80px",
    fontFamily: "'DM Sans', sans-serif",
    background: "linear-gradient(180deg, #f0faf4 0%, #e2f5ea 40%, #f4faf6 100%)",
=======
const styles = {
  container: {
    background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
    padding: "4rem 2rem",
    borderRadius: "16px",
    maxWidth: "1100px",
    margin: "4rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    scrollMarginTop: "80px",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  glowLeft: {
    position: "absolute",
    top: "10%", left: "-120px",
    width: "500px", height: "500px",
    background: "radial-gradient(circle, rgba(45,122,79,0.12) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  glowRight: {
    position: "absolute",
    bottom: "5%", right: "-100px",
    width: "440px", height: "440px",
    background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  gridOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(45,122,79,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45,122,79,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  headerWrap: { textAlign: "center", marginBottom: "44px" },
  eyebrow: {
    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "#2d7a4f", marginBottom: "12px",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700, color: "#0d2b1a",
    lineHeight: 1.18, marginBottom: "16px",
  },
  headingAccent: {
    background: "linear-gradient(90deg, #2d7a4f, #c9a84c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  divider: {
    width: "60px", height: "4px",
    background: "linear-gradient(90deg, #2d7a4f, #c9a84c)",
    borderRadius: "2px", margin: "0 auto 18px",
  },
<<<<<<< HEAD
  sub: {
    fontSize: "1rem", color: "#2d4a38",
    maxWidth: "540px", margin: "0 auto", lineHeight: 1.75,
=======
  filterButton: {
    padding: "0.55rem 1.3rem",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  filterRow: {
    display: "flex", justifyContent: "center",
    flexWrap: "wrap", gap: "10px", marginBottom: "40px",
  },
  pill: {
    padding: "9px 20px", borderRadius: "100px",
    border: "2px solid rgba(45,122,79,0.22)",
    background: "rgba(255,255,255,0.85)",
    color: "#2d4a38", fontWeight: 600, fontSize: "0.85rem",
    cursor: "pointer", transition: "all 0.25s",
    fontFamily: "'DM Sans', sans-serif",
    backdropFilter: "blur(6px)",
  },
  pillActive: {
    background: "linear-gradient(135deg, #2d7a4f, #0d2b1a)",
    border: "2px solid transparent", color: "#fff",
    boxShadow: "0 4px 14px rgba(45,122,79,0.35)",
  },
  grid: {
    display: "grid",
<<<<<<< HEAD
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "22px", marginBottom: "48px",
  },
  card: {
    background: "rgba(255,255,255,0.93)",
    border: "1px solid rgba(45,122,79,0.14)",
    borderRadius: "18px", padding: "28px 26px 22px",
=======
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.6rem",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "1.6rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    transition: "all 0.3s ease",
>>>>>>> 0d24f5b (update code on 01/28/2026)
    cursor: "pointer",
    backdropFilter: "blur(8px)",
  },
<<<<<<< HEAD
  cardTop: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: "16px",
=======
  emoji: {
    fontSize: "2rem",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  emojiWrap: {
    width: "52px", height: "52px",
    background: "linear-gradient(135deg, #f0faf4, #d4f0e0)",
    borderRadius: "14px",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "1.8rem",
  },
  tag: {
    fontSize: "0.7rem", fontWeight: 700,
    letterSpacing: "0.06em", textTransform: "uppercase",
    padding: "4px 10px", borderRadius: "100px",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.15rem", fontWeight: 700,
    color: "#0d2b1a", marginBottom: "10px", lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: "0.88rem", color: "#4a6858",
    lineHeight: 1.75, marginBottom: "16px",
  },
  detailStrip: {
    display: "flex", flexWrap: "wrap", gap: "6px",
    marginBottom: "18px",
  },
  detailChip: {
    fontSize: "0.72rem", fontWeight: 600,
    color: "#1a4d2e", background: "#e6f5ec",
    padding: "3px 10px", borderRadius: "100px",
    border: "1px solid #c8e6d4",
  },
  cardFooter: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", borderTop: "1px solid #e6f5ec", paddingTop: "14px",
  },
  categoryBadge: {
    background: "#f0faf4", color: "#1a4d2e",
    fontSize: "0.78rem", fontWeight: 600,
    padding: "4px 12px", borderRadius: "100px",
    border: "1px solid #c8e6d4",
  },
  arrow: { color: "#2d7a4f", fontSize: "1.15rem", fontWeight: 700 },
  bottomCta: {
    background: "linear-gradient(135deg, #0d2b1a 0%, #1a4d2e 100%)",
    borderRadius: "20px",
    padding: "40px 44px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "24px",
    boxShadow: "0 12px 40px rgba(10,40,22,0.25)",
  },
<<<<<<< HEAD
  ctaLeft: { flex: 1, minWidth: "240px" },
  ctaHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.5rem", fontWeight: 700,
    color: "#fff", marginBottom: "8px",
=======
  projectTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#1565c0",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
  ctaText: {
    fontSize: "0.93rem", color: "#7ecfa0",
    lineHeight: 1.65, fontStyle: "italic",
  },
<<<<<<< HEAD
  ctaRight: {
    display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center",
  },
  ctaBtn: {
    padding: "13px 26px",
    background: "#c9a84c",
    color: "#0d2b1a",
    borderRadius: "10px", fontWeight: 700,
    fontSize: "0.92rem", letterSpacing: "0.02em",
    transition: "opacity 0.25s, transform 0.25s",
    whiteSpace: "nowrap",
  },
  ctaBtnOutline: {
    padding: "12px 22px",
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.25)",
    color: "#fff", borderRadius: "10px",
    fontWeight: 600, fontSize: "0.9rem",
    transition: "border-color 0.25s",
    whiteSpace: "nowrap",
=======
  projectCategory: {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    padding: "0.35rem 0.9rem",
    borderRadius: "12px",
    fontSize: "0.85rem",
    fontWeight: 600,
    width: "fit-content",
>>>>>>> 0d24f5b (update code on 01/28/2026)
  },
};

export default Projects;