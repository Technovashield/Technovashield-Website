import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FocusAreas.css";

const FocusAreas = () => {
  const navigate = useNavigate();

  const solutions = [
  {
    id: 1,
    icon: "fas fa-heartbeat",
    title: "CareSentinelAI",
    subtitle: "Clinical Intelligence Platform",
    description:
      "AI-enabled clinical intelligence designed to support patient prioritisation, earlier identification of deterioration, and proactive clinical review.",
    badge: "Flagship",
    badgeType: "flagship",
  },
  {
    id: 2,
    icon: "fas fa-notes-medical",
    title: "CareSentinelAI Enterprise Dataset",
    subtitle: "Healthcare Synthetic Data Programme",
    description:
      "A structured, privacy-preserving healthcare dataset programme supporting responsible clinical AI development, testing, validation, analytics, and controlled innovation.",
    badge: "Featured",
    badgeType: "new",
  },
  {
    id: 3,
    icon: "fas fa-database",
    title: "Synthetic Data Generation Services",
    subtitle: "Privacy-Preserving Data Solutions",
    description:
      "Purpose-designed synthetic datasets for AI development, software testing, analytics, research, and innovation across healthcare and other data-intensive industries.",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 4,
    icon: "fas fa-robot",
    title: "Intelligent Automation",
    subtitle: "Workflow Automation",
    description:
      "Intelligent automation solutions that streamline repetitive processes, improve operational efficiency, and support secure digital workflows.",
  },
  {
    id: 5,
    icon: "fas fa-shield-alt",
    title: "Cybersecurity",
    subtitle: "Secure Digital Infrastructure",
    description:
      "Practical cybersecurity capabilities focused on protecting digital systems, sensitive information, and technology environments.",
  },
];

  const handleLearnMore = () => {
    navigate("/products");
  };

  return (
    <section className="focus-section" id="solutions">
      <div className="focus-content">
        <div className="focus-header">
          <p className="focus-eyebrow">What We Deliver</p>

          <h2 className="focus-title">Our Solutions</h2>

          <p className="focus-subtext">
            Responsible healthcare technology combining clinical intelligence,
            synthetic healthcare data, intelligent automation, and secure
            engineering.
          </p>
        </div>

        <div className="focus-grid">
          {solutions.map((item) => (
            <article
              key={item.id}
              className={`focus-card ${
                item.badgeType === "flagship" ? "focus-card-featured" : ""
              }`}
            >
              {item.badge && (
                <span
                  className={`focus-badge focus-badge-${item.badgeType}`}
                >
                  {item.badge}
                </span>
              )}

              <div className="focus-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </div>

              <div className="focus-card-content">
                <h3 className="focus-card-title">{item.title}</h3>

                <p className="focus-card-subtitle">{item.subtitle}</p>

                <p className="focus-card-text">{item.description}</p>
              </div>

              <button
                type="button"
                className="focus-learn-more"
                onClick={handleLearnMore}
                aria-label={`Learn more about ${item.title}`}
              >
                Learn More
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
