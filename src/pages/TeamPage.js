import React, { useState } from "react";
import "../styles/TeamPage.css";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Roopa Patel",
      role: "Founder, Product Owner & Project Lead",
      description:
        "Roopa leads TechnovaShield’s innovation roadmap across CareSentinelAI and CyberShield. With expertise in healthcare automation, AI-enabled workflows, and real-world clinical integration, she drives product vision, delivery, partnerships, and the responsible development of practical healthcare technology.",
      image: "/Roopa Patel.png",
    },
    {
      id: 2,
      name: "Sunil Patel",
      role: "Director",
      description:
        "As Director of TechnovaShield Limited, Sunil provides oversight, steady leadership, and thoughtful guidance, supporting the company’s growth while helping ensure our work remains grounded in integrity, clarity, and meaningful human impact.",
      image: "/Sunil Patel.jpg",
    },
    {
      id: 3,
      name: "Indu",
      role: "Project & Strategy Lead",
      description:
        "Indu supports CareSentinelAI’s development through project coordination, strategic planning, governance, stakeholder engagement, and investor readiness. As a PhD researcher at the University of Auckland’s Liggins Institute, she brings research rigour, academic insight, and valuable connections that strengthen CareSentinelAI’s pathway from prototype through validation and pilot readiness.",
      image: "/Indu_Pic.jpg",
    },
    {
      id: 4,
      name: "Jahminique Chivers",
      role: "Strategic Advisor (Māori Data & Engagement)",
      description:
        "Jahminique provides guidance on Māori data practices, cultural engagement, and ethical AI adoption. Her perspective strengthens TechnovaShield’s commitment to responsible, equity-focused design and meaningful engagement around CareSentinelAI.",
      image: "/Jahminique1.jpg",
    },
    {
      id: 5,
      name: "Helena Bahrami",
      role: "Machine Learning Engineer (CareSentinelAI)",
      description:
        "Helena contributes to the development and refinement of CareSentinelAI’s predictive modelling, dataset engineering, and clinical risk-detection architecture, supporting the platform’s evolving clinical intelligence capabilities.",
      image: "/Helena Brahami.png",
    },
    {
      id: 6,
      name: "Paul Johnson",
      role: "Frontend Developer & Web Architect",
      description:
        "Paul leads development of the TechnovaShield website and digital brand experience, with a focus on accessibility, responsive design, intuitive user experience, and clean technical architecture.",
      image: "/Paul Johnson.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMember = teamMembers[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const progressPercentage =
    ((currentIndex + 1) / teamMembers.length) * 100;

  return (
    <main className="team-page">
      {/* Hero */}
      <section className="team-hero">
        <div className="team-hero-content">
          <span className="team-eyebrow">People Behind the Innovation</span>

          <h1>Our Team</h1>

          <p className="team-intro">
            TechnovaShield brings together leadership, technology, research, and
            specialist expertise around a shared goal: building responsible,
            practical technology that improves decision-making and creates
            meaningful real-world impact.
          </p>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="team-carousel-section">
        <div className="team-carousel-container">
          <article className="team-profile">
            {/* Image */}
            <div className="team-profile-image-column">
              <div className="team-profile-image-frame">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="team-profile-image"
                />
              </div>
            </div>

            {/* Content */}
            <div className="team-profile-content">
              <span className="team-profile-label">
                TechnovaShield Team
              </span>

              <h2 className="team-profile-name">
                {currentMember.name}
              </h2>

              <h3 className="team-profile-role">
                {currentMember.role}
              </h3>

              <div className="team-profile-divider" />

              <p className="team-profile-description">
                {currentMember.description}
              </p>

              {/* Navigation */}
              <div className="team-navigation-area">
                <div className="team-carousel-controls">
                  <button
                    type="button"
                    className="team-arrow-button team-arrow-left"
                    onClick={goToPrevious}
                    aria-label="View previous team member"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <div className="team-carousel-progress-count">
                    <span className="team-current-number">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="team-progress-divider">/</span>

                    <span className="team-total-number">
                      {String(teamMembers.length).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="team-arrow-button team-arrow-right"
                    onClick={goToNext}
                    aria-label="View next team member"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                {/* Large Progress Line */}
                <div
                  className="team-progress-track"
                  aria-label={`Team member ${currentIndex + 1} of ${
                    teamMembers.length
                  }`}
                >
                  <div
                    className="team-progress-fill"
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;