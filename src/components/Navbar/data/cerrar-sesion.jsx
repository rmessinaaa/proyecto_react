import React from "react";
import { useNavigate } from 'react-router-dom';


const CerrarSesion = () => {

    const navigate = useNavigate();

    const cerrarSesion = async () => {
      try {
        // Hacer una solicitud al backend para cerrar sesión
        const response = await fetch('http://localhost:8080/api/logout', {
          method: 'POST',
          credentials: 'include', // Incluye las cookies en la solicitud
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('URL de cierre de sesión:', 'http://localhost:8080/api/logout');
        if (response.ok) {

            // Limpiar el localStorage al cerrar sesión
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.removeItem('rol');  
            // Redirigir a la página de registro después del cierre de sesión
            navigate('/registro');
        } else {
            console.error('Error al cerrar sesión:', response.statusText);
        }
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };
  
    return (
      <div onClick={cerrarSesion}>
        Cerrar sesión
      </div>
    );
  };

export default CerrarSesion;