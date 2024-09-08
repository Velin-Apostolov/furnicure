const jwt = require('jsonwebtoken');
const util = require('util');

const signJwt = util.promisify(jwt.sign);
const verifyJwt = util.promisify(jwt.verify);

const signToken = async (data) => {
    // to add sign token logic, set cookie as well
}

module.exports = {
    signJwt,
    verifyJwt,
    signToken,
}