import React from 'react';
import SubsDonacionesCampañasGuardadas from '../subs-donaciones-campañas_guardadas/subs-donaciones-campañas_guardadas';
import SubsDonacionesInsignias from '../subs-donaciones-insignias/subs-donaciones-insignias'

function PaginaDonaciones(){
    return(
        <div className='bg-paginas'>
        <h1 className='donaciones'>Tus Donaciones</h1>
        <SubsDonacionesCampañasGuardadas/>
        <SubsDonacionesInsignias/>
        </div>
    )
}
export default PaginaDonaciones;