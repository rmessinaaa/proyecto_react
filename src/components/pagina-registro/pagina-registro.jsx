import React from "react";
import RegistrationForm from '../Inicio-sesion/Inicio-sesion';

function PaginaRegistro () {
    return (
        <div className='bg-paginas'>
            <div className="">
                <div className='container container-blanco '>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <img src="./logos/sinergia-imagotipo-oscuro copia 2.svg" />
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="acomodar-registro-login ">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaRegistro;