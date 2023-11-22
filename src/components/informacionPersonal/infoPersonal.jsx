import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./infoPersonal.css"

const EditarPerfil = (props) => {
  const { username, email, rol } = props;

  const [formValues, setFormValues] = useState({
    username: username,
    email: email,
    rol: rol,
  });

  const token = window.localStorage.getItem("token");

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
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Perfil actualizado:', data);
        // Puedes realizar otras acciones después de actualizar el perfil
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  }

  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleEditarCampo = (campo) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [campo]: '',
    }));
  };

  const handleActualizar = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', formValues); 
    // Llama a la función para actualizar el perfil aquí si es necesario
    actualizarPerfil();
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
              value={formValues.username}
              onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
              className="edit-input"
            />
            <button type="button" className="edit-button" onClick={() => handleEditarCampo('username')}>
              ✏️
            </button>
          </div>
        </label>

        <br />

        <label>
          Correo:
          <div className="edit-button-container">
            <input
              type="email"
             
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              className="edit-input"
            />
            <button type="button" className="edit-button" onClick={() => handleEditarCampo('email')}>
              ✏️
            </button>
          </div>
        </label>

        <br />

        <label>
          Rol:
          <div className="edit-button-container contrasena-container">
            <input
              readOnly
              type="text"
              value={formValues.rol}
              onChange={(e) => setFormValues({ ...formValues, rol: e.target.value })}
              className="edit-input"
            />
            <button type="button" className="edit-button" onClick={() => handleEditarCampo('rol')}>
              ✏️
            </button>
          </div>
        </label>

        <br />

        <button type="button" className="boton-nicole-lo" onClick={handleActualizar}>
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
