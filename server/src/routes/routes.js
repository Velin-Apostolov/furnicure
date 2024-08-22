const router = require('express').Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');

router.use('/admin', adminController);
router.use('/user', userController);

module.exports = router;