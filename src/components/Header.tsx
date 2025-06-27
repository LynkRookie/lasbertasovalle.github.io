import React, { useState, useEffect } from 'react';
import './Header.css';
import { Icon } from '@iconify/react';
import { Button, Badge } from '@heroui/react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logoLasBertas.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* <div className="logo">
          <a href="#inicio">Las Bertas</a>
        </div> */}

 <div className="logo">
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logoImg} alt="Logo Las Bertas" className='logo' style={{ height: '9vh'}} />
          {/* <span>Las Bertas</span> */}
        </a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#productos" onClick={closeMenu}>Productos</a></li>
            <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
            <li><a href="#reservas" onClick={closeMenu}>Reservas</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Badge 
            content={totalItems > 0 ? totalItems : null} 
            color="primary" 
            placement="top-right"
            isInvisible={totalItems === 0}
          >
            <Button
              isIconOnly
              variant="light"
              aria-label="Carrito de compras"
              onPress={() => setIsOpen(true)}
            >
              <Icon icon="lucide:shopping-cart" width="20" height="20" />
            </Button>
          </Badge>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
            {isMenuOpen ? (
              <Icon icon="lucide:x" width="24" height="24" />
            ) : (
              <Icon icon="lucide:menu" width="24" height="24" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;