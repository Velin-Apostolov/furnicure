const Admin = require('../models/Admin');

const login = async (username, password) => {
    try {
        const user = await Admin.findOne({ username });
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

const register = async (username, password) => {
    try {
        const existingUser = await Admin.findOne({ username });
        if (existingUser) {
            throw new Error('User already exists!');
        }
        const newUser = new Admin({
            username,
            password,
        });

        await newUser.save();

        return { username, id: newUser._id };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    login,
    register
}