import React, { useState, useEffect } from "react";
import "../styles/ContactPage.css";
// import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_e5r4nvt";
const EMAILJS_TEMPLATE_ID = "template_94wayx1";
const EMAILJS_PUBLIC_KEY = "umV7HF4yoG6OoQ2rJ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

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

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
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
      message: formData.message,
      to_email: "admin@technovashield.com",
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
      .then(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setFormStatus(""), 5000);
      })
      .catch(() => {
        setFormStatus("Failed to send message. Please try again.");
        setTimeout(() => setFormStatus(""), 5000);
      });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1>Let’s Collaborate</h1>
        <p>
          We’re open to partnerships, pilot programs, and innovative
          collaborations.<br />
          For CareSentinelAI clinical pilots, research partnerships, or
          enterprise integration — reach out below.
        </p>
      </section>

      {/* Main Content */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info-box">
            <h2>Contact Details</h2>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>admin@technovashield.com</span>
            </div>

            <div className="info-item">
              <i className="fas fa-globe"></i>
              <span>www.technovashield.com</span>
            </div>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Auckland, New Zealand</span>
            </div>

            <div className="info-item">
              <i className="fab fa-linkedin"></i>
              <span>TechnovaShield Limited</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-box">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>

              {formStatus === "success" && (
                <p className="form-message success">
                  Thank you! We will get back to you soon.
                </p>
              )}

              {formStatus &&
                formStatus !== "sending" &&
                formStatus !== "success" && (
                  <p className="form-message error">{formStatus}</p>
                )}
            </form>
          </div>

        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
