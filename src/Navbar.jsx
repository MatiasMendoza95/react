import React from 'react';

function Navbar() {
  return (
    <nav>
      {<nav>
      <div class="navbar">
        <div class="logo"><a href="https://www.yamaha-racing.com/">Yamaha Club Motorsport</a></div>
        <ul class="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Quienes somos</a></li>
          <li><a href="#services">Integrantes</a></li>
          <li><a href="#contact">Contacto</a></li>
          <div class="cancel-btn">
            <i class="fas fa-times"></i>
          </div>
        </ul>
        <div class="media-icons">
          <a href="https://www.instagram.com/matimendozac/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="menu-btn">
        <i class="fas fa-bars"></i>
      </div>
    </nav>}
    </nav>
  );
}

export default Navbar;