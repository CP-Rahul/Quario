const { StatusCodes } = require('http-status-codes');
const { UserRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const userRepository = new UserRepository();

async function createUser(data) {
    try {
        const user = await userRepository.create(data);
        return user;
    } catch (error) {
        if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
       throw new AppError('Cannot create a new user', StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports = {
    createUser,
}