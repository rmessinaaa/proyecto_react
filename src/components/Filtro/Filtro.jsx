
import React, { useState } from "react";
import Select from "react-select";
import "./Filtro.css";

function CustomSelect({ label, value, onChange, options, isSearchable }) {
  return (
    <div>
      <label className="subtitulo">{label}</label>
      {isSearchable ? (
        <input
          type="text"
          className="opciones input-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Ingrese ${label.toLowerCase()}`}
        />
      ) : (
        <Select
          className="opciones"
          isSearchable
          onChange={(selectedOption) => onChange(selectedOption.value)}
          value={{ label: value || `Seleccione ${label.toLowerCase()}`, value: value || "" }}
          options={options.map((option) => ({ label: option, value: option }))}
          placeholder={`Seleccione ${label.toLowerCase()}`}
          noOptionsMessage={() => null}
        />
      )}
      <hr />
    </div>
  );
}

function Filtro() {
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputValor, setInputValor] = useState("");
  const [inputInstitucion, setInputInstitucion] = useState("");

  const handInputChange = (seccion, value) => {
    console.log(`Ingresado en ${seccion}:`, value);
    // Puedes agregar lógica adicional según sea necesario
  };

  const categoriasOptions = ["Vivienda", "Educación", "Infancia", "Rural", "Salud"];
  const valoresOptions = ["$5.000 pesos hasta $10.000 pesos.",
  "$10.000 pesos hasta $15.000 pesos.",
  "$15.000 pesos hasta $20.000 pesos.",
  "$20.000 pesos hasta $25.000 pesos.",
  "$25.000 pesos hasta $30.000 pesos.",
  "$30.000 pesos hasta $35.000 pesos.",
  "$35.000 pesos hasta $40.000 pesos.",
  "$40.000 pesos hasta $45.000 pesos.",
  "$45.000 pesos hasta $50.000 pesos.",
  "$50.000 pesos hasta $55.000 pesos."];
  const institucionesOptions = ["Opción A", "Opción B", "Opción C"];

  const handleRestablecer = () => {
    // Restablecer los valores a los predeterminados
    setInputCategoria("");
    setInputValor("");
    setInputInstitucion("");
  };

  const handleEnviar = () => {
    // Agregar lógica para enviar los datos
    console.log("Enviar");
  };

  return (
    <div className="container-filtro">
      <div className="filtro-section">
        <h4 className="titulo">Filtra tu búsqueda:</h4>
      </div>

      <CustomSelect
        label="Categoría"
        value={inputCategoria}
        onChange={(value) => setInputCategoria(value)}
        options={categoriasOptions}
        isSearchable={false}
      />

      <CustomSelect
        label="Valor"
        value={inputValor}
        onChange={(value) => setInputValor(value)}
        options={valoresOptions}
        isSearchable={false}
      />

      <CustomSelect
        label="Instituciones"
        value={inputInstitucion}
        onChange={(value) => setInputInstitucion(value)}
        options={institucionesOptions}
        isSearchable={true}
      />

      <div className="botones-container">
        <div className="boton-div">
          <button className="boton" onClick={handleRestablecer}>
            Restablecer
          </button>
        </div>
        <div className="boton-div">
          <button className="boton" onClick={handleEnviar}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtro;
