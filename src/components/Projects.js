import React, { useState, useEffect } from "react";

function Projects() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState([]);

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

        <div style={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                ...styles.filterButton,
                backgroundColor:
                  activeFilter === category ? "#1976d2" : "#e3f2fd",
                color:
                  activeFilter === category ? "#fff" : "#1565c0",
              }}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
    padding: "4rem 2rem",
    borderRadius: "16px",
    maxWidth: "1100px",
    margin: "4rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    scrollMarginTop: "80px",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "2.3rem",
    fontWeight: 700,
    color: "#1565c0",
    borderBottom: "4px solid #1976d2",
    display: "inline-block",
    paddingBottom: "0.5rem",
    marginBottom: "0.8rem",
  },
  subheading: {
    color: "#0d47a1",
    fontSize: "1.05rem",
    fontStyle: "italic",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "0.8rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
  filterButton: {
    padding: "0.55rem 1.3rem",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
  },
  list: {
    display: "grid",
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
    cursor: "pointer",
  },
  emoji: {
    fontSize: "2rem",
  },
  projectContent: {
    display: "flex",
    flexDirection: "column",
  },
  projectTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#1565c0",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#2c3e50",
    marginBottom: "0.6rem",
  },
  projectCategory: {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    padding: "0.35rem 0.9rem",
    borderRadius: "12px",
    fontSize: "0.85rem",
    fontWeight: 600,
    width: "fit-content",
  },
};

export default Projects;
