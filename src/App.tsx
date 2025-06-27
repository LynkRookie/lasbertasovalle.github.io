import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <section id="inicio">
            <Hero />
          </section>
          <section id="productos">
            <Products />
          </section>
          <section id="nosotros">
            <About />
          </section>
          <section id="contacto">
            <Contact />
          </section>
          <section id="reservas">
            <Reservations />
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;