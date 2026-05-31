import React from "react";
import "../styles/AdvisoryPage.css";

const advisors = [
  {
    name: "Tyler Harmon",
    role: "AI & Technology Advisor – Strategy, Commercialisation & Scale",
    description:
      "Brings over 15 years of leadership in medical AI development and scalable technology systems. Previously held roles at Apple, PwC, Fisher & Paykel, and Johnson & Johnson. Currently CEO of IASO Automated Medical Systems and a multi-patent holder. Advises on AI strategy, product positioning, scalable architecture, investor readiness, commercial structuring, licensing models, and global market entry.",
    image: "/Tyler Harmon.jpeg",
    linkedin: "https://www.linkedin.com/in/tyler-h-938bbb43/"
  },
  {
    name: "Rishant Shankar",
    role: "Strategic Advisor – Market Validation & Growth",
    description:
      "Brings over 12 years of leadership across health systems, operations, and innovation. Former Senior Leadership Team (SLT) member at Te Whatu Ora, with experience in national initiative design and implementation. Currently Chief of Staff and Global Head of Innovation and Partnerships at IASO Automated Medical Systems. Supports strategic planning, investor preparation, market validation, and ecosystem alignment.",
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
          CareSentinelAI is guided by advisors with deep expertise across healthcare systems, AI development, and startup growth. Their leadership ensures the platform is clinically relevant, strategically aligned, and designed for scalable, real-world deployment across healthcare environments.
        </p>
      </section>

    </div>
  );
};

export default AdvisoryPage;