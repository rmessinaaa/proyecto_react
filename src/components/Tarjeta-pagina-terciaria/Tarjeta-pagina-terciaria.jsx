import React from 'react';
import Card from 'react-bootstrap/Card';

function TarjetaPaginaPrincipal() {
  const cardsData = [
    {
      title: "Campaña 1",
      imageSrc: "proyecto_react/src/components/Tarjeta-pagina-terciaria/sinergiafoto.png",
      description: "Descripción de la tarjeta 1...",
    },
    {
      title: "Campaña 2",
      imageSrc: "proyecto_react/src/components/Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria.jsx",
      description: "Descripción de la tarjeta 2...",
    }
  ];

  return (
    <div>
      {cardsData.map((data, index) => (
        <Card key={index} className="m-4 p-4">
          <Card.Img variant="top" src={data.imageSrc} style={{ height: '200px' }} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <button className="btn btn-primary mt-auto">Ver más</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetaPaginaPrincipal;
