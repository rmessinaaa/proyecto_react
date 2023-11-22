// PaginaCrearCampaña.js
import React from 'react';
import Campañacrear from '../campaña/campañacrear';
import './campañacrear.css';  // Importa el archivo de estilo CSS

function PaginaCrearCampaña() {
  return (
    <div className='bg-paginas bg-crearCampaña'>
      <div className='container'>
        <h1 className='titulo' style={{ fontSize: '3rem' }}>Crea tu campaña de donación y haz la diferencia! </h1>
        <div className='contenido'>
          <div className='row align-items'>
            <div className='col'>
              <div className='logo-overlay'>
                <img
                  src='./ilustraciones/campaña.jpg'
                  alt='Descripción de la imagen'
                  style={{ maxWidth: '100%', height: 'auto' }}
                />

                <p>
                  <strong>¡Únete a nosotros para crear un impacto significativo! 🌍</strong>
                </p>

                <p>
                  
                  Completar el formulario es el primer paso hacia la realización de proyectos valiosos.
                </p>

                <p>
                  Comparte tu campaña con amigos, familiares y la comunidad, inspirándolos a contribuir a 
                  causas importantes. 🤝
                </p>

                <p>
                  Trabaja hacia tu objetivo con el apoyo de aquellos que comparten tu causa. 
                  Cada contribución cuenta y hace la diferencia en la vida de quienes beneficiarán de tu generosidad. 💖
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='acomodar-crearCampaña'>
                <Campañacrear />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaCrearCampaña;
