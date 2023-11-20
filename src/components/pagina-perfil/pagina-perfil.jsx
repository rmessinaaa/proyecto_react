import React from 'react';
import Infopersonal from '../informacionPersonal/infoPersonal';
import Perfil from '../Perfil/Perfil';
// import SubsPerfilIntereses from '../subs-perfil-intereses/subs-perfil-intereses';

function PaginaPerfil(){
    return(
        <div className='bg-paginas'>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Tu perfil</h1>
                </div>
            </div>
            <div>
                <Perfil />
            </div>
            <div className='centrar-contenido'>
                <Infopersonal />
            </div>
            {/* <div className='centrar-contenido container container-blanco'>
                <SubsPerfilIntereses />
            </div>  */}
        </div>
    )
}
export default PaginaPerfil;