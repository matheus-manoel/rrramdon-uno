import './styles.css';
import CustomWildCard from '../CustomWildCard';

import React from 'react';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Header(props) {
  const [show, setShow] = React.useState(false);
  const [card, setCard] = React.useState({});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    _.isEmpty(props.cards) ? setCard({}) : setCard(_.sample(props.cards));
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
