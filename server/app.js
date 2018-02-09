const express = require('express');

const db = require('./db/DataBase');

const app = express();

db.setConnection();

let task = {
   title: 'Became stroger',
   description: 'Work hard',
   dueDate: 33
};

db.createTask(task);

app.get('/', (req, res) => {
   res.send('hallo!');
});

app.listen('3005', () => {
   console.log('listening port 3005');
});