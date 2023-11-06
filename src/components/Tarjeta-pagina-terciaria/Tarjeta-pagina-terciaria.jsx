
import React from 'react';

const VerticalCards = () => {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card card-animation" style={{ width: '15rem' }}>
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Campaña 1</h5>
              <p className="card-text">Descripción de la Tarjeta 1</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
