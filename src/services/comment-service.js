const { StatusCodes } = require("http-status-codes");
const CommentRepository = require("../repositories/comment-repository");
const AppError = require("../utills/error/app-error");

const commentRepository = new CommentRepository();

async function createComment(data) {
    try {
        const comment = await commentRepository.create(data);
        return comment;
    } catch (error) {
        throw new AppError('Cannot create a new comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getComments() {
    try {
        const comment = await commentRepository.getAll();
        return comment;
    } catch (error) {
        throw new AppError('Cannot get all comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getComment(id) {
    try {
        const comment = await commentRepository.get(id);
        return comment;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot get the requested comment', error.statusCode);
        }            
        throw new AppError('Cannot get the requested comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateComment(data, id) {
    try {
        console.log(data)
        const comment = await commentRepository.update(data, id);
        return comment;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot updatethe requested comment', error.statusCode);
        }            
        throw new AppError('Cannot update the requested comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyComment(id) {
    try {
        const comment = await commentRepository.destroy(id);
        return comment;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot delete the requested comment', error.statusCode);
        }            
        throw new AppError('Cannot delete the requested comment', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createComment,
    getComments,
    getComment,
    updateComment,
    destroyComment
}