import React from 'react';
// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicio from './components/pagina-inicio/pagina-inicio';
import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';
import Navbar from './components/Navbar/Navbar';
import Perfil from './components/Perfil/Perfil'




function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<PaginaInicio/>}></Route>
           <Route path='/nosotros' element={<PaginaNosotros/>}></Route>
           <Route path='/donaciones' element={<h1></h1>}></Route>
           <Route path='/buscar' element={<h1></h1>}></Route>
           <Route path='/perfil' element={<h1></h1>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
