import React, { useState, useEffect } from 'react';
import SubsCampañaDescripcion from '../subs-campaña-descripcion/subs-campaña-descripcion';
import SubsCampañaStatus from '../subs-campaña-status/subs-campaña-status';
import SubsCampañaDonar from '../subs-campaña-donar/subs-campaña-donar';

function PaginaCampaña () {

    const [campaign, setCampaign] = useState(null);

  useEffect(() => {

    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const campaignId = parts[parts.length - 1];
    const token = localStorage.getItem("token");

    // Realizar la petición para obtener detalles de la campaña específica
    fetch(`http://localhost:8080/api/campanas/${campaignId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials : 'include',
        acces_token: token,
        // Agrega tu lógica de manejo de tokens aquí si es necesario
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Actualizar el estado con los detalles de la campaña
        setCampaign(data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles de la campaña:', error.message);
      });
  }, []); // Asegúrate de manejar las dependencias según tu lógica

  if (!campaign) {
    // Puedes mostrar un indicador de carga mientras se obtienen los datos
    return <p>Cargando...</p>;
  }
  
  /********* */
    
    return(
        <div className='bg-paginas'>
            <SubsCampañaDescripcion title={campaign.title} description={campaign.description} img={campaign.img}/>
            <SubsCampañaStatus />
            <SubsCampañaDonar />
        </div>
    );
};

export default PaginaCampaña;