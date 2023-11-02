import React from "react";
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';
import './subs-buscador-resultados.css'

function SubsBuscadorResultados () {
    return (
        <div>
            <div className="row align-items-center justify-content-center centrar-contenido">
                <h2 className="titulo-secundario-azul titulo-resultados-busqueda">Resultados de búsqueda</h2>
            </div>
            <div className="row align-items-center justify-content-center centrar contenido">
                <div className="col-md-4 text-center centrar-contenido">
                        <VerticalCards />
                </div>
                <div className="col-md-4 text-center centrar contenido">
                        <VerticalCards />
                 </div>
            </div>
        </div>
    )
}

export default SubsBuscadorResultados;