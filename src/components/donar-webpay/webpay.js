import React, { useState } from 'react';
import './webpay.css';

function TituloDonacion() {
  return <h2 className="titulo-secundario-blanco">Haz tu donación</h2>;
}

// Componente para el campo de monto de donación
function MontoDonacion({ onDonar }) {
  const [monto, setMonto] = useState('');

  const handleInputChange = (e) => {
    // solo numeros
    const nuevoMonto = e.target.value.replace(/\D/g, '');
    setMonto(nuevoMonto);
  };

  const handleDonar = () => {
    if (monto) {
      // Enviar la información de la donación al servidor
      fetch("http://localhost:8080/api/campanas", {
        method: 'PUT',  // Utilizamos PUT en lugar de POST para actualizar la campaña existente
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
          acces_token: token,  // Asegúrate de obtener el token de donde sea necesario
        },
        body: JSON.stringify({ monto }),  // Enviamos el monto de la donación al servidor
      })
      .then(res => res.json())
      .then(res => {
        // Manejar la respuesta del servidor si es necesario
        console.log(res);
        // También puedes llamar a onDonar aquí si necesitas realizar alguna acción adicional
      })
      .catch(err => console.error("error", err));

      // Limpiar el estado después de la donación
      setMonto('');
    }
  };

  return (
    <div className="text-center my-4">
      <input
        type="text"
        className="form-control monto-donacion"
        placeholder="Monto de la donación"
        value={monto !== '' ? `$${parseInt(monto, 10).toLocaleString('es-CL')}` : ''}
        onChange={handleInputChange}
      />
      <div className="text-center my-4">
        <button className="btn btn-primary button-azul" onClick={handleDonar} data-bs-toggle="modal" data-bs-target="#donarModal">
          DONAR
        </button>
      </div>
    </div>
  );
}

// Componente para el modal de información bancaria
function DonarModal() {
  return (
    <div className="modal fade" id="donarModal" tabIndex="-1" aria-labelledby="donarModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="donarModalLabel">Información bancaria para poder donar</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Aquí puedes mostrar la información bancaria de la base de datos */}
            <p>Banco: </p>
            <p>Tipo de cuenta: </p>
            <p>Número de cuenta: XXXX-XXXX-XXXX-XXXX</p>
            <p>Correo Electrónico:</p>
            {/* Otros detalles de la información bancaria */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para la imagen de donación
function ImagenDonacion() {
  return (
    <div className="text-center my-4">
      <img
        src="/ilustraciones/Donar.png"
        className="img-fluid imagen-donacion"
        alt="Imagen de donación"
      />
    </div>
  );
}

// Componente para la descripción de la donación y botón de donar
function DescripcionDonacion() {
  return (
    <div className="col-md-6 descripcion-donacion">
      <p className="my-4 parrafo-blanco">
      Únete a nosotros y realiza 
      tu donación para apoyar esta causa crucial. Tu contribución marcará la diferencia y será un paso 
      significativo. Con tu generosidad,
       estamos construyendo un futuro mejor y más esperanzador ¡Cada aporte cuenta y nos acerca más a lograr nuestro objetivo común! ¡Gracias por ser parte de este movimiento solidario y hacer que el cambio suceda!
      </p>
    </div>
  );
}

// Componente para el historial de donaciones
function HistorialDonaciones({ historial }) {
  return (
    <div className="historial-donaciones">
      <h3>Historial de Donaciones</h3>
      <ul>
        {historial.map((donacion, index) => (
          <li key={index}>Donación: ${donacion.toLocaleString('es-CL')} CLP</li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal
function TarjetaDonacion() {
  const [historialDonaciones, setHistorialDonaciones] = useState([]);

  const handleDonar = (monto) => {
    setHistorialDonaciones([...historialDonaciones, monto]);
  };

  return (
    <div className="container centrar-contenido">
      <div className="card-donacion">
        <TituloDonacion />
        <MontoDonacion onDonar={handleDonar} />
        <div className="row">
          <div className="col-md-6">
            <ImagenDonacion />
          </div>
          <DescripcionDonacion />
        </div>
        <DonarModal />
        <HistorialDonaciones historial={historialDonaciones} />
      </div>
    </div>
  );
}

export default TarjetaDonacion;
