const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: process.env.SALT,
    JWTSECRET: process.env.JWTSECRET,
    JWTEXPIRY: process.env.JWTEXPIRY
}