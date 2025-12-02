import React from "react";
import "../styles/TeamPage.css";
// import Footer from "../components/Footer";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sunil Patel",
      role: "Director",
      description:
        "Director of TechnovaShield Limited, responsible for governance and high-level oversight.",
      image: "/Sunil Patel.jpg",
    },
    {
      id: 2,
      name: "Roopa Patel",
      role: "Founder, Product Owner & Project Lead",
      description:
        "Roopa leads TechnovaShield’s innovation roadmap across CareSentinelAI and CyberShield. With deep expertise in healthcare automation, AI-led workflows, and real-world clinical integration, she drives product vision, execution, and partnerships.",
      image: "/Roopa Patel.png",
    },
    {
      id: 3,
      name: "Jahminique Chivers",
      role: "Strategic Advisor (Māori Data & Engagement)",
      description:
        "Jahminique provides guidance on Māori data practices, cultural engagement, and ethical AI adoption. Her leadership strengthens TechnovaShield’s commitment to equity-focused design and early clinical engagement for CareSentinelAI.",
      image: "/Jahminique1.jpg",
    },
    {
      id: 4,
      name: "Helena Bahrami",
      role: "Machine Learning Engineer (CareSentinelAI)",
      description:
        "Helena contributes to the development and refinement of CareSentinelAI’s predictive modelling, dataset engineering, and clinical risk-detection architecture.",
      image: "/Helena Brahami.png",
    },
    {
      id: 5,
      name: "Paul Johnson",
      role: "Frontend Developer & Web Architect",
      description:
        "Paul leads development of the TechnovaShield website and visual brand experience, focusing on accessibility, responsive design, and clean technical architecture.",
      image: "/Paul Johnson.png",
    },
  ];

  const supporters = [
    { id: 1, name: "AI Forum NZ", image: "/AIForumLogo.png" },
    { id: 2, name: "NZTech", image: "/NZTech_300dpi.png" },
    { id: 3, name: "TechWomen NZ", image: "/techwomen.png" },
    { id: 4, name: "EdTechNZ", image: "/EdTechLogo.png" },
  ];

  return (
    <div className="team-page">
      {/* Header */}
      <section className="page-header">
        <h1>Our Team</h1>
        <p className="team-intro">
          At TechnovaShield Limited, our strength lies in our people —
          innovators, developers, clinicians, researchers, and collaborators who
          share one vision: to make technology more human, more intelligent, and
          more purposeful.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} className="team-photo" />
              <h2 className="team-name">{member.name}</h2>
              <h3 className="team-role">{member.role}</h3>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborator */}
      <section className="collaborator-section">
        <div className="collab-card">
          <img
            src="/Dominion Road Surgery.avif"
            alt="Dominion Road Surgery"
            className="collab-logo"
          />

          <h2 className="collab-title">Dominion Road Surgery</h2>
          <h3 className="collab-subtitle">Clinical Practice Partner</h3>

          <p className="collab-description">
            Dominion Road Surgery supports real-world validation of CareSentinelAI,
            particularly in sepsis early-detection research and clinical workflow
            mapping. Collaborating clinicians include Dr. David Karthak and RN
            Jennifer Karthak.
          </p>

          <a
            href="https://www.dominionroadsurgery.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="collab-link"
          >
            Visit Website
          </a>
        </div>
      </section>

      {/* Supporters */}
      <section className="supporters-section">
        <h2 className="section-heading">Supporting Networks</h2>

        <div className="supporters-grid">
          {supporters.map((s) => (
            <div className="supporter-item" key={s.id}>
              <img src={s.image} alt={s.name} className="supporter-logo" />
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default TeamPage;
