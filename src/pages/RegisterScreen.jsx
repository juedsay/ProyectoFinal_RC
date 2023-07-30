import { useState } from 'react';
import '../css/login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export const RegisterScreen = () => {

  const navigate = useNavigate();
  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repassword,setRePassword] = useState('');
  const [msgErrorEmail, setMsgerroremail] = useState(false);
  const [msgErrorPass, setMsgerrorpass] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <input className='input-login' type="text" placeholder="Nombre" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='input-login' type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='input-login' type="text" placeholder="Contraseña" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='input-login' type="password" placeholder="Repita contraseña" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='btn-login'>Registrarse</button>
            </form>
            <span><a href="">No tienes cuenta? Create una</a></span>
            
        </div>
    </>
  )
}
