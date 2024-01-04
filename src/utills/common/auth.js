const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../../config')


function comparePassword(password, encryptedPassword) {
    try {
        const match = bcrypt.compareSync(password, encryptedPassword);
        return match;
    } catch (error) {
        throw error;  
    }
}

function generateToken(input) {
    try {
        const token = jwt.sign(input, ServerConfig.JWTSECRET, { expiresIn: ServerConfig.JWTEXPIRY });
        return token;
    } catch (error) {
        throw error;
    }
}

function verifyToken(token) {
    try {
        const response = jwt.verify(token, ServerConfig.JWTSECRET);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    comparePassword,
    generateToken,
    verifyToken
};