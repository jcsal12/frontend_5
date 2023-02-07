import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({ item }) {
  const {title, description, price, images } = item;
  console.log(images);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0].xsmall} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">{price}€</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;