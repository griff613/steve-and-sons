// src/components/Card.tsx
import React, { useState } from 'react';
import './Card.css';
import Modal from '../Modal/Modal';

interface CardProps {
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-description">{description}</div>
      <button className="card-button" onClick={handleButtonClick}>Click Me</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Card;
