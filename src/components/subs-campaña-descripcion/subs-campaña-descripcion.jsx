import React from 'react';

function SubsCampañaDescripcion () {
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Descripción</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="/imagenes-campaña/sinergiafoto.png" alt="descripcion" className='foto-campaña' />
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="parrafo-celeste">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button type="button" className="button-azul">Guardar campaña</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SubsCampañaDescripcion;