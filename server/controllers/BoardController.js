const mongoose = require('mongoose');

require('../models/Board.js');

const Board = mongoose.model('Board');

exports.getBoard = () => {
    return Board.find();
};

exports.createBoard = (data) => {
    const board = new Board({
        title: data.title,
        tasks: data.tasks,
    });

    return board.save();
};

exports.editBoard = (data) => {
    return Board.update({_id:data._id},{
        $set: {
            title: data.title,
            tasks: data.tasks,
        }
    })
};

exports.removeBoard = (id) => {
    return Board.findById(id).remove();
};