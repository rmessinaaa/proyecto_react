import React from 'react'
import './Buscador.css'

function Buscador() {
    return (
    <div className='container-fluid'>
        <div className='container container-blanco'>
                <h2 className='titulo-secundario-azul'>Buscador</h2>
                <p className='buscador-p'>Busca la campaña en la que quieras aportar.</p>
            <form className='text-center'>
                <input className='barra-busqueda' type="search" placeholder="Escribe tu búsqueda..." aria-label="Search"></input>
            </form>
        </div>
    </div>
    );
}
export default Buscador;