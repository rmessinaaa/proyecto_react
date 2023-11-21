import React from 'react';
import Infopersonal from '../informacionPersonal/infoPersonal';
import Perfil from '../Perfil/Perfil';
import "./paginaperfil.css";
// import SubsPerfilIntereses from '../subs-perfil-intereses/subs-perfil-intereses';

function PaginaPerfil() {
  return (
    <div className='bg-paginas bg-perfil'>
      <div className="container-fluid">
        <div className='container container-blanco'>
          <div className="row align-items-center"> {/* Añadida la clase align-items-center */}
            <div className="col ">
              <h1> Bienvenido a tu perfil </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <Perfil />
        </div>
        <div className="col >">
          <div className='centrar-contenido'>
            <Infopersonal />
          </div>
        </div>
      </div>
      {/* <div className='centrar-contenido container container-blanco'>
          <SubsPerfilIntereses />
      </div> */}
    </div>
  );
}

export default PaginaPerfil;
