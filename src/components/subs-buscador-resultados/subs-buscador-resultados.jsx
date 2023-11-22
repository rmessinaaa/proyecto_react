import React, {useState, useEffect} from "react";
import VerticalCards from '../Tarjeta-pagina-terciaria/Tarjeta-pagina-terciaria';
import './subs-buscador-resultados.css'


function SubsBuscadorResultados () {
    const [data, setData] = useState([]);

    const [nombres, setNombres] = useState([]);

    const token = 'rxtcfygvbhjkklmñl'

  useEffect(() => {
    setNombres(data);
  }, [data])

  useEffect(() => {
    fetch("http://localhost:8080/api/allcampanas", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials : 'include'
      }
    })
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

export default SubsBuscadorResultados;