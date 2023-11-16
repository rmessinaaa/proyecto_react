import React, { useState } from 'react';
import './Iniciar-sesion.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import RecuperarContraseña from '../Recuperar-contraseña/recuperar-contraseña'

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookieString = document.cookie;
    console.log('Cookie String:', cookieString);

    const tokenRow = cookieString.split('; ').find(row => row.startsWith('token='));
    console.log('Token Row:', tokenRow);
  
    if (tokenRow) {
      const token = tokenRow.split('=')[1];
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id.id;
        const username = decodedToken.id.username;
        const email = decodedToken.id.email;
        const rol = decodedToken.id.rol;
        localStorage.setItem('id', JSON.stringify(userId));
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('rol', rol);
        localStorage.setItem('token', token);
        setUserData({
          id: userId,
          username: username,
          email: email,
          rol: rol,
        });
        alert(`Datos del usuario:\nUsername: ${username}\nEmail: ${email}\nRol: ${rol}`);
        navigate('/');
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        alert('Error al procesar la respuesta del servidor');
      }
    } else {
      console.error('No se encontró el token en la cookie');
      alert('Usuario y/o contraseña inválidos');
    }
  };
  

  const togglePopup = () => {
    setShowPopup(!showPopup);
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
        <div className='container-fluid div-dos'>
          <button className='boton-g'>Iniciar sesión con Google</button>
        </div>
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
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <div className='container-fluid div-cuatro'>
          <button onClick={handleSubmit} className='dos-botones'>Siguiente</button>
        </div>
        <div className='container-fluid div-cinco'>
          <Link to='#' onClick={togglePopup} className='dos-botones'>
            ¿Olvidaste tu contraseña?
          </Link>
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
              
              <RecuperarContraseña/>
            </div>
          </div>
        )}
      </div>
      <div className='col-1'></div>
    </div>
  );
};
export default IniciarSesion;

