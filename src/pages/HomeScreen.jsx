import React, { useEffect, useState } from 'react';
import { Banner } from '../componentes/Banner';
import { Categorias } from '../componentes/Categorias';
import api from '../api/api';
import { useNavigate } from 'react-router';

export const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Categorias />
    </>
  );
}
