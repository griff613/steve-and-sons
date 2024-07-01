// NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Navbar content */}
      <div className="navbar-left">
        <Link to="/">
          <img src='images/logo.png' alt="Logo" className="logo" /> {/* Use the logo image here */}
        </Link>
      </div>
      {/*So, navbar center is just a region, hamburger-menu should gp*/}
      <div className="navbar-center">
        <button className="hamburger-btn" onClick={toggleMenu}>☰</button>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div> 
      <div className="navbar-right">
        <a href="tel:1234567890" className="phone-btn">Call Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
