import { useState } from 'react';
import '../css/login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import api from '../api/api';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErrorEmail, setMsgerroremail] = useState(false);
  const [msgErrorPass, setMsgerrorpass] = useState(false);



  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail(email.toLowerCase())

    // VALIDACIONES ↓

    if (email == '' && password == '') {
      setMsgerroremail(true)
      setMsgerrorpass(true)
    } else if (email == '') {
      setMsgerroremail(true)
    } else if (password == '') {
      setMsgerrorpass(true)
    } else {

      // PETICION A BASE DE DATOS
      try {
        const resp = await api.post('/auth/login', {
          email,
          password
        })
        // GUARDAMOS TOKEN EN LOCALSTORAGE
        localStorage.setItem('token',resp.data.token);
        const user = {
          id: resp.data.id
        };
        localStorage.setItem('user',JSON.stringify(user));
        Swal.fire({
          icon: 'success',
          title: resp.data.msg,
          showConfirmButton: false,
          timer: 1500
        }, 1500);
        if(resp.data.rol == 'Admin'){
          navigate('/admin');
        }else{
          navigate('/');
        }
        
      } catch (error) {
        console.log(error.response.data.msg)
        Swal.fire({
          icon: 'error',
          title: error.response.data.msg,
          showConfirmButton: false,
          timer: 1500
        }) 
      }
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleLogin} className='form-login'>
          <div className="form-group">
            <input className={msgErrorEmail ? 'input-login input-login-error' : 'input-login'} type="email" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            {msgErrorEmail ? <>
              <span className='msg-error'>Ingrese email</span>
            </> : ''}
          </div>
          <div className="form-group">
            <input className={msgErrorPass ? 'input-login input-login-error' : 'input-login'} type="password" placeholder="Contraseña"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            {msgErrorPass ? <>
              <span className='msg-error'>Ingrese contraseña</span>
            </> : ''}
          </div>

          <button className='btn-login'>Login</button>
        </form>
        <span><a href="">No tienes cuenta? Create una</a></span>

      </div>
    </>
  )
}
