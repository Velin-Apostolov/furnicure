import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Card, Alert } from 'antd';
import CheckoutForm from './CheckoutForm';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(PUBLISHABLE_KEY);

const PurchasePage = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);
    const { totalAmount } = useContext(CartContext);
    const totalPrice = totalAmount();

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await fetch('http://localhost:3000/payments/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ amount: totalPrice }),
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
            <Card className='max-w-lg mx-auto' title='Checkout'>
                {error && <Alert message={error} type="error" showIcon />}
                {clientSecret &&
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>}
            </Card>
        </div>
    )
};

export default PurchasePage;