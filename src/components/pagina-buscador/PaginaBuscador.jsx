import React from 'react';
import Buscador from '../Buscador/Buscador';
import SubsBuscadorFiltro from '../subs-buscador-fitro/subs-buscador-filtro';

function PaginaBuscador () {
    return (
        <div>
            <div>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Buscador</h1>
                </div>
            </div>
            <SubsBuscadorFiltro />
            
        </div>
    </div>
    )
}

export default PaginaBuscador;