const mongoose = require('mongoose');


// create schema
const UserSchema = new mongoose.Schema({ 
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    });

const user = mongoose.model("user", UserSchema);


module.exports = {user};
