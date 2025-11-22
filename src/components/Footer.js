import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          <img src="/techImg.png" alt="TechnovaShield Logo" />
          <span>TechnovaShield Limited</span>
        </Link>
        <p>&copy; {new Date().getFullYear()} TechnovaShield Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
