const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utills/common");

async function createUser(req, res) {
    try {
        const user = await UserService.createUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
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

async function signUp(req, res) {
    try {
        const user = await UserService.signUp({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
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
    createUser,
    signUp
}