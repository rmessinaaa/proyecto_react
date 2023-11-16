import React from 'react';

const getRol = () => {
    // Obtiene el rol del usuario desde el almacenamiento local
    const rol = localStorage.getItem('rol');
    return rol // Devuelve un valor predeterminado en caso de que el rol no esté definido
  };

export default getRol;