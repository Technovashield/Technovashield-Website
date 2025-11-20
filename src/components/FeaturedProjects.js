
import React from "react";
import { Link } from "react-router-dom";
import "../styles/FeaturedProjects.css";

const FeaturedProjects = () => {
  const projectsData = [
    {
      id: "careai",
      icon: "fas fa-hospital-user",
      title: "CareSentinelAI",
      description:
        "Our flagship AI-driven healthcare platform predicting health risks like sepsis before clinical recognition. Built with clinician collaboration to deliver transparent, life-saving insights.",
      link: "/products#careai",
      featured: true, // Flagship project
    },
    {
      id: "cybershield",
      icon: "fas fa-network-wired",
      title: "CyberShield",
      description:
        "Adaptive AI cybersecurity solution detecting and mitigating DDoS attacks before impact. Designed for enterprises requiring real-time protection and automated response.",
      link: "/products#cybershield",
    },
    {
      id: "automation",
      icon: "fas fa-cogs",
      title: "Smart Automation Bots",
      description:
        "Innovative UiPath-based automation projects optimizing workflows, enhancing compliance, and reducing manual workload for businesses.",
      link: "/products#automation",
    },
  ];

  return (
    <section className="projects-section" id="featured-projects">
      <div className="projects-content">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>
            Transforming industries through AI-powered solutions in healthcare,
            cybersecurity, and automation.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured-card" : ""}`}
              id={project.id}
            >
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
