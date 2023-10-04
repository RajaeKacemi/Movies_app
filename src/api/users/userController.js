const express = require('express');
const user = require('./userModel');


const getHomePage = ((req, res) => {
    return (req) ? (res.status(201).send("Its works nice").json()) : (res.status(404).send("It dosen\'t works")); 
});

const getLoginPage = ((req, res) => {

    return (req) ? (res.status(201).send("login page").json()) : (res.status(404).send("It dosen\'t works"));
});

const getRegisterPage = ((req, res) => {
    return (req) ? (res.status(201).send("Register page").json()) : (res.status(404).send("It dosen\'t works"));
});

const logInUser = ((req, res) => {
    const user = new user({
        const {email, password} = req.body;
        name : name,
        email : email
    });
    user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = {getHomePage, getLoginPage, getRegisterPage, logInUser};
