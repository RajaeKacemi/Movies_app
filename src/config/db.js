const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const Username = process.env.Username;
const Password = process.env.Password;
const MONGODB_URL = `mongodb+srv://${Username}:${Password}@rajaa.dev0tsd.mongodb.net/?retryWrites=true&w=majority`;

//mongoose connection
// useNewUrlParser: This option is set to true to enable the use of the new URL parser. It's used for parsing MongoDB connection strings.
// useUnifiedTopology: This option is set to true to enable the new server discovery and monitoring engine.

mongoose.connect(MONGODB_URL,    
    {useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => {
    console.log("Connected to MongoDB");
    })
.catch((err) => {
    console.log("No");
    });


// // create a user collection
// const userModel = mongoose.model('user', UserSchema);
// (async () => {
//     const user = {
//         user_name: 'Rajaa',
//         user_email: 'rajaa@gmail.com'
//     };
//     const newUser = await userModel.create(user);
//     newUser.save();
// })