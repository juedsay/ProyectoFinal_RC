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
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRePassword, setErrorRePassword] = useState(false);
  const [errorCD, setErrorCD] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();

    if(nombre == ''){
      setErrorNombre(true);
    }
    if(email == ''){
      setErrorEmail(true);
    }
    if(password == ''){
      setErrorPassword(true);
      setErrorCD(false);
    }
    if(repassword == ''){
      setErrorRePassword(true);
      setErrorCD(false);
    }
    if(nombre !== '' && email !== '' && password !== '' && repassword !== ''){
      if(password == repassword){
        Swal.fire({
          icon: 'success',
          title: 'Registrado con exito!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          navigate('/')
        }, 1500);
      }else{
        setErrorNombre(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorRePassword(false);
        setErrorCD(true);
      }
    }
    
    
  }

  return (
    <>
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <input className='input-login' type="text" placeholder="Nombre" 
                value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={20}/>
                 {errorNombre ? <>
                <span className='msg-error'>Ingrese nombre</span> 
                </> : ''}
                <input className='input-login' type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                 {errorEmail ? <>
                <span className='msg-error'>Ingrese email</span> 
                </> : ''}
                <input className='input-login' type="password" placeholder="Contraseña" 
                value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} maxLength={12}/>
                 {errorPassword ? <>
                <span className='msg-error'>Ingrese contraseña</span> 
                </> : ''}
                <input className='input-login' type="password" placeholder="Repita contraseña" 
                value={repassword} onChange={(e) => setRePassword(e.target.value)} minLength={6} maxLength={12}/>
                 {errorRePassword ? <>
                <span className='msg-error'>Ingrese contraseña</span> 
                </> : ''}
                 {errorCD ? <>
                <span className='msg-error'>Las contraseñas no coinciden</span> 
                </> : ''}
                <button className='btn-login'>Registrarse</button>
            </form>            
        </div>
    </>
  )
}
