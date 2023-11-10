

import React from 'react';

// Componente para el título de la donación
function TituloDonacion() {
  const tituloStyle = {
    color: 'white', 
    textAlign: 'center',
    marginTop: '2.5rem', 
  };
  return <h2 style={tituloStyle}>Haz tu donación</h2>;
}
// Componente para el campo de monto de donación
function MontoDonacion() {
  const inputStyle = {
    width: '77%', 
    borderTopLeftRadius: '12px', 
    borderTopRightRadius: '12px',
    margin: '0 auto', 
  };

  return (
    <div className="text-center my-4">
      <input type="number" className="form-control" style={inputStyle} placeholder="Monto de la donación" />
    </div>
  );
}

// Componente para la imagen de donación
function ImagenDonacion() {
  const imageStyle = {
    width: '50%', 
    border: '2px solid transparent', 
    borderRadius: '20px', 
    margin: '0 auto', 
  };

  return (
    <div className="text-center my-4">
      <img
        src="/imagenes-campaña/webpay.png"
        className="img-fluid"
        style={imageStyle}
        alt="Imagen de donación"
      />
    </div>
  );
}

// Componente para la descripción de la donación y botón de donar
function DescripcionDonacion() {
  const containerStyle = {
    textAlign: 'center', 
  };

  const paragraphStyle = {
    textAlign: 'left',
    marginLeft: '0', 
    marginBottom: '20px', 
    color: 'white', 
  };

  const buttonStyle = {
    fontSize: '0.9em',
    fontWeight: 'bold',
    backgroundColor: '#333', 
    color: 'white',
    borderRadius: '50px',
    padding: '5px 30px', 
    display: 'block', 
  };

  return (
    <div className="col-md-6" style={containerStyle}>
      <p className="my-4" style={paragraphStyle}>
        Realiza tu donación a través del sistema Webpay de forma rápida y segura.
      </p>
      <div className="text-center my-4">
        <button className="btn btn-primary" style={buttonStyle}>
         DONAR
        </button>
      </div>
    </div>
  );
}

function TarjetaDonacion() {
  const cardStyle = {
    backgroundColor: '#0597F2', 
    borderRadius: '50px', 
  };

  return (
    <div className="container centrar-contenido">
      <div className="card border-rounded w-50 bg-custom mt-3 " style={cardStyle}>
        <TituloDonacion />
        <MontoDonacion />
        <div className="row">
          <div className="col-md-6">
            <ImagenDonacion />
          </div>
          <DescripcionDonacion />
        </div>
      </div>
    </div>
  );
}


export default TarjetaDonacion;
