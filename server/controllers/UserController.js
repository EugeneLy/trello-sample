const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('../models/User.js');
const User = mongoose.model('User');

let generateToken = (user) => {
    return jwt.sign(user, '5', {
        expiresIn: 10080 // in seconds
    });
};

let setUserInfo = (request) => {
    return {
        _id: request._id,
        name: request.name,
        email: request.email
    }
};


exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name) {
        return res.status(422).send({ error: 'You must enter your name.' });
    }

    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.'});
    }

    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }

        let user = new User({
            name: name,
            email: email,
            password: password,
        });

        user.save((err, user) => {
            if (err) { return next(err); }

            let userInfo = setUserInfo(user);

            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
};

exports.signIn = (req, res) => {
    const userInfo = setUserInfo(req.body);

    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ error: 'Authentication failed. User not found.' });
        } else {
            if(req.body.password === undefined) {
                res.status(401).send({ error: 'Authentication failed. Password field is empty.' });
            } else if (!user.comparePassword(req.body.password)) {
                res.status(401).send({ error: 'Authentication failed. Wrong password.' });
            } else {
                return res.status(200).json({
                    token: `JWT ${generateToken(userInfo)}`,
                    user: userInfo
                });
            }
        }
    })
};