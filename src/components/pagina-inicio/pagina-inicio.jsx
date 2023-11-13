import React from 'react';
import Buscador from '../Buscador/Buscador';
import SubsHomeTusDonaciones from '../subs-home-tus-donaciones/subs-home-tus-donaciones';
import SubsHomeNosotros from '../subs-home-nosotros/subs-home-nosotros';
import SubsHomePerfil from '../subs-home-perfil/subs-home-perfil';
import SubsHomeCampañas from '../subs-home-campañas/subs-home-campañas';
import Carrusel from "../Carrusel/Carrusel";
function PaginaInicio() {
    return (
        <div className='bg-paginas'>
            <Carrusel/>
            
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Inicio</h1>
                </div>
            </div>
            <Buscador />
            <SubsHomeCampañas />
            <SubsHomeTusDonaciones />
            <SubsHomeNosotros />
            <SubsHomePerfil />
        </div>
    )
}

export default PaginaInicio;