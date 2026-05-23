import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const CONTACT_INFO = [
  {
    icon: <FaEnvelope size={20} />,
    label: "Email Us",
    value: "jeetlinkinfrastructure@gmail.com",
    href: "mailto:jeetlinkinfrastructure@gmail.com",
  },
  {
    icon: <FaPhone size={20} />,
    label: "Call Us",
    value: "+91 92019 45430",
    href: "tel:+919201945430",
  },
  {
    icon: <FaGlobe size={20} />,
    label: "Website",
    value: "www.jeetlinkinfra.com",
    href: "https://www.jeetlinkinfra.com",
  },
];

const SOCIALS = [
  {
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    href: "https://wa.me/919201945430",
    color: "#25D366",
    bg: "#e8faf1",
  },
  {
    icon: <FaInstagram size={22} />,
    label: "Instagram",
    href: "https://instagram.com/jeetlinkinfra",
    color: "#E4405F",
    bg: "#fdeef1",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/jeetlinkinfra",
    color: "#0077B5",
    bg: "#e6f3fb",
  },
];

function Contact() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={s.section} ref={ref}>

      {/* Background grid — same as Home */}
      <div style={s.gridBg} aria-hidden="true" />

      {/* Blob glow top-right */}
      <div style={s.blobTopRight} aria-hidden="true" />

      {/* Blob glow bottom-left */}
      <div style={s.blobBottomLeft} aria-hidden="true" />

      <div style={s.inner}>
        {/* Header — drops from top */}
        <div
          style={{
            ...s.headerWrap,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-50px)",
            transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <p style={s.eyebrow}>Get In Touch</p>
          <h2 style={s.heading}>Let's Build Something Together</h2>
          <div style={s.divider} />
          <p style={s.sub}>
            Ready to start your next infrastructure project? Whether it's a highway,
            bridge, or traffic system — reach out and let's connect.
          </p>
        </div>

        {/* Cards */}
        <div style={s.cardsRow}>

          {/* Info card — HARD left slam */}
          <div
            style={{
              ...s.infoCard,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0) rotate(0deg)" : "translateX(-120px) rotate(-3deg)",
              transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s",
            }}
          >
            <h3 style={s.cardTitle}>Contact Information</h3>

            {CONTACT_INFO.map((c, i) => (
              <div
                key={i}
                style={{
                  ...s.infoRow,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-60px)",
                  transition: `opacity 0.45s ease ${0.3 + i * 0.1}s, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.1}s`,
                }}
              >
                <div style={s.infoIconWrap}>{c.icon}</div>
                <div>
                  <p style={s.infoLabel}>{c.label}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" style={s.infoValue}>
                    {c.value}
                  </a>
                </div>
              </div>
            ))}

            <div
              style={{
                ...s.regBox,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-60px)",
                transition: "opacity 0.45s ease 0.62s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.62s",
              }}
            >
              <p style={s.regLine}><strong>CIN:</strong> U7O2OOMP2O25PTCO75714</p>
              <p style={s.regLine}><strong>GST:</strong> 23AAGCJ8O63P1Z1</p>
            </div>

            <div
              style={{
                ...s.socialWrap,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-60px)",
                transition: "opacity 0.45s ease 0.72s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.72s",
              }}
            >
              {SOCIALS.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...s.socialBtn,
                    background: hovered === i ? soc.color : soc.bg,
                    color: hovered === i ? "#fff" : soc.color,
                    transform: hovered === i ? "translateY(-3px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  title={soc.label}
                >
                  {soc.icon}
                  <span>{soc.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA card — HARD right slam */}
          <div
            style={{
              ...s.ctaCard,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0) rotate(0deg)" : "translateX(120px) rotate(3deg)",
              transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.22s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.22s",
            }}
          >
            <div style={s.ctaIconWrap}>🏗️</div>
            <h3 style={s.ctaTitle}>Start Your Project</h3>
            <p style={s.ctaText}>
              From highway DPRs to bridge structural design, from traffic audits to
              geotechnical surveys — Jeetlink Infrastructure is your trusted civil
              engineering partner across India.
            </p>

            <div style={s.featureList}>
              {[
                "Highway Engineering & DPRs",
                "Bridge & Structural Design",
                "Road Safety Audits",
                "Traffic Planning",
                "Survey & Geotechnical Support",
                "Cost & Contracts Consultancy",
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    ...s.featureItem,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(70px)",
                    transition: `opacity 0.4s ease ${0.4 + i * 0.07}s, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.07}s`,
                  }}
                >
                  <span style={s.featureDot}>✓</span>
                  <span style={s.featureText}>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919201945430"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...s.ctaBtn,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(70px)",
                transition: "opacity 0.4s ease 0.85s, transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.85s",
              }}
            >
              <FaWhatsapp size={18} style={{ marginRight: 8 }} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:jeetlinkinfrastructure@gmail.com"
              style={{
                ...s.ctaBtnOutline,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(70px)",
                transition: "opacity 0.4s ease 0.95s, transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.95s",
              }}
            >
              <FaEnvelope size={16} style={{ marginRight: 8 }} />
              Send an Email
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blobFloat {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.08); }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "90px 0 80px",
    fontFamily: "'DM Sans', sans-serif",
    background: "linear-gradient(160deg, #f4faf6 0%, #d8f0e4 50%, #f4faf6 100%)",
  },
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(45,122,79,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45,122,79,0.07) 1px, transparent 1px)
    `,
    backgroundSize: "44px 44px",
    pointerEvents: "none",
  },
  blobTopRight: {
    position: "absolute",
    top: "10%",
    left: "72%",
    transform: "translate(-50%,-50%)",
    width: "480px",
    height: "480px",
    background: "radial-gradient(circle, rgba(45,122,79,0.14) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "blobFloat 7s ease-in-out infinite",
    pointerEvents: "none",
  },
  blobBottomLeft: {
    position: "absolute",
    bottom: "-60px",
    left: "-80px",
    width: "360px",
    height: "360px",
    background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "blobFloat 9s ease-in-out infinite reverse",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  headerWrap: { textAlign: "center", marginBottom: "56px" },
  eyebrow: {
    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "#2d7a4f", marginBottom: "10px",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
    fontWeight: 700, color: "#0d2b1a", marginBottom: "14px",
  },
  divider: {
    width: "60px", height: "4px",
    background: "linear-gradient(90deg, #2d7a4f, #c9a84c)",
    borderRadius: "2px", margin: "0 auto 16px",
  },
  sub: { fontSize: "1rem", color: "#5a8070", maxWidth: "500px", margin: "0 auto" },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  infoCard: {
    background: "rgba(255,255,255,0.88)",
    border: "1px solid #c8e6d4",
    borderRadius: "20px", padding: "36px 32px",
    boxShadow: "0 4px 24px rgba(45,122,79,0.1)",
    backdropFilter: "blur(8px)",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.2rem", fontWeight: 700, color: "#0d2b1a",
    marginBottom: "24px", paddingBottom: "14px",
    borderBottom: "1px solid #e6f5ec",
  },
  infoRow: {
    display: "flex", alignItems: "flex-start",
    gap: "14px", marginBottom: "20px",
  },
  infoIconWrap: {
    width: "40px", height: "40px", borderRadius: "10px",
    background: "#f0faf4", color: "#2d7a4f",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  infoLabel: {
    fontSize: "0.73rem", fontWeight: 600, color: "#5a8070",
    textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px",
  },
  infoValue: { fontSize: "0.93rem", color: "#0d2b1a", fontWeight: 500 },
  regBox: {
    background: "#f4faf6", border: "1px solid #c8e6d4",
    borderRadius: "8px", padding: "12px 16px", marginBottom: "20px",
  },
  regLine: {
    fontSize: "0.78rem", color: "#5a8070",
    marginBottom: "4px", letterSpacing: "0.03em",
  },
  socialWrap: { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" },
  socialBtn: {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "9px 14px", borderRadius: "10px",
    fontWeight: 600, fontSize: "0.85rem",
    transition: "all 0.25s ease", cursor: "pointer",
  },
  ctaCard: {
    background: "linear-gradient(160deg, #0d2b1a 0%, #1a4d2e 100%)",
    borderRadius: "20px", padding: "36px 32px",
    display: "flex", flexDirection: "column", alignItems: "center",
    textAlign: "center", boxShadow: "0 8px 36px rgba(13,43,26,0.3)",
  },
  ctaIconWrap: { fontSize: "3rem", marginBottom: "14px" },
  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.5rem", fontWeight: 700,
    color: "#fff", marginBottom: "12px",
  },
  ctaText: {
    fontSize: "0.9rem", color: "#7ecfa0",
    lineHeight: 1.72, marginBottom: "20px",
  },
  featureList: {
    width: "100%", marginBottom: "24px",
    display: "flex", flexDirection: "column", gap: "8px",
    textAlign: "left",
  },
  featureItem: { display: "flex", alignItems: "center", gap: "10px" },
  featureDot: {
    width: "20px", height: "20px", borderRadius: "50%",
    background: "rgba(201,168,76,0.25)", color: "#c9a84c",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "0.75rem", fontWeight: 700, flexShrink: 0,
  },
  featureText: { fontSize: "0.87rem", color: "#d4f0e0", fontWeight: 500 },
  ctaBtn: {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: "100%", padding: "14px 20px",
    background: "#25D366", color: "#fff",
    borderRadius: "10px", fontWeight: 700, fontSize: "0.95rem",
    marginBottom: "12px",
    boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
  },
  ctaBtnOutline: {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: "100%", padding: "13px 20px",
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.25)",
    color: "#fff", borderRadius: "10px",
    fontWeight: 600, fontSize: "0.92rem",
  },
};

export default Contact;