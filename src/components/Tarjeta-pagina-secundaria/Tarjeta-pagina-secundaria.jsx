import React from 'react';
import Card from 'react-bootstrap/Card';

function TarjetaPaginaPrincipal() {
  const cardsData = [
    {
      title: "Campaña 1",
      imageSrc: "proyecto_react/src/Tarjeta-pagina-secundaria/sinergiafoto.png",
      description: "Descripción de la tarjeta 1...",
    },
    {
      title: "Campaña 2",
      imageSrc: "proyecto_react/src/Tarjeta-pagina-secundaria/sinergiafoto.png",
      description: "Descripción de la tarjeta 2...",
    },
    {
      title: "Campaña 3",
      imageSrc: "proyecto_react/src/Tarjeta-pagina-secundaria/sinergiafoto.png",
      description: "Descripción de la tarjeta 3...",
    },
    {
      title: "Campaña 4",
      imageSrc: "proyecto_react/src/Tarjeta-pagina-secundaria/sinergiafoto.png",
      description: "Descripción de la tarjeta 4...",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((data, index) => (
          <div key={index} className="col-md-3">
            <Card>
              <Card.Img variant="top" src={data.imageSrc} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <button className="btn btn-primary mt-auto">Ver más</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarjetaPaginaPrincipal;
