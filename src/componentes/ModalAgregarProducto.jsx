import Modal from 'react-bootstrap/Modal';
import '../css/adminScreen.css';
import api from '../api/api';
import swal from 'sweetalert';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const ModalAgregarProducto = ({show, handleClose}) => {
    const [nombre, setName] = useState('');
    const [detalle, setDetalle] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('Hambur');
    const [estado, setEstado] = useState('Disponible');
    const [imagen, setImagen] = useState('');

    const handleAgregar = async(e) => {
        e.preventDefault();
        if(nombre == '' || detalle == '' || imagen == ''){
            swal({
                icon: 'error',
                text: 'Complete los datos que faltan.',
                button: false,
                timer: 1500
              });
        }else{
            try {
                const resp = await api.post('/admin/producto',{
                    nombre,
                    estado,
                    precio,
                    imagen,
                    detalle,
                    categoria
                });
                swal({
                    text: resp.data.msg,
                    button: false,
                    timer: 1500
                  });
                  setTimeout(() => {
                      handleClose()
                  }, "1500");
                console.log(resp.data.msg)
            } catch (error) {
                console.log(error)
            }
            
        }
    }
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <form className='form-editar' onSubmit={handleAgregar}>
          <input type="text" placeholder='Nombre' value={nombre} onChange={(e) => setName(e.target.value)} maxLength={20}/>
          <input type="text" placeholder='Detalle' value={detalle} onChange={(e) => setDetalle(e.target.value)} maxLength={20}/>
          <input type="number" placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} min={1} max={9999}/>
          <input type="text" placeholder='Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)}/>
          <select name="select" value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option>Disponible</option>
                <option>No disponible</option>
          </select>
          <select name="select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option>Hambur</option>
                <option>Pizza</option>
                <option>Papas</option>
          </select>
          <button className='btn-editar'>AGREGAR</button>
        </form>
      </Modal>
    </>
  )
}
