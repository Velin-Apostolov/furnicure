const router = require('express').Router();
const { login, register } = require('../services/userService');

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPass } = req.body;
    try {
        const user = await register(username, email, password, repeatPass);
        return res.status(200).json({ username, email, _id: user._id, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        return res.status(200).json({ user, message: 'Login successful!' });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;