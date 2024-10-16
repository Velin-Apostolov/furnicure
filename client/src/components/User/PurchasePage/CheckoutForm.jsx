import { useRef, useState } from "react";
import { useStripe, useElements, PaymentElement, LinkAuthenticationElement, AddressElement } from "@stripe/react-stripe-js";
import { Button, Alert } from 'antd';

const CheckoutForm = ({ totalPrice }) => {
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

        const billingDetailsElement = elements.getElement(AddressElement, { mode: 'billing' });
        const shippingDetailsElement = elements.getElement(AddressElement, { mode: 'shipping' });

        if (!billingDetailsElement || !shippingDetailsElement) {
            setErrorMessage("Unable to retrieve address details.");
            setIsProcessing(false);
            return;
        }

        const billingDetails = billingDetailsElement.getValue().value;
        const shippingDetails = shippingDetailsElement.getValue().value;

        try {
            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://localhost:5173/checkout-status',
                    payment_method_data: {
                        billing_details: {
                            name: billingDetails?.name || '',
                            address: billingDetails?.address || {},
                        },
                    },
                    shipping: {
                        name: shippingDetails?.name || '',
                        address: shippingDetails?.address || {},
                    }
                },
            });

            if (error) {
                setErrorMessage(error.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }

        setIsProcessing(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 border rounded-md bg-gray-50">
                <h3 className="mt-6 mb-4 text-xl font-semibold text-gray-800 border-b pb-2">Email Address</h3>
                <LinkAuthenticationElement className="mb-4" />
                <h3 className="mb-4 text-xl font-semibold text-gray-800 mt-6 border-b pb-2">Shipping Address</h3>
                <AddressElement options={{ mode: 'shipping' }} />
                <h3 className="mb-4 text-xl font-semibold text-gray-800 mt-6 border-b pb-2">Billing Address</h3>
                <AddressElement options={{ mode: 'billing' }} />
                <h3 className="mt-6 text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Payment Details</h3>
                <PaymentElement />
            </div>
            <Button type="primary" htmlType="submit" className="w-full" disabled={!stripe || isProcessing} loading={isProcessing}>
                {isProcessing ? 'Processing' : `Pay - ${totalPrice}`}
            </Button>
            {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        </form>
    )
};

export default CheckoutForm;