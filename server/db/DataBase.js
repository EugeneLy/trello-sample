const mongoose = require('mongoose');

const { db } = require('../../configs/db.json');

require('../models/Task.js');

const Task = mongoose.model('Task');

exports.setConnection = () => {
    mongoose.connect(`mongodb://${db.user}:${db.pass}@ds119988.mlab.com:19988/${db.name}`);
};

exports.getTasks = () => {
    return Task.find();
};

exports.createTask = (data) => {
    const task = new Task({
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
    });

    return task.save();
};

exports.removeTask = (id) => {
    return Task.findById(id).remove();
};

