import React from 'react';
import Card2 from '../Tarjeta-pagina-secundaria/Tarjeta-pagina-secundaria';
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';


function SubsDonacionesCampañasGuardas(){
    return(
        
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Campañas Guardadas</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                       <VerticalCards/><VerticalCards/>
                       
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="/ilustraciones/campanas-guardadas.svg" alt="Campañas Guardadas"  />
                    </div>
                </div>
            </div>
        
    );
}
export default SubsDonacionesCampañasGuardas;