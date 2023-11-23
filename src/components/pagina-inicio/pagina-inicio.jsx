import React, { useEffect, useState } from 'react';
import Buscador from '../Buscador/Buscador';
import SubsHomeNosotros from '../subs-home-nosotros/subs-home-nosotros';
import SubsHomePerfil from '../subs-home-perfil/subs-home-perfil';
import SubsHomeCampañas from '../subs-home-campañas/subs-home-campañas';
import Carrusel from "../Carrusel/Carrusel";
import "./pagina.css";

function PaginaInicio() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Recuperar el nombre de usuario almacenado en el localStorage
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername) {
      // Si el nombre de usuario existe, actualiza el estado
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className='bg-paginas'>
      <Carrusel />
      
      <div className="container-fluid">
        <div className='container container-blanco'>
          <h1 className='titulos-principales'></h1>
        </div>
      </div>
      {/* Mostrar mensaje de bienvenida */}
      {username && (
        <div className="container-fluid-div-bienvenida">
          <h1>¡Bienvenido, {username}!</h1>
        </div>
      )}
      {/* <Buscador />
      <SubsHomeCampañas /> */}
      <SubsHomeNosotros />
      <SubsHomePerfil />
      <br></br>
    </div>
  );
}

export default PaginaInicio;