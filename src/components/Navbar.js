import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      {/* Top Strip */}
      <div className="navbar-top">
        <div className="navbar-top-links">
          <Link to="/careers" className="top-link">Careers</Link>
          <Link to="/contact" className="top-link">Contact Us</Link>

          {/* Support Button */}
          <Link to="/support-caresentinelai" className="support-button">
            Support CareSentinelAI
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-only">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/Tech_logo3.png"
              alt="Technovashield logo"
              className="logo-img-only"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/team" onClick={closeMenu}>Team</Link></li>

          {/* ⭐ NEW — News Button */}
          <li><Link to="/news" onClick={closeMenu}>News</Link></li>

          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
