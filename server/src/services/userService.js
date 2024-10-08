const User = require('../models/User');
const bcrypt = require('bcrypt');
const { signToken } = require('../util/jwt');

const register = async (username, email, password, repeatPass) => {
    if (password != repeatPass) {
        throw new Error('Password mismatch!');
    }
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

        const token = await signToken({ username, email, id: newUser._id });
        return token;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

const login = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('Invalid credentials!');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Invalid credentials!');
        }

        const token = await signToken({ username, email: user.email, id: user._id });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    register,
    login,
}