import React, { useState } from 'react';
import './Iniciar-sesion.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
// import RecuperarContraseña from '../Recuperar-contraseña/recuperar-contraseña'

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      // Realiza la solicitud Fetch para autenticar al usuario y obtener el token
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        credentials: 'include',
      });

      console.log("Respuesta completa del servidor:", response);

      if (!response.ok) {
        // Manejar el caso en que la autenticación falla
        console.error('Error en la autenticación');
        alert('Usuario y/o contraseña inválidos');
        return;
      }

      console.log("verificacion de autenticacion exitosa");

      // Obtener el token de la respuesta JSON
      const jsonResponse = await response.json();
      const tokenFromResponse = jsonResponse.token;

      // Obtener el token de la cookie
      const tokenFromCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];

      // Utilizar el token preferido (puedes ajustar la lógica según tus necesidades)
      const token = tokenFromResponse || tokenFromCookie;

      console.log("Token obtenido de la respuesta:", tokenFromResponse);
      console.log("Token obtenido de la cookie:", tokenFromCookie);


      // Decodificar el token para obtener la información del usuario
      console.log("Token antes de la decodificación:", token);
      const decodedToken = jwtDecode(token);
      console.log("Token decodificado:", decodedToken);

      // Verifiquemos si podemos acceder directamente a las propiedades del token
      console.log("userId del token:", decodedToken.id);
      console.log("username del token:", decodedToken.username);
      console.log("userEmail del token:", decodedToken.email);
      console.log("rol del token:", decodedToken.rol);


      // Almacenar información del usuario en el almacenamiento local
      const userId = decodedToken.id;
      const username = decodedToken.username;
      const userEmail = decodedToken.email;
      const rol = decodedToken.rol;

      //Verificación por console log
      console.log("userId para almacenar:", userId);
      console.log("username para almacenar:", username);
      console.log("userEmail para almacenar:", userEmail);
      console.log("rol para almacenar:", rol);

      //Almacenamiento en local storage
      localStorage.setItem('id', JSON.stringify(userId));
      localStorage.setItem('username', username);
      localStorage.setItem('email', userEmail);
      localStorage.setItem('rol', rol);
      localStorage.setItem('token', token);


      //Verificación de almacenamiento
      console.log("Información almacenada en el localStorage.");

      console.log("Valor almacenado para 'id':", localStorage.getItem('id'));
      console.log("Valor almacenado para 'username':", localStorage.getItem('username'));
      console.log("Valor almacenado para 'email':", localStorage.getItem('email'));
      console.log("Valor almacenado para 'rol':", localStorage.getItem('rol'));
      console.log("Valor almacenado para 'token':", localStorage.getItem('token'));



      // Actualizar el estado con la información del usuario
      setUserData({
        id: userId,
        username: username,
        email: userEmail,
        rol: rol,
      });

      // Mostrar un mensaje de éxito
      alert(`Inicio de sesión exitoso. Datos del usuario:\nUsername: ${username}\nEmail: ${userEmail}\nRol: ${rol}`);

      // Navegar a la página principal
      navigate('/');

    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al procesar la respuesta del servidor');
  }




}
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <div className='row'>
      <div className='col-1'></div>
      <div className='col-10 inicio'>
        <div className='row azul'>
          <div className="container-fluid div-uno">
            <h2>Inicia sesión en Sinergia</h2>
            <br />
            <p>Únete a nuestra causa y haz la diferencia</p>
          </div>
        </div>
        {/* <div className='container-fluid div-dos'>
          <button className='boton-g'>Iniciar sesión con Google</button>
        </div> */}
        <div className='container-fluid'>
          <div className='div-linea2'>
            <div class="linea-con-letra">
              <hr class="linea"></hr>
              <span class="letra">o</span>
              <hr class="linea"></hr>
            </div>
          </div>
        </div>
        <div className='container-fluid div-tres'>
          <form>
            <input
              className='input'
              type="text"
              id="email"
              name="email"
              placeholder='Correo electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </div>
        <div className='container-fluid div-tres'>
        <form>
          <input
            className='input'
            type={mostrarPassword ? 'text' : 'password'}
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className='mostrar' type='button' onClick={toggleMostrarPassword}>
            {mostrarPassword ? <svg className='mostrar' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg> : <svg className='mostrar' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>}
            
          </Link>
        </form>
      </div>
        <div className='container-fluid div-cuatro'>
          <button onClick={handleSubmit} className='dos-botones'>Siguiente</button>
        </div>
        <div className='container-fluid div-cinco'>
          {/* <Link to='#' onClick={togglePopup} className='dos-botones'>
            ¿Olvidaste tu contraseña?
          </Link> */}
        </div>
        {/* Popup para recuperar contraseña */}
        {showPopup && (
          <div className='popup'>
            <div className='popup-content'>
            <div className="logo-r" >
              <img src="./logos/sinergia-imagotipo-oscuro copia 2.svg" alt="Logo"  width='50%'/>
              <div className="logo-overla">
              <span className='close-btn' onClick={togglePopup}>
                &times;
              </span>
              </div>
              </div>
              
              {/* <RecuperarContraseña/> */}
            </div>
          </div>
        )}
      </div>
      <div className='col-1'></div>
    </div>
  );
};
export default IniciarSesion;

