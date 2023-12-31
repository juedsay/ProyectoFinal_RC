/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../css/carrito.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



export const OffcanvasCart = ({ name, show, handleShow, handleClose }) => {

  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);

  const handleCostoTotal = () => {
    let total = 0;
    carrito.map((prod) => {
      total += (prod.cantidad * prod.precio);
    })
    localStorage.setItem('total', total);
  }
  const obtenerCarrito = () => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLS.length !== 0) {
      setCarrito(carritoLS);
    }
  }

  const handleSumar = (id) => {
    let carrit0 = carrito;
    carrit0.map((prod) => {
      if (prod.id_prod == id) {
        prod.cantidad += 1;
      }
    })
    setCarrito(carrit0);
    localStorage.setItem('carrito', JSON.stringify(carrit0));
    obtenerCarrito();
    handleCostoTotal();
  }
  const handleRestar = (id) => {
    let carrit0 = carrito;
    carrit0.map((prod) => {
      if (prod.id_prod == id) {
        if (prod.cantidad !== 1) {
          prod.cantidad -= 1;
        }
      }
    })
    setCarrito(carrit0);
    localStorage.setItem('carrito', JSON.stringify(carrit0));
    obtenerCarrito();
    handleCostoTotal();
  }

  const handleHacerPedido = () => {

    if (JSON.parse(localStorage.getItem('user')) == null) {
      swal("!", "Debe iniciar sesion primero.", "error");
      setTimeout(() => {
        navigate('/login');
      }, "1500");
    } else {
      navigate('/pedido');
    }
  }
  const handleEliminar = (id) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'));
    const cart = carritoLS.filter(ele => ele.id_prod !== id);
    localStorage.setItem('carrito', JSON.stringify(cart));
    setCarrito(cart);
  }

  useEffect(() => {
    obtenerCarrito();
  }, [show]);



  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            carrito.length !== 0 ?

              carrito.map((prod, index) => {
                return (
                  <>
                    <div className="product-carrito-container" key={index}>
                      <div className="product-carrito">
                        <img src={prod.imagen} alt="" />
                        <div className="info">
                          <span>
                            {prod.nombre}
                          </span>
                          <span>${prod.precio * prod.cantidad}</span>
                        </div>
                        <div className="info-btns">
                          <span onClick={() => handleRestar(prod.id_prod)}
                            className='boton-sr hover'>
                            -
                          </span>
                          <span className='cantidad'>{prod.cantidad}</span>
                          <span
                            onClick={() => handleSumar(prod.id_prod)}
                            className='boton-sr hover'>+</span>
                        <span onClick={() => handleEliminar(prod.id_prod)} className='hover btn-eliminar'>❌</span>
                        </div>
                      </div>            
                    </div>
                  </>
                )
              }) : <h6 className='w-100'>El carrito se encuentra vacio</h6>

          }{
            carrito.length !== 0 ?
              <>
                <div className="total">
                  <div className="total-inner">
                  <span>Total</span>
                  <span>${JSON.parse(localStorage.getItem('total'))}</span>
                  </div>
                  <div className='btn-carrito'>
                    <button onClick={() => handleHacerPedido()}>HACER PEDIDO</button>
                  </div>
                </div>
              </> : ''
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
export default OffcanvasCart;