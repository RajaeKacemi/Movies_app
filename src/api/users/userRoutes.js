const express = require('express');
const router = express.Router();
const {getHomePage, getLoginPage, getRegisterPage} = require('../users/userController');

router.get("/", getHomePage);

router.get("/login", getLoginPage);

router.post("/login", logInUser);

router.get("/register", getRegisterPage);

module.exports = router;