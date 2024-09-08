const jwt = require('jsonwebtoken');
const util = require('util');

const signJwt = util.promisify(jwt.sign);
const verifyJwt = util.promisify(jwt.verify);

module.exports = {
    signJwt,
    verifyJwt,
}