
import React, { useState } from "react";
import "./infoPersonal.css";

function InfoPersonal() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const limpiarCampos = () => {
    setNombre("");
    setMail("");
    setContrasena("");
  };

  return (
    <div className="contenedor">
      <h1 className="titulo">Información Personal</h1>
      
      <div className="formulario">
        <div className="campo">
          <label className="subtitulo">Nombre de Usuario</label>
          <input
            className="entrada"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingrese su nombre de usuario"
          />
        </div>

        <div className="campo">
          <label className="subtitulo">Correo Electrónico</label>
          <input
            className="entrada"
            type="text"
            value={mail}
            onChange={handleMailChange}
            placeholder="Ingrese su dirección de correo electrónico"
          />
        </div>

        <div className="campo">
          <label className="subtitulo">Contraseña</label>
          <div className="contrasena-container">
            <input
              className="entrada"
              type={mostrarContrasena ? "text" : "password"}
              value={contrasena}
              onChange={handleContrasenaChange}
              placeholder="Ingrese su contraseña"
            />
            <button
              className="boton boton-mostrar"
              type="button"
              onClick={toggleMostrarContrasena}
            >
              {mostrarContrasena ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
      </div>

      <div className="botones-container">
        <button className="boton" onClick={limpiarCampos}>
          Cambiar Datos
        </button>
        <button className="boton enviar">Enviar</button>
      </div>
    </div>
  );
}

export default InfoPersonal;
