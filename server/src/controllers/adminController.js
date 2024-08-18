const router = require('express').Router();
const { login } = require('../services/adminService');

router.post('/admin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        return res.status(200).json({ user, message: 'Login successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
})

module.exports = router;