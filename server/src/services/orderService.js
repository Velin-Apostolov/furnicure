const Order = require('../models/Order');

const create = async (orderData) => {
    const { paymentIntentId, userId, email, items, shippingAddress, billingAddress, totalAmount } = orderData;

    try {
        const existingOrder = await Order.findOne({ paymentIntentId })
        if (existingOrder) {
            return existingOrder;
        }
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}