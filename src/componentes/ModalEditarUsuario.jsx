import Modal from 'react-bootstrap/Modal';
import '../css/adminScreen.css';
import api from '../api/api';
import swal from 'sweetalert';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export const ModalEditarUsuario = ({ show, handleClose, id, name, email, estado, rol}) => {

  const [namE, setName] = useState(name);
  const [emaiL, setEmail] = useState(email);
  const [estadO, setEstado] = useState(estado);
  const [roL, setRol] = useState(rol);

  const editarUsuario = async (_id, name, email, estado, rol) => {
    try {
			const resp = await api.put('admin/editarUsuario', {
				_id,
				name,
				email,
				estado,
				rol,
			});
      swal("✅","Usuario actualizado.");

      setTimeout(() => {
        handleClose()
      }, "1500");
		} catch (error) {
			console.log(error);
		}
  }

  const handleEditar = (e) => {
    e.preventDefault();
    if(namE.length == 0 || emaiL.length == 0){
      swal("❌","Complete los datos que faltan.");

    }else{
      editarUsuario(id,namE,emaiL,estadO,roL);
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <form className='form-editar' onSubmit={handleEditar}>
          <input type="text" placeholder='Nombre' value={namE} onChange={(e) => setName(e.target.value)} minLength={6}/>
          <input type="email" placeholder='email' value={emaiL} onChange={(e) => setEmail(e.target.value)}/>
          <select name="select" value={estadO} onChange={(e) => setEstado(e.target.value)}>
            <option>{estadO}</option>
            {estadO == 'Habilitado' ? <>
              <option>Deshabilitado</option>
            </> : <option>Habilitado</option>}
          </select>
          <select name="select" value={roL} onChange={(e) => setRol(e.target.value)}>
          <option>{roL}</option>
            {roL == 'usuario' ? <>
              <option>Admin</option>
            </> : <option>Usuario</option>}
          </select>
          <button className='btn-editar'>GUARDAR</button>
        </form>
      </Modal>
    </>
  )
}
