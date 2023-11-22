
import React, { useState, useEffect } from "react";
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';
import './subs-buscador-resultados.css';

const SubsBuscadorResultados = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:8080/api/allcampanas", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
      }
    })
<<<<<<< HEAD
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
  }, []);

  
  
    
    
    
    return (
        <div>
            <div className="row align-items-center justify-content-center centrar contenido">
                <div className="col-md-4 text-center centrar-contenido">
                    {nombres.map((campaign) => (<VerticalCards
                      key={campaign._id}
                      title={campaign.title}
                      description={campaign.description}
            
                    /> ))} 
                </div>
                
            </div>
            
        </div>
    )
}
=======
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  }, []);
>>>>>>> acacd92710c9a545c8b709b71c6bd23450b655d8

  const paginatedData = data.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container mt-5">
      {Array.from({ length: Math.ceil(paginatedData.length / 3) }, (_, index) => (
        <div key={index} className="row mb-4">
          {paginatedData.slice(index * 3, (index + 1) * 3).map((campaign) => (
            <div key={campaign._id} className="col-md-4">
              <VerticalCards
                title={campaign.title}
                description={campaign.description}
              />
            </div>
          ))}
        </div>
      ))}
      <div className="col-md-12 text-center mt-3">
        <button className="btn btn-outline-primary" onClick={handlePrevPage} disabled={currentPage === 1}>
          <i className="bi bi-arrow-left"></i> Anterior
        </button>
        <span className="mx-2">
          Página {currentPage} de {totalPages}
        </span>
        <button className="btn btn-outline-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SubsBuscadorResultados;
