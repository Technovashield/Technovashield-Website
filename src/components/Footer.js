import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* Logo + Tagline */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/techImg.png" alt="TechnovaShield Logo" />
            <span>TechnovaShield Limited</span>
          </Link>

          <p className="footer-tagline">
            Empowering Innovation through Secure Intelligence
          </p>
        </div>

        {/* Social Media Row */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/technovashield-limited/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        {/* Back to top */}
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechnovaShield Limited. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
