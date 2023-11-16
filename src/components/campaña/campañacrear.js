
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./campañacrear.css";

function Campañacrear() {
  // Estados
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rangoMeta, setRangoMeta] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [categoria, setCategoria] = useState("");
  const [foto, setFoto] = useState(null);
  const [banco, setBanco] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [mostrarOpcionesCuenta, setMostrarOpcionesCuenta] = useState(false);

  // Manejadores de cambios
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (value) => {
    setDescripcion(value);
  };

  const handleRangoMetaChange = (event) => {
    setRangoMeta(event.target.value);
  };

  const handleCuentaChange = (event) => {
    setCuenta(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);

      // Restablecer el valor del campo de entrada oculto
      event.target.value = "";
    }
  };

  const handleBancoChange = (event) => {
    setBanco(event.target.value);
  };

  const handleTipoCuentaChange = (event) => {
    setTipoCuenta(event.target.value);
  };

  const handleNumeroCuentaChange = (event) => {
    setNumeroCuenta(event.target.value);
  };

  const handleCorreoElectronicoChange = (event) => {
    setCorreoElectronico(event.target.value);
  };

  // Función para limpiar campos
  const limpiarCampos = () => {
    setNombre("");
    setDescripcion("");
    setRangoMeta("");
    setCuenta("");
    setCategoria("");
    setFoto(null);
    setBanco("");
    setTipoCuenta("");
    setNumeroCuenta("");
    setCorreoElectronico("");
  };

  // Función para manejar el clic en Mostrar/Ocultar opciones de cuenta
  const toggleOpcionesCuenta = () => {
    setMostrarOpcionesCuenta(!mostrarOpcionesCuenta);
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log("Datos del formulario:", {
      nombre,
      descripcion,
      rangoMeta,
      cuenta,
      categoria,
      foto,
      banco,
      tipoCuenta,
      numeroCuenta,
      correoElectronico,
    });
  };

  return (
    <div className="contenedor" style={{ fontFamily: "Montserrat" }}>
      <h1 className="titulo">Nueva campaña / Editar Campaña </h1>

      <div className="formulario">
        {/* Nombre de campaña */}
        <div>
          <p className="subtitulo">Nombre de campaña</p>
          <input
            className="entrada"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingrese su nombre de campaña"
          />
        </div>

        {/* Descripción */}
        <div>
          <p className="subtitulo">Descripción de campaña</p>
          <ReactQuill
            className="quill-editor"
            value={descripcion}
            onChange={handleDescripcionChange}
            placeholder="Describa la campaña"
          />
        </div>

       {/* META */}
<div>
  <p className="subtitulo">Rango Meta</p>
  <input
    className="entrada"
    type="number"
    value={rangoMeta}
    onChange={handleRangoMetaChange}
    placeholder="Ingrese el monto en pesos chilenos"
  />
</div>
        {/* CUENTA */}
        <div>
          <p className="subtitulo" onClick={toggleOpcionesCuenta}>
            Cuenta {mostrarOpcionesCuenta ? "▲" : "▼"}
          </p>
          {mostrarOpcionesCuenta && (
            <div className="opciones-cuenta">
              {/* Banco */}
              <div>
                <p className="subtitulo">Banco</p>
                <select
                  className="entrada"
                  value={banco}
                  onChange={handleBancoChange}
                >
                  <option value="" disabled defaultValue>
                    Seleccione un banco
                  </option>
                  <option value="BANCO DE CHILE/EDWARDS CITI">BANCO DE CHILE/EDWARDS CITI</option>
                  <option value="BANCO ESTADO">BANCO ESTADO</option>
                  <option value="SCOTIABANK">SCOTIABANK</option>
                  <option value="BCI TBANK">BCI TBANK</option>
                  <option value="CORPBANCA">CORPBANCA</option>
                  <option value="BICE">BICE</option>
                  <option value="HSBC">HSBC</option>
                  <option value="SANTANDER">SANTANDER</option>
                  <option value="ITAU">ITAU</option>
                  <option value="THE BANK OF TOKYO-MITSUBISHI LTD.">THE BANK OF TOKYO-MITSUBISHI LTD.</option>
                  <option value="SECURITY">SECURITY</option>
                  <option value="BBVA">BBVA</option>
                  <option value="DEL DESARROLLO">DEL DESARROLLO</option>
                  <option value="FALABELLA">FALABELLA</option>
                  <option value="RIPLEY">RIPLEY</option>
                  <option value="BANCO CONSORCIO">BANCO CONSORCIO</option>
                  <option value="BANCO PARIS">BANCO PARIS</option>
                  <option value="COOPEUCH">COOPEUCH</option>
                  <option value="INTERNACIONAL">INTERNACIONAL</option>
                </select>
              </div>

              {/* Tipo de Cuenta */}
<div>
  <p className="subtitulo">Tipo de Cuenta</p>
  <select
    className="entrada"
    value={tipoCuenta}
    onChange={handleTipoCuentaChange}
  >
    <option value="" disabled defaultValue>
      Seleccione un tipo de cuenta
    </option>
    <option value="cuentaVista">Cuenta Vista</option>
    <option value="cuentaCorriente">Cuenta Corriente</option>
    <option value="cuentaRUT">Cuenta Rut</option>
  </select>
</div>

              {/* Número de Cuenta */}
              <div>
                <p className="subtitulo">Número de Cuenta</p>
                <input
                  className="entrada"
                  type="text"
                  value={numeroCuenta}
                  onChange={handleNumeroCuentaChange}
                  placeholder="Ingrese su número de cuenta"

                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <p className="subtitulo">Correo Electrónico</p>
                <input
                  className="entrada"
                  type="email"
                  value={correoElectronico}
                  onChange={handleCorreoElectronicoChange}
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
            </div>
          )}
        </div>

        {/* CATEGORÍA */}
        <div>
          <p className="subtitulo">Categoría</p>
          <select
            className="entrada"
            value={categoria}
            onChange={handleCategoriaChange}
          >
            <option value="" disabled defaultValue>
              Seleccione una categoría
            </option>
            <option value="Vivienda">Vivienda</option>
            <option value="Salud">Salud</option>
            <option value="Educación">Educación</option>
            <option value="Infancia">Infancia</option>
            <option value="Rural">Rural</option>
          </select>
        </div>

        {/* Fotos */}
        <div>
          <p className="subtitulo">Foto</p>
          {foto && (
            <div className="imagen-contenedor">
              <img
                src={foto}
                alt="Imagen de la campaña"
                className="imagen-preview"
              />
              <button className="boton-eliminar" onClick={() => setFoto(null)}>
                Eliminar Foto
              </button>
            </div>
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="entrada"
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
            />
          </form>
        </div>

        {/* Botones */}
        <div className="botones-container">
          <div className="boton-div">
            <button className="boton" onClick={limpiarCampos}>
              Reiniciar
            </button>
          </div>
          <div className="boton-div">
            <button className="boton" onClick={handleFormSubmit}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campañacrear;