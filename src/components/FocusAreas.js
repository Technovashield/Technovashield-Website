
import React from "react";
import "../styles/FocusAreas.css";

const FocusAreas = () => {
  const focusData = [
    {
      id: 1,
      icon: "fas fa-heartbeat",
      title: "Healthcare AI",
      description:
        "Empowering clinicians with predictive analytics and early detection tools through CareSentinelAI.",
    },
    {
      id: 2,
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description:
        "Protecting networks and enterprises with AI-driven DDoS detection and real-time defense through CyberShield.",
    },
    {
      id: 3,
      icon: "fas fa-robot",
      title: "Intelligent Automation",
      description:
        "Building smart UiPath bots that streamline processes and enhance efficiency for modern enterprises.",
    },
  ];

  return (
    <section className="focus-section" id="focus">
      <div className="focus-content">
        <div className="focus-header">
          <h2 className="focus-title">What We Do</h2>
          <p className="focus-subtext">
            Innovative solutions across healthcare, cybersecurity, and
            automation — empowering organizations with AI-driven intelligence.
          </p>
        </div>

        <div className="focus-grid">
          {focusData.map((item) => (
            <div key={item.id} className="focus-card">
              <div className="focus-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="focus-card-title">{item.title}</h3>
              <p className="focus-card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
