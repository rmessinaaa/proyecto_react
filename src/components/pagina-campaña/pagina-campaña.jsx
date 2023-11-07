import React from 'react';
import SubsCampañaDescripcion from '../subs-campaña-descripcion/subs-campaña-descripcion';
import SubsCampañaStatus from '../subs-campaña-status/subs-campaña-status';
import SubsCampañaDonar from '../subs-campaña-donar/subs-campaña-donar';

function PaginaCampaña () {
    return(
        <div className='bg-paginas'>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>Nombre campaña</h1>
                </div>
            </div>
            <SubsCampañaDescripcion/>
            <SubsCampañaStatus />
            <SubsCampañaDonar />
        </div>
    );
};

export default PaginaCampaña;