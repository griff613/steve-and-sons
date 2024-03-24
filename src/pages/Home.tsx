// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import './Home.css';

const black_guy: string = "/images/black_fella.jpeg";
const sparky: string = "/images/sparky.jpeg";


const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero
        imageUrl={sparky}
        title="Welcome to Our Website"
        subtitle="Explore our services and products"
      />
      <div>
        <ul className = "card-list">
          <li className = "card">
            <Card
              imageUrl="/images/Bubbles-1.jpeg"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </li>
          <li>
            <Card
              imageUrl={black_guy}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </li>
          <li>
            <Card
              imageUrl={black_guy}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </li>
          <li>
            <Card
              imageUrl={black_guy}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </li>
          <li>
            <Card
              imageUrl={black_guy}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
