import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>

      <p>
        <FaEnvelope />{" "}
        <a
          href="mailto:Jeetlinkinfrastructure@gmail.com"
          style={styles.link}
        >
          Jeetlinkinfrastructure@gmail.com
        </a>
      </p>

      <p>
        <FaPhone />{" "}
        <a href="tel:+919201945430" style={styles.link}>
          +91 92019 45430
        </a>
      </p>

      <div style={styles.iconContainer}>
        <a
          href="https://wa.me/919201945430"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={30} color="#25D366" />
        </a>

        <a
          href="https://instagram.com/jeetlinkinfrastructure"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={30} color="#E4405F" />
        </a>

        <a
          href="https://linkedin.com/company/jeetlinkinfrastructure"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} color="#0077B5" />
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "40px 20px",
  },
  heading: {
    marginBottom: "20px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px",
  },
  link: {
    color: "#d9dbddff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Contact;
