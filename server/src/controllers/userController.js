const router = require('express').Router();
const { login, register } = require('../services/userService');

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000,
}

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPass } = req.body;
    try {
        const token = await register(username, email, password, repeatPass);
        res.cookie('token', token, cookieOptions);
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
        res.cookie('token', token, cookieOptions);
        return res.status(200).json({ token, message: 'Login successful!' });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;