import React from 'react';
import SubsDonacionesCampañasGuardadas from '../subs-donaciones-campañas_guardadas/subs-donaciones-campañas_guardadas';

function PaginaDonaciones(){
    return(
        <div>
        <h1 className='donaciones'>Tus Donaciones</h1>
        <SubsDonacionesCampañasGuardadas/>
        </div>
    )
}
export default PaginaDonaciones;