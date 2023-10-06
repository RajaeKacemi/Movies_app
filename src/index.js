const express = require('express');
const app = express();
const mongoose = require("mongoose");

const router = require('./api/users/userRoutes.js');
const connectDb = require("../src/config/db.js");
const cookieParser = require('cookie-parser');

connectDb();

const PORT = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(PORT, () => {
    console.log('Server started port: ', PORT);
});
