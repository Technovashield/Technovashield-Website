import React from "react";
import "../styles/AdvisoryPage.css";

const advisors = [
  {
    name: "Tyler Harmon",
    role: "AI & Technology Advisor – Strategy, Commercialisation & Scale",
    description:
      "Advises on AI strategy, product positioning, and scalable system architecture. Supports investor readiness, commercial structuring, licensing models, and global market entry.",
    image: "/Tyler Harmon.jpeg",
    linkedin: "https://www.linkedin.com/in/tyler-h-938bbb43/"
  },
  {
    name: "Rishant Shankar",
    role: "Strategic Advisor – Market Validation & Growth",
    description:
      "Supports strategic planning, investor preparation, and market validation. Contributes to pitch refinement and connects the project with academic and innovation ecosystems.",
    image: "/Rishant Shanker.png",
    linkedin: "https://www.linkedin.com/in/rishant-shankar/"
  }
];

const AdvisoryPage = () => {
  return (
    <div className="advisory-page">

      {/* Hero Section */}
      <section className="advisory-hero">
        <h1>Advisory Board</h1>
        <p>
          Guided by experienced professionals across AI, healthcare innovation, and strategic growth.
        </p>
      </section>

      {/* Advisory Cards */}
      <section className="advisory-container">
        {advisors.map((advisor, index) => (
          <div className="advisory-card" key={index}>
            <img src={advisor.image} alt={advisor.name} />
            <h3>{advisor.name}</h3>
            <p className="role">{advisor.role}</p>
            <p className="description">{advisor.description}</p>
            <a href={advisor.linkedin} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </section>

      {/* Why Advisors Matter */}
      <section className="advisory-impact">
        <h2>Why Our Advisors Matter</h2>
        <p>
          CareSentinelAI is guided by advisors with expertise across healthcare, AI systems, and startup growth. Their involvement ensures that the platform is clinically relevant, ethically grounded, and designed for scalable real-world deployment.
        </p>
      </section>

    </div>
  );
};

export default AdvisoryPage;