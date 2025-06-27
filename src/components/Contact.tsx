import React from 'react';
import './Contact.css';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
  return (
    <div className="contact container">
      <div className="section-title">
        <h2>Contacto</h2>
        <p>Estamos a tu disposición para atender tus consultas</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <Icon icon="lucide:map-pin" className="contact-icon" />
            <div>
              <h3>Dirección</h3>
              <p>Coquimbo 359, Ovalle</p>
              <p>Región de Coquimbo, Chile</p>
            </div>
          </div>

          <div className="contact-card">
            <Icon icon="lucide:phone" className="contact-icon" />
            <div>
              <h3>Teléfono</h3>
              <p>+56 9 6835 3908</p>
              <p>Horario de atención: 9:00 - 18:00 hrs.</p>
            </div>
          </div>

          <div className="contact-card">
            <Icon icon="lucide:mail" className="contact-icon" />
            <div>
              <h3>Correo Electrónico</h3>
              <p>lasbertasriohurtado@gmail.com</p>
              <p>Te responderemos a la brevedad</p>
            </div>
          </div>

          <div className="contact-card">
            <Icon icon="lucide:instagram" className="contact-icon" />
            <div>
              <h3>Redes Sociales</h3>
              <div className="social-links">
                <a href="https://instagram.com/lasbertasriohurtado" target="_blank" rel="noopener noreferrer">
                  <Icon icon="lucide:instagram" /> @lasbertas
                </a>
                <a href="https://www.facebook.com/Lasbertasriohurtado" target="_blank" rel="noopener noreferrer">
                  <Icon icon="lucide:facebook" /> Las Bertas
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="//maps.google.com/maps?q=Las%20Bertas%2C%20Coquimbo%2C%20R%C3%ADo%20Hurtado%2C%20Coquimbo&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Las Bertas"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;