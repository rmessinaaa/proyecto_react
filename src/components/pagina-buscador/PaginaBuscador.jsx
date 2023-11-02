import React from 'react';
import Buscador from '../Buscador/Buscador';
import SubsBuscadorFiltro from '../subs-buscador-fitro/subs-buscador-filtro';
import SubsBuscadorResultados from '../subs-buscador-resultados/subs-buscador-resultados';

function PaginaBuscador () {
    return (
        <div>
            <div>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Buscador</h1>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container container-blanco'>
                    <p className='buscador-p'>Busca la campaña en la que quieras aportar.</p>
                    <form className='text-center'>
                        <input className='barra-busqueda' type="search" placeholder="Escribe tu búsqueda..." aria-label="Search"></input>
                    </form>
                </div>
            </div>
            <div className="row align-items-center justify-content-center contenedor-cards-resultados-busqueda">
                <div className="col-md-4 text-center">
                    <h2 className="titulo-secundario-azul">Filtro</h2>
                </div>
                <div className="col-md-8 text-center">
                    <h2 className="titulo-secundario-azul">Resultados de búsqueda</h2>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4 text-center">
                    <SubsBuscadorFiltro />
                </div>
                <div className="col-md-8 text-center">
                    <SubsBuscadorResultados />
                </div>
            </div>           
        </div>
    </div>
    )
}

export default PaginaBuscador;