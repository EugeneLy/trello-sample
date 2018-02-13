const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {type: String},
    boardId: {type: String},
    description: {type: String},
    dueDate: {type: String},
});

module.exports = mongoose.model('Task', TaskSchema);