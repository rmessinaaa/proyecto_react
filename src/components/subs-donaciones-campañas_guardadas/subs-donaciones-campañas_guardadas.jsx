import React from 'react';
import Card2 from '../Tarjeta-pagina-secundaria/Tarjeta-pagina-secundaria';
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';


function SubsDonacionesCampañasGuardas(){
    return(
        
        <div className='container container-blanco'>
            <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Campañas Guardadas</h2>
            </div>

                    

                <div className="row align-items-center justify-content-center">


                    <div className='col-md-8 text-center'>
                        <p className='parrafo-celeste'>Tu valiosa contribución permite que las metas se conviertan en realidades palpables, llevando consuelo y alivio a aquellos que enfrentan desafíos difíciles. Tu compromiso incansable y tu compasión nos inspiran a seguir adelante, a trabajar con renovado vigor y a recordar que juntos podemos superar cualquier obstáculo.</p>
                    </div>

                    <div className="col-md-4 text-center">
                        <img src="/ilustraciones/campanas-guardadas.svg" alt="Campañas Guardadas"/>
                    </div>

                    

                </div><br></br><br></br><br></br><br></br><br></br>

                    <div className="row align-items-center justify-content-center">

                        <div className="col-md-3 text-center">
                            <VerticalCards/>
                        </div>

                        <div className="col-md-3 text-center">
                            <VerticalCards/>
                        </div>

                        <div className="col-md-3 text-center">
                            <VerticalCards/>
                        </div>

                        <div className="col-md-3 text-center">
                            <VerticalCards/>
                        </div>    

                
                    </div>
           
        </div>
            
        
    );
}
export default SubsDonacionesCampañasGuardas;