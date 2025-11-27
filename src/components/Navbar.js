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

          {/* UPDATED BUTTON */}
          <Link to="/support-caresentinelai" className="support-button">
            Support CareSentinelAI
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo-only">
  <Link to="/" onClick={closeMenu}>
    <img
      src="/Tech_logo3.png"
      alt="Technovashield logo"
      className="logo-img-only"
    />
  </Link>
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

          {/* Add this inside hamburger menu as well */}
          {/* <li>
            <Link to="/support-caresentinelai" onClick={closeMenu}>
              Support CareSentinelAI
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
