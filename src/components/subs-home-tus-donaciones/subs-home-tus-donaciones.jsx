import React from 'react';
import "./subs-home-tus-donaciones.css";

function SubsHomeTusDonaciones(){
    return(
        <div className="container-fluid container-fluid-celeste">
            <div className='container container-celeste'>
                <div className="row align-items-center justify-content-center">
                    <h2 className='titulo-secundario-blanco'>Tus donaciones</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-tus-donaciones-2.svg" alt="Tus donaciones"  />
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-blanco">Revisa las campañas en las que tienes donaciones por realizar, mira el historial de tus donaciones y las insignias que has obtenido... Y por supuesto, ¡motívate a donar!</p>
                        <button type="button" className="button-azul">Ir a tus donaciones</button>   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsHomeTusDonaciones;