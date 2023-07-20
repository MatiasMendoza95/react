import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      {<div class="content">
        <div class="title"><span>Integrantes</span></div>
        <div class="boxes">
          <div class="box">
            <div class="icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="topic">Matias Mendoza</div>
            <p>Administrador y Creador del club. Estudiante Analista programador en Inacap </p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-paint-brush"></i>
            </div>
            <div class="topic">Andres Gajardo</div>
            <p>Organizador de las juntas y apoyo de diseño web y base de dato. Estudiante Analista programador en Inacap </p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="topic">Guido Soto</div>
            <p>Animador de las juntas y creador de paginas Web de Anime Japones. Estudiante Analista programador en Inacap</p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fab fa-android"></i>
            </div>
            <div class="topic">Hector Cano</div>
            <p>Presidente del grupo y emprendimiento de MGC Solution. Estudiante Analista programador en Inacap</p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-camera-retro"></i>
            </div>
            <div class="topic">Ivan Riquelme</div>
            <p>Experto profesional en Informatica y fotografo oficial del grupo</p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-tablet-alt"></i>
            </div>
            <div class="topic">Daniela Aranguiz</div>
            <p>Toque femenino del grupo y encargada de las redes sociales</p>
          </div>
        </div>
      </div>}
    </section>
  );
}

export default Services;
