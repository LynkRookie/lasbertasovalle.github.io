import React from 'react';
import './Footer.css';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h3>Las Bertas</h3>
          <p>Productos artesanales con tradición</p>
          <div className="footer-social">
            <a href="https://instagram.com/lasbertas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon icon="lucide:instagram" width="24" height="24" />
            </a>
            <a href="https://facebook.com/lasbertas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon icon="lucide:facebook" width="24" height="24" />
            </a>
            <a href="https://wa.me/56968353908" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon icon="lucide:message-circle" width="24" height="24" />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#menu">Menú Semanal</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#reservas">Reservas</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4>Contacto</h4>
            <ul className="contact-list">
              <li>
                <Icon icon="lucide:map-pin" width="16" height="16" />
                <span>Coquimbo 359, Ovalle</span>
              </li>
              <li>
                <Icon icon="lucide:phone" width="16" height="16" />
                <span>+56 9 6835 3908</span>
              </li>
              <li>
                <Icon icon="lucide:mail" width="16" height="16" />
                <span>lasbertasriohurtado@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4>Horarios</h4>
            <ul className="hours-list">
              <li>
                <span>Lunes a Viernes:</span>
                <span>9:00 - 18:00 hrs.</span>
              </li>
              <li>
                <span>Sábados y Domingos:</span>
                <span>10:00 - 16:00 hrs.</span>
              </li>
              {/* <li>
                <span>Almuerzos:</span>
                <span>12:30 - 15:00 hrs.</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      
      {/* <div className="footer-bottom">
        <div className="container">
          <p>© 2024 Las Bertas - Todos los derechos reservados</p>
          <p className="footer-message">Gracias por apoyar el emprendimiento local y la tradición artesanal de nuestra región.</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;