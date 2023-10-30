import React from 'react'
import './Buscador.css'

function Buscador() {
    return (
    <div className='container-fluid'> 
            <h1 className='buscador-h1'>Buscador</h1>
            <p className='buscador-p'>Busca la campaña en la que quieras aportar.</p>
        <form>
            <input className='barra-busqueda' type="search" placeholder="Escribe tu búsqueda..." aria-label="Search"></input>
        </form>
    </div>
    );
}
export default Buscador;