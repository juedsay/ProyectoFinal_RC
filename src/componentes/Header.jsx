import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/src/assets/4741565.jpg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#meals">Comidas</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="link" className="text-light">
              <i className="fas fa-shopping-cart"></i>
              <Badge pill variant="danger" className="ml-1">3</Badge>
            </Button>
            <Button variant="outline-light" className="mr-2">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Header;
