const { StatusCodes } = require('http-status-codes');
const { TopicRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const topicRepository = new TopicRepository();

async function createTopic(data) {
    try {
        const topic = await topicRepository.create(data);
        return topic;
    } catch (error) {
       throw new AppError('Cannot create a new topic', StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function destroyTopic(data) {
    try {
        const topic = await topicRepository.destroy(data);
        return topic;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Cannot find the topic for delete', error.statusCode);
        }
       throw new AppError('Cannot create a new topic', StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports = {
    createTopic,
    destroyTopic
}