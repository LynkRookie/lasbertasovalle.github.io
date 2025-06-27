import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CartItem as CartItemType, useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="flex items-center gap-4 p-2 border border-neutral-200 rounded-lg">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm">{item.name}</h4>
        <p className="text-primary-500 font-semibold">${item.price.toLocaleString()}</p>
        <div className="flex items-center mt-1">
          <Button 
            isIconOnly 
            size="sm" 
            variant="light" 
            onPress={handleDecrement}
            className="min-w-0 h-6 w-6"
          >
            <Icon icon="lucide:minus" className="text-xs" />
          </Button>
          <span className="mx-2 text-sm">{item.quantity}</span>
          <Button 
            isIconOnly 
            size="sm" 
            variant="light" 
            onPress={handleIncrement}
            className="min-w-0 h-6 w-6"
          >
            <Icon icon="lucide:plus" className="text-xs" />
          </Button>
        </div>
      </div>
      <Button 
        isIconOnly 
        size="sm" 
        variant="light" 
        color="danger" 
        onPress={() => removeItem(item.id)}
        className="min-w-0"
      >
        <Icon icon="lucide:trash-2" className="text-sm" />
      </Button>
    </div>
  );
};

export default CartItem;