import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="image-container">
          <a href="#" className="nav__brand">
            <img src="/ilustraciones/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="text-container">
          <p>
            Plataforma web realizada en el marco del proyecto integrador de Generation Chile para el programa de Desarrollo Web Full Stack JavaScript. Todos los derechos reservados. ®
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
