const mongoose = require('mongoose');

const { db } = require('../../configs/db.json');


exports.setConnection = () => {
    mongoose.connect(`mongodb://${db.user}:${db.pass}@ds119988.mlab.com:19988/${db.name}`);
};

