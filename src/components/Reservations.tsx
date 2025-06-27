import React from 'react';
import './Reservations.css';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import reservasImg from '../assets/reservas.jpg';

const Reservations: React.FC = () => {
  return (
    <div className="reservations container">
      <div className="section-title">
        <h2>Reservas y Entregas</h2>
        <p>Información para reservar nuestros productos</p>
      </div>
      
      <div className="reservations-content">
        <div className="reservations-image">
          <img src={reservasImg} alt="Almuerzos Las Bertas" />
        </div>
        
        <div className="reservations-info">
          <h3>¿Cómo Reservar?</h3>
          
          <div className="reservation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Contacto</h4>
                <p>Llámanos o escríbenos por WhatsApp al +56 9 1234 5678 con al menos 24 horas de anticipación.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Detalles</h4>
                <p>Indícanos la cantidad de almuerzos, el día de retiro o entrega, y cualquier requerimiento especial.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Confirmación</h4>
                <p>Te confirmaremos la disponibilidad y el valor total de tu pedido.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Pago</h4>
                <p>Puedes pagar en efectivo al momento de retirar o mediante transferencia bancaria para entregas.</p>
              </div>
            </div>
          </div>
          
          {/* <div className="delivery-info">
            <h3>Entregas</h3>
            <p>Realizamos entregas en las siguientes localidades:</p>
            
            <ul className="delivery-list">
              <li>
                <Icon icon="lucide:check" className="delivery-icon" />
                <span>Fundina (sin costo adicional)</span>
              </li>
              <li>
                <Icon icon="lucide:check" className="delivery-icon" />
                <span>Serón ($1.000 adicional)</span>
              </li>
              <li>
                <Icon icon="lucide:check" className="delivery-icon" />
                <span>Hurtado ($2.000 adicional)</span>
              </li>
              <li>
                <Icon icon="lucide:check" className="delivery-icon" />
                <span>Ovalle (solo para pedidos superiores a $20.000, $5.000 adicional)</span>
              </li>
            </ul>
            
            <div className="reservation-cta">
              <Button 
                color="primary"
                startContent={<Icon icon="lucide:message-circle" />}
                as="a"
                href="https://wa.me/56912345678" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Reservar por WhatsApp
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reservations;