import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open and handle overlay click
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Navigation Links Data
  const navItems = ["Home", "Rooms", "Dining", "Gallery", "Contact"];

  return (
    <header className="navbar-container fixed-top">
      {/* Main Navbar */}
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo (Visible on desktop and when mobile menu is closed) */}
        <div className="d-flex align-items-center">
          <i className="bi bi-house-door-fill text-luxury-gold fs-4 me-2"></i>
          <h1 className="navbar-brand m-0 text-white fw-bold fs-4">
            LuxuryStay
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="d-none d-lg-flex align-items-center gap-4">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-white fw-medium">
              {item}
            </a>
          ))}
          <div className="d-flex ms-3">
            <button className="btn btn-outline-light me-2 px-4 py-2 rounded-3 fw-medium">Login</button>
            <button className="btn btn-luxury-gold text-dark px-4 py-2 rounded-3 fw-medium">Sign Up</button>
          </div>
        </nav>
        
        {/* Hamburger (Mobile/Tablet - Only visible when menu is CLOSED) */}
        {!menuOpen && (
          <button
            className="navbar-toggler d-lg-none text-white border-0 fs-2"
            onClick={() => setMenuOpen(true)} // Open menu
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay (Click to close) */}
      {menuOpen && <div className="mobile-menu-overlay d-lg-none" onClick={closeMenu}></div>}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu d-lg-none ${menuOpen ? "open" : ""}`}>
        
        {/* Mobile Menu Header (Logo and Close Button) */}
        <div className="mobile-menu-header d-flex justify-content-between align-items-center p-4">
            {/* Logo inside menu */}
            <div className="d-flex align-items-center">
                <i className="bi bi-house-door-fill text-luxury-gold fs-4 me-2"></i>
                <h1 className="navbar-brand m-0 text-white fw-bold fs-4">
                    LuxuryStay
                </h1>
            </div>

            {/* Close Button (The X) */}
            <button
                className="navbar-toggler text-white border-0 fs-2"
                onClick={closeMenu}
                aria-label="Close navigation menu"
            >
                <i className="bi bi-x-lg"></i>
            </button>
        </div>

        <nav className="d-flex flex-column align-items-start p-4 pt-0">
          {/* Menu Items */}
          <div className="mobile-menu-links w-100 mb-4 pb-4"> {/* Separator area */}
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-white display-6 fw-light mb-3 w-100"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="d-flex flex-column w-100">
            <button className="btn btn-outline-light mb-3 w-100 py-2 rounded-3 fw-medium">Login</button>
            <button className="btn btn-luxury-gold text-dark w-100 py-2 rounded-3 fw-medium">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;