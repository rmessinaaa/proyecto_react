import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownInstituciones from "./dropdown-instituciones";
import getRol from "../../funcion-getRol/funcion-getRol";
import CerrarSesion from "./cerrar-sesion";

const Iniciar = <NavLink to="/">Inicio</NavLink>;
const Buscar = <NavLink to="/buscar">Buscar</NavLink>;
// const Donaciones = <NavLink to="/donaciones">Donaciones</NavLink>;
const Nosotros = <NavLink to="/nosotros">Nosotros</NavLink>;
const Perfil = <NavLink to="/perfil">Perfil</NavLink>;

const logout = <CerrarSesion />;

const DropdownLinks = <DropdownInstituciones />;

const topNav = [
  { id: 1, label: Iniciar, href: "/" },
  { id: 2, label: Buscar, href: "/buscar" },
  // { id: 3, label: Donaciones, href: "/donaciones" },
  { id: 3, label: Nosotros, href: "/nosotros" },
  { id: 4, label: Perfil, href: "/perfil" },
  { id: 5, label: DropdownLinks, href: "" },
  { id: 7, label: logout, href: "/cerrar-sesion" },
];

export const getTopNav = () => {
  return topNav;
};
