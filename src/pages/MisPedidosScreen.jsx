import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../componentes/Header"
import '../css/misPedidosScreen.css'

export const MisPedidosScreen = () => {

    const [pedidos, setPedidos] = useState([]);

    const obtenerPedidosUser = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            const resp = await api.get(`/cart/pedido/${user.id}`);
            setPedidos(resp.data.pedido);
        } catch (error) {
            console.log(error)
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
                    pedidos.map((pedido) => {
                        
                        return(
                            <div className="cart-mipedido" key={pedido._id}>
                                <div className="pedidos">
                                {
                                    pedido.pedido.map((ele) => {
                                        return (
                                            <span key={ele.id_prod}>
                                               {ele.nombre + 'x ' + ele.cantidad}
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
                    })
                }
                {/* 
                <div className="cart-mipedido">
                    <div className="pedidos">
                        <span>Chicken burger x 2</span>
                        <span>Chicken burger x 3</span>
                        <span>Chicken burger x 4</span>
                        <span>Chicken burger x 10</span>
                        <span>Chicken burger x 8</span>
                    </div>
                    <span>Direccion: Barrio borges calle 10 y 114</span>
                    <span>Estado: Pendiente</span>
                    <span>A pagar: $9500</span>
                </div> */}
            </div>
        </>
    )
}
