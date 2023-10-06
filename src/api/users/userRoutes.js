const express = require('express');
const router = express.Router();
const {registerUser, getUsers, LogInUser, resetPasswordUser, logOut, test} = require('../users/userController');
const {authorization} = require('../../config/middleware');

router.post("/register", registerUser);
router.get("/register", getUsers);
router.get("/dashboard", authorization, test);
router.post("/login", LogInUser);
router.put('/update/:id', resetPasswordUser);
router.get("/logout", logOut);

module.exports = router;