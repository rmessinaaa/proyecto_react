import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function RegistrationForm() {
  return (
    <div className="container-form register">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenido</h2>
          <p>
            Únete a nuestra causa y haz la diferencia
            <br />
            Inicia sesión con tus datos
          </p>
          {/* <input type="button" value="Iniciar Sesión" id="sign-in" /> */}
          <Link to="/login" className="boton-nicole-login"id="sign-in">Iniciar sesión</Link>
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear una Cuenta</h2>
          
          <p> usa tu email para registrarte</p>
          <form className="form">
            <label>
              <input type="text" placeholder="Elige un nombre de usuario" />
            </label>
            <label>
              <input type="email" placeholder="Correo Electrónico" />
            </label>
            <label>
              <input type="password" placeholder="Contraseña" />
            </label>

                <select id="seleccionaRol" name="rol" required>
                  <option value="" disabled selected>Selecciona tu rol</option>
                  <option value="persona">Persona</option>
                  <option value="institucion">Institución</option>
                </select><br/>

            <input type="submit" value="Registrarse" />
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;