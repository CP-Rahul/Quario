const express = require('express');

const { QuestionController } = require('../../controllers');
const { QuestionMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        QuestionMiddlewares.validateCreateRequest,
        QuestionController.createQuestion);

router.get('/',
        QuestionController.getQuestions);

router.get('/:id',
        QuestionController.getQuestion);

module.exports = router;