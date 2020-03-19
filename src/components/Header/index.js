import './styles.css';
import CustomWildCard from '../CustomWildCard';

import React from 'react';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';


function Header() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const [show, setShow] = React.useState(false);
  const [card, setCard] = React.useState({});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    if (show) {
      if (_.isEmpty(cards)) { 
        setCard({})
      } else {
        let card = _.sample(cards) ;
        setCard(card);
        dispatch({ type: 'ADD_TO_HISTORY', card });
      }
    }
  }, [show])

  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <h1 className='title'>rrrandomUno.</h1>
        </Col>
        <Col>
          <Button variant="success" onClick={handleShow}>get rrrandom wild card</Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
          <CustomWildCard 
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            creator={card.creator}
          />
      </Modal>
    </Container>
  );
}

export default Header;
