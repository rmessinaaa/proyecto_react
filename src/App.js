
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import PaginaRecuperarContraseña from './components/Pagina-recuperar-contraseña/pagina-recuperar-contraseña';
import getRol from './components/funcion-getRol/funcion-getRol';

function Main() {

  console.log("Componente Main montado");

  const location = useLocation();
  const hideForRegistro = location.pathname !== "/registro";
  const hideForLogin = location.pathname !== "/login";
  const hideForContrasena = location.pathname !== "/recuperar-contrasena";
  const rolUsuario = getRol()

  console.log("Antes de la condición - Rol del usuario:", rolUsuario);
  console.log("Antes de la condición - Ruta actual:", location.pathname);

  if (rolUsuario !== 'institución' && location.pathname === '/tus-campañas') {
    console.log("Redirigiendo a /");
    return <Navigate to='/' />;
  }

  console.log("Después de la condición - Rol del usuario:", rolUsuario);
  console.log("Después de la condición - Ruta actual:", location.pathname);



  return (
      <div>
          {hideForRegistro && hideForLogin && hideForContrasena && <Navbar/> }
          <Routes>
              <Route path='/' element={<PaginaInicio/>}></Route>
              <Route path='/nosotros' element={<PaginaNosotros/>}></Route>
              <Route path='/buscar' element={<PaginaBuscador/>}></Route>
              <Route path='/donaciones' element={<PaginaDonaciones/>}></Route>
              <Route path='/perfil' element={<PaginaPerfil/>}></Route>
              <Route path='/ficha-campaña' element={<PaginaCampaña />} />
              <Route path='/registro' element={<PaginaRegistro />} />
              <Route path='/login' element={<PaginaLogin />} />
              <Route
                path='/tus-campañas'
                element={rolUsuario === 'institución' ? <Pagina_Tus_Campañas /> : <Navigate to='/' />}
              />
              <Route
                path='/crear-campaña'
                element={rolUsuario === 'institución' ? <PaginaCrearCampaña /> : <Navigate to='/'/>} 
              />  
              <Route path='/recuperar-contrasena' element={<PaginaRecuperarContraseña/>}/>         
            </Routes>
          {hideForRegistro && hideForLogin && hideForContrasena && <Footer/> }
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
