const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utills/common");

const AppError = require("../utills/error/app-error");

function validateCreateRequest(req, res, next) {
    if(!req.body.description) {
        ErrorResponse.message = 'Something went wrong while creating question';
        ErrorResponse.error = new AppError('description is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if(!req.body.description) {
        ErrorResponse.message = 'Something went wrong while updating question';
        ErrorResponse.error = new AppError('description is not found in the request body', StatusCodes.BAD_REQUEST);
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