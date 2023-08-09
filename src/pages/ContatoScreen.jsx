import React from 'react';
import DescripcionGrupo from '../componentes/DescripcionGrupo';
import Integrantes from '../componentes/Integrantes';
import AnimatedImage from '../componentes/AnimatedImage';

const ContactoScreen = () => {
  return (
    <div>
      <DescripcionGrupo />
      <Integrantes />
      <AnimatedImage />
    </div>
  );
}

export default ContactoScreen;