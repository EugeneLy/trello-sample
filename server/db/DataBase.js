const mongoose = require('mongoose');

require('../models/Task.js');

const Task = mongoose.model('Task');

exports.setConnection = () => {
    mongoose.connect(`mongodb://gc:123456@ds119988.mlab.com:19988/gcdb`);
};

exports.allTasks = () => {
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

