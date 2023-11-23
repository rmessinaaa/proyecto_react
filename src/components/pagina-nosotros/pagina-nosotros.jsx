import React from 'react';
import SubsNosotrosHistoria from '../subs-nosotros-historia/subs-nosotros-historia';
import SubsNosotrosMision from '../subs-nosotros-mision/subs-nosotros-mision';
import SubsNosotrosValores from '../subs-nosotros-valores/subs-nosotros-valores';
import "./pagina.css"
function PaginaNosotros() {
    return (
        <div className='bg-nosotros'>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>¿De dónde nace Sinergia?</h1>
                </div>
            </div>
            <SubsNosotrosHistoria />
            <SubsNosotrosMision />
            <SubsNosotrosValores />
        </div>
    )
}

export default PaginaNosotros;