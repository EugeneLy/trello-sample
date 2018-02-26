const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {type: Array}
});

module.exports = mongoose.model('Board', BoardSchema);