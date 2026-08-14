import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactPage.css";

const EMAILJS_SERVICE_ID = "service_e5r4nvt";
const EMAILJS_TEMPLATE_ID = "template_94wayx1";
const EMAILJS_PUBLIC_KEY = "umV7HF4yoG6OoQ2rJ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    jobTitle: "",
    industry: "",
    interest: "",
    useCase: "",
    timeline: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.organisation ||
      !formData.interest ||
      !formData.message
    ) {
      setFormStatus("Please complete all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    setFormStatus("sending");

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      organisation: formData.organisation,
      job_title: formData.jobTitle,
      organisation_type: formData.industry,
      primary_interest: formData.interest,
      intended_use_case: formData.useCase,
      project_timeline: formData.timeline,
      message: formData.message,
      to_email: "admin@technovashield.com",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData
      );

      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        organisation: "",
        jobTitle: "",
        industry: "",
        interest: "",
        useCase: "",
        timeline: "",
        message: "",
      });

      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);

      setFormStatus(
        "We could not send your enquiry. Please try again or contact us directly by email."
      );

      setTimeout(() => setFormStatus(""), 6000);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            Start a Conversation
          </span>

          <h1>Let’s Build Something Meaningful</h1>

          <p>
            Whether you are exploring a clinical AI initiative, synthetic data
            requirement, dataset pilot, research collaboration, technical
            partnership, investment opportunity, or another strategic project,
            we would be pleased to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="contact-section">
        <div className="contact-layout">
          {/* Left Information Panel */}
          <aside className="contact-info-panel">
            <span className="contact-panel-eyebrow">
              TechnovaShield Limited
            </span>

            <h2>Connect with Us</h2>

            <p className="contact-info-intro">
              Tell us what you are working on and where you see an opportunity
              to collaborate. We will make sure your enquiry reaches the right
              conversation.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Email
                </span>

                <a href="mailto:admin@technovashield.com">
                  admin@technovashield.com
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Location
                </span>

                <span>Auckland, New Zealand</span>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Website
                </span>

                <a
                  href="https://www.technovashield.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.technovashield.com
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-label">
                  LinkedIn
                </span>

                <a
                  href="https://www.linkedin.com/company/technovashield-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TechnovaShield Limited
                </a>
              </div>
            </div>

            <div className="contact-focus-box">
              <h3>We welcome conversations about</h3>

              <ul>
                <li>CareSentinelAI clinical pilots and healthcare AI</li>
                <li>Synthetic data generation and dataset development</li>
                <li>Privacy-preserving data for AI, testing, and analytics</li>
                <li>Synthetic dataset pilots and commercial projects</li>
                <li>Research and technical collaboration</li>
                <li>
                  Strategic partnerships, investment, and commercial
                  opportunities
                </li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span className="contact-form-eyebrow">
                Tell Us About Your Enquiry
              </span>

              <h2>How Can We Help?</h2>

              <p>
                Complete the form below and provide a little context so we can
                understand your requirements and respond appropriately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Work Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organisation.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organisation">
                    Organisation <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Organisation name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="jobTitle">
                    Job Title
                  </label>

                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Your role"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">
                    Organisation Type
                  </label>

                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="General Practice">
                      General Practice
                    </option>
                    <option value="Healthcare Provider">
                      Healthcare Provider
                    </option>
                    <option value="Research / University">
                      Research / University
                    </option>
                    <option value="Technology">
                      Technology
                    </option>
                    <option value="Government / Public Sector">
                      Government / Public Sector
                    </option>
                    <option value="Investor / Funder">
                      Investor / Funder
                    </option>
                    <option value="Consulting / Professional Services">
                      Consulting / Professional Services
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="interest">
                    Primary Interest <span>*</span>
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select your primary interest
                    </option>

                    <option value="CareSentinelAI Clinical Pilot">
                      CareSentinelAI Clinical Pilot
                    </option>

                    <option value="CareSentinelAI Partnership">
                      CareSentinelAI Partnership
                    </option>

                    <option value="Synthetic Data Generation">
                      Synthetic Data Generation
                    </option>

                    <option value="Synthetic Dataset Pilot">
                      Synthetic Dataset Pilot
                    </option>

                    <option value="AI / ML Dataset Development">
                      AI / ML Dataset Development
                    </option>

                    <option value="Software Testing / Validation Data">
                      Software Testing / Validation Data
                    </option>

                    <option value="Research Collaboration">
                      Research Collaboration
                    </option>

                    <option value="Technical Partnership">
                      Technical Partnership
                    </option>

                    <option value="Investment / Funding">
                      Investment / Funding
                    </option>

                    <option value="Strategic Collaboration">
                      Strategic Collaboration
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="useCase">
                    Intended Use Case
                  </label>

                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select if applicable
                    </option>

                    <option value="AI / Machine Learning Development">
                      AI / Machine Learning Development
                    </option>

                    <option value="Software Testing">
                      Software Testing
                    </option>

                    <option value="Analytics">
                      Analytics
                    </option>

                    <option value="Research">
                      Research
                    </option>

                    <option value="Model Validation">
                      Model Validation
                    </option>

                    <option value="Privacy-Constrained Data Replacement">
                      Privacy-Constrained Data Replacement
                    </option>

                    <option value="Product / Platform Development">
                      Product / Platform Development
                    </option>

                    <option value="Healthcare / Clinical Research">
                      Healthcare / Clinical Research
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">
                    Project Stage / Timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select if applicable
                    </option>

                    <option value="Exploring / Early Stage">
                      Exploring / Early Stage
                    </option>

                    <option value="Within 1–3 Months">
                      Within 1–3 Months
                    </option>

                    <option value="Within 3–6 Months">
                      Within 3–6 Months
                    </option>

                    <option value="Within 6–12 Months">
                      Within 6–12 Months
                    </option>

                    <option value="Ongoing Collaboration">
                      Ongoing Collaboration
                    </option>

                    <option value="Not Yet Defined">
                      Not Yet Defined
                    </option>
                  </select>
                </div>

                <div className="form-group contact-form-full">
                  <label htmlFor="message">
                    Tell Us More <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your organisation, data or technology challenge, intended use case, dataset requirements, clinical initiative, or collaboration opportunity..."
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="contact-submit-button"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : "Send Enquiry"}

                {formStatus !== "sending" && (
                  <span aria-hidden="true">→</span>
                )}
              </button>

              {formStatus === "success" && (
                <p className="form-message success">
                  Thank you. Your enquiry has been sent successfully. We will
                  be in touch soon.
                </p>
              )}

              {formStatus &&
                formStatus !== "sending" &&
                formStatus !== "success" && (
                  <p className="form-message error">
                    {formStatus}
                  </p>
                )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
