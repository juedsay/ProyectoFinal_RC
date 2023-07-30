import { useState } from 'react';
import '../css/login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [msgErrorEmail, setMsgerroremail] = useState(false);
  const [msgErrorPass, setMsgerrorpass] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail(email.toLowerCase())
    
    if(email == '' && password == ''){
      setMsgerroremail(true)
      setMsgerrorpass(true)
    }else if(email == ''){
      setMsgerroremail(true)
    }else if(password == ''){
      setMsgerrorpass(true)
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Logueado con exito!',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigate('/')
      }, 1500);
    }

    
    



  }

  return (
    <>
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <input className='input-login' type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                {msgErrorEmail ? <>
                <span className='msg-error'>Ingrese email</span> 
                </> : ''}
                <input className='input-login' type="password" placeholder="Contraseña" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                {msgErrorPass ? <>
                <span className='msg-error'>Ingrese contraseña</span> 
                </> : ''}
                <button className='btn-login'>Login</button>
            </form>
            <span><a href="">No tienes cuenta? Create una</a></span>
            
        </div>
    </>
  )
}
