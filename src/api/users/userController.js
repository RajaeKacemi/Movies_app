const express = require('express');
const user = require('./userModel');


const logInUser = (req, res) => {
    console.log(req);
    res.json(req.body);
    // let {name, email, password} = req.body;

    // const user = new user({
    //     name : name,
    //     email : email,
    //     password : password
    // });

    // user.save((err, user) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(user);
    // });
};

module.exports = {logInUser};
