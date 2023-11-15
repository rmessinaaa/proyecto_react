import React, { useState } from 'react';
import './Iniciar-sesion.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Asegúrate de importar correctamente jwtDecode

const IniciarSesion = () => {
    //Funcion de navegacion
    const navigate = useNavigate();

    //Estados para almacenar mail y contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Estado para almacenar datos del usuario post decodificacion del token
    const [userData, setUserData] = useState({});

    //Funcion que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); //Prevent default para que no recargue la página al apretar el boton
    
        // Obtener el token de la cookie
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        console.log('Token presente en la cookie:', token);
    
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log('Respuesta del servidor decodificada:', decodedToken);
              
                // Acceder a las propiedades del token
                const userId = decodedToken.id.id;
                const username = decodedToken.id.username;
                const email = decodedToken.id.email;
                const rol = decodedToken.id.rol;
              
                // Convertir id a cadena JSON antes de almacenar
                localStorage.setItem("id", JSON.stringify(userId));
              
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
              
                // Convertir rol a cadena antes de almacenar
                localStorage.setItem("rol", rol);
              
                localStorage.setItem("token", token);
              
                console.log('Token almacenado en localStorage:', token);
              
                // Comprobación de props
                console.log('UserId:', userId);
                console.log('Username:', username);
                console.log('Email:', email);
                console.log('Rol:', rol);
              
                // Actualiza el estado con los datos del usuario
                setUserData({
                  id: userId,
                  username: username,
                  email: email,
                  rol: rol,
                });
              
                // Muestra la alerta con los datos del usuario
                alert(`Datos del usuario:\nUsername: ${username}\nEmail: ${email}\nRol: ${rol}`);
              
                // Navegar a la página principal
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
    
    
    

    return (
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10 inicio'>
                <div className='row azul'>
                    <div className="container-fluid div-uno">
                        <h1 className='titulos-principales'>Inicia sesión en Sinergia</h1>
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
                            placeholder='Correo electronico'
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
                    <Link to='/recuperar-contrasena' className='dos-botones'>¿Olvidaste tu contraseña?</Link>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    );
};

export default IniciarSesion;

