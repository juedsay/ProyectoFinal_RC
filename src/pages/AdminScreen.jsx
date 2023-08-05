import '../css/adminScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import api from '../api/api';
import { ModalEditarUsuario } from '../componentes/ModalEditarUsuario';
import { ModalAgregarUsuario } from '../componentes/ModalAgregarUsuario';
import { ModalEditarProducto } from '../componentes/ModalEditarProducto';
import { ModalAgregarProducto } from '../componentes/ModalAgregarProducto';

import swal from 'sweetalert';

export const AdminScreen = () => {

  const obtenerUsuarios = async () => {
    try {
      const resp = await api.get('/admin/usuarios');
      setUsuarios(resp.data.usuarios);
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarUsuario = async (id) => {
    try {
      await api.delete(`/admin/usuario/${id}`);
      obtenerUsuarios();
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerProductos = async () => {
    try {
      const resp = await api.get('/admin/productos');
      setProductos(resp.data.productos);
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarProducto = async (id) => {
    try {
      await api.delete(`/admin/producto/${id}`);
      obtenerProductos();
    } catch (error) {
      console.log(error)
    }
  }

  // ELIMINAR USUARIO
  const handleEliminarUsuario = (id) => {
    swal({
      title: 'Seguro desea eliminar?',
      icon: "warning",
      buttons: ["NO", "SI"]
    }).then(resp => {
      if (resp) {
        eliminarUsuario(id);
        swal({
          text: "Usuario eliminado.",
          icon: "success",
          timer: "1500"
        })

      }
    })
  }

  // ELIMINAR PRODUCTO
  const handleEliminarProducto = (id) => {
    swal({
      title: 'Seguro desea eliminar?',
      icon: "warning",
      buttons: ["NO", "SI"]
    }).then(resp => {
      if (resp) {
        eliminarProducto(id);
        swal({
          text: "Producto eliminado.",
          icon: "success",
          timer: "1500"
        })

      }
    })
  }

  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);

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
  /////////////////////////////////////////////

  useEffect(() => {
    obtenerUsuarios();
    obtenerProductos();
  }, []);

  // ESTADOS Y FUNCTION PARA MODAL EDITAR USUARIO
  const [showEditUser, setShowEditarUsuario] = useState(false);
  const [usuarioSelected, setUsuarioSelected] = useState([]);

  const closeEditUsuario = () => {
    setShowEditarUsuario(false);
    obtenerUsuarios();
  };
  const showEditUsuario = (usuario) => {
    setUsuarioSelected(usuario);
    setShowEditarUsuario(true)
  };

  // ESTADOS y FUNCIONES PARA MODAL AGREGAR USUARIO
  const [showAddUsuario, setShowAddUsuario] = useState(false);

  const handleCloseAddUser = () => {
    setShowAddUsuario(false);
    obtenerUsuarios();
  }
  const handleShowAddUser = () => setShowAddUsuario(true);
  
  // ESTADOS y FUNCIONES PARA MODAL AGREGAR PRODUCTO
  const [showAddProducto, setShowAddProducto] = useState(false);

  const handleCloseAddProducto = () => {
    setShowAddProducto(false);
    obtenerProductos();
  }
  const handleShowAddProducto = () => setShowAddProducto(true);

  // ESTADOS Y FUNCTION PARA MODAL EDITAR PRODUCTO
  const [showEditProd, setShowEditProd] = useState(false);
  const [prodSelected, setProdSelected] = useState([]);

  const closeEditProd = () => {
    setShowEditProd(false);
    obtenerProductos();
  };
  const showEditProducto = (producto) => {
    setProdSelected(producto);
    setShowEditProd(true);
  };


  return (
    <>
      {/***** MODALES *****/}
      {
        showEditUser ?

          <ModalEditarUsuario
            show={showEditUsuario}
            handleClose={closeEditUsuario}
            id={usuarioSelected._id}
            name={usuarioSelected.name}
            email={usuarioSelected.email}
            estado={usuarioSelected.estado}
            rol={usuarioSelected.rol}
          /> : <></>

      }
      {
        showAddUsuario ?
          <ModalAgregarUsuario
            show={handleShowAddUser}
            handleClose={handleCloseAddUser}
          /> : <></>
      }

      {
        showAddProducto ?
          <ModalAgregarProducto
            show={handleShowAddProducto}
            handleClose={handleCloseAddProducto}
          /> : <></>
      }

      {
      showEditProd ?
          <ModalEditarProducto
            show={showEditProd}
            handleClose={closeEditProd}
            id={prodSelected._id}
            nombre={prodSelected.nombre}
            estado={prodSelected.estado}
            precio={prodSelected.precio}
            detalle={prodSelected.detalle}
            imagen={prodSelected.imagen}
            categoria={prodSelected.categoria}
          /> : <></>

      }



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
                  <th onClick={handleShowAddUser}>Agregar</th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map((usuario) => (
                    <tr key={usuario._id}>
                      <td>{usuario.name}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.rol}</td>
                      <td>{usuario.estado}</td>
                      <td onClick={() => handleEliminarUsuario(usuario._id)}>❌</td>
                      <td onClick={() => showEditUsuario(usuario)} >📝</td>
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
                  <th onClick={handleShowAddProducto}>Agregar</th>
                </tr>
              </thead>
              <tbody>

                {
                  productos.map((prod) => (
                    <tr key={prod._id}>
                      <td>{prod.nombre}</td>
                      <td><img src={prod.imagen} alt={prod.nombre} className='img-prod' /></td>
                      <td>{prod.precio}</td>
                      <td>{prod.estado}</td>
                      <td>{prod.categoria}</td>
                      <td>{prod.detalle}</td>
                      <td onClick={() => handleEliminarProducto(prod._id)}>❌</td>
                      <td onClick={() => showEditProducto(prod)}>📝</td>
                    </tr>
                  ))
                }
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
