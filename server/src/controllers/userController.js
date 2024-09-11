const router = require('express').Router();
const { login, register } = require('../services/userService');

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPass } = req.body;
    try {
        const token = await register(username, email, password, repeatPass);
        return res.status(200).json({ token, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await login(username, password);
        return res.status(200).json({ token, message: 'Login successful!' });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;