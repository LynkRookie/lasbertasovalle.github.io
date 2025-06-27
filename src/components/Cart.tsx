import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
//esto sirve para  realizar el guardado del producto y pedir el pedido y mandarlo al dueño de los productos
const Cart: React.FC = () => {
  const { items, isOpen, setIsOpen, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
  if (items.length === 0) return;

  let mensaje = 'Hola, buenas tardes. Me gustaría pedir los siguientes artículos:\n\n';
  let total = 0;

  items.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    mensaje += `🛒 Producto: ${item.name}\nCantidad: ${item.quantity}\nPrecio unitario: $${item.price.toLocaleString()}\nSubtotal: $${subtotal.toLocaleString()}\n\n`;
  });

  mensaje += `💰 Total del pedido: $${total.toLocaleString()}\n\nPor favor, confírmame disponibilidad. ¡Gracias!`;

  const telefono = '56933471250';
  const mensajeCodificado = encodeURIComponent(mensaje);
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  window.open(urlWhatsApp, '_blank');
  clearCart();
  setIsOpen(false);
};


  return (
    <Drawer isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="right">
      <DrawerContent className="max-w-md">
        <DrawerHeader className="border-b border-neutral-200">
          <div className="flex items-center">
            <Icon icon="lucide:shopping-cart" className="mr-2 text-primary-500" />
            <span className="text-lg font-display">Tu Carrito</span>
            <span className="ml-2 bg-primary-500 text-white rounded-full px-2 py-0.5 text-xs">
              {totalItems}
            </span>
          </div>
        </DrawerHeader>
        <DrawerBody>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
              <Icon icon="lucide:shopping-bag" className="text-neutral-300 text-6xl mb-4" />
              <p className="text-neutral-500">Tu carrito está vacío</p>
              <Button 
                color="primary" 
                variant="light" 
                className="mt-4"
                onPress={() => setIsOpen(false)}
              >
                Explorar Productos
              </Button>
            </div>
          ) : (
            <div className="space-y-4 py-2">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </DrawerBody>
        {items.length > 0 && (
          <DrawerFooter className="border-t border-neutral-200 pt-4">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary-500">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="flat" 
                  color="default" 
                  onPress={() => setIsOpen(false)}
                  className="w-full"
                >
                  Seguir Comprando
                </Button>
                <Button 
                  color="primary" 
                  onPress={handleCheckout}
                  className="w-full"
                >
                  Enviar Pedido
                </Button>
              </div>
              <Button 
                variant="light" 
                color="danger" 
                onPress={clearCart}
                className="w-full"
              >
                <Icon icon="lucide:trash-2" className="mr-1" />
                Vaciar Carrito
              </Button>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;