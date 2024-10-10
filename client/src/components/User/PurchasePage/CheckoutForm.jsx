import { useState } from "react";
import { useStripe, useElements, PaymentElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import { Button, Alert } from 'antd';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setErrorMessage(null);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/checkout-success',
            },
        });

        if (error) {
            setErrorMessage(error.message);
        }

        setIsProcessing(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 border rounded-md bg-gray-50">
                <PaymentElement />
                <LinkAuthenticationElement className="mt-4" />
            </div>
            <Button type="primary" htmlType="submit" className="w-full" disabled={!stripe || isProcessing} loading={isProcessing}>
                {isProcessing ? 'Processing' : 'Pay'}
            </Button>
            {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        </form>
    )
};

export default CheckoutForm;