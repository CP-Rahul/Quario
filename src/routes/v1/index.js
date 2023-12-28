const express = require('express');

const questionRoutes = require('./question-routes');

const router = express.Router();

router.use('/question', questionRoutes);

module.exports = router;