import { useState, useRef } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router';
import api from '../api/api';
import Header from '../componentes/Header';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

export const RegisterScreen = () => {

  const navigate = useNavigate();
  const [name, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRePassword, setErrorRePassword] = useState(false);
  const [errorCD, setErrorCD] = useState(false);

  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_znhnesn', 'template_n4jgzds', form.current, '6OD2bAOrMsCgc0ukQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (name == '') {
      setErrorNombre(true);
    }
    if (email == '') {
      setErrorEmail(true);
    }
    if (password == '') {
      setErrorPassword(true);
      setErrorCD(false);
    }
    if (repassword == '') {
      setErrorRePassword(true);
      setErrorCD(false);
    }
    if (name !== '' && email !== '' && password !== '' && repassword !== '') {
      if (password == repassword) {
        try {
          const resp = await api.post('/auth/register', {
            name,
            email,
            password
          });
          // GUARDAMOS TOKEN EN LOCALSTORAGE
          localStorage.setItem('token', resp.data.token);
          const user = {
            id: resp.data.id
          };
          localStorage.setItem('user', JSON.stringify(user));
          sendEmail();
          swal("✅","Registrado con exito!");
          setTimeout(() => {
            navigate('/')
          }, 1500);
        } catch (error) {
        // swal("❌",error.response.data.msg);
        console.log(error);
        }
      } else {
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
    <Header />
      <div className="login-container">
        <h1>REGISTER</h1>
        <form onSubmit={handleLogin} className='form-login' ref={form}>
          <div className="form-group">
            <input className={errorNombre ? 'input-login input-login-error' : 'input-login'} type="text" placeholder="Nombre"
              value={name} onChange={(e) => setNombre(e.target.value)} minLength={7} maxLength={30} name='user_name'/>
            {errorNombre ? <>
              <span className='msg-error'>Ingrese un nombre</span>
            </> : ''}
          </div>
          <div className="form-group">
            <input className={errorEmail ? 'input-login input-login-error' : 'input-login'} type="email" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} name='user_email'/>
            {errorEmail ? <>
              <span className='msg-error'>Ingrese un email</span>
            </> : ''}
          </div>
          <div className="form-group">
            <input className={errorPassword ? 'input-login input-login-error' : 'input-login'} type="password" placeholder="Contraseña"
              value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} />
            {errorPassword ? <>
              <span className='msg-error'>Ingrese una contraseña</span>
            </> : ''}
          </div>
          <div className="form-group">
            <input className={errorRePassword ? 'input-login input-login-error' : 'input-login'} type="password" placeholder="Repita contraseña"
              value={repassword} onChange={(e) => setRePassword(e.target.value)} minLength={6} maxLength={12} />
            {errorRePassword ? <>
              <span className='msg-error'>Repita la contraseña</span>
            </> : ''}
            {errorCD ? <>
              <span className='msg-error'>Las contraseñas no coinciden</span>
            </> : ''}
          </div>
          <button className='btn-login'>Registrarse</button>
        </form>
        <span><NavLink to={'/login'}>Ya tenes cuenta? Logueate.</NavLink></span>
      </div>
    </>
  )
}
