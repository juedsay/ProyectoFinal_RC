/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Banner } from '../componentes/Banner';
import { Categorias } from '../componentes/Categorias';
import api from '../api/api';
import { useNavigate } from 'react-router';
import { Header } from '../componentes/Header';
import { Footer } from '../componentes/Footer';



export const HomeScreen = () => {
  if(JSON.parse(localStorage.getItem('carrito')) == null){
    const carrito = [];
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');

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
    <Header />
    {
      username !== '' ? <h1>Bienvenido {username}</h1> : ''
    }
      <Banner />
      <Categorias />
      {/* <Footer /> */}
    </>
  )
}
