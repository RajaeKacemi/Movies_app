const mongoose = require('mongoose');
const Category = require('../categories/categoryModel');


const showSchema = new mongoose.Schema({ 
    title: {
    type: String,
    require: true
    },
    description: {
    type: String,
    require: true,
    min: 10
    },
    image: {
    type: String,
    require: true
    },
    categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true,
    },
    actors: {
    type: String,
    require: true // array of actors how??
    }
    
});


module.exports = mongoose.model("Show", showSchema);