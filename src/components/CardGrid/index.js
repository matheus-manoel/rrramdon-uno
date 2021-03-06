import './styles.css';
import CustomWildCard from '../CustomWildCard';

import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from'react-bootstrap/CardDeck';
import { useSelector } from 'react-redux';


const getCards = (cards) => {
  return cards.map((card, index) => (
    <CustomWildCard 
      key={index}
      title={card.title}
      description={card.description}
      imageUrl={card.imageUrl}
      creator={card.creator}
    />
  ));
}

function CardGrid() {
  const cards = useSelector(state => state.cards);
  return (
    <Container fluid>
      <CardDeck>{getCards(cards)}</CardDeck>
    </Container>
  );
}

export default CardGrid;
