const express = require('express');

const questionRoutes = require('./question-routes');
const answerRoutes = require('./answer-routes');
const commentRoutes = require('./comment-routes');

const router = express.Router();

router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);
router.use('/comments', commentRoutes);

module.exports = router;