// PaginaRegistro.js
import React from "react";
import RegistrationForm from '../Inicio-sesion/Inicio-sesion';
import './registro.css';  // Importa el archivo de estilo CSS

function PaginaRegistro() {
  return (
    <div className='bg-paginas bg-registro'>
      <div className="">
        <div className='container container-blanco '>
          <div className="row">
            <div className="col" style={{ position: 'relative' }}>
              <img src="./logos/sinergia-imagotipo-oscuro copia 2.svg" alt="Logo" />
              <div className="logo-overlay">
                <p>
  <strong>Cómo Comenzar:</strong>
</p>

<p>
  <strong>1. Regístrate:</strong> Únete a nuestra comunidad completando un sencillo registro.
</p>

<p>
  <strong>2. Explora Oportunidades:</strong> Descubre proyectos y causas que te apasionen. Sinergia te ofrece una variedad de oportunidades para que encuentres la mejor manera de contribuir.
</p>

<p>
  <strong>3. Haz la Diferencia:</strong> Una vez que encuentres una oportunidad que te inspire, ¡adelante! Tu contribución es valiosa y necesaria.
</p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="acomodar-registro-login">
                    <RegistrationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaRegistro;