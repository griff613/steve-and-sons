// Card.tsx
import React from 'react';

interface CardProps {
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;
