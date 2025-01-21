const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const orderService = require('../services/orderService');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY;

router.post('/stripeWebhook', (req, res) => {
    res.send('hi')
});

module.exports = router;