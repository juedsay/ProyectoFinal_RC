/* eslint-disable no-unused-vars */
import { useState } from "react"
import Header from "../componentes/Header"
import '../css/pedidoScreen.css'
import api from "../api/api";
import { useNavigate } from "react-router";
import swal from 'sweetalert';

export const PedidoScreen = () => {

  const [pedidO, setPedido] = useState(JSON.parse(localStorage.getItem('carrito')));
  const [total, setTotal] = useState(localStorage.getItem('total'));
  const user = JSON.parse(localStorage.getItem('user'));
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();
  const handlePedido = async (e) => {
    e.preventDefault();
    if (direccion !== '') {
      try {
        await api.post('/cart/pedido', {
          pedido: pedidO,
          direccion: direccion,
          total: total,
          id_usuario: user.id,
        });
        const carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        swal("✅","Gracias por su compra! Su pedido fue enviado.");
        setTimeout(() => {
          navigate('/mispedidos');
        }, "1500");
      } catch (error) {
        console.log(error)
      }
    }else{
      swal("❌",'Coloque una direccion!');
    }

  }
  return (
    <>
      <Header />
      <div className="mi-pedido">
        <h1>Pedido</h1>
        <div className="pedido">
          {
            pedidO.map((ele) => {
              return (
                <div className="pedido-inner" key={ele.id_prod}>
                  <img src={ele.imagen} alt={ele.nombre} />
                  <span>{ele.cantidad} x {ele.nombre}</span>
                  <span>$ {ele.precio * ele.cantidad}</span>
                </div>)
            })
          }
        </div>
        <div className="total-pedido">
          <span>Total</span>
          <span>$ {total}</span>
        </div>
        <div className="form-pedido">
          <h4>Direccion de envio: </h4>
          <form onSubmit={handlePedido}>
            <input type="text"
              placeholder="Direccion"
              value={direccion} onChange={(e) => setDireccion(e.target.value)}
              maxLength={200} />
          <div className="btn-container">
            <button className="btn-pedido">Realizar pedido</button>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}
