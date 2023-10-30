import React from 'react';
import "./subs-nosotros-mision.css";

function SubsNosotrosMision(){
    return(
        <div className="container-fluid container-fluid-celeste">
            <div className='container container-celeste'>
                <div className="row align-items-center justify-content-center">
                    <h1 className='titulo-primario-blanco'>Misión y visión</h1>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <p className="parrafo-blanco">Nuestra misión es clara: canalizar la voluntad y la disposición de las personas hacia la ayuda concreta. En un mundo donde el 10% de la población mundial enfrenta la pobreza, vemos una oportunidad de transformar el panorama a través de la colaboración y la solidaridad.</p>
                        <p className="parrafo-blanco">Queremos ser un <strong>vínculo esencial</strong> entre las instituciones que trabajan incansablemente para superar la pobreza y las millones de personas dispuestas a ayudar. A través de una plataforma digital, Sinergia se esfuerza por conectar las intenciones con acciones tangibles, generando un impacto real y forjando una comunidad apasionada en la lucha contra la pobreza.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-perfil.svg" alt="Tu perfil" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsNosotrosMision;