import React from 'react';
import './About.css';
import { Icon } from '@iconify/react';
import quienesSomosImg from '../assets/quienes_somos.jpg';
import quienesSomosImg2 from '../assets/las-bertas-1536x866.jpg';
import imgaboutchurch from '../assets/quienes_somos2.jpeg';

const About: React.FC = () => {
  return (
    <div className="about container">
      <div className="section-title">
        <h2>Sobre Nosotros</h2>
        <p>Conoce la historia detrás de Las Bertas</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src={imgaboutchurch} alt="Empresa Las Bertas" />
          <br></br>
           <img src={quienesSomosImg2} alt="Empresa Las Bertas" /> 
           <br></br>
           <img src={quienesSomosImg} alt="Empresa Las Bertas" /> 
        </div>
        
        <div className="about-text">
          <h3>Nuestra Historia</h3>
          <p>
            Las Bertas nace en el año 2010 como un pequeño emprendimiento familiar en Fundina, 
            una localidad rural de la comuna de Río Hurtado, en la Región de Coquimbo. 
            Lo que comenzó como una forma de aprovechar la producción de leche de nuestras cabras, 
            se ha convertido en un proyecto que rescata y valora las tradiciones culinarias de nuestra zona.
          </p>
          
          <p>
            Nuestro nombre "Las Bertas" es un homenaje a nuestra abuela Berta, quien nos enseñó 
            las recetas y técnicas artesanales que hoy aplicamos en cada uno de nuestros productos.
          </p>
          
          <h3>Nuestros Valores</h3>
          <ul className="values-list">
            <li>
              <Icon icon="lucide:heart" className="value-icon" />
              <div>
                <h4>Tradición Familiar</h4>
                <p>Rescatamos y preservamos las recetas tradicionales transmitidas por generaciones.</p>
              </div>
            </li>
            <li>
              <Icon icon="lucide:leaf" className="value-icon" />
              <div>
                <h4>Sustentabilidad</h4>
                <p>Trabajamos en armonía con la naturaleza, respetando los ciclos naturales y el medio ambiente.</p>
              </div>
            </li>
            <li>
              <Icon icon="lucide:home" className="value-icon" />
              <div>
                <h4>Identidad Local</h4>
                <p>Promovemos y valoramos la cultura y tradiciones de Río Hurtado.</p>
              </div>
            </li>
          </ul>
          
          <h3>Reconocimientos</h3>
          <p>
            A lo largo de nuestra trayectoria, hemos participado en diversos programas de apoyo 
            al emprendimiento rural como INDAP y FOSIS, los cuales nos han permitido mejorar 
            nuestros procesos productivos y obtener las certificaciones sanitarias necesarias 
            para comercializar nuestros productos.
          </p>
          
          <div className="certifications">
            <div className="certification">
              <Icon icon="lucide:award" width="32" height="32" />
              <span>INDAP</span>
            </div>
            <div className="certification">
              <Icon icon="lucide:check-circle" width="32" height="32" />
              <span>FOSIS</span>
            </div>
            <div className="certification">
              <Icon icon="lucide:shield" width="32" height="32" />
              <span>Resolución Sanitaria</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;