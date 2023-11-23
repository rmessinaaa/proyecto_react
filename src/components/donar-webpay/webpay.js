import React, { useState, useEffect } from 'react';
import './webpay.css';

function TituloDonacion() {
  return <h2 className="titulo-secundario-blanco">Haz tu donación</h2>;
}

const token = localStorage.getItem("token")
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
      {/* <input
        type="text"
        className="form-control monto-donacion"
        placeholder="Monto de la donación"
        value={monto !== '' ? `$${parseInt(monto, 10).toLocaleString('es-CL')}` : ''}
        onChange={handleInputChange}
      /> */}
      <div className="text-center my-4">
          <button className="button-azul" onClick={handleDonar} data-bs-toggle="modal" data-bs-target="#donarModal">
            DONAR
          </button>
      </div>
    </div>
  );
}

// Componente para el modal de información bancaria
function DonarModal( { onDonar, datosCampaña } ) {

  const { banco, tipoCuenta, numeroCuenta, correoElectronico, Titulo } = datosCampaña;

  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = `Usuario donante: ${localStorage.getItem('username')}\nNombre Campaña: ${Titulo}\nBanco: ${banco}\nTipo de cuenta: ${tipoCuenta}\nNúmero de cuenta: ${numeroCuenta}\nCorreo Electrónico: ${correoElectronico}`;

    navigator.clipboard.writeText(textToCopy)
      .then(() => setCopied(true))
      .catch((err) => console.error('Error al copiar al portapapeles', err));
  };

  return (
    <div className="modal fade" id="donarModal" tabIndex="-1" aria-labelledby="donarModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="donarModalLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            
            <h1 className='titulos-principales'>Importante</h1>

            <br></br>

            <p className='parrafo-azul'>Tu donación se hará efectiva mediante un intermediario de Sinergia. Para prevenir problemas, por favor copia y pega los siguientes datos en el mensaje de tu transferencia, ¡nos ayudará a que tu donación llegue a su destino!</p>

            <p className='parrafo-azul'>Usuario donante: { localStorage.getItem('username') }</p>
            <p className='parrafo-azul'>Nombre Campaña: {Titulo}</p>
            <p className='parrafo-azul'>Banco: {banco} </p>
            <p className='parrafo-azul'>Tipo de cuenta: {tipoCuenta} </p>
            <p className='parrafo-azul'>Número de cuenta: {numeroCuenta}</p>
            <p className='parrafo-azul'>Correo Electrónico: {correoElectronico} </p>
           
            <br></br>
            
            <button className="button-azul" onClick={handleCopyToClipboard}>
              {copied ? 'Copiado' : 'Copiar al Portapapeles'}
            </button>

            <a href="https://www.paypal.com/donate/?hosted_button_id=QTTYHM88RKHZW" target="_blank" rel="noopener noreferrer">
              <button className="button-azul">
                DONAR
              </button>
            </a>

          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> */}
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
  const [modalVisible, setModalVisible] = useState(false);
  const [datosCampaña, setDatosCampaña] = useState({});

  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const campaignId = parts[parts.length - 1];
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Obtener los datos de la campaña desde tu API o de donde sea
    // Puedes usar un ID de campaña o cualquier lógica para obtener los datos correctos
    fetch(`http://localhost:8080/api/campanas/${campaignId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials : 'include',
        acces_token: token,
        // Agrega tu lógica de manejo de tokens aquí si es necesario
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Actualizar los datos de la campaña en el estado
        setDatosCampaña({
          banco: data.account.banco,
          tipoCuenta: data.account.accountType, // Puedes cambiar esto según tus datos reales
          numeroCuenta: data.account.accountNum, // Puedes cambiar esto según tus datos reales
          correoElectronico: data.account.email,
          Titulo: data.title
        });
      })
      .catch((error) => console.error("Error al obtener datos de la campaña:", error));
  }, []);


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
        <DonarModal onDonar={handleDonar} datosCampaña={datosCampaña} />
        {/* <HistorialDonaciones historial={historialDonaciones} /> */}
      </div>
    </div>
  );
}

export default TarjetaDonacion;
