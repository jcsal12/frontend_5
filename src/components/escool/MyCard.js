import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './MyCard.css';
const maxDescriptionLength = 150;

function MyCard({ item }) {
  const { title, description, price, images } = item;
  let formatDescription;
  if(description.length > maxDescriptionLength){
    formatDescription = description.slice(0,maxDescriptionLength).concat('...');
  }

  return (
    <Col>
      <Card className='mycard'>
        <Card.Img className='mycard-img' variant="top" src={images} />
        <Card.Body>
          <Card.Text className='fs-4 fw-bold'>{price}€</Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{formatDescription}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MyCard;
