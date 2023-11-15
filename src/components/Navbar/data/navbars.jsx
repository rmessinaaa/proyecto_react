import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Iniciar = <NavLink to="/">Inicio</NavLink>;
const Buscar = <NavLink to="/buscar">Buscar</NavLink>;
const Donaciones = <NavLink to="/donaciones">Donaciones</NavLink>;
const Nosotros = <NavLink to="/nosotros">Nosotros</NavLink>;
const Perfil = <NavLink to="/perfil">Perfil</NavLink>;
const CerrarSesion = (
  <NavLink to="/registro" className="nav__link--logout">
    Cerrar sesión
  </NavLink>
);

const DropdownLinks = (
  <Dropdown>
    <Dropdown.Toggle  className="Dropdown">
      Para Organizaciones
    </Dropdown.Toggle>

    <Dropdown.Menu className="custom-dropdown-menu">
    <Dropdown.Item>
  <NavLink to="/tus-campañas" className="nav__link">
    Tus campañas
  </NavLink>  
</Dropdown.Item>      <Dropdown.Item><NavLink to="/crear-campaña" className="nav__link">
    Crear campaña
  </NavLink>  </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);


const topNav = [
  { id: 1, label: Iniciar, href: "#" },
  { id: 2, label: Buscar, href: "#" },
  { id: 3, label: Donaciones, href: "#" },
  { id: 4, label: Nosotros, href: "#" },
  { id: 5, label: Perfil, href: "#" },
  { id: 6, label: DropdownLinks, href: "#" },
  { id: 7, label: CerrarSesion, href: "#" },
];

export const getTopNav = () => {
  return topNav;
};