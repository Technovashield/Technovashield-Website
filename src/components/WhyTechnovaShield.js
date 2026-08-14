import React, { useEffect, useState } from "react";
import "../styles/WhyTechnovaShield.css";

const slides = [
  {
    id: "01",
    title: "Healthcare First",
    eyebrow: "Clinical Relevance",
    description:
      "We design around real healthcare workflows, care delivery challenges, and outcomes rather than introducing technology for its own sake.",
    supportingText:
      "Our focus is practical clinical value: helping healthcare organisations identify where responsible AI and intelligent systems can make work safer, clearer, and more effective.",
    image: "/clinciansAI.png",
    imageAlt: "Healthcare technology supporting clinical care",
    points: [
      "Clinical workflow fit",
      "Patient-centred outcomes",
      "Practical implementation",
    ],
  },
  {
    id: "02",
    title: "Privacy by Design",
    eyebrow: "Responsible Engineering",
    description:
      "Privacy, security, responsible AI, and data protection are considered from the beginning of the engineering process.",
    supportingText:
      "This approach helps create solutions that can support healthcare innovation while respecting the sensitivity, governance, and trust requirements surrounding health information.",
    image: "/WhyTechnovashieldCard_02.png",
    imageAlt: "Secure digital healthcare technology",
    points: [
      "Privacy embedded early",
      "Responsible AI principles",
      "Governance-conscious design",
    ],
  },
  {
    id: "03",
    title: "Co-designed with Stakeholders",
    eyebrow: "Collaborative Development",
    description:
      "Healthcare technology works best when it is shaped with the people who understand the problem, the workflow, and the operational environment.",
    supportingText:
      "We engage with clinicians, researchers, healthcare organisations, and technology partners to improve relevance, usability, and real-world readiness.",
    image: "/WhyTechnovashieldCard_03.png",
    imageAlt: "People collaborating on technology development",
    points: [
      "Clinician engagement",
      "Research collaboration",
      "Partner alignment",
    ],
  },
  {
    id: "04",
    title: "Built to Scale",
    eyebrow: "From Validation to Growth",
    description:
      "We design with progression in mind, supporting the journey from early validation and pilot environments toward broader operational and enterprise use.",
    supportingText:
      "Scalability is treated as an engineering consideration from the outset rather than something added only after a solution begins to grow.",
    image: "/WhyTechnovashieldCard_04.png",
    imageAlt: "Technology team supporting scalable innovation",
    points: [
      "Pilot-ready thinking",
      "Scalable architecture",
      "Enterprise progression",
    ],
  },
];

const WhyTechnovaShield = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];
  const isReverse = activeIndex % 2 !== 0;

  return (
    <section
      className="why-section"
      id="why-technovashield"
      aria-labelledby="why-technovashield-title"
    >
      <div className="why-section-header">
        <p className="why-section-eyebrow">Why We're Different</p>

        <h2 className="why-section-title" id="why-technovashield-title">
          Why TechnovaShield
        </h2>

        <p className="why-section-subtitle">
          Responsible healthcare technology shaped by clinical relevance,
          trusted engineering, collaboration, and practical scalability.
        </p>
      </div>

      <div
        className="why-showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="why-nav why-nav-left"
          onClick={goToPrevious}
          aria-label="Show previous TechnovaShield principle"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          className={`why-slide ${isReverse ? "why-slide-reverse" : ""}`}
          key={activeSlide.id}
        >
          <div className="why-slide-copy">
            <div className="why-slide-number">{activeSlide.id}</div>

            <p className="why-slide-eyebrow">{activeSlide.eyebrow}</p>

            <h3 className="why-slide-title">{activeSlide.title}</h3>

            <p className="why-slide-description">{activeSlide.description}</p>

            <p className="why-slide-supporting">{activeSlide.supportingText}</p>

            <div className="why-slide-points">
              {activeSlide.points.map((point) => (
                <div className="why-slide-point" key={point}>
                  <span className="why-point-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="why-slide-visual">
            <div className="why-image-frame">
              <img
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                className="why-slide-image"
              />

              <div className="why-image-overlay"></div>

              <div className="why-image-label">
                <span>{activeSlide.id}</span>

                {activeSlide.eyebrow}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="why-nav why-nav-right"
          onClick={goToNext}
          aria-label="Show next TechnovaShield principle"
        >
          <span aria-hidden="true">→</span>
        </button>

        <div className="why-showcase-footer">
          <div className="why-progress-group">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                className={`why-progress-item ${
                  index === activeIndex ? "why-progress-item-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.title}`}
              >
                <span className="why-progress-number">{slide.id}</span>

                <span className="why-progress-line"></span>
              </button>
            ))}
          </div>

          <div className="why-slide-count">
            {String(activeIndex + 1).padStart(2, "0")}
            <span>/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTechnovaShield;
