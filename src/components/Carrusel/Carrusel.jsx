import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript
import "./carousel.css"

export default function MyCarousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>


      <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="/ilustraciones/10.png" className="d-block w-100 h-530" alt="190" />
    <div className="carousel-caption d-none d-md-block custom-carousel-caption">
      <h5>Haz posible el cambio con tu apoyo financiero</h5>
      <p>Más de 700 millones de personas, o el 10 % de la población mundial, aún vive en situación de extrema pobreza a día de hoy. Juntos, creamos sinergia. Tu donación se combina con la fuerza de nuestro equipo de voluntarios para marcar la diferencia</p>
    </div>
  </div>

  <div className="carousel-item">
    <img src="/ilustraciones/11.png" className="d-block w-100 h-100" alt="170" />
    <div className="carousel-caption d-none d-md-block custom-carousel-caption">
      <h5>Apoya nuestra misión con tu generosidad</h5>
      <p>"Somos lo que hacemos para cambiar lo que somos." - Eduardo Galeano</p>
    </div>
  </div>

  <div className="carousel-item">
    <img src="/ilustraciones/dos.jpg" className="d-block w-100 h-100" alt="344" />
    <div className="carousel-caption d-none d-md-block custom-carousel-caption">
      <h5>Sé parte del cambio que queremos ver en el mundo</h5>
      <p>El mundo necesita héroes, y tú puedes ser uno de ellos. Tu donación no solo es un gesto de generosidad, es un acto de valentía que desencadenará una cadena de bondad y solidaridad. Únete a nosotros en esta travesía de impacto y cambio</p>
    </div>
  </div>
</div>


      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}