const jwt = require('jsonwebtoken');
const util = require('util');
require('dotenv').config();

const signJwt = util.promisify(jwt.sign);
const verifyJwt = util.promisify(jwt.verify);

const signToken = async (payload) => {
    try {
        const token = await signJwt(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
        return token;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    signToken,
}