import React from "react";
import '../styles/TeamPage.css';
import Footer from "../components/Footer";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Roopa Patel",
      role: "Founder & Product Owner",
      description: "Visionary behind TechnovaShield's AI innovation roadmap, bridging healthcare, automation, and cybersecurity. With 15+ years of business leadership and RPA expertise, she leads CareSentinelAI and CyberShield initiatives in collaboration with clinicians and tech partners.",
      image: "/Tech_Logo.png"
    },
    {
      id: 2,
      name: "Sunil Patel",
      role: "Director & Strategic Advisor",
      description: "Overseeing company operations and partnerships, Sunil brings decades of management and strategic experience to ensure sustainable growth and governance for TechnovaShield.",
      image: "/Tech_Logo.png"
    },
    {
      id: 3,
      name: "Paul Johnson",
      role: "Frontend Developer & Web Architect",
      description: "Lead developer for the TechnovaShield website and visual branding. Passionate about accessibility, PWA design, and responsive web architecture.",
      image: "/Tech_Logo.png"
    },
    {
      id: 4,
      name: "Helena Smith",
      role: "Clinical Collaborator (CareSentinelAI)",
      description: "Works with the CareSentinelAI development team to ensure clinical accuracy, workflow usability, and ethical alignment with NZ healthcare standards.",
      image: "/Tech_Logo.png"
    },
    {
      id: 5,
      name: "Mukesh Kala",
      role: "Automation Developer (UiPath Specialist)",
      description: "Leads the automation workflows that power TechnovaShield's data orchestration and intelligent bot modules.",
      image: "/Tech_Logo.png"
    }
  ];

  return (
    <div className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p className="team-intro">
            At TechnovaShield Limited, our strength lies in our people  innovators, developers, clinicians, and collaborators who share one vision: 
            to make technology more human and purposeful. Every project we build  from CareSentinelAI to CyberShield  is shaped by passion, precision, and collective creativity.
          </p>
        </div>
      </section>

      <section className="team-content">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
            ))}

            <div className="team-member collaborators">
              <div className="member-photo">
                <img src="/Tech_Logo.png" alt="Collaborating Team" />
              </div>
              <h2>Collaborating Clinicians & Advisors</h2>
              <h3>Clinical Partners</h3>
              <p>
                Includes Dr. David Karthak, RN Jennifer Karthak, and partner clinicians across NZ  
                co-designing CareSentinelAI's predictive models and pilot frameworks.
              </p>
            </div>
          </div>

          <div className="team-footer">
            <p>Together, we believe in building technology that protects, predicts, and empowers.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamPage;
