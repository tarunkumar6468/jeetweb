import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "clamp(12px, 2.5vw, 20px) clamp(10px, 3vw, 30px)", // Responsive padding for all devices
        background: "linear-gradient(to right, rgb(108, 159, 173), rgba(37, 38, 40, 0.17))",
        color: "#fff",
        marginTop: "clamp(30px, 5vw, 60px)", // Responsive margin
        cursor: "pointer",
        transition: "all 0.3s ease",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        left: 0,
        right: 0,
        minHeight: "clamp(60px, 10vw, 80px)", // Responsive minimum height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <p style={{ 
        margin: 0,
        fontSize: "clamp(12px, 2vw, 18px)", // Better responsive font scaling
        lineHeight: "1.5",
        fontWeight: "400",
        wordWrap: "break-word",
        wordBreak: "break-word",
        maxWidth: "1200px", // Prevents text from stretching too wide on large screens
        width: "100%",
        padding: "0",
        letterSpacing: "0.5px",
      }}>
        &copy; {new Date().getFullYear()} Jeetlinkinfrastructure Private Limited. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;