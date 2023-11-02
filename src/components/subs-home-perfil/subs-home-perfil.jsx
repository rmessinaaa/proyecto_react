import React from 'react';
import "./subs-home-perfil.css";

function SubsHomePerfil(){
    return(
        <div className="container-fluid container-fluid-celeste">
            <div className='container container-celeste'>
                <div className="row align-items-center justify-content-center">
                    <h2 className='titulo-secundario-blanco'>Perfil</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-perfil.svg" alt="Tu perfil" />
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-blanco">Ajusta y edita tu información personal, revisa y modifica la fotografía con que te das a conocer y añade o elimina categorías de tu interés.</p>
                        <button type="button" className="button-azul">Ir a tu perfil</button>   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsHomePerfil;