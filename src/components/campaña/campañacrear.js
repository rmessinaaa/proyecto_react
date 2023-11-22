
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./campañacrear.css";

function CreateCampaign() {
  // Estados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meta, setMeta] = useState("");
  const [account, setAccount] = useState("");
  const [category, setCategory] = useState("");
  const [banco, setBanco] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [email, setEmail] = useState("");
  const [filename, setFileName] = useState(null);
  const [mostrarOpcionesCuenta, setMostrarOpcionesCuenta] = useState(false);
  const regiones = [
    "Región de Arica y Parinacota",
    "Región de Tarapacá",
    "Región de Antofagasta",
    "Región de Atacama",
    "Región de Coquimbo",
    "Región de Valparaíso",
    "Región Metropolitana",
    "Región del Libertador General Bernardo O'Higgins",
    "Región del Maule",
    "Región de Ñuble",
    "Región del Biobío",
    "Región de La Araucanía",
    "Región de Los Ríos",
    "Región de Los Lagos",
    "Región de Aysén del General Carlos Ibáñez del Campo",
    "Región de Magallanes y de la Antártica Chilena",
  ];

  //Función para que no se vean las <p> en la descripción
  
  // Manejadores de cambios
  const handleNombreChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescripcionChange = (value) => {
    setDescription(value);
  };

  const [region, setRegion] = useState("");

  const handleRegionChange = (event) => {
  setRegion(event.target.value);
  };


  const handleRangoMetaChange = (event) => {
    setMeta(event.target.value);
  };

  const handleCuentaChange = (event) => {
    setAccount(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileName(reader.result);
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
    setAccountType(event.target.value);
  };

  const handleNumeroCuentaChange = (event) => {
    setAccountNum(event.target.value);
  };

  const handleCorreoElectronicoChange = (event) => {
    setEmail(event.target.value);
  };

  // Función para limpiar campos
  const limpiarCampos = () => {
    setTitle("");
    setDescription("");
    setMeta("");
    setAccount("");
    setCategory("");
    setFileName(null);
    setBanco("");
    setAccountType("");
    setAccountNum("");
    setEmail("");
  };

  // Función para manejar el clic en Mostrar/Ocultar opciones de cuenta
  const toggleOpcionesCuenta = () => {
    setMostrarOpcionesCuenta(!mostrarOpcionesCuenta);
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = () => {
    if(!title || !description || !meta || !category || !banco || !accountType || !accountNum || !email){
      console.log("todos los campos son requeridos");
      return 
    }
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    const formulario = {
      title,
      description,
      meta,
      category,
      account : {
        banco,
        accountType,
        accountNum,
        email,
      }
      
    };
    const bodyImage = {
      filename,
       
    }
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/campanas", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials : 'include',
        acces_token: token
      },
      body: JSON.stringify(formulario)
    })
    .then(res => res.json())
    .then(res => console.log(res))

    fetch("http://localhost:8080/api/uploads", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials : 'include',
        acces_token: token,
        Accept: "/"
      },
      body: JSON.stringify(bodyImage)                
    })
    .then(res => res.json())
    .then(data => setFileName(data))
    .catch(err => console.error("error", err))
    
    
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
            value={title}
            onChange={handleNombreChange}
            placeholder="Ingrese su nombre de campaña"
          />
        </div>
        
        {/* Descripción */}
        <div>
          <p className="subtitulo">Descripción de campaña</p>
          <ReactQuill
            className="quill-editor"
            value= {description}
            onChange={handleDescripcionChange}
            placeholder="Describa la campaña"
          />
        </div>


        {/* Regiones */}
<div>
  <p className="subtitulo">Región</p>
  <select
    className="entrada"
    value={region}
    onChange={handleRegionChange}
  >
    <option value="" disabled defaultValue>
      Seleccione una región
    </option>
    {regiones.map((region, index) => (
      <option key={index} value={region}>
        {region}
      </option>
    ))}
  </select>
</div>




       {/* META */}
        <div>
          <p className="subtitulo">Rango Meta</p>
          <input
            className="entrada"
            type="number"
            value={meta}
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
                </select>
              </div>

              {/* Tipo de Cuenta */}
              <div>
                <p className="subtitulo">Tipo de Cuenta</p>
                <select
                  className="entrada"
                  value={accountType}
                  onChange={handleTipoCuentaChange}
                >
                  <option value="" disabled defaultValue>
                    Seleccione un tipo de cuenta
                  </option>
                  <option value="Cuenta Vista">Cuenta Vista</option>
                  <option value="Cuenta Corriente">Cuenta Corriente</option>
                  <option value="Cuenta Rut">Cuenta Rut</option>
                </select>
              </div>

              {/* Número de Cuenta */}
              <div>
                <p className="subtitulo">Número de Cuenta</p>
                <input
                  className="entrada"
                  type="text"
                  value={accountNum}
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
                  value={email}
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
            value={category}
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
          {filename && (
            <div className="imagen-contenedor">
              <img
                src={filename}
                name = "image"
                alt="Imagen de la campaña"
                className="imagen-preview"
              />
              <button className="boton-eliminar" onClick={() => setFileName(null)}>
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

export default CreateCampaign;