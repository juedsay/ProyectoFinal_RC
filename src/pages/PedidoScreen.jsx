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
        localStorage.setItem('carrito', JSON.stringify(carrito))
        navigate('/mispedidos');
      } catch (error) {
        console.log(error)
      }
    }else{
      swal('ERROR','Coloque una direccion!',"error");
    }

  }
  return (
    <>
      <Header />
      <div className="mi-pedido">
        <div className="pedido">
          {
            pedidO.map((ele) => {
              return (
                <div className="pedido-inner" key={ele.id_prod}>
                  <img src={ele.imagen} alt={ele.nombre} />
                  <span>{ele.cantidad} x {ele.nombre}</span>
                  <span>{ele.precio * ele.cantidad}</span>
                </div>)
            })
          }
        </div>
        <div className="total-pedido">
          <h3>TOTAL : {total}</h3>
        </div>
        <div className="form-pedido">
          <h3>LUGAR DE ENVIO</h3>
          <form onSubmit={handlePedido}>
            <input type="text"
              placeholder="direccion"
              value={direccion} onChange={(e) => setDireccion(e.target.value)}
              maxLength={200} />
            <button>COMPRAR</button>
          </form>
        </div>
      </div>
    </>
  )
}
