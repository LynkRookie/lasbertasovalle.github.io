import React from 'react';
import './WhatsAppButton.css';
import { Icon } from '@iconify/react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/56968353908" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <Icon icon="lucide:message-circle" width="24" height="24" />
      <span className="whatsapp-tooltip">¡Contáctanos!</span>
    </a>
  );
};

export default WhatsAppButton;