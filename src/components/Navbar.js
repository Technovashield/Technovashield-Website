import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "../styles/Navbar.css";
import PageTransition from "./PageTransition";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Separate states are intentional:
   *
   * isLogoRotating:
   * Controls the visible Navbar logo animation.
   *
   * isTransitioning:
   * Controls the full-screen page transition overlay.
   *
   * Keeping them separate allows the Navbar logo to begin rotating
   * BEFORE the overlay covers the page.
   */
  const [isLogoRotating, setIsLogoRotating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ==========================================================================
     Scroll State
     ========================================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================================================
     Close Mobile Menu After Route Change
     ========================================================================== */

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* ==========================================================================
     Mobile Menu
     ========================================================================== */

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* ==========================================================================
     Animated Navigation
     ========================================================================== */

  const handleAnimatedNavigation = (event, target) => {
    event.preventDefault();

    closeMenu();

    /*
     * If the visitor clicks the page they are already on,
     * simply return smoothly to the top.
     */
    if (location.pathname === target) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
     * Stage 1:
     * Start the visible Navbar logo rotation first.
     */
    setIsLogoRotating(true);

    /*
     * Stage 2:
     * Give the Navbar logo a moment to become visible in motion,
     * then introduce the branded page-transition overlay.
     */
    window.setTimeout(() => {
      setIsTransitioning(true);
    }, 320);

    /*
     * Stage 3:
     * Navigate while the transition overlay is displayed.
     */
    window.setTimeout(() => {
      navigate(target);

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 950);

    /*
     * Stage 4:
     * Finish the Navbar logo animation.
     */
    window.setTimeout(() => {
      setIsLogoRotating(false);
    }, 1650);

    /*
     * Stage 5:
     * Remove the transition overlay.
     */
    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 1850);
  };

  /* ==========================================================================
     Active Navigation Style
     ========================================================================== */

  const navClassName = ({ isActive }) =>
    `navbar-link ${isActive ? "navbar-link-active" : ""}`;

  return (
    <>
      {/* Branded route transition */}
      <PageTransition visible={isTransitioning} />

      <header
        className={`navbar-header ${
          isScrolled ? "navbar-header-scrolled" : ""
        }`}
      >
        {/* ================================================================
            Utility Strip
            ================================================================ */}

        <div className="navbar-top">
          <div className="navbar-top-inner">
            <div className="navbar-top-message">
              Responsible Healthcare AI Engineering
            </div>

            <div className="navbar-top-links">
              <Link
                to="/careers"
                className="top-link"
                onClick={(event) =>
                  handleAnimatedNavigation(event, "/careers")
                }
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className="top-link"
                onClick={(event) =>
                  handleAnimatedNavigation(event, "/contact")
                }
              >
                Contact
              </Link>

              <Link
                to="/support-caresentinelai"
                className="support-button"
                onClick={(event) =>
                  handleAnimatedNavigation(
                    event,
                    "/support-caresentinelai"
                  )
                }
              >
                Support CareSentinelAI
              </Link>
            </div>
          </div>
        </div>

        {/* ================================================================
            Main Navigation
            ================================================================ */}

        <nav className="navbar">
          <div className="navbar-inner">

            {/* ============================================================
                Brand
                ============================================================ */}

            <Link
              to="/"
              className="navbar-brand"
              onClick={(event) =>
                handleAnimatedNavigation(event, "/")
              }
            >
              <img
                src="/Technovashield design image only.png"
                alt="TechnovaShield"
                className={`navbar-logo ${
                  isLogoRotating
                    ? "navbar-logo-rotating"
                    : ""
                }`}
              />

              <div className="navbar-brand-copy">
                <span className="navbar-brand-name">
                  TechnovaShield
                </span>

                <span className="navbar-brand-tagline">
                  Secure Intelligence. Responsible Innovation.
                </span>
              </div>
            </Link>

            {/* ============================================================
                Mobile Menu Button
                ============================================================ */}

            <button
              className={`hamburger ${
                isMenuOpen ? "active" : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* ============================================================
                Navigation Links
                ============================================================ */}

            <ul
              className={`nav-links ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/")
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/about")
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/products")
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/team"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/team")
                  }
                >
                  Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/advisory"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/advisory")
                  }
                >
                  Advisory
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/news"
                  className={navClassName}
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/news")
                  }
                >
                  News
                </NavLink>
              </li>

              <li className="nav-contact-item">
                <NavLink
                  to="/contact"
                  className="navbar-contact-button"
                  onClick={(event) =>
                    handleAnimatedNavigation(event, "/contact")
                  }
                >
                  Get in Touch
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;