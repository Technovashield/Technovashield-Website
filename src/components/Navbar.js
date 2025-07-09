import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar-header">
      {/* Top Strip */}
      <div className="navbar-top">
        <div className="navbar-top-links">
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="donate-button">Donate</button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar">
        <div className="logo-only">
          <img src="/Tech_Logo.png" alt="Technovashield logo" className="logo-img-only" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;