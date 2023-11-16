

import React, { useState } from 'react';
import './Perfil.css';

function Perfil() {
  const [imagenPerfil, setImagenPerfil] = useState('/ilustraciones/foto_perfil.png');
  const [posicionImagen, setPosicionImagen] = useState({ x: 0, y: 0 });
  const [tamanoImagen, setTamanoImagen] = useState(100);

  const handleImagenChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagenPerfil(e.target.result);
        setPosicionImagen({ x: 0, y: 0 }); // Reiniciar posición al cambiar la imagen
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImagenClick = (e) => {
    const posicionClic = getPosicionRelativa(e);
    setPosicionImagen(posicionClic);
  };

  const handleTamano = (increment) => {
    setTamanoImagen((prevTamano) => Math.max(10, prevTamano + increment));
  };

  const handleChangePosicion = () => {
    // Conservar la posición actual al cambiar la imagen
  };

  const handleGuardarImagen = async () => {
    // Lógica para guardar la imagen (puede ser una llamada a la API, etc.)
    try {
      // await saveImageFunction(imagenPerfil);
      alert('Imagen de perfil guardada');
    } catch (error) {
      console.error('Error al guardar la imagen', error);
    }
  };

  return (
    <div className='container perfil-container'>
      <div
        className='imagen-container'
        style={{
          backgroundImage: `url(${imagenPerfil})`,
          backgroundPosition: `${posicionImagen.x}% ${posicionImagen.y}%`,
          backgroundSize: `${tamanoImagen}%`,
          borderRadius: '50%', // Borde redondo
        }}
        onMouseDown={handleImagenClick}
        onTouchStart={handleImagenClick}
        draggable='false'
      ></div>
      <div className='botones-container'>
        <input
          type='file'
          accept='image/*'
          id='seleccionar-imagen'
          style={{ display: 'none' }}
          onChange={handleImagenChange}
        />
        <label htmlFor='seleccionar-imagen' className='boton-accion cambiar-foto'>
          Cambiar foto de perfil
        </label>
        <div className='boton-accion cambiar-posicion' onClick={handleChangePosicion}>
          Cambiar Posición
        </div>
        <div className='boton-accion aumentar-tamano' onClick={() => handleTamano(10)}>
          Aumentar Tamaño
        </div>
        <div className='boton-accion disminuir-tamano' onClick={() => handleTamano(-10)}>
          Disminuir Tamaño
        </div>
        <div className='boton-accion guardar-imagen' onClick={handleGuardarImagen}>
          Guardar Imagen de Perfil
        </div>
      </div>
    </div>
  );
}

function getPosicionRelativa(event) {
  const boundingBox = event.target.getBoundingClientRect();
  const offsetX = event.clientX - boundingBox.left;
  const offsetY = boundingBox.bottom - event.clientY; // Invertir la dirección vertical
  return {
    x: (offsetX / boundingBox.width) * 100,
    y: (offsetY / boundingBox.height) * 100,
  };
}

export default Perfil;
