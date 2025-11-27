import React, { useState } from "react";
import "../styles/SupportCareSentinelAI.css";

const SupportCareSentinelAI = () => {
  const [openPanel, setOpenPanel] = useState(null); // null = no panel open

  // Card Details Content
  const panelContent = {
    contributor: {
      title: "One-Time Contributor",
      icon: "fas fa-hand-holding-heart",
      description: `
        As a one-time contributor, your support directly funds the engineering
        hours, cloud infrastructure, and early-risk detection research required
        to build CareSentinelAI. These contributions help accelerate development,
        support data validation, and reduce healthcare inequity across Aotearoa.
      `,
      points: [
        "Funds engineering development time",
        "Supports AI model training and testing",
        "Accelerates clinical validation work",
        "Helps deliver safer, faster early detection tools"
      ]
    },

    pilot: {
      title: "Partner in Pilot Validation",
      icon: "fas fa-user-md",
      description: `
        Pilot validation partners play a crucial role in shaping CareSentinelAI.
        Your clinic or organisation helps test the platform in real-world
        environments, providing feedback, usability insights, and clinical
        outcomes data to refine the system for nationwide use.
      `,
      points: [
        "Participate in real-world pilot testing",
        "Provide workflow and usability input",
        "Help validate early detection accuracy",
        "Contribute to national HealthTech innovation"
      ]
    },

    community: {
      title: "Industry or Community Supporter",
      icon: "fas fa-users",
      description: `
        Industry groups, PHOs, iwi organisations, and community stakeholders are
        essential in helping CareSentinelAI reach those who need it most. Your
        support enables outreach, awareness, and equitable deployment across
        diverse communities.
      `,
      points: [
        "Support equitable healthcare delivery",
        "Help build community and clinician awareness",
        "Contribute to scaling and outreach",
        "Enable wider impact across Aotearoa"
      ]
    }
  };

  const handleOpen = (panelName) => {
    setOpenPanel(panelName);
  };

  const handleClose = () => {
    setOpenPanel(null);
  };

  return (
    <div className="support-page">
      {/* HERO */}
      <section className="support-hero">
        <div className="particle-layer"></div>

        <div className="hero-content">
          <h1>Support CareSentinelAI</h1>
          <p>
            Help us bring early-risk detection to every clinician and community.
            Your support accelerates development, pilot validation, and real-world impact.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="support-why">
        <div className="why-content">
          <h2>Why Your Support Matters</h2>
          <p>
            CareSentinelAI empowers clinicians with early detection insights —
            predicting risks such as sepsis and deterioration before they become
            life-threatening. Your support accelerates pilot rollout, research refinement,
            and equitable deployment across Aotearoa.
          </p>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="support-cards-section">
        <h2 className="ways-header">Ways You Can Support</h2>

        <div className="support-grid">

          {/* CARD 1 */}
          <div className="support-card">
            <div className="card-top">
              <h3>One-Time Contributor</h3>
              <i className="fas fa-hand-holding-heart"></i>
            </div>

            <div className="card-body">
              <p>
                Your contribution directly supports engineering hours, cloud infrastructure,
                and testing resources needed for early-risk detection research.
              </p>
              <button
                onClick={() => handleOpen("contributor")}
                className="card-btn"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="support-card">
            <div className="card-top">
              <h3>Partner in Pilot Validation</h3>
              <i className="fas fa-user-md"></i>
            </div>

            <div className="card-body">
              <p>
                Become a clinical validation partner and support real-world testing, 
                clinician feedback, and measurable improvements in patient care.
              </p>
              <button
                onClick={() => handleOpen("pilot")}
                className="card-btn"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="support-card">
            <div className="card-top">
              <h3>Industry or Community Supporter</h3>
              <i className="fas fa-users"></i>
            </div>

            <div className="card-body">
              <p>
                Organisations, PHOs, iwi groups, and community networks help extend 
                CareSentinelAI’s reach to underserved communities.
              </p>
              <button
                onClick={() => handleOpen("community")}
                className="card-btn"
              >
                Contact Us <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SLIDE-IN PANEL */}
      {openPanel && (
        <>
          <div className="panel-overlay" onClick={handleClose}></div>

          <div className={`slide-panel ${openPanel ? "open" : ""}`}>
            <button className="close-panel-btn" onClick={handleClose}>
              ×
            </button>

            <div className="slide-panel-content">
              <h2>
                <i className={`${panelContent[openPanel].icon} panel-icon`}></i>
                {panelContent[openPanel].title}
              </h2>

              <p className="panel-description">
                {panelContent[openPanel].description}
              </p>

              <ul className="panel-points">
                {panelContent[openPanel].points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <a href="/contact" className="panel-contact-btn">
                Get In Touch
              </a>
            </div>
          </div>
        </>
      )}

      {/* CONTACT */}
      <section className="support-contact" id="contact-support">
        <div className="contact-box">
          <h2>Get In Touch</h2>
          <p>
            Want to support CareSentinelAI or become a pilot partner?  
            We’d love to hear from you.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> admin@technovashield.com</p>
            <p><strong>Phone:</strong> +64 21 0865 7999</p>
          </div>

          <a href="/contact" className="contact-btn">Go To Contact Page</a>
        </div>
      </section>
    </div>
  );
};

export default SupportCareSentinelAI;
