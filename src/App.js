
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginaInicio from './components/pagina-inicio/pagina-inicio';
import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';
import PaginaBuscador from './components/pagina-buscador/PaginaBuscador'
import PaginaDonaciones from './components/pagina-donaciones/pagina-donaciones'; 
import PaginaPerfil from './components/pagina-perfil/pagina-perfil'; 
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import PaginaCampaña from './components/pagina-campaña/pagina-campaña';
import PaginaRegistro from './components/pagina-registro/pagina-registro';
import PaginaLogin from './components/pagina-login/pagina-login';
import Pagina_Tus_Campañas from './components/pagina-tus-campañas/pagina-tus-campañas';
import PaginaCrearCampaña from './components/pagina-crear-campaña/pagina-crear-campaña';

function Main() {
  const location = useLocation();
  const hideForRegistro = location.pathname !== "/registro";
  const hideForLogin = location.pathname !== "/login";

  return (
      <div>
          {hideForRegistro && hideForLogin && <Navbar/>}
          <Routes>
            <Route path='/' element={<PaginaInicio/>}></Route>
            <Route path='/nosotros' element={<PaginaNosotros/>}></Route>
            <Route path='/buscar' element={<PaginaBuscador/>}></Route>
            <Route path='/donaciones' element={<PaginaDonaciones/>}></Route>
            <Route path='/perfil' element={<PaginaPerfil/>}></Route>
            <Route path='/ficha-campaña' element={<PaginaCampaña />} />
            <Route path='/registro' element={<PaginaRegistro />} />
            <Route path='/login' element={<PaginaLogin />} />
            <Route path='/tus-campañas' element={<Pagina_Tus_Campañas/>}/>
            <Route path='/crear-campaña' element={<PaginaCrearCampaña/>}/>          
            </Routes>
          {hideForRegistro && hideForLogin && <Footer/>}
      </div>
  );
}

function App() {
  return (
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
  );
}

export default App;
