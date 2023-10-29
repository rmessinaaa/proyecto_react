import React from "react";
import Select from "react-select";
import './Filtro.css'

const categorias = [
    { label : "Opción 1", value: "Opcion 1"},
    { label : "Opción 2", value: "Opcion 2"},
    { label : "Opción 3", value: "Opcion 3"}
]
const valores = [
    { label : "Opción 1", value: "Opcion 1"},
    { label : "Opción 2", value: "Opcion 2"},
    { label : "Opción 3", value: "Opcion 3"}
]
const instituciones = [
    { label : "Opción 1", value: "Opcion 1"},
    { label : "Opción 2", value: "Opcion 2"},
    { label : "Opción 3", value: "Opcion 3"}
]
function Filtro(){

const handSelectCategoria = (e) => {
            console.log(e);
        }
    
const handSelectValor = (e) => {
        console.log(e);
    }

const handSelectInstitucion = (e) => {
        console.log(e);
    }

    return (
    <div className="container">
        <h3 className="titulo">Filtra tu búsqueda:</h3>
            <h4 className="subtitulo">Categoría</h4>
            
            <Select 
            className="opciones" 
            options={categorias} 
            onChange={handSelectCategoria}
            defaultValue={{label: "Escoger", value: "Escoger"}}
            
            >
            
            </Select >
            <hr></hr>
            <h4 className="subtitulo">Valor</h4>
            <Select 
            className="opciones" 
            options={valores} 
            onChange={handSelectValor}
            defaultValue={{label: "Escoger", value: "Escoger"}}
            
            >
                
            </Select >
            <hr></hr>
            <h4 className="subtitulo">Instituciones</h4>
           
            <Select 
            className="opciones" 
            options={instituciones} 
            onChange={handSelectInstitucion}
            defaultValue={{label: "Escoger", value: "Escoger"}}
            
            >
            
            </Select >
    </div>
    )
}  
export default Filtro;