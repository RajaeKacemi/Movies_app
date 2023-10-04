const User = require('../users/userModel');

const registerUser = (req, res) => {

    let {name, email, password} = req.body;

    const users = new User({
        name : name,
        email : email,
        password : password
    });

    users.save();
};

const getUsers = async (req, res) => {

    const users = await User.find()
    console.log(users)
    res.json(users)
};

module.exports = { getUsers,registerUser};
