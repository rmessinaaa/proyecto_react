
import React from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicio from './components/pagina-inicio/pagina-inicio';
import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';
import PaginaBuscador from './components/pagina-buscador/PaginaBuscador'
import PaginaDonaciones from './components/pagina-donaciones/pagina-donaciones'; 
import PaginaPerfil from './components/pagina-perfil/pagina-perfil'; 
import Navbar from './components/Navbar/Navbar';
import Perfil from './components/Perfil/Perfil'
import React from "react";
import TarjetaG from "./components/Tarjeta-grande/Tarjeta-grande";
function App() {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PaginaInicio/>}></Route>
              <Route path='/nosotros' element={<PaginaNosotros/>}></Route>
              <Route path='/buscador' element={<PaginaBuscador/>}></Route>
              <Route path='/donaciones' element={<PaginaDonaciones/>}></Route>
              <Route path='/perfil' element={<PaginaPerfil/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
    );
  return (
    <div>

  
    
    </div>
  );
}

export default App;
