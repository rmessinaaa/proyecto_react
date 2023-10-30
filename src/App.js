import logo from './logo.svg';
import Infopersonal from './components/informacionPersonal/infoPersonal';
import './App.css';

import PaginaNosotros from './components/pagina-nosotros/pagina-nosotros';


// borrar modulos importados


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='#' element = {"A"}/>
        <Route path='#' element = {"B"}/>
        <Route path='#' element = {"C"}/>
        <Route path='#' element = {"D"}/>
        <Route path='#' element = {"E"}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
