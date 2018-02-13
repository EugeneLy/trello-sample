const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {type: String},
});

module.exports = mongoose.model('Board', BoardSchema);