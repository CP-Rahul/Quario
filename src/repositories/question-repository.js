const { StatusCodes } = require('http-status-codes')

const CrudRepository = require('./crud-repository')
const { Question, Answer, Comment } = require('../models');
const AppError = require('../utills/error/app-error');

class QuestionRepository extends CrudRepository{
    constructor() {
        super(Question);
    }
    async getAllQuestionsWithAnswersAndComments() {
        try {
            const response = await Question.findAll({
                include: [
                  {
                    model: Answer,
                    required: false,
                    as: 'Answers',
                    include: {
                      model: Comment,
                      required: false,
                      as: 'Comments',
                    }
                  }
                ]
              });
              return response;
        } catch (error) {
            throw error;
        }
    }
rio
    async getQuestionWithAnswersAndComments(id) {
        try {
            const response = await Question.findOne({
                where: {
                    id: id
                },
                include: [
                  {
                    model: Answer,
                    required: false,
                    as: 'Answers',
                    include: {
                     model: Comment,
                     required: false,
                     as: 'Comments'
                    }
                  }
                ]
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