const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');
 
const router = express.Router();

router.post('/signin', 
        UserMiddlewares.validateCreateRequest,
        UserController.createUser);

router.post('/signup', 
        UserMiddlewares.validateSignUpRequest,
        UserController.signUp);

module.exports = router;