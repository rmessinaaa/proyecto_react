import React from 'react';
import './Tus-insignias.css'

function Insignia(){
    return(
        <div>
        <h3 className='Titulo-insignia'>Tus insignias</h3>
        <img className='imagen-insignia' src='ilustraciones/tus-insignias.svg'></img>
        
        <div className="alert alert-primary" role="alert">
               Felicidades por tu primera donación
        </div>
        <div className="alert alert1-primary" role="alert">
               3 donaciones, ¡sigue así! 
        </div>
        </div>
    )
}
export default Insignia;
