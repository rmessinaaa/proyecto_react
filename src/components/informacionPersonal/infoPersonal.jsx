import React, { useState } from "react";
import "./infoPersonal.css";
function Infopersonal () {
    
    const [nombre, setNombre] = useState("");
    
    const cambiarNombre = () => {
        
    }
    
    return (
    <div className="contenedor">
        <h1 className="titulo">Información Personal</h1>
        <h7 className="subtitulo">Nombre de Usuario</h7>
        <form>
            <input className="entrada" type="text" readOnly defaultValue={" Campaña_vida"}></input>
            <button className="boton">Editar</button>
        </form>
        <h7 className="subtitulo">Mail</h7>
        <form>
            <input className="entrada" type="text" readOnly defaultValue={"campañavida@gmail.cl"}></input>
            <button className="boton">Editar</button>
        </form>
        <h7 className="subtitulo">Fecha de Nacimiento</h7>
        <form>
            <input className="entrada" type="date" ></input>
            <button className="boton">Editar</button>
        </form>
    </div>
    )
}
export default Infopersonal;