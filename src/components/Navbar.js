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
          <button className="donate-button">Donate</button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo-only">
          <img src="/Tech_logo3.png" alt="Technovashield logo" className="logo-img-only" />
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
