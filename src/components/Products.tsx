import React from 'react';
import './Products.css';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import { useCart } from '../context/CartContext';
import placeHolderImg from '../assets/placeholder.jpg';

import lechecabra from '../assets/lechecabra.jpg';
import Arropechañar from '../assets/chañar.jpg';
import mermeladas from '../assets/mermeladas.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  price: number;
}

const Products: React.FC = () => {
  const { addItem } = useCart();
  
  const products: Product[] = [
    {
      id: 1,
      name: "Manjar de Leche de Cabra",
      description: "Delicioso manjar elaborado con leche fresca de nuestras cabras, cocinado lentamente hasta obtener una textura cremosa y un sabor inigualable.",
      image: lechecabra,
      // image: placeHolderImg,
      features: ["100% Natural", "Sin conservantes", "Artesanal", "Resolución sanitaria"],
      price: 3790
    },
    {
      id: 2,
      name: "Mermeladas Caseras",
      description: "Mermeladas elaboradas con frutas de temporada cultivadas en nuestra huerta familiar, conservando todo su sabor y propiedades naturales.",
      image: mermeladas,
      // image: placeHolderImg,
      features: ["Frutas locales", "Bajo contenido de azúcar", "Sin aditivos", "Resolución sanitaria"],
      price: 3800
    },
    {
      id: 3,
      name: "Té de Hierbas",
      description: "Mezclas de hierbas aromáticas cultivadas en nuestro jardín, secadas naturalmente para preservar sus propiedades y aromas.",
      image: "https://thvnext.bing.com/th/id/OIP.l-ggHmZP1sACJOV2qcIzzAHaEK?w=317&h=180&c=7&r=0&o=7&cb=thvnext&dpr=1.5&pid=1.7&rm=3",
      //image: placeHolderImg,
      features: ["Orgánico", "Hierbas locales", "Secado natural", "Resolución sanitaria"],
      price: 2500
    },
    {
      id: 4,
      name: "Queso de Cabra",
      description: "Quesos artesanales elaborados con leche de nuestras cabras, siguiendo recetas tradicionales transmitidas por generaciones.",
      image: "data:image/webp;base64,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",
      // image: placeHolderImg,
      features: ["Maduración natural", "Sin conservantes", "Artesanal", "Resolución sanitaria"],
      price: 5200
    },
    {
      id: 5,
      name: "Miel Pura",
      description: "Miel recolectada de colmenas ubicadas en zonas libres de contaminación, conservando todas sus propiedades naturales.",
      image: "data:image/webp;base64,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",
      //image: placeHolderImg,
      features: ["100% Natural", "Sin procesar", "Producción local", "Resolución sanitaria"],
      price: 4800
    },
    {
      id: 6,
      name: "Arrope",
      description: "Dulce tradicional elaborado con frutas locales, cocinado lentamente hasta obtener un jarabe espeso y concentrado.",
      image: Arropechañar,
      //image: placeHolderImg,
      features: ["Receta tradicional", "Frutas locales", "Sin aditivos", "Resolución sanitaria"],
      price: 8790
    }
  ];

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="products container">
      <div className="section-title">
        <h2>Nuestros Productos</h2>
        <p>Elaborados con ingredientes naturales y mucho amor</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <div className="flex justify-between items-start">
                <h3>{product.name}</h3>
                <span className="product-price">${product.price.toLocaleString()}</span>
              </div>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, index) => (
                  <span key={index} className="feature">
                    <Icon icon="lucide:check" className="feature-icon" /> {feature}
                  </span>
                ))}
              </div>
              <Button 
                color="primary" 
                className="w-full mt-4"
                onPress={() => handleAddToCart(product)}
                startContent={<Icon icon="lucide:shopping-cart" />}
              >
                Agregar al Carrito
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;