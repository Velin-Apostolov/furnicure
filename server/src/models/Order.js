const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    },
    customerName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    shippingAddress: {
        city: { type: String, required: true },
        streetAddress: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    billingAddress: {
        city: { type: String, required: true },
        streetAddress: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentIntentId: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'succeeded', 'failed'],
        default: 'pending',
        required: true,
    },
    items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            itemName: {type: String, required: true},
            quantity: {type: Number, required: true},
            price: {type: Number, required: true},
            totalPrice: {type: Number, required: true},
        },
    ]
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;