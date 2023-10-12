const express = require('express');
const router = express.Router();
const {registerUser, getUsers, LogInUser, resetPasswordUser, logOut, test, deleteUser} = require('../users/userController');
const {authorization} = require('../../config/middleware');

router.post("/register", registerUser);
router.get("/register", getUsers);
router.get("/dashboard", authorization, test);
router.post("/login", LogInUser);
router.post("/delete/:id", deleteUser);
router.put('/update/:id', resetPasswordUser); 
router.get("/logout/", logOut);

module.exports = router;