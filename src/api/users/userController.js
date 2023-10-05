const User = require('../users/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const SECRET_KEY = 'SECRET_KEY';

const registerUser = (req, res) => {

    let {name, email, password} = req.body;
    hash_password = bcrypt.hashSync(password, 10);
    
    const users = new User({
        name : name,
        email : email,
        password : hash_password
    });

    users.save()    
    .then((users) => {
        res.status(201).json();
    })
    .catch((error) => {
    console.log(error);
    res.status(400).json();

});
    
};

const getUsers = async (req, res) => {

    const users = await User.find();
    return (users) ? (res.status(201).json(users)) : (res.status(404).json(users));

};


const updateUser = async (req, res) => {
    let {email} = req.body;
    const filter = {email};
    const update = { age: 59 };

// `doc` is the document _before_ `update` was applied
let doc = await Character.findOneAndUpdate(filter, update);

};

const LogInUser = async (req, res) => {
    let {email, password} = req.body;

        const foundedUser = await User.findOne({email});
        if(foundedUser && (await bcrypt.compare(password, foundedUser.password))){
            res.status(201).json({
            _id: foundedUser._id,
            name: foundedUser.name,
            email: foundedUser.email,
            token: generateJwt(foundedUser._id)
            })
        }else {
            res.status(400)
            throw new Error('Invalid credentials');
        }
}


const generateJwt = (id => {
    return jwt.sign({id}, SECRET_KEY);
});

module.exports = { getUsers, registerUser, LogInUser, updateUser};
