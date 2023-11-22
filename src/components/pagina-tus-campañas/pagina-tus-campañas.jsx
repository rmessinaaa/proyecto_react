import { useState, useEffect } from 'react';
import VistaCampañas from '../vista-campañas/vista-campañas';
import { Link } from "react-router-dom";

function Pagina_Tus_Campañas() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  const cargarCampañas = async () => {
    try {
      if (!userId || !token) {
        console.error('userId o token no están disponibles');
        return;
      }

      const response = await fetch("http://localhost:8080/api/campanas/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'acces_token': token,
          credentials: 'include'
        }
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error al cargar campañas:', error.message);
    }
  };

  useEffect(() => {
    cargarCampañas();
  }, [userId, token]);

  const handleDeleteCampaign = async (campaignId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/campanas/${campaignId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'acces_token': token,
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      console.log(`Eliminar campaña con ID: ${campaignId}`);

      // Después de eliminar la campaña, cargamos la lista actualizada
      cargarCampañas();
    } catch (error) {
      console.error('Error al eliminar la campaña:', error.message);
    }
  };

  return (
    <div className='container-fluid'>
      <h1 className='titulos-principales'>Tus campañas</h1>
      <div>
        {data.map((campaign) => (
          <VistaCampañas
            key={campaign._id}
            title={campaign.title}
            onDeleteCampaign={() => handleDeleteCampaign(campaign._id)}
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
