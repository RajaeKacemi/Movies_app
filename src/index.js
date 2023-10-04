const express = require('express');
const app = express();
const mongoose = require("mongoose");
const router = require('./api/users/userRoutes.js');

const PORT = 8000;


app.use(router);

app.listen(PORT, () => {
    console.log('Server started port: ', PORT);
});
