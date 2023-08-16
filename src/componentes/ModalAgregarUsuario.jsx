import Modal from 'react-bootstrap/Modal';
import '../css/adminScreen.css';
import api from '../api/api';
import swal from 'sweetalert';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const ModalAgregarUsuario = ({show, handleClose}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const handleAgregar = async(e) => {
        e.preventDefault();
        if(name == '' || email == '' || password == '' || repassword == ''){
              swal("❌","Complete los datos que faltan.");
        }else if(password !== repassword){
          swal("❌","Las contraseñas deben coincidir.");

        }else{
            try {
                const resp = await api.post('/auth/register',{
                    name,
                    email,
                    password
                });
              swal("✅",resp.data.msg);
                  setTimeout(() => {
                    handleClose()
                }, "1500");
            } catch (error) {
              swal({
                text: error.response.data.msg,
                button: false,
                timer: 1500
              });
            }
            
        }
    }
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar usuario</Modal.Title>
        </Modal.Header>
        <form className='form-editar' onSubmit={handleAgregar}>
          <input type="text" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} minLength={6} maxLength={20}/>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} minLength={6}/>
          <input type="password" placeholder='Repita contraseña' value={repassword} onChange={(e) => setRepassword(e.target.value)} minLength={6}/>
          <button className='btn-editar'>AGREGAR</button>
        </form>
      </Modal>
    </>
  )
}
