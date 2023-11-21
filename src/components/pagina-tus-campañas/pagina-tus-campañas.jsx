import { React, useState, useEffect } from 'react';
import VistaCampañas from '../vista-campañas/vista-campañas';
import { Link } from "react-router-dom";

function Pagina_Tus_Campañas() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  useEffect(() => {
    if (!userId || !token) {
      console.error('userId o token no están disponibles');
      return;
    }

    fetch("http://localhost:8080/api/campanas/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'acces_token': token,
        credentials: 'include'
      }
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log('Todas las campañas:', data);
      setData(data);
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error.message);
    });
  }, [userId, token]);
  


  return (
    <div className='container-fluid'>
      <h1 className='titulos-principales'>Tus campañas</h1>
      <div>
        {data.map((campaign) => (
          <VistaCampañas
            key={campaign.user}
            title={campaign.title}
          />
        ))}
      </div>

      <div className='row'>
        <div className='col-5'></div>

        <div className='col-3'>
          <Link to="/crear-campaña" className='button-azul'>Crear nueva campaña</Link>
        </div>

        <div className='col-2'></div>
      </div>
    </div>
  );
}

export default Pagina_Tus_Campañas;