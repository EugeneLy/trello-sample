const express = require('express');
const cors = require('cors');

const db = require('./db/DataBase');
const { serverPort } = require('../configs/server.json');

const app = express();

db.setConnection();

app.use(express.json());

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
   res.send('hallo!');
});

/*Task API*/
app.get('/tasks', (req, res) => {
    db.getTasks().then(data => res.send(data));
});

app.post('/tasks', (req, res) => {
    console.log(req.body);
    db.createTask(req.body).then(data => res.send(data));
});

app.delete('/tasks/:id', (req, res) => {
    db.removeTask(req.params.id).then(data => res.send(data));
});

/*Board API*/
app.get('/boards', (req, res) => {
    db.getBoard().then(data => res.send(data));
});

app.post('/board', (req, res) => {
    db.createBoard(req.body).then(data => res.send(data));
});

app.delete('/board/:id', (req, res) => {
    console.log(req.params.id);
    db.removeBoard(req.params.id).then(data => res.send(data));
});

app.listen(serverPort, () => {
   console.log(`listening port ${serverPort}`);
});