
import React from 'react';

const Card1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Campaña1</h5>
              <p className="card-text">Descripción de la Tarjeta 1</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

