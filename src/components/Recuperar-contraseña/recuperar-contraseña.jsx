import React from 'react';
import './recuperar-contraseña.css'
import { Link } from 'react-router-dom';

function RecuperarContraseña(){
    return(
        <div className='row'>

            <div className='col-3'>

            </div>

            <div className='col-6 div-r'>

                <form>

                        <h2 className='titulo-secundario-azul'>Recuperar Contraseña</h2>

                        <p className='parrafo-celeste'>Ingresa tu correo electronico para recuperar tu contraseña.</p><br/>

                            <input className='input-r' type="email" placeholder='Ingresa tu email.' required/><br/><br/>
                        
                            <Link to='#' className='boton-r' type="submit">Enviar</Link><br/>
                            <Link to='/login' className='boton-r' type="submit">Volver</Link><br/><br/>

                </form>

            </div>

            <div className='col-3'>

            </div>  

        </div>
    )
        
}
export default RecuperarContraseña;