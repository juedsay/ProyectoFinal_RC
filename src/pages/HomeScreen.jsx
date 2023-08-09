/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Banner } from '../componentes/Banner';
import { Categorias } from '../componentes/Categorias';
import api from '../api/api';
import { useNavigate } from 'react-router';
import { Header } from '../componentes/Header';
import { Footer } from '../componentes/Footer';
import swal from 'sweetalert';



export const HomeScreen = () => {
  if(JSON.parse(localStorage.getItem('carrito')) == null){
    const carrito = [];
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }
  

  return (
    <>
    <Header />
      <Banner />
      <Categorias />
    </>
  )
}
