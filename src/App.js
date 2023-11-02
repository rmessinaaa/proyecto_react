import React from 'react';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicio from './components/pagina-inicio/pagina-inicio';
import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';
import Navbar from './components/Navbar/Navbar';
import Perfil from './components/Perfil/Perfil'




function App() {
  return (
    <div>
      <h1>Tarjetas</h1>
      <VerticalCards />
    
    </div>
  );
}

export default App;
