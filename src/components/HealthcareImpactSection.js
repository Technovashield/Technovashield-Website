import React from "react";
import { Link } from "react-router-dom";
import "../styles/HealthcareImpactSection.css";

const impactItems = [
  {
    title: "Earlier Clinical Awareness",
    text: "Support earlier identification of patients who may require review or follow-up.",
    icon: "fas fa-heartbeat",
  },
  {
    title: "Clinician Collaboration",
    text: "Technology shaped around real workflows, clinical priorities, and practical care delivery.",
    icon: "fas fa-user-md",
  },
  {
    title: "Privacy by Design",
    text: "Responsible engineering with privacy, security, and data protection considered from the outset.",
    icon: "fas fa-lock",
  },
  {
    title: "Scalable Healthcare Innovation",
    text: "Solutions designed to progress from validation and pilots toward broader operational use.",
    icon: "fas fa-chart-line",
  },
];

const HealthcareImpactSection = () => {
  return (
    <section
      className="healthcare-impact-section"
      id="healthcare-impact"
      aria-labelledby="healthcare-impact-title"
    >
      <div className="healthcare-impact-glow healthcare-impact-glow-one"></div>
      <div className="healthcare-impact-glow healthcare-impact-glow-two"></div>

      <div className="healthcare-impact-content">
        <p className="healthcare-impact-eyebrow">
          Healthcare Impact
        </p>

        <h2
          className="healthcare-impact-title"
          id="healthcare-impact-title"
        >
          Empowering New Zealand Healthcare with Responsible AI Innovation
        </h2>

        <p className="healthcare-impact-text">
          TechnovaShield is building healthcare technology designed to support
          earlier clinical awareness, better-informed decisions, responsible
          use of health data, and more efficient care delivery.
        </p>

        <div className="healthcare-impact-grid">
          {impactItems.map((item) => (
            <article
              className="healthcare-impact-item"
              key={item.title}
            >
              <div
                className="healthcare-impact-icon"
                aria-hidden="true"
              >
                <i className={item.icon}></i>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="healthcare-impact-cta">
          <p className="healthcare-impact-cta-label">
            Ready to explore our flagship clinical intelligence platform?
          </p>

          <Link
            to="/products"
            className="healthcare-impact-btn"
          >
            Explore CareSentinelAI
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthcareImpactSection;