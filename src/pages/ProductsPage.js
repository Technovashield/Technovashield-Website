import React from "react";
import '../styles/ProductsPage.css';
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Innovative solutions transforming healthcare, cybersecurity, and automation</p>
        </div>
      </section>

      {/* CareSentinelAI */}
      <section className="project-detail caresentinel-bg">
        <div className="project-content">
          <div className="project-text">
            <h2>CareSentinelAI  Predictive Health Intelligence</h2>
            <p className="project-description">
              CareSentinelAI is a next-generation AI-driven platform that predicts patient health risks in real time. 
              It unifies wearable, lab, and clinical data to help clinicians detect life-threatening conditions like sepsis before escalation.
            </p>
            
            <div className="project-mission-vision">
              <div className="mission-box">
                <h3>Mission</h3>
                <p>To empower healthcare professionals with predictive intelligence that identifies and prevents life-threatening conditions.</p>
              </div>
              <div className="vision-box">
                <h3>Vision</h3>
                <p>A healthcare future where technology predicts and prevents crises through continuous learning and automation.</p>
              </div>
            </div>
            
            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                <li>Sepsis-specific early-detection model</li>
                <li>Voice-to-Speech clinical documentation and interaction</li>
                <li>Real-time ML-based risk scoring</li>
                <li>Automated alerts for clinicians, nurses, and patients</li>
                <li>Privacy and compliance layer for NZ/AUS standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CyberShield */}
      <section className="project-detail cybershield-bg">
        <div className="project-content">
          <div className="project-text">
            <h2>CyberShield  AI-Driven Cyber Defense</h2>
            <p className="project-description">
              CyberShield uses AI-based traffic analytics to detect and mitigate DDoS and network anomalies. 
              It offers adaptive security to protect digital infrastructure.
            </p>
            
            <div className="project-mission-vision">
              <div className="mission-box">
                <h3>Mission</h3>
                <p>To safeguard enterprises with real-time AI-powered defense and resilience.</p>
              </div>
              <div className="vision-box">
                <h3>Vision</h3>
                <p>A secure digital future where AI learns and evolves with every threat.</p>
              </div>
            </div>
            
            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                <li>Real-time anomaly detection and blocking</li>
                <li>FastAPI-based ML inference backend</li>
                <li>Scalable architecture with cloud readiness</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </section>

      {/* Smart Automation Bots */}
      <section className="project-detail automation-bg">
        <div className="project-content">
          <div className="project-text">
            <h2>Smart Automation Bots</h2>
            <p className="project-description">
              TechnovaShield's automation portfolio showcases UiPath-based bots developed for businesses. 
              These include retail price updates, healthcare data handling, and supply-chain optimizations.
            </p>
            
            <ul className="feature-list">
              <li><i className="fas fa-robot"></i> <strong>RPA Excellence:</strong> UiPath-based automation for repetitive tasks</li>
              <li><i className="fas fa-shopping-cart"></i> <strong>Retail Solutions:</strong> Automated price updates and inventory management</li>
              <li><i className="fas fa-hospital"></i> <strong>Healthcare Automation:</strong> Patient data processing and record management</li>
              <li><i className="fas fa-truck"></i> <strong>Supply Chain:</strong> Order processing and logistics optimization</li>
            </ul>

            <div className="mission-vision-boxes">
              <div className="mission-box">
                <h3>Mission</h3>
                <p>Automate repetitive tasks to free human potential for creative problem-solving and innovation.</p>
              </div>
              <div className="vision-box">
                <h3>Vision</h3>
                <p>A future where intelligent automation enhances productivity across all industries, enabling businesses to focus on strategic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
