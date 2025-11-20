import React from "react";
import "../styles/HealthcareImpactSection.css";

const HealthcareImpactSection = () => {
  return (
    <section className="healthcare-impact-section">
      <div className="healthcare-impact-content">
        <h2 className="healthcare-impact-title">
          Empowering New Zealand’s Healthcare with AI-Driven Insight
        </h2>
        <p className="healthcare-impact-text">
          Our solutions support clinicians in detecting early risks, securing
          systems, and automating vital tasks for better patient outcomes.
          CareSentinelAI is at the forefront of our mission—bridging technology
          and compassion through predictive, human-centred innovation.
        </p>
        <button
          className="healthcare-impact-btn"
          onClick={() => (window.location.href = "/about")}
        >
          Learn More About CareSentinelAI
        </button>
      </div>
    </section>
  );
};

export default HealthcareImpactSection;
