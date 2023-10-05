const express = require('express');
const router = express.Router();
const {registerUser, getUsers} = require('../users/userController');

router.post("/register", registerUser);
router.get("/register", getUsers);

// router.post("/login", getUser);

module.exports = router;