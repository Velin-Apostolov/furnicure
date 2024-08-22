const router = require('express').Router();
const { login, register } = require('../services/userService');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await register(username, email, password);
        return res.status(200).json({ username, email, _id: user._id, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: error.message });
    }
});

module.exports = router;