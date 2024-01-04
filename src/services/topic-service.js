const { StatusCodes } = require('http-status-codes');
const { TopicRepository, QuestionRepository } = require('../repositories');
const AppError = require('../utills/error/app-error');

const topicRepository = new TopicRepository();
const questionRepository = new QuestionRepository();

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

async function addTopicToQuestion(data) {
    try {
        const topics = await topicRepository.get(data.topicId);
        if(!topics) {
            throw new AppError('Cannot find the topic', StatusCodes.BAD_REQUEST);
        }
        const question = await questionRepository.get(data.questionId);
        if(!question) {
            throw new AppError('Cannot find the question', StatusCodes.BAD_REQUEST);
        }
        topics.addQuestion(question);
        return topics;
    } catch (error) {
        if(error instanceof AppError) throw error;
        throw new AppError('Cannot add topic to question', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createTopic,
    destroyTopic,
    addTopicToQuestion
}