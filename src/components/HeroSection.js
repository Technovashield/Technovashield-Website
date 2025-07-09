import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-bg-video">
        <source src="/HeroSectionBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Technovashield</h1>
      </div>
    </section>
  );
};

export default HeroSection;