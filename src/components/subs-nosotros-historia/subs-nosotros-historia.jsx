import React from 'react';
import "./subs-nosotros-historia.css";

function SubsNosotrosHistoria(){
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Historia y origen</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-nosotros.svg" alt="Nosotros" className="img-fluid" />  
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">En septiembre de 2023, nació Sinergia como respuesta a un desafío global urgente: <strong>la lucha contra la pobreza</strong>, un objetivo plasmado en el ODS 1 de la ONU.</p>
                        <p className="parrafo-celeste">La organización se originó como parte de un proyecto integrador en el bootcamp de desarrollo web full stack JavaScript de Generation Chile, con la visión de contribuir desde el mundo digital a los esfuerzos para erradicar la pobreza. Desde entonces, hemos estado comprometidos en la creación de un <strong>puente sólido entre instituciones y personas que desean marcar la diferencia</strong>.</p>
                        <p className="parrafo-celeste">Nuestra historia está marcada por el impulso de convertir la motivación en acción concreta y por la construcción de comunidades que se unen en la lucha contra la pobreza.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsNosotrosHistoria;