import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../componentes/Header"
import '../css/misPedidosScreen.css'

export const MisPedidosScreen = () => {

    const [pedidos, setPedidos] = useState([]);

    const obtenerPedidosUser = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user !== null){
            try {
                const resp = await api.get(`/cart/pedido/${user.id}`);
                setPedidos(resp.data.pedido);
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        obtenerPedidosUser();
    }, []);
    return (
        <>
            <Header />
            <div className="mispedidos">
                <h3 className="w100">MIS PEDIDOS</h3>
                {
                    pedidos.length !== 0 ? 
                    pedidos.map((pedido) => {
                        
                        return(
                            <div className="cart-mipedido" key={pedido._id}>
                                <div className="pedidos">
                                {
                                    pedido.pedido.map((ele) => {
                                        return (
                                            <span key={ele.id_prod}>
                                               {ele.nombre + ' X ' + ele.cantidad}
                                            </span>
                                        )
                                    })
                                }
                                <span>{'A pagar: $' + pedido.total}</span>
                                <span>{'Direccion: ' + pedido.direccion}</span>
                                <span>{'Estado: ' + pedido.estado}</span>
                                </div>
                            </div>
                        )
                    }) : <h1>No tienes ningun pedido</h1>
                }
                
            </div>
        </>
    )
}
