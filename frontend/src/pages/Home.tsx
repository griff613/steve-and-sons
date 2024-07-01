import React from 'react';
import CardList from '../components/CardList/CardList';

const cards = [
  {
    image: 'https://via.placeholder.com/300',
    description: 'Fast and reliable emergency home electrical repairs. Available 24/7 to handle any electrical emergency with professional expertise and care.',
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Description 2',
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Description 3',
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Description 4',
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Description 5',
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Description 6',
  },
];

const Home: React.FC = () => {
  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
