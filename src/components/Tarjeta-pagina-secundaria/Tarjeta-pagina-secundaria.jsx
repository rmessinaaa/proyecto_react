import React from 'react';

const Card2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Campaña 1</h5>
              <p className="card-text">Descripción de la Tarjeta 1</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Campaña 2</h5>
              <p className="card-text">Descripción de la Tarjeta 2</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Campaña 3</h5>
              <p className="card-text">Descripción de la Tarjeta 3</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Campaña 4</h5>
              <p className="card-text">Descripción de la Tarjeta 4</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
