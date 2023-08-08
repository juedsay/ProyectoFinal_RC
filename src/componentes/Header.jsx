/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faU, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import OffcanvasCart from '../componentes/OffcanvasCart';



export const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);
  
  return (
    <>

  <OffcanvasCart 
  show={showOffCanvas} 
  handleShow={handleShow} 
  handleClose={handleClose}
  placement={'end'} />

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><NavLink to={'/'}>Delivery Fast</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#features">Comidas</NavLink>
            <NavLink href="#pricing">Contacto</NavLink>
            <NavLink to={'/mispedidos'}>Mis Pedidos</NavLink>
          </Nav>
          <Nav>
            <Nav.Link><FontAwesomeIcon icon={faShoppingCart} onClick={handleShow}/><Badge bg="secondary">2</Badge></Nav.Link>
            <Nav.Link>Cuenta<FontAwesomeIcon icon={faUser} /></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Header;
