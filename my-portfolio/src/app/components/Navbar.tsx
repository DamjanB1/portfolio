'use client';

import React, { useState } from "react";
import "./navbar.css"; // Importing CSS for the navbar

const Navbar: React.FC = () => {
  // Typing the state with a boolean to track menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">Damjan.dev</a>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
