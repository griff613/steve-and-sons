// Hero.tsx
import React from 'react';
import '../../pages/Home.css';

interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
