import React from "react";
// import { Card } from "react-bootstrap";
import '../Css/Cssapp/Cards.css';

const Card = ({ title, text, image }) => {
  return (
    <Card className='cards-cards'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card;