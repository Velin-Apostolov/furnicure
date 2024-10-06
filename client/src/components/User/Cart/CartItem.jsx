import React from 'react';
import { Card, Button, InputNumber } from 'antd';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <Card className="flex items-center mb-4 p-4 shadow-md rounded-md">
      <img 
        src={item.images[0].url} 
        alt={item.title} 
        className="w-24 h-24 object-cover mr-4" 
      />
      <div className="flex-1">
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-lg font-medium">Price: ${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <InputNumber 
            value={item.purchaseQuantity} 
            onChange={(value) => onQuantityChange(item._id, value)} 
            className="mr-2"
          />
          <Button type="link" onClick={() => onRemove(item.id)}>Remove</Button>
        </div>
      </div>
      <div>
        <strong className="text-lg">Subtotal: ${(item.price * item.purchaseQuantity).toFixed(2)}</strong>
      </div>
    </Card>
  );
};

export default CartItem;
