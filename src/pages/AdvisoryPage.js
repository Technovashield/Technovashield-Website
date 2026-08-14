import React from "react";
import "../styles/AdvisoryPage.css";

const advisors = [
  {
    name: "Tyler Harmon",
    role: "AI & Technology Advisor – Strategy, Commercialisation & Scale",
    description:
      "Tyler brings more than 15 years of leadership experience across medical AI development and scalable technology systems, with previous roles spanning Apple, PwC, Fisher & Paykel, and Johnson & Johnson. As CEO of IASO Automated Medical Systems and a multi-patent holder, he advises TechnovaShield on AI strategy, product positioning, scalable architecture, investor readiness, commercial structuring, licensing models, and pathways to global markets.",
    image: "/Tyler Harmon.jpeg",
    linkedin: "https://www.linkedin.com/in/tyler-h-938bbb43/",
  },
  {
    name: "Rishant Shankar",
    role: "Strategic Advisor – Market Validation & Growth",
    description:
      "Rishant brings more than 12 years of leadership experience across health systems, operations, and innovation. A former Senior Leadership Team member at Te Whatu Ora, he has experience in the design and implementation of national initiatives. As Chief of Staff and Global Head of Innovation and Partnerships at IASO Automated Medical Systems, he supports TechnovaShield with strategic planning, investor preparation, market validation, and ecosystem alignment.",
    image: "/Rishant Shanker.png",
    linkedin: "https://www.linkedin.com/in/rishant-shankar/",
  },
];

const AdvisoryPage = () => {
  return (
    <main className="advisory-page">
      {/* Hero */}
      <section className="advisory-hero">
        <div className="advisory-hero-content">
          <span className="advisory-eyebrow">Experience That Guides Us</span>

          <h1>Strategic Advisors</h1>

          <p>
            TechnovaShield is supported by experienced advisors who bring
            perspectives across healthcare innovation, artificial intelligence,
            commercialisation, market validation, and scalable technology.
          </p>
        </div>
      </section>

      {/* Advisors */}
      <section className="advisory-section">
        <div className="advisory-container">
          {advisors.map((advisor) => (
            <article className="advisory-card" key={advisor.name}>
              <div className="advisory-image-wrapper">
                <img src={advisor.image} alt={advisor.name} />
              </div>

              <div className="advisory-card-content">
                <h2>{advisor.name}</h2>

                <p className="advisory-role">{advisor.role}</p>

                <div className="advisory-divider"></div>

                <p className="advisory-description">
                  {advisor.description}
                </p>

                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisory-profile-link"
                >
                  View LinkedIn Profile
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisory Contribution */}
      <section className="advisory-impact">
        <div className="advisory-impact-content">
          <span className="advisory-eyebrow">Strategic Perspective</span>

          <h2>Why Advisory Guidance Matters</h2>

          <p>
            CareSentinelAI is being developed at the intersection of healthcare,
            artificial intelligence, data, and real-world implementation.
            Strategic advisory input helps TechnovaShield challenge assumptions,
            strengthen commercial and technical thinking, prepare for growth,
            and remain focused on responsible pathways from development through
            validation and market readiness.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AdvisoryPage;