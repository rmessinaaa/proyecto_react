import React from 'react';
import Card from 'react-bootstrap/Card';

function TarjetaPaginaPrincipal() {
  const cardsData = [
    {
      title: "Campaña 1",
      imageSrc: "proyecto_react/src/components/Tarjeta-pagina-principal/sinergiafoto.png",
      description: "Descripción de la tarjeta 1...",
    },
    {
      title: "Campaña 2",
      imageSrc: "proyecto_react/src/components/Tarjeta-pagina-principal/sinergiafoto.png",
      description: "Descripción de la tarjeta 2...",
    },
    {
      title: "Campaña 3",
      imageSrc: "proyecto_react/src/components/Tarjeta-pagina-principal/sinergiafoto.png",
      description: "Descripción de la tarjeta 3...",
    },
  ];

  return (
    <div className="d-flex justify-content-between">
      {cardsData.map((data, index) => (
        <Card key={index}>
          <Card.Img variant="top" src={data.imageSrc} />
          <Card.Body className="d-flex flex-column align-items-center"> 
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <button className="btn btn-primary">Ver más</button> 
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TarjetaPaginaPrincipal;
