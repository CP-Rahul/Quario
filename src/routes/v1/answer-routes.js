const express = require('express');

const { AnswerController } = require('../../controllers');
const { AnswerMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        AnswerMiddlewares.validateCreateRequest,
        AnswerController.createAnswer);

router.get('/',
        AnswerController.getAnswers);

router.get('/:id',
        AnswerController.getAnswer);

router.patch('/:id',
        AnswerMiddlewares.validateUpdateRequest,
        AnswerController.updateAnswer);

router.delete('/:id',
        AnswerController.destroyAnswer);

module.exports = router;