const express = require('express');
const cors = require('cors');

const db = require('./db/DataBase');
const { serverPort } = require('../configs/server.json');

const app = express();

db.setConnection();

app.use(express.json());

app.use(cors({ origin: '*' }));

/*let task = {
   title: 'Became stroger',
   description: 'Work hard',
   dueDate: 33
};

db.createTask(task);*/



app.get('/', (req, res) => {
   res.send('hallo!');
});

app.get('/tasks', (req, res) => {
    db.getTasks().then(data => res.send(data));
});

app.post('/tasks', (req, res) => {
    db.createTask(req.body).then(data => res.send(data));
});

app.delete('/tasks/:id', (req, res) => {
    console.log(req.params.id);
    db.removeTask(req.params.id).then(data => res.send(data));
});

app.listen(serverPort, () => {
   console.log(`listening port ${serverPort}`);
});