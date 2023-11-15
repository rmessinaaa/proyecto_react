
import React from 'react'
import './Iniciar-sesion.css'
import { Link } from "react-router-dom";


function IniciarSesion(){
    return(
        
    <div className='row'>

        
            <div className='col-1'>

            </div>

            <div className='col-10 inicio'>
                <div className='row azul'>
                <div className="container-fluid div-uno">
                    <h2> Inicia sesión en Sinergia</h2>
                    <p>
            Únete a nuestra causa y haz la diferencia
            <br />
            Inicia sesión con tus datos
          </p>
                </div>
                </div>
                
            
                <div className='container-fluid div-dos'>
                    <button className='boton-g'>Iniciar sesión con Google</button>
                </div> 

                <div className='container-fluid'>
                    <div className='div-linea2'>
                        <div class="linea-con-letra">
                            <hr class="linea"></hr>
                                <span class="letra">o</span>
                            <hr class="linea"></hr>
                        </div>
                    </div>
                </div>

                <div className='container-fluid div-tres'>
                    <form action="/login" method="post">
                        <input className='input' type="text" id="usuario" name="usuario" placeholder='Correo electronico o nombre de usuario'></input>
                    </form>
                </div> 

                <div className='container-fluid div-tres'>
                    <form action="/login" method="post">       
                        <input className='input' type='password' placeholder='Contraseña'></input>
                    </form>
                </div> 

                <div className='container-fluid div-cuatro'>
                    <Link to="/" className='dos-botones' id="sign-in">Siguiente</Link>
                    {/* <button className='dos-botones'>Siguiente</button> */}
                </div>

                <div className='container-fluid div-cinco'>
                    <Link to='/recuperar-contrasena' className='dos-botones'>¿Olvidaste tu contraseña?</Link>
                </div>
            </div>

            <div className='col-1'>

            </div>
                



    </div>
        
    )
}
export default IniciarSesion;