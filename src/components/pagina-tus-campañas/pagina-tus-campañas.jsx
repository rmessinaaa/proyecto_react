import React from 'react';
import VistaCampañas from '../vista-campañas/vista-campañas';
import { Link } from "react-router-dom";


function Pagina_Tus_Campañas() {
    return(
        <div className='container-fluid'>
            <h1 className='titulos-principales'>Tus campañas</h1>
           <VistaCampañas/>
           <VistaCampañas/>
           <VistaCampañas/> 
           <VistaCampañas/>

         <div className='row'>
                <div className='col-5'>

                </div>
            
                <div className='col-3'>
                    <Link to="/crear-campaña" className='button-azul'>Crear nueva campaña</Link>
                </div>

                <div className='col-2'>

                </div>

            </div>
            
        </div>
    )
}
export default Pagina_Tus_Campañas; 