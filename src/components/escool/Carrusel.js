import Carousel from 'react-bootstrap/Carousel';
import TarjetaCarrusel from './TarjetaCarrusel';
import portada from './../../images/portada.png';
import carrusel2 from './../../images/carrusel2.png';
import { Col, Row } from 'react-bootstrap';
import './Carrusel.css';

function Carrusel() {
  return (
    <Row>
      <Col>
        <Carousel fade >
          <Carousel.Item>
            <img className='vh-100 vw-100 img-fluid' src={portada} alt='First slide' />
            <Carousel.Caption className='carousel-caption'>
              <TarjetaCarrusel></TarjetaCarrusel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block vh-100 vw-100"
              src={carrusel2}
              alt="Second slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <TarjetaCarrusel></TarjetaCarrusel>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Carrusel;
