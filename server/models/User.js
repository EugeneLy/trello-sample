const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    }
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', UserSchema);