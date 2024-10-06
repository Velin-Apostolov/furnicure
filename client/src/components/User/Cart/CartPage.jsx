import React, { useContext } from 'react';
import { Typography, Divider, Button } from 'antd';
import CartItem from './CartItem';
import { CartContext } from '../../../contexts/CartContext';

const CartPage = () => {
  const { cart, totalItems } = useContext(CartContext);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.purchaseQuantity, 0);

  const onRemove = () => console.log('item removed');

  const onQuantityChange = (item_id, newQuantity) => {
    const existingItem = cart.find(i => i._id === item_id);

    if (!existingItem) {
      throw new Error('No such item, please refresh cart.');
    }

    existingItem.purchaseQuantity = newQuantity;

    return existingItem;
  }

  const onCheckout = () => console.log('going to checkout');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Typography.Title level={2}>Shopping Cart ({totalItems()})</Typography.Title>
      {cart.length === 0 ? (
        <Typography.Text>No items in the cart.</Typography.Text>
      ) : (
        cart.map(item => (
          <CartItem
            key={item._id}
            item={item}
            onRemove={onRemove}
            onQuantityChange={onQuantityChange}
          />
        ))
      )}
      <Divider />
      <div className="flex justify-between items-center">
        <Typography.Title level={4}>Total: ${totalAmount.toFixed(2)}</Typography.Title>
        <Button type="primary" onClick={onCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
