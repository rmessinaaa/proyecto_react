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
                        <img src="ilustraciones/home-nosotros.svg" alt="Nosotros" />  
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">Sinergia, nacida en septiembre de 2023 como respuesta a la lucha global contra la pobreza (ODS 1 de la ONU), se originó en un proyecto integrador durante el bootcamp de desarrollo web de Generation Chile. Comprometida con contribuir desde el mundo digital, la organización ha construido un puente entre instituciones y personas para marcar la diferencia en la erradicación de la pobreza, convirtiendo la motivación en acción concreta y construyendo comunidades comprometidas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsNosotrosHistoria;