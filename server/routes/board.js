const { Router } = require('express');

const BoardController = require('../controllers/BoardController');

const boardRoutes = Router();

boardRoutes.get('/boards', (req, res) => {
    BoardController.getBoard().then(data => res.send(data));
});

boardRoutes.post('/board', (req, res) => {
    BoardController.createBoard(req.body).then(data => res.send(data));
});

boardRoutes.delete('/board/:id', (req, res) => {
    console.log(req.params.id);
    BoardController.removeBoard(req.params.id).then(data => res.send(data));
});

module.exports = boardRoutes;