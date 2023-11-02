import React from 'react';
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Perfil(){
    return(
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center perfil-container'>
            <img src='/ilustraciones/foto_perfil.png' alt='Foto De Perfil' className='img-fluid perfil-img'></img><br></br>
            <button id='boton'>Cambiar foto de perfil</button>
        </div>
    )
}

export default Perfil;
