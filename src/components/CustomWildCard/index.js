import React from 'react';
import Card from'react-bootstrap/Card';

function CustomWildCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">created by {props.creator}</small>
      </Card.Footer>
    </Card>
  );
}

export default CustomWildCard;
