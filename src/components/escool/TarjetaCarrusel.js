import Card from 'react-bootstrap/Card';
import './TarjetaCarrusel.css';

function TarjetaCarrusel() {
  return (
    <Card className='tarjeta'>
      <Card.Body className='tarjeta-body'>
        <Card.Title className='titulo fs-1 fw-bold'>¿Quieres darle un mejor uso a tus libros viejos?</Card.Title>
        <Card.Link href="#"><button className='botonvender fs-3 primary'>Vender ya</button></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TarjetaCarrusel;