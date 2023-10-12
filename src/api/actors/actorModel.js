const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    movies: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Actor", actorSchema);