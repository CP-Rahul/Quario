const { Op } = require('sequelize');

const CrudRepository = require('./crud-repository')
const { Question, Answer } = require('../models');

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
}

module.exports =  QuestionRepository;