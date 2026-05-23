import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const SERVICES = [
  "Highway Engineering",
  "Bridge Engineering",
  "Road Safety Audits",
  "Traffic Planning",
  "Survey Support",
  "Cost Consultancy",
];

const NAV = [
  { label: "Home",     id: "home" },
  { label: "About",    id: "about" },
  { label: "Services", id: "projects" },
  { label: "Contact",  id: "contact" },
];

const SOCIALS = [
  { icon: <FaWhatsapp />, href: "https://wa.me/919201945430",               label: "WhatsApp" },
  { icon: <FaInstagram />, href: "https://instagram.com/jeetlinkinfra",      label: "Instagram" },
  { icon: <FaLinkedin />,  href: "https://linkedin.com/company/jeetlinkinfra", label: "LinkedIn" },
  { icon: <FaEnvelope />,  href: "mailto:jeetlinkinfrastructure@gmail.com",  label: "Email" },
  { icon: <FaGlobe />,     href: "https://www.jeetlinkinfra.com",            label: "Website" },
];

function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={s.footer}>
      <div style={s.top}>
        {/* Brand */}
        <div style={s.brand}>
          <span style={s.brandName}>JeetLink</span>
          <span style={s.brandSub}>Infrastructure Private Limited</span>
          <p style={s.tagline}>
            Precision in Design, Excellence in Delivery
          </p>
          <div style={s.socialRow}>
            {SOCIALS.map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.label}
                style={s.socialIcon}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={s.col}>
          <p style={s.colHead}>Navigation</p>
          {NAV.map((l) => (
            <span key={l.label} onClick={() => scrollTo(l.id)} style={s.link}>
              {l.label}
            </span>
          ))}
        </div>

        {/* Services */}
        <div style={s.col}>
          <p style={s.colHead}>Services</p>
          {SERVICES.map((sv) => (
            <span key={sv} style={s.link}>{sv}</span>
          ))}
        </div>

        {/* Contact */}
        <div style={s.col}>
          <p style={s.colHead}>Contact</p>
          <a href="tel:+919201945430" style={s.link}>+91 92019 45430</a>
          <a href="mailto:jeetlinkinfrastructure@gmail.com" style={s.link}>
            jeetlinkinfrastructure@gmail.com
          </a>
          <a href="https://www.jeetlinkinfra.com" target="_blank" rel="noopener noreferrer" style={s.link}>
            www.jeetlinkinfra.com
          </a>
          <div style={s.regBlock}>
            <p style={s.regLine}>CIN: U7O2OOMP2O25PTCO75714</p>
            <p style={s.regLine}>GST: 23AAGCJ8O63P1Z1</p>
          </div>
        </div>
      </div>

      <div style={s.hr} />

      <div style={s.bottom}>
        <p style={s.copy}>
          © {new Date().getFullYear()} Jeetlink Infrastructure Private Limited. All rights reserved.
        </p>
        <p style={s.copy}>Built with precision ⚙️</p>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    background: "linear-gradient(160deg, #0a1628 0%, #0d2045 100%)",
    color: "#93b8f5",
    padding: "60px 40px 28px",
    fontFamily: "'DM Sans', sans-serif",
    marginTop: "40px",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1.4fr 1.6fr",
    gap: "40px",
    marginBottom: "40px",
  },
  brand: { display: "flex", flexDirection: "column", gap: "6px" },
  brandName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.6rem", fontWeight: 700, color: "#fff", lineHeight: 1,
  },
  brandSub: {
    fontSize: "0.73rem", color: "#4a86e8",
    fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
  },
  tagline: {
    fontSize: "0.88rem", color: "#7a92b0",
    lineHeight: 1.6, marginTop: "8px", maxWidth: "220px",
    fontStyle: "italic",
  },
  socialRow: { display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "16px" },
  socialIcon: {
    width: "34px", height: "34px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#93b8f5", fontSize: "0.95rem",
    transition: "background 0.25s, color 0.25s",
  },
  col: { display: "flex", flexDirection: "column", gap: "10px" },
  colHead: {
    fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    color: "#4a86e8", marginBottom: "4px",
  },
  link: {
    fontSize: "0.88rem", color: "#7a92b0",
    cursor: "pointer", fontWeight: 400,
    wordBreak: "break-word", transition: "color 0.2s",
  },
  regBlock: { marginTop: "8px" },
  regLine: {
    fontSize: "0.72rem", color: "#3a5070",
    letterSpacing: "0.03em", marginBottom: "3px",
  },
  hr: { height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "24px" },
  bottom: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", flexWrap: "wrap", gap: "8px",
  },
  copy: { fontSize: "0.8rem", color: "#3a5070" },
};

export default Footer;