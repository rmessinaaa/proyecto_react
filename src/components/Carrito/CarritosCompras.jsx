
import React, { useState } from "react";

const CarritoDonaciones = () => {
  const [montoDonacion, setMontoDonacion] = useState(0);
  const [donacionesGuardadas, setDonacionesGuardadas] = useState([]);
  const [campañaGuardada, setCampañaGuardada] = useState(false);

  const handleMontoChange = (event) => {
    const monto = parseFloat(event.target.value);
    setMontoDonacion(monto);
  };

  const guardarDonacion = () => {
    if (montoDonacion > 0) {
      const nuevaDonacion = {
        monto: montoDonacion,
        fecha: new Date().toLocaleString(),
      };
      setDonacionesGuardadas([...donacionesGuardadas, nuevaDonacion]);
      setMontoDonacion(0); 
      setCampañaGuardada(false); 
    }
  };

  const guardarCampaña = () => {
    setCampañaGuardada(true);
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Donaciones</h2>
      <div>
        <label>¿Cuánto deseas donar? CLP $</label>
        <input
          className="carrito-input"
          type="number"
          step="0.01"
          value={montoDonacion}
          onChange={handleMontoChange}
        />
        <button className="carrito-button" onClick={guardarDonacion}>
          Guardar Donación
        </button>
      </div>
      <h3>Donaciones Guardadas:</h3>
      <ul className="donaciones-list">
        {donacionesGuardadas.map((donacion, index) => (
          <li className="donacion-item" key={index}>
            CLP ${donacion.monto} (Fecha: {donacion.fecha})
          </li>
        ))}
      </ul>
      {campañaGuardada ? (
        <div className="campaña-guardada">
          <p>¡Campaña guardada con éxito!</p>
        </div>
      ) : (
        <button className="guardar-campaña-button" onClick={guardarCampaña}>
          Guardar esta campaña
        </button>
      )}
    </div>
  );
};

export default CarritoDonaciones;
