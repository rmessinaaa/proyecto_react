import React from 'react';

function SubsCampañaDescripcion ({ title, description, img }) {
    return(
        
        <div className="container-fluid container-fluid-blanco">
            <div className='bg-paginas'>
            <div className="container-fluid">
                <div className='container container-blanco'>
                    <h1 className='titulos-principales'>{ title }</h1>
                </div>
            </div>
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Descripción</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="/imagenes-campaña/sinergiafoto.png" alt="descripcion" className='foto-campaña' />
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">{ description }</p>
                        {/* <button type="button" className="button-azul">Guardar campaña</button> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default SubsCampañaDescripcion;