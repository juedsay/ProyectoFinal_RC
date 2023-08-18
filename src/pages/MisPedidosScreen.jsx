/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../componentes/Header"
import '../css/misPedidosScreen.css'
import Footer from "../componentes/Footer";

export const MisPedidosScreen = () => {

    const [pedidos, setPedidos] = useState([]);

    const obtenerPedidosUser = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
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
                {
                    pedidos.length !== 0 ? 
                    <>
                    <span className="recordatorio">* Una vez realizado el pedido, su pedido entra en estado `Pendiente`, luego a `Realizado` que es cuando se le envia el pedido. (promedio de demora 20min)</span>
                    </> : ''
                }

                {
                    pedidos.length !== 0 ?
                        pedidos.toReversed().map((pedido, index) => {

                            return (
                                <>
                                <div className="cart-mipedido" key={pedido._id}>
                                    <h5>Orden n° {index + 1}</h5>
                                    {
                                        pedido.pedido.map((ele) => {
                                            return (
                                                <span
                                                    key={ele.id_prod}
                                                    className="pedido-inn">
                                                    <span>
                                                        {ele.nombre}
                                                    </span>
                                                    <span>
                                                        {' X ' + ele.cantidad}
                                                    </span>
                                                </span>
                                            )
                                        })
                                    }
                                    <span className="pedido-inn">
                                        <span>{'A pagar:'}</span>
                                        <span>{'$' + pedido.total}</span>
                                    </span>
                                    <span className="pedido-inn">
                                        <span>
                                            {'Direccion:'}
                                        </span>
                                        <span>
                                            {pedido.direccion}
                                        </span>
                                    </span>
                                    <span className="pedido-inn">
                                        <span>{'Estado:'}</span>
                                        <span>{pedido.estado}</span>
                                    </span>
                                </div>                           
                                </>
                            )
                        })
                        
                        :
                        <div className="pedidoss">
                            <h1>No tienes ningun pedido</h1>
                        </div>
                }

            </div>
        </>

    )
}
