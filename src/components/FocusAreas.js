import React from "react";
import '../styles/FocusAreas.css';

const FocusAreas = () => {
  const focusData = [
    {
      id: 1,
      icon: "fas fa-heartbeat",
      title: "Healthcare AI",
      description: "Predictive patient monitoring and clinical automation.",
    },
    {
      id: 2,
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description: "Real-time AI-driven defense for modern enterprises.",
    },
    {
      id: 3,
      icon: "fas fa-robot",
      title: "Intelligent Automation",
      description: "Smart UiPath bots that simplify complex business operations.",
    },
  ];

  return (
    <section className="focus-section">
      <div className="focus-content">
        <div className="focus-header">
          <h2>What We Do</h2>
          <p>Innovative solutions across healthcare, cybersecurity, and automation</p>
        </div>

        <div className="focus-grid">
          {focusData.map((item) => (
            <div key={item.id} className="focus-card">
              <div className="focus-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
