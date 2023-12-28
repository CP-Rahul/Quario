const express = require('express');

const questionRoutes = require('./question-routes');
const answerRoutes = require('./answer-routes');

const router = express.Router();

router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);

module.exports = router;