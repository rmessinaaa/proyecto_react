import React from 'react';
import './Tus-insignias.css'


// function Insignia() {

//     <div className="container-fluid container-fluid-blanco">
//         <div className='container container-blanco'>
//             <div className="row align-items-center justify-content-center">
//                 <h1 className="titulo-primario-azul">Tus insignias</h1>
//             </div>
//             <div className="row align-items-center justify-content-center">
//                 <div className="col-md-6 text-center">
//                     <img className='imagen-insignia img-fluid' src='ilustraciones/tus-insignias.svg' />  
//                 </div>
//                 <div className="col-md-6 text-center">
//                     <div className="alert alert-primary" role="alert">
//                         Felicidades por tu primera donación
//                     </div>
//                     <div className="alert alert1-primary" role="alert">
//                         3 donaciones, ¡sigue así! 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// }

function Insignia(){
    return(
        <div className="container-fluid container-fluid-blanco">
            <div className="container container-blanco">
                <div className="row align-items-center justify-content-center">
                    <h3 className='titulo-primario-azul'>Tus insignias</h3>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <img className='imagen-insignia' src='ilustraciones/tus-insignias.svg'></img>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="alert alert-primary" role="alert">
                            Felicidades por tu primera donación
                        </div>
                        <div className="alert alert1-primary" role="alert">
                            3 donaciones, ¡sigue así! 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function Insignia(){
//     return(
//         <div container-fluid>
//             <h3 className='Titulo-insignia'>Tus insignias</h3>
//             <img className='imagen-insignia' src='ilustraciones/tus-insignias.svg'></img>
            
//             <div className="alert alert-primary" role="alert">
//                 Felicidades por tu primera donación
//             </div>
//             <div className="alert alert1-primary" role="alert">
//                 3 donaciones, ¡sigue así! 
//             </div>
//         </div>
//     )
// }


export default Insignia;
