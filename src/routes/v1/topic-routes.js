const express = require('express');

const { TopicController } = require('../../controllers');
 
const router = express.Router();

router.post('/', 
        TopicController.createTopic);

router.delete('/:id', 
        TopicController.destroyTopic);

module.exports = router;