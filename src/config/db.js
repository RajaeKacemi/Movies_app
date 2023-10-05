const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGODB_URL =  process.env.MONGODB_URL;

const connectDb = () => {
    mongoose.connect(MONGODB_URL);
}

module.exports = connectDb;
