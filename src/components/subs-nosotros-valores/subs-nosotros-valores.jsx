import React from 'react';
import "./subs-nosotros-valores.css";

function SubsNosotrosValores(){
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h1 className="titulo-primario-azul">Valores y principios</h1>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="ilustraciones/home-tus-donaciones-2.svg" alt="Nosotros" className="img-fluid" />  
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">En Sinergia, nos guían valores sólidos que reflejan nuestra dedicación a la causa de la superación de la pobreza. Estos valores incluyen <strong>la transparencia, la colaboración, la inclusión y la igualdad</strong>.</p>
                        <p className="parrafo-celeste"> Creemos en la transparencia total en todas nuestras acciones y operaciones. La colaboración es fundamental, ya que reconocemos que la unión de esfuerzos es la clave para abordar un desafío tan monumental. La inclusión y la igualdad son esenciales en nuestro trabajo, y nos esforzamos por brindar acceso y oportunidades a todas las personas, sin importar su origen o circunstancias.</p>
                        <p className="parrafo-celeste">Estos valores fundamentales nos impulsan a seguir adelante y a construir un futuro mejor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubsNosotrosValores;