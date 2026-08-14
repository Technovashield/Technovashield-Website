import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreSolutions = () => {
    navigate("/products");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="home-hero-section">
      <video autoPlay loop muted playsInline className="home-hero-bg-video">
        <source src="/HeroSectionBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-hero-overlay">
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">
            Responsible Healthcare AI Engineering
          </p>

          <h1 className="home-hero-title">
            Healthcare AI Engineering for Better Decisions and Better Outcomes
          </h1>

          <p className="home-hero-tagline">
            TechnovaShield develops responsible healthcare AI, clinical intelligence,
            synthetic healthcare data solutions, and intelligent automation designed
            to support safer, smarter, and more efficient healthcare.
          </p>

          <div className="home-hero-actions">
            <button
              className="home-hero-btn home-hero-btn-primary"
              onClick={handleExploreSolutions}
            >
              Explore Solutions
            </button>

            <button
              className="home-hero-btn home-hero-btn-secondary"
              onClick={handleContact}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
