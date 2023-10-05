const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_URL="mongodb+srv://rajaa01kacemi:0Hj4BfkTgUrMrefk@rajaa.dev0tsd.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
    mongoose.connect(MONGODB_URL);
}

module.exports = connectDb;
