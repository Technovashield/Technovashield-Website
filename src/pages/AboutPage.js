import React from "react";
import { Link } from "react-router-dom";
import '../styles/AboutPage.css';
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/tech.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Empowering Innovation Through Secure Intelligence</h1>
          <p className="hero-subtitle">
            We're a New Zealand–based company creating AI-driven systems that protect, 
            predict, and empower industries worldwide.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                TechnovaShield Limited was founded in New Zealand with the goal of bridging 
                healthcare, automation, and cybersecurity through applied artificial intelligence. 
                Our journey began with a vision to make technology more human — predictive, 
                preventive, and accessible to all.
              </p>
              <p>
                Today, our solutions like CareSentinelAI and CyberShield bring intelligence 
                and safety to organizations and clinicians, redefining how AI can protect 
                lives and digital ecosystems.
              </p>
            </div>
            <div className="story-image">
              <img src="/teamwork.png" alt="Innovation and Teamwork" className="story-image-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-heading">What Drives Us</h2>
          <p className="section-subheading">
            At TechnovaShield, we build every solution on three foundational values:
          </p>
          <div className="philosophy-cards">
            <div className="philosophy-card">
              <img src="/iconInnovation.png" alt="Innovation" className="philosophy-icon" />
              <h3>Innovation with Purpose</h3>
              <p>Developing technology that creates measurable impact.</p>
            </div>
            <div className="philosophy-card">
              <img src="/iconIntegrity.png" alt="Integrity" className="philosophy-icon" />
              <h3>Integrity and Ethics</h3>
              <p>Designing AI that respects privacy, fairness, and human values.</p>
            </div>
            <div className="philosophy-card">
              <img src="/iconImpact.png" alt="Impact" className="philosophy-icon" />
              <h3>Impact for People</h3>
              <p>Empowering clinicians, professionals, and organizations to achieve more with intelligent systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships-section">
        <div className="container">
          <h2 className="section-heading">Our Network</h2>
          <p className="network-description">
            Our innovation is powered by collaboration. We work with healthcare professionals, 
            researchers, and strategic partners across Aotearoa New Zealand and beyond.
          </p>
          <p className="network-description">
            Partnerships include AI Forum New Zealand, Creative HQ, Callaghan Innovation, 
            and several clinical organizations engaged in pilot testing and co-design of CareSentinelAI.
          </p>
          <div className="partners-carousel">
            <div className="partner-logo">AI Forum NZ</div>
            <div className="partner-logo">Creative HQ</div>
            <div className="partner-logo">Callaghan Innovation</div>
            <div className="partner-logo">Clinical Partners</div>
          </div>
        </div>
      </section>

      {/* Team & Leadership Section */}
      <section className="team-leadership-section">
        <div className="container">
          <h2 className="section-heading">Our Team & Leadership</h2>
          <p className="team-description">
            At TechnovaShield, innovation is driven by a multidisciplinary team of developers, 
            strategists, and clinicians working together to make AI human-centered.
          </p>
          <p className="team-description">
            Our leadership team, supported by collaborating clinicians such as Dr. David Karthak 
            and RN Jennifer Karthak, ensures that every project reflects real-world healthcare 
            priorities and ethical standards.
          </p>
          <div className="team-cta">
            <Link to="/team" className="btn btn-primary">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* Healthcare Impact Section */}
      <section className="healthcare-impact-section">
        <div className="impact-background">
          <img src="/clinciansAI.png" alt="Healthcare AI" className="impact-bg-image" />
          <div className="impact-overlay"></div>
        </div>
        <div className="container">
          <div className="impact-content">
            <h2>Driving AI Innovation in Healthcare</h2>
            <p>
              CareSentinelAI is TechnovaShield's flagship solution for predictive healthcare. 
              Co-designed with clinicians, it leverages AI to detect early warning signs of 
              sepsis and other critical conditions. The platform integrates wearable, lab, 
              and clinical data to provide real-time insights, reducing response time and 
              improving patient outcomes.
            </p>
            <p>
              Our mission is to make intelligent healthcare accessible, proactive, and 
              trustworthy for every community.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Together, we believe in building technology that protects, predicts, and empowers.</h2>
            <Link to="/products" className="btn btn-primary btn-glow">Explore Our Projects</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;