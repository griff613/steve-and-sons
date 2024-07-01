import React from 'react';
import Card from '../Card/Card';

interface CardListProps {
  cards: Array<{
    image: string;
    description: string;
  }>;
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
