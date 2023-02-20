import { Row, Col } from 'react-bootstrap';
import cartel from './../../images/cartel.png';
import './Cartel.css';

function Cartel() {
  return (
    <Row >
      <Col>
        <img className="cartel mt-5 mb-5 mx-auto" alt='cartel' src={cartel}></img>
      </Col>
    </Row>
  );
}

export default Cartel;