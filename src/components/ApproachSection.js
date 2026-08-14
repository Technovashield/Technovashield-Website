import React from "react";
import "../styles/ApproachSection.css";

const approachSteps = [
  {
    id: "01",
    title: "Understand Clinical Challenges",
    description:
      "We begin with the real healthcare or operational problem, understanding the workflow, users, risks, and outcomes that matter.",
    icon: "fas fa-stethoscope",
  },
  {
    id: "02",
    title: "Engineer Responsible Solutions",
    description:
      "We translate the problem into practical AI, data, and automation solutions with privacy, governance, and usability considered from the start.",
    icon: "fas fa-microchip",
  },
  {
    id: "03",
    title: "Validate with Stakeholders",
    description:
      "We test assumptions with clinicians, researchers, users, and partners to improve relevance, trust, and real-world readiness.",
    icon: "fas fa-users",
  },
  {
    id: "04",
    title: "Enable Real-World Impact",
    description:
      "We support the progression from concept and validation through to pilots, implementation, and scalable operational use.",
    icon: "fas fa-chart-line",
  },
];

const ApproachSection = () => {
  return (
    <section
      className="approach-section"
      id="our-approach"
      aria-labelledby="approach-title"
    >
      <div className="approach-header">
        <p className="approach-eyebrow">How We Work</p>

        <h2 className="approach-title" id="approach-title">
          Our Approach
        </h2>

        <p className="approach-subtext">
          A structured path from understanding the problem to enabling
          responsible, scalable healthcare technology in the real world.
        </p>
      </div>

      <div className="approach-journey">
        <div className="approach-track" aria-hidden="true">
          <div className="approach-track-fill"></div>
        </div>

        <div className="approach-steps">
          {approachSteps.map((step) => (
            <article className="approach-step" key={step.id}>
              <div className="approach-marker">
                <div className="approach-icon" aria-hidden="true">
                  <i className={step.icon}></i>
                </div>

                <span className="approach-number">{step.id}</span>
              </div>

              <div className="approach-copy">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;