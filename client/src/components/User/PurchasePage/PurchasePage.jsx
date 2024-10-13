import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Card, Alert, List, Divider, Image } from 'antd';
import CheckoutForm from './CheckoutForm';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import priceFormatter from '../../../util/priceFormatter';

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(PUBLISHABLE_KEY);

const PurchasePage = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);
    const { cart, totalAmount } = useContext(CartContext);
    const totalPrice = priceFormatter(totalAmount());


    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const amountInCents = totalAmount() * 100;
                const response = await fetch('http://localhost:3000/payments/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ amount: amountInCents }),
                });
                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.message);
                }
                const result = await response.json();
                setClientSecret(result.clientSecret);
            } catch (error) {
                setError(error.message);
            }
        }
        createPaymentIntent();
    }, [totalPrice]);

    const options = {
        clientSecret,
    }

    return (
        <div className='p-8 bg-white rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row gap-8 w-full'>
                <div className='w-full md:w-1/2'>
                    <Card className='max-w-lg mx-auto' title='Cart Summary'>
                        <List
                            itemLayout='horizontal'
                            dataSource={cart}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Image src={item.images[0].url} alt={item.title} width={50} height={50} style={{ objectFit: 'cover' }} />}
                                        title={item.title}
                                        description={
                                            <>
                                                <p>Price per Item: ${priceFormatter(item.price)}</p>
                                                <p>Quantity: {item.purchaseQuantity}</p>
                                            </>
                                        }
                                    />
                                    <div>
                                        <strong>Subtotal: ${priceFormatter(item.price * item.purchaseQuantity)}</strong>
                                    </div>
                                </List.Item>
                            )}
                        />
                        <Divider />
                        <div className='flex justify-between font-bold'>
                            <span>Total Amount:</span>
                            <span>${totalPrice}</span>
                        </div>
                    </Card>
                </div>
                <div className='w-full md:w-1/2'>
                    <Card className='max-w-lg mx-auto' title='Checkout'>
                        {error && <Alert message={error} type='error' showIcon />}
                        {clientSecret && (
                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm totalPrice={`$${totalPrice}`} />
                            </Elements>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default PurchasePage;