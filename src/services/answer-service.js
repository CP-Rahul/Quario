const { StatusCodes } = require('http-status-codes');

const { AnswerRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const  answerRepository = new AnswerRepository;

async function createAnswer(data) {
    try {
        const answer = await answerRepository.create(data);
        return answer;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new answer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAnswers() {
    try {
        const answer = await answerRepository.getAll();
        return answer;
    } catch(error) {
        throw new AppError('Cannot get the answers', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAnswer(id) {
    try {
        const answer = await answerRepository.get(id);
        return answer;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot get the requested answer', error.statusCode);
        }            
        throw new AppError('Cannot get the requested answer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAnswer(data, id) {
    try {
        const answer = await answerRepository.update(data, id);
        return answer;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot update the requested answer', error.statusCode);
        }            
        throw new AppError('Cannot get the requested answer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAnswer(id) {
    try {
        const answer = await answerRepository.destroy(id);
        return answer;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot delete the requested answer', error.statusCode);
        }            
        throw new AppError('Cannot delete the requested answer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createAnswer,
    getAnswers,
    getAnswer,
    updateAnswer,
    destroyAnswer
}