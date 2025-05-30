import React, { useState } from "react";

function Projects() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Smart Suspension Bridge Design",
      description: "Advanced modeling and simulation for enhanced structural integrity and safety.",
      emoji: "🌉",
      category: "Bridges"
    },
    {
      title: "Highway Expansion & Development",
      description: "Planning and execution of multi-lane highway systems with sustainable materials.",
      emoji: "🛣️",
      category: "Roads"
    },
    {
      title: "Green Building Construction",
      description: "Implementation of eco-friendly materials and energy-efficient architectural designs.",
      emoji: "🏢",
      category: "Buildings"
    },
    {
      title: "Flood Control & Drainage System",
      description: "Designing efficient water management systems to prevent urban flooding.",
      emoji: "🌊",
      category: "Hydraulic"
    },
    {
      title: "Urban Infrastructure Renovation",
      description: "Revamping old city infrastructure to meet modern safety and usability standards.",
      emoji: "🚧",
      category: "Urban"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Highlighted Civil Engineering Projects</h2>
        <p style={styles.subheading}>Showcasing innovative solutions that shape our infrastructure</p>
        
        <div style={styles.filterContainer}>
          {categories.map(category => (
            <button
              key={category}
              style={{
                ...styles.filterButton,
                backgroundColor: activeFilter === category ? "#1976d2" : "#e3f2fd",
                color: activeFilter === category ? "white" : "#1565c0"
              }}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <ul style={styles.list}>
        {filteredProjects.map((project, index) => (
          <li 
            key={index}
            style={{
              ...styles.item,
              transform: hoveredItem === index ? "translateY(-5px)" : "none",
              boxShadow: hoveredItem === index 
                ? "0 8px 20px rgba(21, 101, 192, 0.25)" 
                : "0 3px 12px rgba(21, 101, 192, 0.15)"
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div style={styles.emoji}>{project.emoji}</div>
            <div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <span style={styles.projectCategory}>{project.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "#e3f2fd",
    padding: "3rem 2rem",
    borderRadius: "16px",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "4rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    transition: "all 0.3s ease",
  },
  header: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  heading: {
    color: "#1565c0",
    borderBottom: "4px solid #1976d2",
    paddingBottom: "0.75rem",
    marginBottom: "1rem",
    fontSize: "2.3rem",
    fontWeight: "700",
    display: "inline-block",
  },
  subheading: {
    color: "#0d47a1",
    fontSize: "1.1rem",
    marginTop: "0.5rem",
    fontStyle: "italic",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "0.8rem",
    marginTop: "2rem",
  },
  filterButton: {
    padding: "0.5rem 1.2rem",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    display: "grid",
    gap: "1.5rem",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: "1.5rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 3px 12px rgba(21, 101, 192, 0.15)",
    color: "#0d47a1",
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  emoji: {
    fontSize: "2rem",
    marginTop: "0.3rem",
  },
  projectTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    margin: "0 0 0.5rem 0",
    color: "#1565c0",
  },
  projectDescription: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    margin: "0 0 0.8rem 0",
    color: "#2c3e50",
  },
  projectCategory: {
    display: "inline-block",
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    padding: "0.3rem 0.8rem",
    borderRadius: "12px",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
};

export default Projects;