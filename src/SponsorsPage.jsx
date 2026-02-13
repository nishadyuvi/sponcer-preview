import React, { useState } from "react";
import { motion } from "framer-motion";

const sponsorsData = {
  platinum: [
    { name: "Platinum Sponsor", logo: "/logos/logo1.png" }
  ],
  gold: [
    { name: "Gold Sponsor", logo: "/logos/logo2.png" },
    { name: "Gold Sponsor", logo: "/logos/logo3.png" }
  ],
  silver: Array(9).fill({
    name: "Silver Sponsor",
    logo: "/logos/logo4.png"
  })
};

const SponsorCard = ({ sponsor }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onClick={() => setActive(!active)}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      animate={{
        scale: active ? 1.15 : 1,
        boxShadow: active
          ? "0 0 45px rgba(212,175,55,0.95)"
          : "0 15px 35px rgba(0,0,0,0.7)"
      }}
      style={cardStyle}
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        style={{ width: "85%", objectFit: "contain" }}
      />
      <div style={namePlate}>{sponsor.name}</div>
    </motion.div>
  );
};

const Section = ({ title, sponsors, columns }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{ marginBottom: "50px" }}
  >
    <div style={sectionHeader}>
      <div style={divider}></div>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={divider}></div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "50px",
        justifyItems: "center",
        width:"100%"
      }}
    >
      {sponsors.map((s, i) => (
        <SponsorCard key={i} sponsor={s} />
      ))}
    </div>
  </motion.div>
);

const SponsorsPage = () => {
  return (
    <div style={pageStyle}>
      <div style={goldParticles}></div>

      <div style={frameStyle}>
        <h1 style={mainTitle}>SPONSORS</h1>

        <Section
          title="PLATINUM"
          sponsors={sponsorsData.platinum}
          columns={1}
        />

        <Section
          title="GOLD"
          sponsors={sponsorsData.gold}
          columns={2}
        />

        <Section
          title="SILVER"
          sponsors={sponsorsData.silver}
          columns={3}
        />
      </div>
    </div>
  );
};

export default SponsorsPage;

/* ================= STYLES ================= */

const pageStyle = {
  minHeight: "100vh",
  padding: "40px 20px",
  background:
    "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.15), transparent 60%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.1), transparent 60%), #000",
  fontFamily: "'Cinzel', serif",
  position: "relative",
  overflow: "hidden"
};

const frameStyle = {
  maxWidth: "1150px",
  margin: "auto",
  padding: "40px 70px",
  border: "4px solid #d4af37",
  borderRadius: "22px",
  backgroundColor: "rgba(0,0,0,0.94)",
  boxShadow: "0 0 70px rgba(212,175,55,0.35)",
  position: "relative"
};

const mainTitle = {
  textAlign: "center",
  fontSize: "70px",
  color: "#f5e6c8",
  marginBottom: "40px",
  letterSpacing: "5px"
};

const sectionHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px",
  marginBottom: "50px"
};

const divider = {
  flex: 1,
  height: "2px",
  background:
    "linear-gradient(to right, transparent, #d4af37, transparent)"
};

const sectionTitle = {
  fontSize: "36px",
  color: "#d4af37",
  letterSpacing: "4px"
};

const cardStyle = {
  width: "160px",
  height: "176px",
  background: "#f5f0e6",
  border: "3px solid #d4af37",
  borderRadius: "14px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

const namePlate = {
  marginTop: "18px",
  padding: "8px 18px",
  backgroundColor: "#000",
  color: "#d4af37",
  fontSize: "14px",
  borderRadius: "40px",
  border: "1px solid #d4af37"
};

const goldParticles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background:
    "radial-gradient(circle, rgba(212,175,55,0.2) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.05,
  pointerEvents: "none"
};
