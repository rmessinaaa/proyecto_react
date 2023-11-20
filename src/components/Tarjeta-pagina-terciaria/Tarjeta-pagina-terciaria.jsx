
import React from 'react';
import { Link } from "react-router-dom";

const VerticalCards = (props) => {
  const {title, description, img} = props
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card card-animation" style={{ width: '15rem'}}>
            <img src={img} className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to="/ficha-campaña" className="btn btn-primary">Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
