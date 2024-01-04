const express = require('express');

const { AnswerController } = require('../../controllers');
const { AnswerMiddlewares, UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        UserMiddlewares.checkAuth,
        AnswerMiddlewares.validateCreateRequest,
        AnswerController.createAnswer);

router.get('/',
        AnswerController.getAnswers);

router.get('/:id',
        AnswerController.getAnswer);

router.patch('/:id',
        UserMiddlewares.checkAuth,
        AnswerMiddlewares.validateUpdateRequest,
        AnswerController.updateAnswer);

router.delete('/:id',
        UserMiddlewares.checkAuth,
        AnswerController.destroyAnswer);

module.exports = router;