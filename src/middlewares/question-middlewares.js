const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utills/common");

const AppError = require("../utills/error/app-error");

function validateCreateRequest(req, res, next) {
    if(!req.body.topicId) {
        ErrorResponse.message = 'Something went wrong while creating question';
        ErrorResponse.error = new AppError('topicId is not found in the request body', StatusCodes.BAD_REQUEST);
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
    next();
}

module.exports = {
    validateCreateRequest
}