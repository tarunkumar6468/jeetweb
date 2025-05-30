import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        background: "linear-gradient(to right,rgb(108, 159, 173),rgba(37, 38, 40, 0.17))",
        color: "#fff",
        marginTop: "40px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Parmjeet Singh. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
