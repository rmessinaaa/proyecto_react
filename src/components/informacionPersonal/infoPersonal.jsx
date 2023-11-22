import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./infoPersonal.css"

const EditarPerfil = (props) => {
  const {username, email, password, rol} = props
  const [usuario, setUsuario] = useState({
    nombreUsuario: username,
    correo: email,
    contrasena: password,
    rol: rol,
  });
  const token = window.localStorage.getItem("token")
  // const userUpdate = {
  //   username,
  //   email,
  //   rol,
  // }
  const userUpdate = {
    username: username,
    email: email,
    rol: rol,
  };

  function actualizarPerfil() {
    const id = window.localStorage.getItem("id");
    const idarreglado = id.replace(/['"]+/g, '');
  
    
  
    fetch(`http://localhost:8080/api/profile/${idarreglado}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
        acces_token: token,
      },
      body: JSON.stringify(userUpdate),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  }
  

  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleEditarCampo = (campo) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [campo]: '',
    }));
  };

  const handleActualizar = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos actualizados al servidor o realizar otras acciones
    console.log('Datos actualizados:', usuario);
  };

  return (
    <div className="contenedor">
      <div className="titulo">
          <h2>Actualiza tus datos</h2>
          <p>
          🤝 Edita tu perfil y deja que tu compromiso brille en cada detalle.

<br />
          </p>
          </div>
      <form className="formulario" onSubmit={handleActualizar}>
        <label>
          Nombre de Usuario:
          <div className="edit-button-container">
            <input
              type="text" 
              value={usuario.nombreUsuario}
              onChange={(e) => setUsuario({ ...userUpdate, username: e.target.value })}
              className="edit-input"
            />
            <button type="button" className="edit-button" onClick={() => handleEditarCampo('nombreUsuario')}>
              ✏️
            </button>
          </div>
        </label>

        <br />

        <label>
          Correo:
          <div className="edit-button-container">
            <input 
              type="email" readOnly
              value={usuario.correo}
              onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
              className="edit-input"
            />
            <button type="button" className="edit-button" onClick={() => handleEditarCampo('correo')}>
              ✏️
            </button>
          </div>
        </label>

        <br />

        <label>
          Rol:
          <div className="edit-button-container contrasena-container">
            <input readOnly
              type={mostrarContrasena ? 'text' : 'password'}
              value={usuario.rol}
              onChange={(e) => setUsuario({ ...usuario, rol: e.target.value })}
              className="edit-input"
            />
           <button type="button" className="edit-button" onClick={() => handleEditarCampo('correo')}> 
           ✏️
           </button>
          </div>
        </label>

        <br />

        <button type="submit" className="boton-nicole-lo" onClick={actualizarPerfil}>
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
