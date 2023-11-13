import React, { useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  
  const navigate = useNavigate();
  //Para inicializar y manejar los estados de los campos
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('donante');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Se está enviando el formulario');
    // Datos a enviar al servidor con las mismas propiedades del modelo
    const datos = {
      username,
      email,
      password,
      rol,
    };
  
  try {
    const response = await fetch('http://localhost:8080/api/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    if (response.ok) {
      // Manejar respuesta exitosa
      navigate('/');
    } else {
      // Manejar errores
      alert("Error en el registro");
      console.error('Error en el registro');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
  
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
          <form className="form" onSubmit={handleSubmit}>
            <label>
              <input type="text" placeholder="Elige un nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
              <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

                <select id="seleccionaRol" name="rol" required value={rol} onChange={(e) => setRol(e.target.value)}>
                  <option value="" disabled selected>Selecciona tu rol</option>
                  <option value="donante">Persona</option>
                  <option value="institución">Institución</option>
                </select><br/>

            <input type="submit" value="Registrarse" />
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;