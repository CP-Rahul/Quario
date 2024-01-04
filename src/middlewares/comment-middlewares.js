const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utills/common");

const AppError = require("../utills/error/app-error");

function validateCreateRequest(req, res, next) {
    if(!req.body.content) {
        ErrorResponse.message = 'Something went wrong while creating comment';
        ErrorResponse.error = new AppError('content is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.answerId) {
        ErrorResponse.message = 'Something went wrong while creating comment';
        ErrorResponse.error = new AppError('answerId is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if(!req.body.content) {
        ErrorResponse.message = 'Something went wrong while updating comment';
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