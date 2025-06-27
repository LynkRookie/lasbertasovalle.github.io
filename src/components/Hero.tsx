import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content container">
        <h1 className="animate-fadeIn">Productos Artesanales de Río Hurtado</h1>
        <p className="hero-subtitle animate-fadeIn delay-1">
          Sabores auténticos de la tierra, elaborados con amor y tradición familiar
        </p>
        <div className="hero-buttons animate-fadeIn delay-2">
          <a href="#productos" className="btn">Nuestros Productos</a>
          <a href="#nosotros" className="btn btn-outline">Conoce Nuestra Historia</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;