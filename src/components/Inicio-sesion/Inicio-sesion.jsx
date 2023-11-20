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
  const [mostrarPassword, setMostrarPassword] = useState(false);

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
      navigate('/login');
    } else {
      // Manejar errores
      alert("Error en el registro");
      console.error('Error en el registro');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
const toggleMostrarPassword = () => {
  setMostrarPassword(!mostrarPassword);
};
  
  return (
    <div className="container-form register">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenido</h2>
          <p>
            Inicia sesión con tus datos
            <br />
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
              <input type={mostrarPassword ? 'text' : 'password'} placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <Link className='mostrar-l' type='button' onClick={toggleMostrarPassword}>
            {mostrarPassword ? <svg className='regis' xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-eye-fill" viewBox="0 0 16 20">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg> : <svg className='regis' xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-eye" viewBox="0 0 16 20">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>}

          </Link>
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