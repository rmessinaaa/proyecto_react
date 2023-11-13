import React from "react";
import { NavLink } from "react-router-dom";

const Iniciar = <NavLink to="/">Inicio</NavLink>
const Buscar = <NavLink to="/buscar">Buscar</NavLink>
const donaciones = <NavLink to="/donaciones">Donaciones</NavLink>
const Nosotros = <NavLink to="/nosotros">Nosotros</NavLink>
const perfil = <NavLink to="/perfil">Perfil</NavLink>
const Cerrar = <NavLink to="/Cerrar" className="nav__link--logout">Cerrar sesión</NavLink>


const topNav = [
    { id: 1, label: Iniciar, href: "#" },
    { id: 2, label: Buscar, href: "#" },
    { id: 3, label: donaciones, href: "#" },
    { id: 5, label: Nosotros, href: "#" },
    { id: 5, label: perfil, href: "#" },
    { id: 6, label: Cerrar, href: "#" },

  ];
  
  export const getTopNav = () => {
    return topNav;
  };