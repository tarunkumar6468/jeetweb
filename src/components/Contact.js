import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p><FaEnvelope /> Email: Parmjitsingh3593@gmail.com</p>
      <p><FaPhone /> Phone: 9201945430</p>

      <div style={styles.iconContainer}>
        <a href="https://wa.me/919201945430" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} color="#25D366" />
        </a>

        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#E4405F" />
        </a>

        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
     // optional: light background
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
};

export default Contact;
