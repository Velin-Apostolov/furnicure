const User = require('../models/User');

const register = async (username, email, password) => {
    try {
        const userFound = await User.findOne({
            $or: [{ username }, { email }]
        });
        if (userFound) {
            throw new Error('Already exists!');
        }

        const newUser = new User({
            username,
            email,
            password,
        });

        await newUser.save();

        return { username, email, id: newUser._id };
    } catch (error) {
        throw new Error(error.message);
    }
}

const login = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('Invalid credentials!');
        }

        if (user.password != password) {
            throw new Error('Invalid credentials!');
        }

        return { username, id: user._id };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    register,
    login,
}