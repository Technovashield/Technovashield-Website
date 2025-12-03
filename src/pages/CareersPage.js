import React, { useState, useEffect } from "react";
import "../styles/CareersPage.css";
import emailjs from "@emailjs/browser";

// EmailJS config (same as Contact Page)
const EMAILJS_SERVICE_ID = "service_e5r4nvt";
const EMAILJS_TEMPLATE_ID = "template_94wayx1";
const EMAILJS_PUBLIC_KEY = "umV7HF4yoG6OoQ2rJ";

const CareersPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleInterest: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.roleInterest) {
      setStatus("Please fill all required fields.");
      return;
    }

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      role_interest: formData.roleInterest,
      message: formData.message,
      to_email: "admin@technovashield.com",
    };

    setStatus("sending");

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", roleInterest: "", message: "" });

        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  // Future Role Cards
  const futureRoles = [
    {
      title: "Machine Learning Engineer",
      desc: "Work on predictive models for CareSentinelAI, early-risk detection, and clinical analytics.",
    },
    {
      title: "Full-Stack Developer (React + Python)",
      desc: "Help build CareSentinelAI’s web dashboard, API workflows, and cloud integrations.",
    },
    {
      title: "UiPath RPA Developer",
      desc: "Automate clinical and operational workflows across healthcare providers.",
    },
    {
      title: "Healthcare Data Analyst",
      desc: "Support wearable, lab, and clinical data ingestion with strong ethics and accuracy.",
    },
    {
      title: "Clinical Research Advisor",
      desc: "Guide early validation, sepsis research workflows, and clinical feasibility.",
    },
    {
      title: "Māori & Pacific Engagement Advisor",
      desc: "Help support culturally grounded data governance and equity-focused AI design.",
    },
  ];

  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <div className="container">
          <h1>Build the Future of Healthcare AI With Us</h1>
          <p>
            At TechnovaShield, we're shaping the next generation of AI-powered
            healthcare and cybersecurity solutions. Whether you're a developer,
            clinician, researcher, or student—your passion can help improve
            real-world patient outcomes.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="careers-why">
        <div className="container">
          <h2>Why Join TechnovaShield?</h2>
          <p className="why-description">
            TechnovaShield is a purpose-driven startup creating solutions that
            protect, predict, and empower. Join an environment where innovation,
            healthcare, and ethical AI come together.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <h3>Health Impact</h3>
              <p>
                Work on products like CareSentinelAI that support clinicians and
                save lives through early detection.
              </p>
            </div>

            <div className="why-card">
              <h3>Innovation Culture</h3>
              <p>
                Collaborate with developers, researchers, and clinicians across
                New Zealand.
              </p>
            </div>

            <div className="why-card">
              <h3>Growth Opportunities</h3>
              <p>
                Be part of a growing startup with room for leadership,
                creativity, and long-term roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE ROLES */}
      <section className="careers-roles future-opportunities">
  <div className="container">
    <h2>Future Opportunities</h2>

    <p className="roles-description">
      We're not hiring yet—but we're building our talent network for
      upcoming roles.
    </p>

    <div className="roles-grid">
      {futureRoles.map((role, index) => (
        <div key={index} className="role-card">
          <h3>{role.title}</h3>
          <p>{role.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CULTURE & ETHICAL AI */}
      <section className="careers-culture">
        <div className="container">
          <h2>Our Commitment</h2>
          <p>
            At TechnovaShield, we embed ethical AI principles, Māori data
            governance, cultural safety, and equity-focused design into every
            solution. Our work aligns with responsible innovation and
            clinician-centric values.
          </p>
        </div>
      </section>

      {/* EXPRESSION OF INTEREST FORM */}
      <section className="careers-form-section">
  <div className="container">
    <h2>Submit Your Expression of Interest</h2>

    <form onSubmit={handleSubmit} className="careers-form" encType="multipart/form-data">

      {/* Name */}
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Area of Interest */}
      <div className="form-group">
        <label>Area of Interest *</label>
        <select
          name="roleInterest"
          value={formData.roleInterest}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          {futureRoles.map((role, idx) => (
            <option key={idx} value={role.title}>
              {role.title}
            </option>
          ))}
        </select>
      </div>

      {/* Message (Optional) */}
      <div className="form-group">
        <label>Message (Optional)</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* CV Upload */}
      <div className="form-group">
        <label>Upload Your CV (PDF or DOC) *</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setFormData({ ...formData, resume: e.target.files[0] })
          }
          required
          className="file-input"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : "Submit Expression of Interest"}
      </button>

      {/* Messages */}
      {status === "success" && (
        <p className="form-message success">
          Thank you! Your expression of interest has been submitted.
        </p>
      )}

      {status === "error" && (
        <p className="form-message error">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  </div>
</section>

      
    </div>
  );
};

export default CareersPage;
