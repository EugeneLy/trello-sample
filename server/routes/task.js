const { Router } = require('express');

const TaskController = require('../controllers/TaskController');

const taskRoutes = Router();

taskRoutes.get('/tasks', (req, res) => {
    TaskController.getTasks().then(data => res.send(data));
});

taskRoutes.put('/task/edit', (req, res) => {
    TaskController.editTask(req.body).then(data => res.send(data));
});

taskRoutes.post('/tasks', (req, res) => {
    TaskController.createTask(req.body).then(data => res.send(data));
});

taskRoutes.delete('/tasks/:id', (req, res) => {
    TaskController.removeTask(req.params.id).then(data => res.send(data));
});

module.exports = taskRoutes;