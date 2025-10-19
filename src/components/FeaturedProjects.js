import React from "react";
import { Link } from "react-router-dom";
import '../styles/FeaturedProjects.css';

const FeaturedProjects = () => {
  const projectsData = [
    {
      id: "careai",
      icon: "fas fa-hospital-user",
      title: "CareSentinelAI",
      description: "AI-powered sepsis early warning system that saves lives through predictive analytics.",
      link: "/products#careai",
    },
    {
      id: "cybershield",
      icon: "fas fa-network-wired",
      title: "CyberShield",
      description: "Adaptive AI platform detecting and mitigating DDoS attacks before impact.",
      link: "/products#cybershield",
    },
    {
      id: "automation",
      icon: "fas fa-cogs",
      title: "Smart Automation Bots",
      description: "Real-world UiPath automation projects demonstrating applied innovation.",
      link: "/products#automation",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-content">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Transforming industries with AI-powered innovation</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.link} className="project-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
