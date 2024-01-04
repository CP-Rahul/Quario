const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utills/common");

const AppError = require("../utills/error/app-error");

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = 'Something went wrong while signin';
        ErrorResponse.error = new AppError('name is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.email) {
        ErrorResponse.message = 'Something went wrong while signin';
        ErrorResponse.error = new AppError('email is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.password) {
        ErrorResponse.message = 'Something went wrong while signin';
        ErrorResponse.error = new AppError('password is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
}