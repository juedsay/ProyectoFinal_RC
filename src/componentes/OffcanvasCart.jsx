/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../css/carrito.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { useEffect } from 'react';


export const OffcanvasCart = ({ name, show, handleShow, handleClose }) => {


  const [carrito, setCarrito] = useState([]);
  const [costoTotal, setCostoTotal] = useState(0);

  const handleCostoTotal = () => {
    let total = 0;
    carrito.map((prod) => {
      total += (prod.cantidad * prod.precio);
    })
    setCostoTotal(total);
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
  useEffect(() => {
    obtenerCarrito();
    handleCostoTotal();
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

            carrito.map((prod) => {
              return (
                <>
              <div className="product-carrito-container" key={prod.id_prod}>
                <img src={prod.imagen} alt="" />
                <div className="info">
                  <span>
                    {prod.nombre}
                    asdasd
                  </span>
                  <span>
                    <span 
                    onClick={() => handleRestar(prod.id_prod)}
                    className='boton-sr'>-</span>
                    <span>{prod.cantidad}</span>
                    <span 
                    onClick={() => handleSumar(prod.id_prod)}
                    className='boton-sr'>+</span>
                  </span>
                </div>
                  <span>${prod.precio * prod.cantidad}</span>
                </div>
                  </>
              )
            }) : <h1>Carrito vacio</h1>

          }{
            carrito.length !== 0 ? 
            <>
            <div className="total">
              <span>TOTAL: {costoTotal}</span>
              <button>HACER PEDIDO</button>
            </div>
            </> : ''
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
export default OffcanvasCart;