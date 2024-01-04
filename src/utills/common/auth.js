const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../../config')


function comparePassword(password, encryptedPassword) {
    const match = bcrypt.compareSync(password, encryptedPassword);
    return match;
}

function generateToken(input) {
    const token = jwt.sign(input, ServerConfig.JWTSECRET, { expiresIn: ServerConfig.JWTEXPIRY });
    return token;
}

module.exports = {
    comparePassword,
    generateToken
};