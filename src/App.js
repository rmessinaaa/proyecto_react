import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import './App.css';


// borrar modulos importados


function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='#' element={"A"}/>
        <Route path='#' element={"B"}/>
        <Route path='#' element={"C"}/>
        <Route path='#' element={"D"}/>
        <Route path='#' element={"E"}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
