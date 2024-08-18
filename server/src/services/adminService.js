const Admin = require('../models/Admin');

export const login = async (username, password) => {
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