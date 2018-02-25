const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {type: String},
    tasks: {type: Array}
});

module.exports = mongoose.model('Board', BoardSchema);