const express = require('express');

const { CommentController } = require('../../controllers');
const { CommentMiddlewares, UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/',
        UserMiddlewares.checkAuth,
        CommentMiddlewares.validateCreateRequest,
        CommentController.createComment);

router.get('/',
        CommentController.getComments);

router.get('/:id',
        CommentController.getComment);

router.patch('/:id',
        UserMiddlewares.checkAuth,
        CommentMiddlewares.validateUpdateRequest,
        CommentController.updateComment);

router.delete('/:id',
        UserMiddlewares.checkAuth,
        CommentController.destroyComment);

module.exports = router;