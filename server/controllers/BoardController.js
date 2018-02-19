const mongoose = require('mongoose');

require('../models/Board.js');

const Board = mongoose.model('Board');

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