const router = require('express').Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const paymentController = require('../controllers/paymentController');
const webhookController = require('../controllers/webhookController')

router.use('/admin', adminController);
router.use('/user', userController);
router.use('/products', productController);
router.use('/payments', paymentController);
router.use('/stripeWebhook', webhookController);

module.exports = router;