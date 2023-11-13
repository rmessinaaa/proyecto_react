
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./campañacrear.css";

function Campañacrear() {
  // Estados
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [meta, setMeta] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [categoria, setCategoria] = useState("");
  const [foto, setFoto] = useState(null);

  // Manejadores de cambios
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (value) => {
    setDescripcion(value);
  };

  const handleMetaChange = (event) => {
    setMeta(event.target.value);
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

  // Función para limpiar campos
  const limpiarCampos = () => {
    setNombre("");
    setDescripcion("");
    setMeta("");
    setCuenta("");
    setCategoria("");
    setFoto(null);
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log("Datos del formulario:", { nombre, descripcion, meta, cuenta, categoria, foto });
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
          <p className="subtitulo">Meta</p>
          <input
            className="entrada"
            type="number"
            value={meta}
            onChange={handleMetaChange}
            placeholder="$/ Ingrese el valor de meta en pesos chilenos"
          />
        </div>

        {/* CUENTA */}
        <div>
          <p className="subtitulo">Cuenta</p>
          <input
            className="entrada"
            type="text"
            value={cuenta}
            onChange={handleCuentaChange}
            placeholder="Ingrese su cuenta de campaña"
          />
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
              <img src={foto} alt="Imagen de la campaña" className="imagen-preview" />
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
  );
}

export default Campañacrear;
