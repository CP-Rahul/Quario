const { StatusCodes } = require('http-status-codes')

const CrudRepository = require('./crud-repository')
const { Question, Answer, Comment, Like, Topic} = require('../models');
const AppError = require('../utills/error/app-error');

class QuestionRepository extends CrudRepository{
    constructor() {
        super(Question);
    }
    async getAllQuestionsDetails() {
        try {
            const response = await Question.findAll({
                include: [
                  {
                    model: Topic,
                    required: false,
                    as: 'Topics'
                  },
                  {
                    model: Answer,
                    required: false,
                    as: 'Answers',
                    include: [
                      {
                        model: Comment,
                        required: false,
                        as: 'Comments',
                        include: {
                          model: Like,
                          required: false,
                          as: 'Likes'
                        }
                      },
                      {
                        model: Like,
                        required: false,
                        as: 'Likes',
                      }
                    ]
                  }
                ]
              });
              return response;
        } catch (error) {
            throw error;
        }
    }

    async getQuestionDetails(id) {
        try {
            const response = await Question.findOne({
                where: {
                    id: id
                },
                include: [
                  {
                    model: Topic,
                    required: false,
                    as: 'Topics'
                  },
                  {
                  model: Answer,
                  required: false,
                  as: 'Answers',
                  include: [
                    {
                      model: Comment,
                      required: false,
                      as: 'Comments',
                      include: {
                        model: Like,
                        required: false,
                        as: 'Likes',
                       where: {
                        likableType: "Comment"
                        }
                      }
                    },
                    {
                      model: Like,
                      required: false,
                      as: 'Likes',
                      where: {
                        likableType: "Answer"
                      }
                    }
                  ]
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

    async filter(data) {
      try {
        const response = await Question.findAll({
          include: [
            {
              model: Answer,
              required: false,
              as: 'Answers',
            },
            {
              model: Topic,
              required: true,
              as: 'Topics',
              where: {
                name: (data)
              }
            }
          ]
        });
        if(!response) {
          throw new AppError('Cannot find the requested resource', StatusCodes.NOT_FOUND);
        }
        return response;
      } catch (error) {
        throw error;
      }
    }
}

module.exports =  QuestionRepository;