//Autenticación

import React from 'react';

const getAutenticacion = () => {
    // Obtiene el rol del usuario desde el almacenamiento local
    const autenticacion = localStorage.getItem('token');
    return autenticacion ? true : false;
  };

export default getAutenticacion;
