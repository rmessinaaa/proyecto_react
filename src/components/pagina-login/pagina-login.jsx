import React from 'react';
import IniciarSesion from '../Iniciar-sesión/Iniciar-sesión';
import './PaginaLogin.css'; // Asegúrate de importar el archivo CSS

function PaginaLogin() {
  return (
    <div className='bg-paginas bg-registro'>
      <div className="container container-blanco">
        <div className="row">
          <div className="col">
            <img src="./logos/sinergia-imagotipo-oscuro copia 2.svg" alt="Logo" />
            <div className="logo-overlay">
              <h1>¡Bienvenido de vuelta a Sinergia!</h1>
              <p>En Sinergia, cada inicio de sesión es un paso más hacia la creación de un impacto positivo.</p>
              <p><strong>Tu cuenta, tu impacto.</strong></p>
              <p>Inicia sesión hoy y continúa tu viaje hacia una vida llena de propósito y significado.</p>
              <p><strong>La magia sucede cuando te involucras. ¡Vamos, haz clic y forma parte del cambio!</strong></p>
            </div>
          </div>
          <div className="col">
            <div className="acomodar-registro-login">
              <IniciarSesion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaLogin;
