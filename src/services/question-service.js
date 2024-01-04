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
        const question = await questionRepository.getAllQuestionsDetails();
        return question;
    } catch(error) {
        throw new AppError('Cannot get the questions and answers', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getQuestion(id) {
    try {
        const question = await questionRepository.getQuestionDetails(id);
        return question;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot get the requested question and answers', error.statusCode);
        }            
        throw new AppError('Cannot get the requested question and answers', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateQuestion(data, id) {
    try {
        const question = await questionRepository.update(data, id);
        return question;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot update the requested question', error.statusCode);
        }            
        throw new AppError('Cannot get the requested question', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyQuestion(id) {
    try {
        const question = await questionRepository.destroy(id);
        return question;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot delete the requested question', error.statusCode);
        }            
        throw new AppError('Cannot delete the requested question', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getQuestionsByTopic(data) {
    try {
        const questions = await questionRepository.filter(data.name);
        return questions;
    } catch (error) {
        if(error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot find the questions related to this topic', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot find the questions related to this topic', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    getQuestion,
    updateQuestion,
    destroyQuestion,
    getQuestionsByTopic
}