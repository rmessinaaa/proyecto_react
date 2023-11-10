
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
    <div className="contenedor" style={{ fontFamily: "Montserrat" }}>
      <h1 className="titulo">Información Personal</h1>
      
      <div className="formulario">
        <p className="subtitulo">Nombre de Usuario</p>
        <form>
          <input
            className="entrada"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingrese su nombre de usuario"
          />
        </form>

        <p className="subtitulo">Mail</p>
        <form>
          <input
            className="entrada"
            type="text"
            value={mail}
            onChange={handleMailChange}
            placeholder="Ingrese su dirección de correo electrónico"
          />
        </form>

        <p className="subtitulo">Contraseña</p>
        <form>
          <input
            className="entrada"
            type={mostrarContrasena ? "text" : "password"}
            value={contrasena}
            onChange={handleContrasenaChange}
            placeholder="Ingrese su contraseña"
          />
          <button
            className="boton"
            type="button"
            onClick={toggleMostrarContrasena}
          >
            Mostrar Contraseña
          </button>
        </form>
      </div>

      <div className="botones-container">
        <div className="boton-div">
          <button className="boton" onClick={limpiarCampos}>
            Cambiar Datos
          </button>
        </div>
        <div className="boton-div">
          <button className="boton">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default InfoPersonal;
