const User = require('../users/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const cookieParser = require('cookie-parser');
const SECRET_KEY = "SECRET_KEY";

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
        res.status(201).json("Register successfully 😊 👌");
    })
    .catch((error) => {
    console.log(error);
    res.status(400).json({ message: "Error"}, {Error : Error});

});
    
};

const getUsers = async (req, res) => {

    const users = await User.find();
    return (users) ? (res.status(201).json(users)) : (res.status(404).json(users));

};


const resetPasswordUser = async (req, res) => {
    let {email} = req.body;
    const filter = {email};
    const update = { age: 59 };

// `doc` is the document _before_ `update` was applied
let doc = await Character.findOneAndUpdate(filter, update);

};

const LogInUser = async (req, res) => {
    let {email, password} = req.body;

        const foundedUser = await User.findOne({email});
        if(foundedUser && (await bcrypt.compareSync(password, foundedUser.password))){
            let token = generateJwt(foundedUser._id, foundedUser.role);

            res.status(201).cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            }).json({ message: "Logged in successfully 😊 👌" });
        }else {
            res.status(400)
            throw new Error('Invalid credentials');
        }
}

const logOut = async (req, res) => {
    res.cleanCookie("access_token").status(200).json({message : "Logout successfully"});
}

const generateJwt = ((id, role) => {
    return jwt.sign({id, role}, SECRET_KEY, {expiresIn: '30d'});
});

const test = (req, res) => {
    return res.json({ user: { id: req.userId, role: req.userRole } });
}
module.exports = {getUsers, registerUser, LogInUser, resetPasswordUser, test, logOut};
