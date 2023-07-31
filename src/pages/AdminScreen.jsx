import '../css/adminScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
export const AdminScreen = () => {
  return (
    <>
    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      <div className='admin-container'>
        <div className='secciones'>
          <ul>
            <li><FontAwesomeIcon icon={faUser} /><span>Usuarios</span></li>
            <li><FontAwesomeIcon icon={faCartShopping} /><span>Productos</span></li>
            <li><FontAwesomeIcon icon={faPenToSquare} /><span>Pedidos</span></li>
            <li><FontAwesomeIcon icon={faHouseUser} /><span>Cuenta</span></li>
          </ul>  
        </div> 
        <div>
          USUARIOS
        </div> 
      </div>  
    
    </>
  )
}
