const { StatusCodes } = require("http-status-codes");
const { commentService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utills/common");

async function createComment(req, res) {
    try {
        const comment = await commentService.createComment({
            content: req.body.content,
            answerId: req.body.answerId,
            userId: req.body.userId
        });
        SuccessResponse.data = comment;
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

async function getComments(req, res) {
    try {
        const comments = await commentService.getComments();
        SuccessResponse.data = comments;
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

async function getComment(req, res) {
    try {
        const comment = await commentService.getComment(req.params.id);
        SuccessResponse.data = comment;
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

async function updateComment(req, res) {
    try {
        const comment = await commentService.updateComment({
            content: req.body.content
        }, req.params.id);
        SuccessResponse.data = comment;
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

async function destroyComment(req, res) {
    try {
        const comment = await commentService.destroyComment(req.params.id);
        SuccessResponse.data = comment;
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
    createComment,
    getComments,
    getComment,
    updateComment,
    destroyComment
}