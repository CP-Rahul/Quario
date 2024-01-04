const express = require('express');

const { QuestionController } = require('../../controllers');
const { QuestionMiddlewares, UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        UserMiddlewares.checkAuth,
        QuestionMiddlewares.validateCreateRequest,
        QuestionController.createQuestion);

router.get('/topic', 
        QuestionController.getQuestionsByTopic);
        
router.get('/',
        QuestionController.getQuestions);

router.get('/:id',
        QuestionController.getQuestion);

router.patch('/:id',
        UserMiddlewares.checkAuth,
        QuestionMiddlewares.validateUpdateRequest,
        QuestionController.updateQuestion);

router.delete('/:id',
        UserMiddlewares.checkAuth,
        QuestionController.destroyQuestion);

module.exports = router;