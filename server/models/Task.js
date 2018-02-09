const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {type: String},
    description: {type: String},
    dueDate: {type: Number},
});

module.exports = mongoose.model('Task', TaskSchema);