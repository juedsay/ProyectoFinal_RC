import '../css/adminScreen.css';
import chickenBurger from '../assets/product_01.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export const AdminScreen = () => {

  const [showUsers, setShowUsers] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showPedidos, setShowPedidos] = useState(false);
  const [showCuenta, setShowCuenta] = useState(false);

  const handleShowUsers = () =>{
    setShowUsers(true);
    setShowProducts(false);
    setShowPedidos(false);
    setShowCuenta(false);
  }

  const handleShowProducts = () =>{
    setShowUsers(false);
    setShowProducts(true);
    setShowPedidos(false);
    setShowCuenta(false);
  }
  const handleShowPedidos = () =>{
    setShowUsers(false);
    setShowProducts(false);
    setShowPedidos(true);
    setShowCuenta(false);
  }
  const handleShowCuenta = () =>{
    setShowUsers(false);
    setShowProducts(false);
    setShowPedidos(false);
    setShowCuenta(true);
  }
  return (
    <>
    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
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
