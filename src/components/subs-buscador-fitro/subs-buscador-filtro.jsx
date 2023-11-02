import React from 'react';
import Buscador from "../Buscador/Buscador";
import Filtro from "../Filtro/Filtro";

function SubsBuscadorFiltro () {
    return (
        <div>
            <div className='container centrar-contenido'>
                <Filtro />
            </div>
            <div className='centrar-contenido'>
                <button type="button" className="button-azul">Buscar</button>
            </div>
        </div>
    )
}

export default SubsBuscadorFiltro;