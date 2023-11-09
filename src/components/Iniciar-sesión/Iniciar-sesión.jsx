import React from 'react'
import './Iniciar-sesion.css'


function IniciarSesion(){
    return(
        
    <div className='container-fluid'>

        <div className='container-fluid div-unico'>   

            <div className='container-fluid div-linea'>

                <div className="container-fluid div-uno">
                    <h1 className='titulos-principales'>Inicia sesión en Sinergia</h1>
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
                    <button className='dos-botones'>Siguiente</button>
                </div>

                <div className='container-fluid div-cinco'>
                    <button className='dos-botones'>¿Olvidaste tu contraseña?</button>
                </div>

                

            </div>

        </div>

    </div>
        
    )
}
export default IniciarSesion;