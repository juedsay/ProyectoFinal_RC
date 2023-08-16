import Modal from 'react-bootstrap/Modal';
import '../css/adminScreen.css';
import api from '../api/api';
import swal from 'sweetalert';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export const ModalEditarPedido = ({ show, handleClose, id, estado }) => {

    const [estad0, setEstad0] = useState(estado);

    const editarPedido = async (_id, estado) => {
        try {
            const resp = await api.put('cart/pedido', {
                _id,
                estado,
            });
            swal("✅",resp.data.msg);
            setTimeout(() => {
                handleClose()
            }, "1500");
        } catch (error) {
            alert(error);
        }
    }
const handleEditar = (e) => {
    e.preventDefault();
    editarPedido(id, estad0)
}

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar pedido</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleEditar}>
                    <select name="select" value={estad0} onChange={(e) => setEstad0(e.target.value)}>
                        <option>{estado}</option>
                        {estado == 'Pendiente' ? <>
                            <option>Realizado</option>
                        </> : <option>Pendiente</option>}
                    </select>
                    <button>Guardar</button>
                </form>
            </Modal>
        </>
    )
}