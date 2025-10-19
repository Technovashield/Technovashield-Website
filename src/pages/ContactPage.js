import React, { useState } from "react";
import '../styles/ContactPage.css';
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Let's Collaborate</h1>
          <p>
            We're open to partnerships, pilot projects, and innovative collaborations. 
            Whether you're a clinician, enterprise leader, or technology partner  let's shape the future together.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Details</h2>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>rpatel@technovashield.com</span>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-globe"></i>
                <span>www.technovashield.com</span>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Auckland, New Zealand</span>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>TechnovaShield Limited</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
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
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="form-message success">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )}
                
                {formStatus && formStatus !== 'sending' && formStatus !== 'success' && (
                  <p className="form-message error">{formStatus}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
