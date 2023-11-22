import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./infoPersonal.css"

const EditarPerfil = (props) => {
  const {username, email, password} = props
  const [usuario, setUsuario] = useState({
    nombreUsuario: username,
    correo: email,
    contrasena: password,

  });

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
              type="text" readOnly 
              value={usuario.nombreUsuario}
              onChange={(e) => setUsuario({ ...usuario, nombreUsuario: e.target.value })}
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
          Contraseña:
          <div className="edit-button-container contrasena-container">
            <input readOnly
              type={mostrarContrasena ? 'text' : 'password'}
              value={usuario.contrasena}
              onChange={(e) => setUsuario({ ...usuario, contrasena: e.target.value })}
              className="edit-input"
            />
           <button type="button" className="edit-button" onClick={() => handleEditarCampo('correo')}> 
           ✏️
           </button>
          </div>
        </label>

        <br />

        <button type="submit" className="boton-nicole-lo">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
