import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FeaturedProjects.css";

const platforms = [
  {
    id: "careai",
    number: "01",
    title: "CareSentinelAI",
    eyebrow: "Flagship Platform",
    subtitle: "Predictive Clinical Intelligence",
    description:
      "CareSentinelAI is our flagship clinical intelligence platform, designed to support earlier identification of patient deterioration, prioritisation of clinical attention, and more proactive care decisions.",
    video: "/Videos/CareSentinelAI_Flow_Video_V3.mp4",
    link: "/products",
    featured: true,
    features: [
      "Early risk identification",
      "Clinical intelligence",
      "Explainable decision support",
    ],
  },
  {
    id: "clinical-assistant",
    number: "02",
    title: "Virtual Clinical Assistant",
    eyebrow: "Healthcare AI",
    subtitle: "AI-Assisted Clinical Interaction",
    description:
      "An AI-enabled clinical assistant concept designed to support information retrieval, patient interaction, and reduced administrative burden within healthcare workflows.",
    video: "/Videos/Roopap-chatbot.mp4",
    link: "/products",
    features: [
      "AI-assisted interaction",
      "Information retrieval",
      "Workflow support",
    ],
  },
  {
    id: "automation",
    number: "03",
    title: "Intelligent Automation",
    eyebrow: "Operational Efficiency",
    subtitle: "Smart Workflow Automation",
    description:
      "Practical intelligent automation capabilities designed to reduce repetitive work, improve operational consistency, and demonstrate how digital workflows can be engineered around real business processes.",
    video: "/Videos/EcommerceKiwiMall-video.mp4",
    link: "/products",
    features: [
      "Workflow automation",
      "Operational efficiency",
      "Practical implementation",
    ],
  },
];

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % platforms.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay may be restricted by the browser.
        });
      }
    }
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + platforms.length) % platforms.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % platforms.length);
  };

  const activePlatform = platforms[activeIndex];
  const isReverse = activeIndex % 2 !== 0;

  return (
    <section
      className="projects-section"
      id="featured-projects"
      aria-labelledby="platform-showcase-title"
    >
      <div className="projects-header">
        <p className="projects-eyebrow">See Our Technology in Action</p>

        <h2 id="platform-showcase-title">Explore Our Platforms</h2>

        <p>
          Preview selected TechnovaShield platforms and intelligent solutions
          before exploring the full product experience.
        </p>
      </div>

      <div
        className="platform-showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="platform-nav platform-nav-left"
          onClick={goToPrevious}
          aria-label="Show previous platform"
        >
          ←
        </button>

        <div
          className={`platform-slide ${
            isReverse ? "platform-slide-reverse" : ""
          }`}
          key={activePlatform.id}
        >
          <div className="platform-video-column">
            <div className="platform-video-frame">
              <video
                ref={videoRef}
                className="platform-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src={activePlatform.video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="platform-video-overlay"></div>

              <div className="platform-preview-label">
                Live Platform Preview
              </div>
            </div>
          </div>

          <div className="platform-copy">
            <div className="platform-number">
              {activePlatform.number}
            </div>

            <div className="platform-heading-row">
              <p className="platform-eyebrow">
                {activePlatform.eyebrow}
              </p>

              {activePlatform.featured && (
                <span className="platform-flagship-badge">
                  Flagship
                </span>
              )}
            </div>

            <h3>{activePlatform.title}</h3>

            <p className="platform-subtitle">
              {activePlatform.subtitle}
            </p>

            <p className="platform-description">
              {activePlatform.description}
            </p>

            <div className="platform-features">
              {activePlatform.features.map((feature) => (
                <div
                  className="platform-feature"
                  key={feature}
                >
                  <span aria-hidden="true">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <Link
              to={activePlatform.link}
              className="platform-link"
            >
              Explore Platform
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="platform-nav platform-nav-right"
          onClick={goToNext}
          aria-label="Show next platform"
        >
          →
        </button>

        <div className="platform-showcase-footer">
          <div className="platform-progress-group">
            {platforms.map((platform, index) => (
              <button
                type="button"
                key={platform.id}
                className={`platform-progress ${
                  index === activeIndex
                    ? "platform-progress-active"
                    : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${platform.title}`}
              >
                <span>{platform.number}</span>
                <span className="platform-progress-line"></span>
              </button>
            ))}
          </div>

          <div className="platform-count">
            {String(activeIndex + 1).padStart(2, "0")}
            <span>/</span>
            {String(platforms.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;