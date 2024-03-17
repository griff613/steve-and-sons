// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero
        imageUrl="hero-image.jpg"
        title="Welcome to Our Website"
        subtitle="Explore our services and products"
      />
      <div className="card-section">
        <Card
          imageUrl="image1.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          imageUrl="image2.jpg"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          imageUrl="image3.jpg"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Home;
