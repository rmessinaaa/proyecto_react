import React from "react";

function VistaCampañas() {
    const handleDelete = () => {
        // Función para eliminar la campaña
        console.log("Campaña eliminada");
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="div-campaña-prueba">
                    <div className="row envoltura-campañas" id="envoltura-campañas">
                        <div className="col-6 centrar-contenido">
                            <h3 className='meta-computo-title' id="envoltura-campañas">Campaña 1</h3>
                        </div>
                        <div className="col-4 centrar-contenido">
                        <button to="#" type="button" className="button-azul">Editar</button>
                        </div>
                        <div className="col-2 centrar-contenido cruz">
                            <img
                                src="/ilustraciones/Cruz%20azul.svg"
                                alt="Eliminar campaña"
                                onClick={handleDelete}
                                className="cruz"
                                style={{cursor: 'pointer',
                                transform: 'scale(0.15)',}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VistaCampañas;