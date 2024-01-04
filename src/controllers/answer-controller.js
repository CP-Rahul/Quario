const { StatusCodes } = require('http-status-codes');

const { AnswerService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utills/common');

async function createAnswer(req, res) {
    try {
        const answer = await AnswerService.createAnswer({
            content: req.body.content,
            questionId: req.body.questionId,
            userId: req.user
        });
        SuccessResponse.data = answer;
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

async function getAnswers(req, res) {
    try {
        const answers = await AnswerService.getAnswers();
        SuccessResponse.data = answers;
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

async function getAnswer(req, res) {
    try {
        const answer = await AnswerService.getAnswer(req.params.id);
        SuccessResponse.data = answer;
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

async function updateAnswer(req, res) {
    try {
        const answer = await AnswerService.updateAnswer({
            content: req.body.content
        },req.params.id);
        SuccessResponse.data = answer;
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

async function destroyAnswer(req, res) {
    try {
        const answer = await AnswerService.destroyAnswer(req.params.id);
        SuccessResponse.data = answer;
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
    createAnswer,
    getAnswers,
    getAnswer,
    updateAnswer,
    destroyAnswer
}