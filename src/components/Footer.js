import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-accent"></div>

      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-brand-link"
              onClick={scrollToTop}
              aria-label="TechnovaShield home"
            >
              <img
                src="/Technovashield design image only.png"
                alt="TechnovaShield"
                className="footer-logo"
              />

              <div className="footer-brand-copy">
                <span className="footer-brand-name">
                  TechnovaShield
                </span>
                <span className="footer-brand-tagline">
                  Secure Intelligence. Responsible Innovation.
                </span>
              </div>
            </Link>

            <p className="footer-description">
              Building responsible AI, intelligent automation and secure
              digital solutions designed to improve healthcare and strengthen
              organisations.
            </p>

            <a
              href="https://www.linkedin.com/company/technovashield-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin"
              aria-label="Follow TechnovaShield on LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>Follow us on LinkedIn</span>
            </a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <nav className="footer-links" aria-label="Company links">
              <Link to="/about">About Us</Link>
              <Link to="/team">Team</Link>
              <Link to="/advisory">Advisory</Link>
              <Link to="/news">News</Link>
              <Link to="/careers">Careers</Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h3>Solutions</h3>

            <nav className="footer-links" aria-label="Solution links">
              <Link to="/products">CareSentinelAI</Link>
              <Link to="/products">Healthcare AI</Link>
              <Link to="/products">Cybersecurity</Link>
              <Link to="/products">Intelligent Automation</Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-column footer-connect">
            <h3>Connect</h3>

            <p>
              Interested in collaboration, partnerships or learning more
              about our technology?
            </p>

            <Link to="/contact" className="footer-contact-button">
              Get in Touch
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/support-caresentinelai"
              className="footer-support-link"
            >
              Support CareSentinelAI
            </Link>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>
              © {new Date().getFullYear()} TechnovaShield Limited.
            </span>
            <span>All rights reserved.</span>
          </div>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className="back-to-top-icon" aria-hidden="true">
              ↑
            </span>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
