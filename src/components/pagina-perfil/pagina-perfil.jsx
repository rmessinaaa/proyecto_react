import React from 'react';
import EditarPerfil from '../informacionPersonal/infoPersonal'
import Perfil from '../Perfil/Perfil';
import "./paginaperfil.css";
import {useState, useEffect} from "react";
// import SubsPerfilIntereses from '../subs-perfil-intereses/subs-perfil-intereses';

function PaginaPerfil() {
  const [data, setusuario] = useState([]);
  const [usuario, setUsuario] = useState([]);
  // const [username, setUsername] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [password, setPassword] = useState([]);
  const token = window.localStorage.getItem("token")
  const username = window.localStorage.getItem("username")
  const email = window.localStorage.getItem("email")


 

  useEffect(() => {
    setUsuario(usuario);
    // setUsername(usuario.username);
    // setPassword(usuario.password);
    // setEmail(usuario.email);
  }, [usuario])
  
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
    .then((usuario) => setusuario(data))
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
  }, []);


console.log(usuario)

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
            
          {<EditarPerfil
                      key={usuario._id}
                      username={usuario.username}
                      email={usuario.email}
                      password={userProfile.password}
            
                    /> }
           
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
