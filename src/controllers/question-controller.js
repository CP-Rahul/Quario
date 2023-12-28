const { StatusCodes } = require('http-status-codes');

const { QuestionService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utills/common');

async function createQuestion(req, res) {
    try {
        const question = await QuestionService.createQuestion({
            description: req.body.description,
            topicId: req.body.topicId,
            userId: req.body.userId
        });
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createQuestion
}