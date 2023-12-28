const { StatusCodes } = require('http-status-codes')

const CrudRepository = require('./crud-repository')
const { Question, Answer } = require('../models');
const AppError = require('../utills/error/app-error');

class QuestionRepository extends CrudRepository{
    constructor() {
        super(Question);
    }
    async getAllQuestionsAndAnswers() {
        try {
            const response = await Question.findAll({
                include: {
                  model: Answer,
                  as: 'Answers'
                }
              });
              return response;
        } catch (error) {
            throw error;
        }
    }

    async getQuestionAndAnswers(id) {
        try {
            const response = await Question.findOne({
                where: {
                    id: id
                },
                include: {
                  model: Answer,
                  required: false,
                  as: 'Answers',
                  where: {
                     questionId: id
                  }
                }
              });
              if(!response) {
                throw new AppError('The requested resource is not found', StatusCodes.NOT_FOUND);
              }
              return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  QuestionRepository;