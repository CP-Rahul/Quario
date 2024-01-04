const express = require('express');

const { LikeController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');
 
const router = express.Router();

router.post('/', 
        UserMiddlewares.checkAuth,
        LikeController.createLike);

module.exports = router;