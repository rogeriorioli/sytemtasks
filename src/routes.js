const { Router } = require('express');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController')
const ProfileController = require('./controllers/ProfileController');
const routes = Router();


routes.post('/signin', UserController.create);
routes.post('/login', LoginController.authenticate);
routes.get('/dashboard', ProfileController.index)
routes.post('/new/task', TaskController.create)









module.exports = routes