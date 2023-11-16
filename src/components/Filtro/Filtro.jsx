
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
  const [inputRegion, setInputRegion] = useState("");
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputValor, setInputValor] = useState("");
  const [inputInstitucion, setInputInstitucion] = useState("");

  const handInputChange = (seccion, value) => {
    console.log(`Ingresado en ${seccion}:`, value);
    // Puedes agregar lógica adicional según sea necesario
  };

  const regionesOptions = [
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

  const categoriasOptions = ["Vivienda", "Educación", "Infancia", "Rural", "Salud"];

  const handleRestablecer = () => {
    setInputInstitucion("");
    setInputRegion("");
    setInputCategoria("");
    setInputValor("");
  };

  return (
    <div className="container-filtro">
      <div className="filtro-section">
        <h4 className="titulo">Filtra tu búsqueda:</h4>
      </div>

      <CustomSelect
        label="Instituciones"
        value={inputInstitucion}
        onChange={(value) => setInputInstitucion(value)}
        options={[]} // Puedes agregar opciones específicas para instituciones si es necesario
        isSearchable={true}
      />

      <CustomSelect
        label="Región"
        value={inputRegion}
        onChange={(value) => setInputRegion(value)}
        options={regionesOptions}
        isSearchable={false}
      />

      <CustomSelect
        label="Categoría"
        value={inputCategoria}
        onChange={(value) => setInputCategoria(value)}
        options={categoriasOptions}
        isSearchable={false}
      />

      <div className="botones-container">
        <div className="boton-div">
          <button className="boton" onClick={handleRestablecer}>
            Restablecer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtro;
