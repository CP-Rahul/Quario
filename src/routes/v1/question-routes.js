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

router.patch('/:id',
        QuestionMiddlewares.validateUpdateRequest,
        QuestionController.updateQuestion);

module.exports = router;