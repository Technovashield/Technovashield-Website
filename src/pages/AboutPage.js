import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutPage.css";

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <video autoPlay loop muted playsInline className="about-hero-video">
            <source src="/tech.mp4" type="video/mp4" />
          </video>

          <div className="about-hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <span className="about-eyebrow">
            Responsible Technology. Real-World Impact.
          </span>

          <h1 className="about-hero-title">
            Technology with Purpose.
            <span> Intelligence with Impact.</span>
          </h1>

          <p className="about-hero-subtitle">
            TechnovaShield is a New Zealand technology company developing
            responsible healthcare AI, clinical intelligence, synthetic data
            solutions, and intelligent automation for real-world challenges.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story-section">
        <div className="about-container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-eyebrow">Who We Are</span>

              <h2>Our Story</h2>

              <p>
                TechnovaShield Limited was founded in New Zealand with a belief
                that advanced technology should solve meaningful real-world
                problems. Our work has evolved around responsible artificial
                intelligence, healthcare innovation, privacy-conscious data
                solutions, and intelligent automation.
              </p>

              <p>
                CareSentinelAI has become our flagship clinical intelligence
                initiative, alongside our growing work in synthetic healthcare
                data and privacy-preserving data generation. Together, these
                capabilities reflect our focus on building practical,
                trustworthy technology that can progress from research and
                prototype environments toward real-world implementation.
              </p>
            </div>

            <div className="story-image">
              <img
                src="/teamwork.png"
                alt="TechnovaShield innovation and collaboration"
                className="story-image-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="philosophy-section">
        <div className="about-container">
          <div className="section-intro">
            <span className="section-eyebrow">Our Principles</span>

            <h2 className="section-heading">What Drives Us</h2>

            <p className="section-subheading">
              We build technology around three principles that guide how we
              design, collaborate, and create impact.
            </p>
          </div>

          <div className="philosophy-cards">
            <article className="philosophy-card">
              <img
                src="/iconInnovation.png"
                alt=""
                className="philosophy-icon"
              />

              <h3>Innovation with Purpose</h3>

              <p>
                We focus innovation on practical problems where technology can
                create meaningful and measurable value.
              </p>
            </article>

            <article className="philosophy-card">
              <img
                src="/iconIntegrity.png"
                alt=""
                className="philosophy-icon"
              />

              <h3>Integrity and Ethics</h3>

              <p>
                We design responsible technology with privacy, transparency,
                fairness, security, and human values in mind.
              </p>
            </article>

            <article className="philosophy-card">
              <img
                src="/iconImpact.png"
                alt=""
                className="philosophy-icon"
              />

              <h3>Impact for People</h3>

              <p>
                We aim to support better decisions, stronger workflows, and
                technology experiences that remain centred on people.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="team-leadership-section">
        <div className="about-container">
          <div className="team-leadership-content">
            <span className="section-eyebrow">People Behind the Work</span>

            <h2 className="section-heading">Our Team & Leadership</h2>

            <p className="team-description">
              Our work is shaped by multidisciplinary expertise spanning
              technology, healthcare, research, strategy, and responsible
              innovation.
            </p>

            <p className="team-description">
              Together, our team brings the perspectives needed to develop
              solutions grounded in real-world needs while maintaining a
              practical path from concept through development and validation.
            </p>

            <div className="team-cta">
              <Link
                to="/team"
                className="about-primary-button"
                onClick={scrollToTop}
              >
                Meet the Team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Impact */}
      <section className="healthcare-impact-section">
        <div className="impact-background">
          <img
            src="/clinciansAI.png"
            alt=""
            className="impact-bg-image"
          />

          <div className="impact-overlay"></div>
        </div>

        <div className="about-container">
          <div className="impact-content">
            <span className="impact-eyebrow">
              Our Flagship Healthcare Initiative
            </span>

            <h2>Driving Responsible AI Innovation in Healthcare</h2>

            <p>
              CareSentinelAI is TechnovaShield&apos;s flagship clinical
              intelligence platform, being developed to help clinicians
              identify patients who may require earlier review and follow-up.
              The platform brings together clinical information, risk
              indicators, and explainable decision-support concepts to support
              more proactive care.
            </p>

            <p>
              Our approach combines clinical engagement, responsible AI
              development, and privacy-conscious data practices, with the goal
              of progressing CareSentinelAI from prototype through validation
              and toward real-world pilot deployment.
            </p>

            <Link
              to="/products#caresentinelai"
              className="impact-link"
              onClick={scrollToTop}
            >
              Explore CareSentinelAI
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-content">
            <span className="section-eyebrow about-cta-eyebrow">
              Explore TechnovaShield
            </span>

            <h2>
              Building responsible technology for better decisions and better
              outcomes.
            </h2>

            <p>
              Discover our healthcare AI, synthetic data, intelligent
              automation, and secure technology capabilities.
            </p>

            <Link
              to="/products"
              className="about-cta-button"
              onClick={scrollToTop}
            >
              Explore Our Solutions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;