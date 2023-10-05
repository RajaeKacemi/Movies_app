const express = require('express');
const router = express.Router();
const {registerUser, getUsers, LogInUser, updateUser} = require('../users/userController');


router.post("/register", registerUser);
router.get("/register", getUsers);
router.post("/login", LogInUser);
router.put('/update/:id', updateUser);

module.exports = router;