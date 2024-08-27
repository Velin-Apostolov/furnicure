const router = require('express').Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

router.use('/admin', adminController);
router.use('/user', userController);
router.use('/products', productController);

module.exports = router;