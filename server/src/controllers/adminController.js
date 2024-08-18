const router = require('express').Router();
const { login, register } = require('../services/adminService');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const user = await login(username, password);
        return res.status(200).json({ user, message: 'Login successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    try {
        const user = await register(username, password);
        return res.status(200).json({ user, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
});

module.exports = router;