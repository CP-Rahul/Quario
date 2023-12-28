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

async function getQuestions() {
    try {
        const question = await questionRepository.getAll();
        return question;
    } catch(error) {
        throw new AppError('Cannot get the questions', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getQuestion(id) {
    try {
        const question = await questionRepository.get(id);
        return question;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot get the requested question', error.statusCode);
        }            
        throw new AppError('Cannot get the requested question', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    getQuestion
}