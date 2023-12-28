const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utills/common");

const AppError = require("../utills/error/app-error");

function validateCreateRequest(req, res, next) {
    if(!req.body.content) {
        ErrorResponse.message = 'Something went wrong while creating answer';
        ErrorResponse.error = new AppError('content is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.userId) {
        ErrorResponse.message = 'Something went wrong while creating question';
        ErrorResponse.error = new AppError('userId is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.questionId) {
        ErrorResponse.message = 'Something went wrong while creating question';
        ErrorResponse.error = new AppError('questionId is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if(!req.body.content) {
        ErrorResponse.message = 'Something went wrong while updating question';
        ErrorResponse.error = new AppError('content is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}