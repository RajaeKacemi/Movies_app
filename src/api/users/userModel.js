const mongoose = require('mongoose');


// create schema
const UserSchema = new mongoose.Schema({ 
        user_name: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true,
            unique: true
        },
        user_password: {
            type: String,
            required: true
        }
    });

const user = mongoose.model("user", UserSchema);


module.exports = {user};
