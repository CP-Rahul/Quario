const { StatusCodes } = require('http-status-codes');

const { QuestionRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const  questionRepository = new QuestionRepository;

async function createQuestion(data) {
    try {
        const question = await questionRepository.create(data);
        return question;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new question', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createQuestion
}