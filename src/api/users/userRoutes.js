const express = require('express');
const router = express.Router();
const {logInUser} = require('../users/userController');

// router.get("/", getHomePage);

// router.get("/login", getLoginPage);

router.post("/login", logInUser);

// router.get("/register", getRegisterPage);

module.exports = router;