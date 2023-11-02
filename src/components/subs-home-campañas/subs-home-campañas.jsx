import React from 'react';
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';

function SubsHomeCampañas(){
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Campañas Sugeridas</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 text-center">
                        <VerticalCards />
                    </div>
                    <div className="col-md-4 text-center">
                        <VerticalCards />
                    </div>
                    <div className="col-md-4 text-center">
                        <VerticalCards />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsHomeCampañas;