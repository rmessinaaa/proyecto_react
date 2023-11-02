import React from 'react';
import Buscador from "../Buscador/Buscador";
import Filtro from "../Filtro/Filtro";

function SubsBuscadorFiltro () {
    return (
        <div>
            <div>
                <h2 className="titulo-secundario-azul">Filtro</h2>
            </div>
            <div className='container centrar-contenido'>
                <Filtro />
            </div>
            <div className='centrar-contenido'>
                <button type="button" className="button-azul">Conoce más</button>
            </div>
        </div>
    )
}

export default SubsBuscadorFiltro;