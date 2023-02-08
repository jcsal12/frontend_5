import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({ item }) {
  const { title, description, price, images } = item;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={images[0].xsmall} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">{price}€</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MyCard;
