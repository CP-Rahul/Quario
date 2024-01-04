const { StatusCodes } = require('http-status-codes');
const { LikeService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utills/common');

async function createLike(req, res) {
    try {
        const like = await LikeService.createLike({
            userId: req.user,
            likableId: req.query.likableId,
            likableType: req.query.likableType
        });
        SuccessResponse.data = like;
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

module.exports = {
    createLike
}