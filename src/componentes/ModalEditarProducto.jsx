import Modal from 'react-bootstrap/Modal';
import '../css/adminScreen.css';
import api from '../api/api';
import swal from 'sweetalert';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export const ModalEditarProducto = ({ show, handleClose, id, nombre, estado, precio, detalle, imagen, categoria}) => {

  const [nombrE, setNombre] = useState(nombre);
  const [preciO, setPrecio] = useState(precio);
  const [estadO, setEstado] = useState(estado);
  const [detallE, setDetalle] = useState(detalle);
  const [imageN, setImagen] = useState(imagen);
  const [categoriA, setCategoria] = useState(categoria);

  const editarProducto = async (_id, nombre, estado, precio, detalle, imagen, categoria) => {
    try {
			const resp = await api.put('admin/producto', {
				_id,
				nombre,
				estado,
				precio,
				detalle,
        imagen,
        categoria
			});
			swal({
        icon: 'success',
        text: resp.data.msg,
        button: false,
        timer: 1500
      });
      setTimeout(() => {
        handleClose()
    }, "1500");
		} catch (error) {
			console.log(error);
		}
  }

  const handleEditar = (e) => {
    e.preventDefault();
    if(nombrE.length == 0 || detallE.length == 0 || imageN == 0){
      swal({
        icon: 'error',
        text: 'Complete los campos que faltan.',
        button: false,
        timer: 1500
      });
    }else{
      editarProducto(id, nombrE, estadO, preciO, detallE, imageN, categoriA);
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <form className='form-editar' onSubmit={handleEditar}>
          <input type="text" placeholder='Nombre' value={nombrE} onChange={(e) => setNombre(e.target.value)} minLength={6}/>
          <input type="number" placeholder='Precio' value={preciO} onChange={(e) => setPrecio(e.target.value)} max={9999}/>
          <input type="text" placeholder='Detalle' value={detallE} onChange={(e) => setDetalle(e.target.value)} maxLength={200}/>
          <input type="text" placeholder='IMG URL' value={imageN} onChange={(e) => setImagen(e.target.value)} />
          <select name="select" value={estadO} onChange={(e) => setEstado(e.target.value)}>
            <option>{estadO}</option>
            {estadO == 'Disponible' ? <>
              <option>No disponible</option>
            </> : <option>Disponible</option>}
          </select>
          <select name="select" value={categoriA} onChange={(e) => setCategoria(e.target.value)}>
          <option>{categoriA}</option>
            {
                categoriA == 'Hambur' ? 
                <>
                    <option>Pizza</option>
                    <option>Papas</option>
                </> : 
                categoriA == 'Pizza' ? 
                <>
                    <option>Hamburguesa</option>
                    <option>Papas</option>
                </> : 
                categoriA == 'Papas' ? 
                <>
                    <option>Hamburguesa</option>
                    <option>Pizza</option>
                </> : ''
            }
          </select>
          <button className='btn-editar'>GUARDAR</button>
        </form>
      </Modal>
    </>
  )
}