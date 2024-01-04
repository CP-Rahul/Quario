const { StatusCodes } = require("http-status-codes");
const { TopicService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utills/common");

async function createTopic(req, res) {
    try {
        const topic = await TopicService.createTopic({
            name: req.body.name
        });
        SuccessResponse.data = topic;
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

async function destroyTopic(req, res) {
    try {
        const topic = await TopicService.destroyTopic(req.params.id);
        SuccessResponse.data = topic;
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

async function addTopicToQuestion(req, res) {
    try {
        const topicQuestion = await TopicService.addTopicToQuestion({
            topicId: req.body.topicId,
            questionId: req.body.questionId
        });
        SuccessResponse.data = topicQuestion;
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
    createTopic,
    destroyTopic,
    addTopicToQuestion
}