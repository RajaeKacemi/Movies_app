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
    moviesId: { // array of movies ? 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
});

module.exports = mongoose.model("Actor", actorSchema);