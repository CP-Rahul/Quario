const express = require('express');

const { LikeController } = require('../../controllers');
 
const router = express.Router();

router.post('/', 
        LikeController.createLike);

module.exports = router;