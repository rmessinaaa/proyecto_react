import React from 'react';
import EditarPerfil from '../informacionPersonal/infoPersonal'
import Perfil from '../Perfil/Perfil';
import "./paginaperfil.css";
import {useState, useEffect} from "react";
// import SubsPerfilIntereses from '../subs-perfil-intereses/subs-perfil-intereses';

function PaginaPerfil() {
  const [data, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);
  // const [username, setUsername] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [password, setPassword] = useState([]);
  const token = window.localStorage.getItem("token")
  const username = window.localStorage.getItem("username")
  const email = window.localStorage.getItem("email")


 

  useEffect(() => {
    setUsuario(data);
    // setUsername(data.username);
    // setPassword(data.password);
    // setEmail(data.email);
  }, [data])
  
  useEffect(() => {
    const id = window.localStorage.getItem("id")
    const idarreglado = id.replace(/['"]+/g, '')

    fetch(`http://localhost:8080/api/profile/${idarreglado}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        credentials : 'include',
        acces_token: token
      }
    })
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
  }, []);


console.log(data)

  return (
    <div className='bg-paginas bg-perfil'>
      <div className="container-fluid">
        <div className='container container-blanco'>
          <div className="row align-items-center"> {/* Añadida la clase align-items-center */}
            <div className="col ">
              <h1> Bienvenido a tu perfil </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <Perfil />
        </div>
        <div className="col >">
          <div className='centrar-contenido'>
            <EditarPerfil 
            username = {username}
            email = {email} 
            />
          {/* {usuario.map((userProfile) => (<EditarPerfil
                      key={userProfile._id}
                      username={userProfile.username}
                      email={userProfile.email}
                      password={userProfile.password}
            
                    /> ))}  */}
           
          </div>
        </div>
      </div>
      {/* <div className='centrar-contenido container container-blanco'>
          <SubsPerfilIntereses />
      </div> */}
    </div>
  );
}

export default PaginaPerfil;
