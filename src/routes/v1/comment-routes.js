const express = require('express');

const { CommentController } = require('../../controllers');
const { CommentMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        CommentMiddlewares.validateCreateRequest,
        CommentController.createComment);

router.get('/',
        CommentController.getComments);

router.get('/:id',
        CommentController.getComment);

router.patch('/:id',
        CommentMiddlewares.validateUpdateRequest,
        CommentController.updateComment);

router.delete('/:id',
        CommentController.destroyComment);

module.exports = router;