const { StatusCodes } = require('http-status-codes');

const { QuestionService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utills/common');

async function createQuestion(req, res) {
    try {
        const question = await QuestionService.createQuestion({
            description: req.body.description,
            userId: req.user
        });
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getQuestions(req, res) {
    try {
        const questions = await QuestionService.getQuestions();
        SuccessResponse.data = questions;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getQuestion(req, res) {
    try {
        const question = await QuestionService.getQuestion(req.params.id);
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateQuestion(req, res) {
    try {
        const question = await QuestionService.updateQuestion({
            description: req.body.description
        },req.params.id);
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function destroyQuestion(req, res) {
    try {
        const question = await QuestionService.destroyQuestion(req.params.id);
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getQuestionsByTopic(req, res) {
    try {
        const questions = await QuestionService.getQuestionsByTopic({
            name: req.query.name
        });
        SuccessResponse.data = questions;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse); 
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