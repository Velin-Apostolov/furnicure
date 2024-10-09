import React, { useContext } from 'react';
import { Typography, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../util/constants';
import CartItem from './CartItem';
import { CartContext } from '../../../contexts/CartContext';

const CartPage = () => {
  const { cart, totalItems, onQuantityChange, onRemove } = useContext(CartContext);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.purchaseQuantity, 0);
  const navigate = useNavigate();

  const onCheckout = () => navigate('/checkout');

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
        <div className='flex flex-col justify-center gap-4 mt-4'>
          <Button type='primary' onClick={() => navigate(routes.products)} hidden={totalItems() > 0}>Go Shopping</Button>
          <Button type="primary" onClick={onCheckout} disabled={totalItems() == 0}>Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
