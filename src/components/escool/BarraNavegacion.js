import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo_escool from './../../images/LOGO_ESCOOL22.png';
import escool from './../../images/fuente 1.png';
import {Link} from 'react-router-dom';
import './BarraNavegacion.css';
import GoogleButton from 'react-google-button'

function BarraNavegacion() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="white">
      <Container>
        <Navbar.Brand onClick={scrollTop}><img src={logo_escool} alt="logo"></img></Navbar.Brand>
        <Navbar.Brand onClick={scrollTop}><img src={escool} alt="fuentelogo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Escolares</Nav.Link>
            <Nav.Link >De lectura</Nav.Link>
            <Nav.Link>Populares</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/dashboard/"><Button className='navbar-login mx-2 mt-3'>INICIA SESIÓN</Button></Link>
            <Link to="/register"><Button className='navbar-register mx-2 mt-3'>REGÍSTRATE</Button></Link>
            <Link to="/login-google"><GoogleButton></GoogleButton></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;