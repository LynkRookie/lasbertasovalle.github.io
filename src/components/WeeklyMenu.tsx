import React, { useState } from 'react';
import './WeeklyMenu.css';
import { Icon } from '@iconify/react';

interface MenuItem {
  day: string;
  main: string;
  side: string;
  dessert: string;
  price: string;
}

const WeeklyMenu: React.FC = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      day: "Lunes",
      main: "Cazuela de Vacuno",
      side: "Ensalada de tomate",
      dessert: "Arroz con leche",
      price: "$5.500"
    },
    {
      day: "Martes",
      main: "Pastel de Choclo",
      side: "Pebre casero",
      dessert: "Manzana asada con manjar",
      price: "$5.500"
    },
    {
      day: "Miércoles",
      main: "Charquicán",
      side: "Ensalada a la chilena",
      dessert: "Leche asada",
      price: "$5.500"
    },
    {
      day: "Jueves",
      main: "Porotos granados",
      side: "Ensalada de lechuga",
      dessert: "Compota de frutas",
      price: "$5.500"
    },
    {
      day: "Viernes",
      main: "Pescado al horno",
      side: "Puré de papas",
      dessert: "Flan de manjar",
      price: "$6.000"
    },
    {
      day: "Sábado",
      main: "Empanadas de pino",
      side: "Pebre casero",
      dessert: "Kuchen de frutas",
      price: "$6.000"
    },
    {
      day: "Domingo",
      main: "Asado de cordero",
      side: "Papas doradas y ensaladas",
      dessert: "Torta de mil hojas",
      price: "$7.500"
    }
  ]);

  return (
    <div className="weekly-menu container">
      <div className="section-title">
        <h2>Menú Semanal</h2>
        <p>Almuerzos caseros preparados con productos frescos y locales</p>
      </div>
      
      <div className="menu-container">
        <div className="menu-info">
          <div className="menu-note">
            <Icon icon="lucide:info" width="24" height="24" />
            <p>Todos nuestros almuerzos incluyen pan amasado, pebre casero y agua de hierbas.</p>
          </div>
          <div className="menu-note">
            <Icon icon="lucide:clock" width="24" height="24" />
            <p>Horario de atención: 12:30 - 15:00 hrs.</p>
          </div>
          <div className="menu-note">
            <Icon icon="lucide:phone" width="24" height="24" />
            <p>Reservas al: +56 9 1234 5678</p>
          </div>
        </div>
        
        <table className="menu-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Plato Principal</th>
              <th>Acompañamiento</th>
              <th>Postre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index} className={item.day === "Domingo" ? "highlight" : ""}>
                <td>{item.day}</td>
                <td>{item.main}</td>
                <td>{item.side}</td>
                <td>{item.dessert}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="menu-cta">
        <p>¿Quieres reservar un almuerzo?</p>
        <a href="#reservas" className="btn">Reservar Ahora</a>
      </div>
    </div>
  );
};

export default WeeklyMenu;