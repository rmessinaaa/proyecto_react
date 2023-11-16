import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import getRol from '../../funcion-getRol/funcion-getRol';

const DropdownInstituciones = () => {
    const rolUsuario = getRol();
  
    // Si el rol no es 'institución', no renderizar nada
    if (rolUsuario !== 'institución') {
      return null;
    }
  
    // Renderizar el contenido del Dropdown solo para instituciones
    return (
      <Dropdown>
        <Dropdown.Toggle className="Dropdown">
          Para Organizaciones
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item>
            <NavLink to="/tus-campañas" className="nav__link">
              Tus campañas
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/crear-campaña" className="nav__link">
              Crear campaña
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

export default DropdownInstituciones;
