import React from "react";
import Meta from "../Meta/Meta";
import Computo from "../Computo/Computo"

function SubsCampañaStatus () {
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className='container container-blanco'>
                <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Status de campaña</h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <Meta />
                        <Computo />
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="/ilustraciones/campanas-guardadas.svg" alt="status" className="control-ilustraciones" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubsCampañaStatus;