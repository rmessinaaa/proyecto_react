
import React from "react";

const TarjetaG = () => {
    return (
        <div className="card mb-3" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="imagenes-campaña/sinergiafoto.png" className="img-fluid rounded-start" alt="Texto alternativo de la imagen" />
                </div>
                <div className="col-md-8 card-body p-3">
                    <div className="card-body">
                        <h5 className="card-title">Título de la tarjeta</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas minima optio explicabo cupiditate ipsam sunt iure ullam veniam quo maiores dolorum labore, velit incidunt molestiae nulla nam dicta! Ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas minima optio explicabo cupiditate ipsam sunt iure ullam veniam quo maiores dolorum labore, velit incidunt molestiae nulla nam dicta! AdLorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas minima optio explicabo cupiditate ipsam sunt iure ullam veniam quo maiores dolorum labore, velit incidunt molestiae nulla nam dicta! Ad!.</p>
                        <button className="btn btn-primary">Meta $200,000</button>
                        <p className="card-text"><small className="text-secondary">Última actualización hace 3 minutos</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaG;
