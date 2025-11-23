import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("featured-projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-bg-video">
        <source src="/HeroSectionBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to TechnovaShield</h1>
          <p className="hero-tagline">
            Innovating AI for Healthcare, Cybersecurity, and Automation.
          </p>
          <button className="hero-btn" onClick={scrollToProjects}>
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
