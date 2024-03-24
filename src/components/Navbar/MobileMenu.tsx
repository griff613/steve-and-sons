// MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <ul className="mobile-menu-links">
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/about" onClick={onClose}>About</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
          {/* Add more nav links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
