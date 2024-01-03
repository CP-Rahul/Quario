const { StatusCodes } = require('http-status-codes');
const { LikeRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const likeRepository = new LikeRepository();


async function createLike(data) {
    try {
        const likable = await likeRepository.isLiked(data);
        if(!likable) {
            var like = likeRepository.create(data);
        } else {
            throw new AppError('You already liked this', StatusCodes.BAD_REQUEST);
        }
        return like;
    } catch (error) {
        if(error instanceof AppError) throw error;
        throw new AppError('Cannot like this', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createLike
}