const mongoose = require('mongoose');

const { db } = require('../../configs/db.json');

require('../models/Task.js');
require('../models/Board.js');

const Task = mongoose.model('Task');
const Board = mongoose.model('Board');

exports.setConnection = () => {
    mongoose.connect(`mongodb://${db.user}:${db.pass}@ds119988.mlab.com:19988/${db.name}`);
};

/*Task CRUD*/
exports.getTasks = () => {
    return Task.find();
};

exports.createTask = (data) => {
    const task = new Task({
        title: data.title,
        boardId: data.boardId,
        description: data.description,
        dueDate: data.dueDate,
    });

    return task.save();
};

exports.removeTask = (id) => {
    return Task.findById(id).remove();
};


/*Boar CRUD*/
exports.getBoard = () => {
    return Board.find();
};

exports.createBoard = (data) => {
    const board = new Board({
        title: data.title,
    });

    return board.save();
};

exports.removeBoard = (id) => {
    return Board.findById(id).remove();
};

