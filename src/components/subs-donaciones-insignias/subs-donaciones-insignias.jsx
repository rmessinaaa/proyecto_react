import React from 'react';
import Insignia_uno from '../Tus-Insignias/Insignia_1';
import Insignia_dos from '../Tus-Insignias/Insignia_2';


function SubsDonacionesInsignias(){
    return(
        
        <div className='container container-blanco'>
            <div className="row align-items-center justify-content-center">
                    <h2 className="titulo-secundario-azul">Tus Insignias</h2>
            </div>

                    

               
                <div className="row align-items-center ">
                    <div className="col-md-6 text-center">
                        <img src="/ilustraciones/tus-insignias.svg" alt="Tus Insignias"/>
                    </div>
                
                    <div className="col-md-6 ">

                       

                            <div className="row align-items-center ">
                            <Insignia_uno/>
                            </div>    
                        

                        <div className="row align-items-center ">
                        
                            <Insignia_dos/>
                        
                        </div>
                    </div>
                </div>
                   

            
           
        </div>
            
        
    );
}
export default SubsDonacionesInsignias;