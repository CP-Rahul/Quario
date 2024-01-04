const express = require('express');

const questionRoutes = require('./question-routes');
const answerRoutes = require('./answer-routes');
const commentRoutes = require('./comment-routes');
const likeRoutes = require('./like-routes');
const topicRoutes = require('./topic-routes');

const router = express.Router();

router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);
router.use('/topics', topicRoutes);

module.exports = router;