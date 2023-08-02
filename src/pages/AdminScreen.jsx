import '../css/adminScreen.css';
import chickenBurger from '../assets/product_01.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import api from '../api/api'
import Modal from 'react-modal';


Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export const AdminScreen = () => {

  // MANEJO DE SWITCHER DE CATEGORIAS ↓ ↓ ↓
  const [showUsers, setShowUsers] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showPedidos, setShowPedidos] = useState(false);
  const [showCuenta, setShowCuenta] = useState(false);

  const handleShowUsers = () => {
    setShowUsers(true);
    setShowProducts(false);
    setShowPedidos(false);
    setShowCuenta(false);
  }
  const handleShowProducts = () => {
    setShowUsers(false);
    setShowProducts(true);
    setShowPedidos(false);
    setShowCuenta(false);
  }
  const handleShowPedidos = () => {
    setShowUsers(false);
    setShowProducts(false);
    setShowPedidos(true);
    setShowCuenta(false);
  }
  const handleShowCuenta = () => {
    setShowUsers(false);
    setShowProducts(false);
    setShowPedidos(false);
    setShowCuenta(true);
  }
  // // // / // // 

  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async () => {
    try {
      const resp = await api.get('/admin/usuarios');
      console.log(resp.data.usuarios)

      setUsuarios(resp.data.usuarios);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerUsuarios();
  }, []);


  // MODAL FUNCTIONS 
  let subtitle;
  const [modalIsOpenEditar, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("si")
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <Modal
        isOpen={modalIsOpenEditar}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
      <h3>EDITAR USUARIO</h3>
        <form className='form-editar'>
          <input type="text" placeholder='Nombre' />
          <input type="email" placeholder='email' />
          <select name="select">
            <option value="value1" selected>Habilitado</option>
            <option value="value2">Deshabilitado</option>
          </select>
          <select name="select">
            <option value="value1" selected>Usuario</option>
            <option value="value2">admin</option>
          </select>
          <input type="text" />
        </form>
      </Modal>

      <div className='admin-container'>
        <div className='secciones'>
          <ul>
            <li onClick={handleShowUsers}><FontAwesomeIcon icon={faUser} /><span>Usuarios</span></li>
            <li onClick={handleShowProducts}><FontAwesomeIcon icon={faCartShopping} /><span>Productos</span></li>
            <li onClick={handleShowPedidos}><FontAwesomeIcon icon={faPenToSquare} /><span>Pedidos</span></li>
            <li onClick={handleShowCuenta}><FontAwesomeIcon icon={faHouseUser} /><span>Cuenta</span></li>
          </ul>
        </div>
        {
          showUsers ? <>
            <table className='tablas'>
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>EMAIL</th>
                  <th>ROL</th>
                  <th>ESTADO</th>
                  <th>ELIMINAR</th>
                  <th>EDITAR</th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map(usuarios => (
                    <tr key={usuarios._id}>
                      <td>{usuarios.name}</td>
                      <td>{usuarios.email}</td>
                      <td>{usuarios.rol}</td>
                      <td>{usuarios.estado}</td>
                      <td>❌</td>
                      <td onClick={openModal}>📝</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </> : ''
        }
        {
          showProducts ? <>
            <table className='tablas'>
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>🖼️</th>
                  <th>PRECIO</th>
                  <th>ESTADO</th>
                  <th>CATEGORIA</th>
                  <th>DETALLE</th>
                  <th>ELIMINAR</th>
                  <th>EDITAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chicken burger</td>
                  <td><img src={chickenBurger} alt="" className='img-prod' /></td>
                  <td>$1500</td>
                  <td>DISPONIBLE</td>
                  <td>HAMBURGUESAS</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem.</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>
                <tr>
                  <td>Chicken burger</td>
                  <td><img src={chickenBurger} alt="" className='img-prod' /></td>
                  <td>$1500</td>
                  <td>DISPONIBLE</td>
                  <td>HAMBURGUESAS</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem.</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>
                <tr>
                  <td>Chicken burger</td>
                  <td><img src={chickenBurger} alt="" className='img-prod' /></td>
                  <td>$1500</td>
                  <td>DISPONIBLE</td>
                  <td>HAMBURGUESAS</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem.</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>

              </tbody>
            </table>
          </> : ''
        }
        {
          showPedidos ? <>
            <table className='tablas'>
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>EMAIL</th>
                  <th>ROL</th>
                  <th>ESTADO</th>
                  <th>ELIMINAR</th>
                  <th>EDITAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Cruz</td>
                  <td>juan@gmail.com</td>
                  <td>usuario</td>
                  <td>ACTIVO</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>
                <tr>
                  <td>Juan Cruz</td>
                  <td>juan@gmail.com</td>
                  <td>usuario</td>
                  <td>ACTIVO</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>
                <tr>
                  <td>Juan Cruz</td>
                  <td>juan@gmail.com</td>
                  <td>usuario</td>
                  <td>ACTIVO</td>
                  <td>❌</td>
                  <td>📝</td>
                </tr>
              </tbody>
            </table>
          </> : ''
        }
        {
          showCuenta ? <>
            <div>
              CUENTA
            </div>
          </> : ''
        }

      </div>

    </>
  )
}
