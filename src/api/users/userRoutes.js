const express = require('express');
const router = express.Router();
const {registerUser, getUsers} = require('../users/userController');

// router.get("/", getHomePage);

// router.get("/login", getUser);

router.post("/register", registerUser);

router.get("/register", getUsers);

module.exports = router;