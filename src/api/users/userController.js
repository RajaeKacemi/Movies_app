const express = require('express');
const user = require('./userModel');


const logInUser = ((req, res) => {
    const {email, password} = req.body;

    const user = new user({
        email : email,
        password : password
    });
    user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = {logInUser};
