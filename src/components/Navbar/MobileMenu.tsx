// MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul className="mobile-menu-links">
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/about" onClick={onClose}>About</Link></li>
        {/* Add more nav links as needed */}
      </ul>
    </div>
  );
};

export default MobileMenu;
