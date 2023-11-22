import React from "react";

const VistaCampañas = (props) => {
  const { title, onDeleteCampaign, campaignId } = props;

  const handleDelete = async () => {
    try {
      // Llama a onDeleteCampaign con la id de la campaña cuando se hace clic en la cruz
      onDeleteCampaign(campaignId);
    } catch (error) {
      console.error('Error al eliminar la campaña:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="div-campaña-prueba">
          <div className="row envoltura-campañas" id="envoltura-campañas">
            <div className="col-6 centrar-contenido">
              <h3 className='meta-computo-title' id="envoltura-campañas">{title}</h3>
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
                style={{
                  cursor: 'pointer',
                  transform: 'scale(0.15)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaCampañas;

