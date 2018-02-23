const { Router } = require('express');

const UserController = require('../controllers/UserController');

const userRoutes = Router();

userRoutes.post('/register',UserController.register);

userRoutes.post('/signin', UserController.signIn);

module.exports = userRoutes;