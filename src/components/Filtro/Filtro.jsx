
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
  const [inputInstitucion, setInputInstitucion] = useState("");
  const [inputRegion, setInputRegion] = useState("");
  const [inputComuna, setInputComuna] = useState("");
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputValor, setInputValor] = useState("");

  const handInputChange = (seccion, value) => {
    console.log(`Ingresado en ${seccion}:`, value);
  };

  const regionesOptions = ["Región Metropolitana", "Región 1", "Región 2", "Región 3", /* ... */];
  const comunasOptions = {
    "Región Metropolitana": [
      "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba",
      "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina",
      "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa",
      "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñalolén", "Pirque", "Providencia",
      "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca",
      "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón",
      "Santiago", "Talagante", "Tiltil", "Vitacura",
    ],
    // ... otras regiones y comunas
  };

  const categoriasOptions = ["Vivienda", "Educación", "Infancia", "Rural", "Salud"];

  const handleRestablecer = () => {
    setInputInstitucion("");
    setInputRegion("");
    setInputComuna("");
    setInputCategoria("");
    setInputValor("");
  };

  const handleEnviar = () => {
    console.log("Enviar");
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
        options={[]} 
        isSearchable={true}
      />

      <CustomSelect
        label="Región"
        value={inputRegion}
        onChange={(value) => {
          setInputRegion(value);
          setInputComuna(""); // Limpiar la comuna al cambiar la región
        }}
        options={regionesOptions}
        isSearchable={false}
      />

      <CustomSelect
        label="Comuna"
        value={inputComuna}
        onChange={(value) => setInputComuna(value)}
        options={comunasOptions[inputRegion] || []}
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
