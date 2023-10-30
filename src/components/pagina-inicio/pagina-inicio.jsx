import React from 'react';
import Buscador from '../Buscador/Buscador';
import SubsHomeTusDonaciones from '../subs-home-tus-donaciones/subs-home-tus-donaciones';
import SubsHomeNosotros from '../subs-home-nosotros/subs-home-nosotros';
import SubsHomePerfil from '../subs-home-perfil/subs-home-perfil';

function PaginaInicio() {
    return (
        <div>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Inicio</h1>
                </div>
            </div>
            <Buscador />
            <SubsHomeTusDonaciones />
            <SubsHomeNosotros />
            <SubsHomePerfil />
        </div>
    )
}

export default PaginaInicio;