const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const cookieParser = require('cookie-parser');
const storage = require('./api/shows/showController');

const PORT = 8000;

app.use(express.json());
app.use(cookieParser());

const upload = multer({storage});

const connectDb = require("../src/config/db.js");
connectDb();

// const actorRouter = require('./api/shows/actorRoutes.js');
const userRouter = require('./api/users/userRoutes.js');
const showRouter = require('./api/shows/showRoutes.js');
app.use(showRouter);
app.use(userRouter);
// app.use(actorRouter);

app.listen(PORT, () => {
    console.log('Server started port: ', PORT);
});
