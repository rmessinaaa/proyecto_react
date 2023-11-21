
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import PaginaInicio from './components/pagina-inicio/pagina-inicio';
import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';
import PaginaBuscador from './components/pagina-buscador/PaginaBuscador'
import PaginaPerfil from './components/pagina-perfil/pagina-perfil'; 
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import PaginaCampaña from './components/pagina-campaña/pagina-campaña';
import PaginaRegistro from './components/pagina-registro/pagina-registro';
import PaginaLogin from './components/pagina-login/pagina-login';
import Pagina_Tus_Campañas from './components/pagina-tus-campañas/pagina-tus-campañas';
import PaginaCrearCampaña from './components/pagina-crear-campaña/pagina-crear-campaña';
import PaginaRecuperarContraseña from './components/Pagina-recuperar-contraseña/pagina-recuperar-contraseña';
import getRol from './components/funcion-getRol/funcion-getRol';
import getAutenticacion from './components/funcion-autenticacion/autenticacion';

function Main() {

  const location = useLocation();
  const hideForRegistro = location.pathname !== "/registro";
  const hideForLogin = location.pathname !== "/login";
  const hideForContrasena = location.pathname !== "/recuperar-contrasena";
  const rolUsuario = getRol()
  const AutenticacionUser = getAutenticacion()

  if (rolUsuario !== 'institución' && location.pathname === '/tus-campañas') {
    return <Navigate to='/' />;
  }

  if (AutenticacionUser !== true && (location.pathname === '/' || location.pathname === '/nosotros' || location.pathname === '/buscar' || location.pathname === '/donaciones' || location.pathname === '/perfil' || location.pathname === '/ficha-campaña' || location.pathname === '/tus-campañas' || location.pathname === '/crear-campaña')) {
    return <Navigate to='/registro' />;
  }

  return (
      <div>
          {hideForRegistro && hideForLogin && hideForContrasena && <Navbar/> }
          <Routes>
            {/* Páginas Públicas */}
            <Route path='/registro' element={<PaginaRegistro />} />
            <Route path='/login' element={<PaginaLogin />} />
            <Route path='/recuperar-contrasena' element={<PaginaRecuperarContraseña />} />

            {/* Páginas Privadas */}
            <Route path='/' element={<PaginaInicio />} />
            <Route path='/nosotros' element={<PaginaNosotros />} /> 
            <Route path='/buscar' element={<PaginaBuscador />} />
            <Route path='/perfil' element={<PaginaPerfil />} />
            <Route path='/ficha-campaña' element={<PaginaCampaña />} />
            <Route path='/tus-campañas' element={<Pagina_Tus_Campañas />} />
            <Route path='/crear-campaña' element={<PaginaCrearCampaña />} />
          </Routes>
          {hideForRegistro && hideForLogin && hideForContrasena && <Footer/> }
      </div>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;
