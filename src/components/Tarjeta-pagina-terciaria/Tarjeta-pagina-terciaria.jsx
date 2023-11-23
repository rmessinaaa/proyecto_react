import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Tarjeta-pagina-terciaria.css'

const VerticalCards = (props) => {
  const {title, description, img, campaignId} = props

  const navigate = useNavigate();

  const handleVerMasClick = (campaignId) => {
    navigate(`/ficha-campaña/${campaignId}`);
  };

  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card card-animation" style={{ width: '15rem'}}>
            <img src="/imagenes-campaña/sinergiafoto.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <button className="btn btn-primary" onClick={() => handleVerMasClick(campaignId)}>Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;