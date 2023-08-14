/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faU, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OffcanvasCart from '../componentes/OffcanvasCart';
import '../css/header.css';
import api from '../api/api';
import swal from 'sweetalert';
import logo from '../assets/logo.png'



export const Header = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [contadorCart, setContadorCart] = useState(JSON.parse(localStorage.getItem('carrito')).length);

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [rol, setRol] = useState('');
  const [jwt, setJWT] = useState('');

  const obtenerUsuario = async (req, res) => {

    if (user !== null) {
      try {
        const resp = await api.get(`/admin/usuario/${user.id}`)
        setRol(resp.data.usuario.rol);
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  useEffect(() => {
    setContadorCart(JSON.parse(localStorage.getItem('carrito')).length);
  }, []);

  const handlelogout = () => {
    swal({
      title: 'Seguro desea salir?',
      icon: "warning",
      buttons: ["NO", "SI"]
    }).then(resp => {
      if (resp) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        const carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        location.href = '/';
      }
    })
  }
  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <>

      <OffcanvasCart
        show={showOffCanvas}
        handleShow={handleShow}
        handleClose={handleClose}
        placement={'end'} />

      <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><NavLink to={'/'}> <img src={logo} className='logo-navbar' /> FastLibery </NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><NavLink className="navlink" to={'/mispedidos'}>Mis Pedidos</NavLink></Nav.Link>
              <Nav.Link><NavLink className="navlink" to={'/contacto'}>Contacto</NavLink></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><FontAwesomeIcon icon={faShoppingCart} onClick={handleShow} /><Badge bg="secondary"></Badge></Nav.Link>
              {
                user == null ?
                  <Nav.Link><NavLink to={'/login'}><FontAwesomeIcon icon={faUser} /></NavLink></Nav.Link> :
                  rol == 'Admin' ?
                    <>
                      <Nav.Link><NavLink to={'/Admin'}>ADMIN</NavLink></Nav.Link>
                      <Nav.Link><NavLink onClick={handlelogout}>LOGOUT</NavLink></Nav.Link>
                    </> :
                    <>
                      <Nav.Link><NavLink>{user.nombre}</NavLink></Nav.Link>
                      <Nav.Link><NavLink onClick={handlelogout}>LOGOUT</NavLink></Nav.Link>
                    </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;
