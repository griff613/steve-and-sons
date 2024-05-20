// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import './Home.css';


const HomePage = () => {
  // Sample data for cards, you can replace this with actual data
  const cardsData = [
    {
      id: 1,
      image: 'images/card1.webp',
      overlay_text: 'Services',
      title: 'Card Title 1',
      description: 'Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dol'
    },
    {
      id: 2,
      image: 'images/card1.webp',
      overlay_text: '',
      title: 'Card Title 2',
      description: 'Description for card 2...'
    },
    // Add more cards as needed...
  ];

  return (
    <div className = "main-content">
      <section className="hero-section">
        <h1>Steve and Sons electric
            <p>Your journey starts here.</p>

        </h1>
      </section>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            overlay_text={card.overlay_text}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
