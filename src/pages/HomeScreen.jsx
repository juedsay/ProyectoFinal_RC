import { useEffect, useState } from 'react';
import { Banner } from '../componentes/Banner';
import { Categorias } from '../componentes/Categorias';
import api from '../api/api';
import { useNavigate } from 'react-router';

export const HomeScreen = () => {

  // const navigate = useNavigate();
  // const [username, setUsername] = useState('');

  // const validarUser = async () =>{
  //   try {
  //     const resp = await api.get('/auth/validar');
  //     console.log(resp.status)
  //     if(resp.status == 200){
  //       const user = JSON.parse(localStorage.getItem('user'));
  //       setUsername(user.name);
  //     }
  //   } catch (error) {
  //     console.log(error.response.status)
  //     if(error.response.status == 401){
  //       localStorage.removeItem('user');
  //       localStorage.removeItem('token');
  //       navigate('/');
  //     }
  //   }
  // }

  // useEffect(() => {
  //   validarUser();  
  // },[]);
  return (
    <>
    {/* {
      username !== '' ? <h1>Bienvenido {username}</h1> : ''
    } */}
      <Banner />
      <Categorias />
    </>
  )
}
