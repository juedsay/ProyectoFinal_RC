/* eslint-disable no-unused-vars */
import '../css/adminScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { ModalEditarUsuario } from '../componentes/ModalEditarUsuario';
import { ModalAgregarUsuario } from '../componentes/ModalAgregarUsuario';
import { ModalEditarProducto } from '../componentes/ModalEditarProducto';
import { ModalAgregarProducto } from '../componentes/ModalAgregarProducto';
import Header from '../componentes/Header';
import api from '../api/api';
import swal from 'sweetalert';
import { ModalEditarPedido } from '../componentes/ModalEditarPedido';
import { useNavigate } from 'react-router';

export const AdminScreen = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [rol, setRol] = useState('');

  const obtenerUsuario = async (req, res) => {
    if (user !== null) {
      try {
        const resp = await api.get(`/admin/usuario/${user.id}`)
        if(resp.data.usuario.rol !== 'Admin'){
          // location.href = '/';
          navigate('/');
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      navigate('/');
    }
    
  }

  const obtenerUsuarios = async () => {
    try {
      const resp = await api.get('/admin/usuarios').then((resp)=>{
      setUsuarios(resp.data.usuarios);
});
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarUsuario = async (id) => {
    try {
      await api.delete(`/admin/usuario/${id}`);
      obtenerUsuarios();
    } catch (error) {
      console.log(error);
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

  const obtenerPedidos = async () => {
    try {
      const resp = await api.get('/cart/pedidos');
      setPedidos(resp.data.pedidos);
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
        swal("✅","Usuario eliminado.");

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
        swal("✅","Producto eliminado.");
      }
    })
  }

  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

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
    obtenerPedidos();
    obtenerUsuario();
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

  // ESTADOS Y FUNCTION PARA MODAL EDITAR PEDIDO
  const [showEP, setShowEP] = useState(false);
  const [estadoEP, setEstadoEP] = useState('');
  const [IdEP, setIdEP] = useState('');

  const handleCloseEP = () => {
    obtenerPedidos();
    setShowEP(false)
  };

  const handleShowEP = (id,estado) => {
    setEstadoEP(estado);
    setIdEP(id);
    setShowEP(true)};

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
        showEP ?

          <ModalEditarPedido
            show={handleShowEP}
            handleClose={handleCloseEP}
            id={IdEP}
            estado={estadoEP}

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


      <Header />
          <h1 className='w-100 txt-align-center'>ADMIN</h1>
        <div className='admin-container'>
        <div className='secciones'>
          <ul>
            <li onClick={handleShowUsers}><FontAwesomeIcon icon={faUser} /><span>Usuarios</span></li>
            <li onClick={handleShowProducts}><FontAwesomeIcon icon={faCartShopping} /><span>Productos</span></li>
            <li onClick={handleShowPedidos}><FontAwesomeIcon icon={faPenToSquare} /><span>Pedidos</span></li>
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
                  <th className='hover' onClick={handleShowAddUser}>Agregar</th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map((usuario) => (
                    <tr key={usuario._id}>
                      <td data-cell="Nombre">{usuario.name}</td>
                      <td data-cell="Email">{usuario.email}</td>
                      <td data-cell="Rol">{usuario.rol}</td>
                      <td data-cell="Estado">{usuario.estado}</td>
                      <td data-cell="Eliminar" onClick={() => handleEliminarUsuario(usuario._id)} className='hover'>❌</td>
                      <td data-cell="Editar" onClick={() => showEditUsuario(usuario)} className='hover'>📝</td>
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
                  <th onClick={handleShowAddProducto} className='hover'>Agregar</th>
                </tr>
              </thead>
              <tbody>

                {
                  productos.map((prod) => (
                    <tr key={prod._id}>
                      <td data-cell="Nombre">{prod.nombre}</td>
                      <td data-cell="Imagen"><img src={prod.imagen} alt={prod.nombre} className='img-prod' /></td>
                      <td data-cell="Precio">{prod.precio}</td>
                      <td data-cell="Estado">{prod.estado}</td>
                      <td data-cell="Categoria">{prod.categoria}</td>
                      <td data-cell="Detalle">{prod.detalle}</td>
                      <td data-cell="Eliminar" onClick={() => handleEliminarProducto(prod._id)} className='hover'>❌</td>
                      <td data-cell="Editar" onClick={() => showEditProducto(prod)} className='hover'>📝</td>
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
                  <th>PEDIDO</th>
                  <th>DIRECCION</th>
                  <th>FECHA</th>
                  <th>TOTAL</th>
                  <th>ESTADO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {
                  pedidos.map((pedido) => {
                    return(
                      <tr key={pedido._id}>
                        <td data-cell="Pedido" className="pedidos-admin">
                          {
                            pedido.pedido.map((ele)=> {
                              return(
                                <>
                                  <span>
                                    {ele.nombre + " x " + ele.cantidad}
                                    </span>
                                </>
                              )
                            })
                          }
                        </td>
                        <td data-cell="Direccion">{pedido.direccion}</td>
                        <td data-cell="Fecha">{pedido.fecha}</td>
                        <td data-cell="Total">{pedido.total}</td>
                        <td data-cell="Estado">{pedido.estado}</td>
                        <td data-cell="Accion" onClick={() => handleShowEP(pedido._id, pedido.estado)}><button>EDITAR</button></td>
                      </tr>
                    )
                  })
                }

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
