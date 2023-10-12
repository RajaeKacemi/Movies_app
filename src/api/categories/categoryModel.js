const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({ 
    
    enum: ['Action', 'Comedy', 'Horror', 'Adventure', 
    'Animated', 'Drama', 'Fantasy', 'Science fiction', 
    'Historical',
    'Action/Comedy','Action/', 'Action/Horror', 'Action/Adventure', 'Action/Animated',
    'Action/Drama','Action/Fantasy', 'Action/Science fiction']

});


module.exports = mongoose.model("Category", categoriesSchema);