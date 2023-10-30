import React from 'react';
import "./subs-home-nosotros.css";

function SubsHomeNosotros(){
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Nosotros</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">El mundo está repleto de personas trabajando constantemente en pos de la superación de la pobreza, y de muchas personas motivadas a ayudar... ¿Nuestra misión? Conectarlas, crear sinergia y avanzar juntos.</p>
                        <button type="button" className="button-azul">Conoce más</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-nosotros.svg" alt="Nosotros" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsHomeNosotros;