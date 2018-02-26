const mongoose = require('mongoose');

require('../models/Task.js');

const Task = mongoose.model('Task');

exports.getTasks = () => {
    return Task.find();
};

exports.editTask = (data) => {
    return Task.update({_id:data._id},{
        $set: {
            title: data.title,
            description: data.description,
            dueDate: data.dueDate
        }
    })
};

exports.createTask = (data) => {
    const task = new Task({
        id: data.id,
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
    });

    return task.save();
};

exports.removeTask = (id) => {
    return Task.findById(id).remove();
};