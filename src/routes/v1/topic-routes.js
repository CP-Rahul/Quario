const express = require('express');

const { TopicController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');
 
const router = express.Router();

router.post('/', 
        UserMiddlewares.checkAuth,
        TopicController.createTopic);

router.post('/addquestions', 
        UserMiddlewares.checkAuth,
        TopicController.addTopicToQuestion);

router.delete('/:id', 
        UserMiddlewares.checkAuth,
        TopicController.destroyTopic);

module.exports = router;