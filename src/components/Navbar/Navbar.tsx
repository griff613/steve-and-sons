// NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../../assets/logo.svg'; // Adjust the path as per your directory structure
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
          <img src={logo} alt="Logo" className="logo" /> {/* Use the logo image here */}
          <span className="title">Your Title</span>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* Add more nav links as needed */}
        </ul>
      </div>
      <div className="navbar-right">
        <a href="tel:1234567890" className="phone-btn">Call Us</a>
        <button className="hamburger-btn" onClick={toggleMenu}>☰</button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default NavBar;
