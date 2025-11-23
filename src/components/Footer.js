import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Tagline */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            <img src="/techImg.png" alt="TechnovaShield Logo" />
            <span>TechnovaShield Limited</span>
          </Link>
          <p className="footer-tagline">
            Empowering Innovation through Secure Intelligence
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/technovashield-limited/" // ✅ Replace with your official LinkedIn page link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Back to Top Button */}
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} TechnovaShield Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
