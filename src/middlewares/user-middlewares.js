const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utills/common");
const { UserService } = require('../services');

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

function validateSignUpRequest(req, res, next) {
    if(!req.body.email) {
        ErrorResponse.message = 'Something went wrong while signup';
        ErrorResponse.error = new AppError('email is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.password) {
        ErrorResponse.message = 'Something went wrong while signup';
        ErrorResponse.error = new AppError('password is not found in the request body', StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response;
            next();
        }
    } catch (error) {
        console.log(error)
        return res
                .status(error.statusCode)
                .json(error); 
    }
}

module.exports = {
    validateCreateRequest,
    validateSignUpRequest,
    checkAuth
}