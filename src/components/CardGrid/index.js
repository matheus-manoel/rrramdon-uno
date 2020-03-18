import './styles.css';
import CustomWildCard from '../CustomWildCard';

import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from'react-bootstrap/CardDeck';


const getCards = (props) => {
  return props.cards.map((card, index) => (
    <CustomWildCard 
      key={index}
      title={card.title}
      description={card.description}
      imageUrl={card.imageUrl}
      creator={card.creator}
    />
  ));
}

function CardGrid(props) {
  return (
    <Container fluid>
      <CardDeck>{getCards(props)}</CardDeck>
    </Container>
  );
}

export default CardGrid;
