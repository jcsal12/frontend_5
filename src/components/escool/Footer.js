import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_escool from './../../images/LOGO_ESCOOL22.png';
import descargas from './../../images/descargas.png';
import './Footer.css';

function Footer() {
  return (
    <Navbar className="general mt-5">
      <Container>
        <Navbar.Brand href="#home"><img src={logo_escool} alt="logo"></img></Navbar.Brand>
        <Navbar.Brand href="#home"><img src={descargas} alt="logo"></img></Navbar.Brand>
          <Nav className="listas">
            <Nav.Link ><strong>¿Necesitas ayuda?</strong></Nav.Link>
            <Nav.Link >Contactar</Nav.Link>
            <Nav.Link >Condiciones de uso</Nav.Link>
            <Nav.Link>Privacidad</Nav.Link>
          </Nav>
          <Nav className="listas">
            <Nav.Link ><strong>Sobre EsCool</strong></Nav.Link>
            <Nav.Link >Nuestro blog</Nav.Link>
            <Nav.Link >Sala de prensa</Nav.Link>
            <Nav.Link>Trabaja con nosotros</Nav.Link>
          </Nav>
          <Nav className="listas">
            <Nav.Link ><strong>Para profesionales</strong></Nav.Link>
            <Nav.Link >Encuentra tu cuenta</Nav.Link>
            <Nav.Link >EsCool Pro</Nav.Link>
            <Nav.Link >Nuestro Blog</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;