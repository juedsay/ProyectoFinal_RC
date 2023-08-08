import { useState } from 'react';
import '../css/login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import api from '../api/api';

export const RegisterScreen = () => {

  const navigate = useNavigate();
  const [name,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repassword,setRePassword] = useState('');
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRePassword, setErrorRePassword] = useState(false);
  const [errorCD, setErrorCD] = useState(false);
  

  const handleLogin = async(e) => {
    e.preventDefault();

    if(name == ''){
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
    if(name !== '' && email !== '' && password !== '' && repassword !== ''){
      if(password == repassword){
        try {
          const resp = await api.post('/auth/register',{
            name,
            email,
            password
          });
          console.log(resp)
          Swal.fire({
            icon: 'success',
            title: resp.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            navigate('/')
          }, 1500);
        } catch (error) {
          console.log(error.data)
          Swal.fire({
            icon: 'error',
            title: error.data.errors.name.msg,
            showConfirmButton: false,
            timer: 1500
          })
        }
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
            <form onSubmit={handleLogin} className='form-login'>
              <div className="form-group">
                <input className={errorNombre ? 'input-login input-login-error' : 'input-login'} type="text" placeholder="Nombre" 
                value={name} onChange={(e) => setNombre(e.target.value)} maxLength={20}/>
                 {errorNombre ? <>
                <span className='msg-error'>Ingrese un nombre</span> 
                </> : ''}
              </div>
              <div className="form-group">
                <input className={errorEmail ? 'input-login input-login-error' : 'input-login'} type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                 {errorEmail ? <>
                <span className='msg-error'>Ingrese un email</span> 
                </> : ''}
                </div>
              <div className="form-group">
                <input className={errorPassword ? 'input-login input-login-error' : 'input-login'} type="password" placeholder="Contraseña" 
                value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} maxLength={12}/>
                 {errorPassword ? <>
                <span className='msg-error'>Ingrese una contraseña</span> 
                </> : ''}
                </div>
                <div className="form-group">
                <input className={errorRePassword ? 'input-login input-login-error' : 'input-login'} type="password" placeholder="Repita contraseña" 
                value={repassword} onChange={(e) => setRePassword(e.target.value)} minLength={6} maxLength={12}/>
                 {errorRePassword ? <>
                <span className='msg-error'>Repita la contraseña</span> 
                </> : ''}
                 {errorCD ? <>
                <span className='msg-error'>Las contraseñas no coinciden</span> 
                </> : ''}
                </div>
                <button className='btn-login'>Registrarse</button>
            </form>            
        </div>
    </>
  )
}
