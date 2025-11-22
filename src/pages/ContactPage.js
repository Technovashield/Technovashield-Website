import React, { useState, useEffect } from "react";
import '../styles/ContactPage.css';
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_e5r4nvt';
const EMAILJS_TEMPLATE_ID = 'template_94wayx1';
const EMAILJS_PUBLIC_KEY = 'umV7HF4yoG6OoQ2rJ';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

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
    
    // Set sending status
    setFormStatus('sending');
    
    // Prepare email data
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'admin@technovashield.com'
    };
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setFormStatus('Failed to send message. Please try again.');
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      });
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
