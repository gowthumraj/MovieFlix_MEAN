var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    movieId: {
        type: String,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true,
        
    },
    genre: {
        type: String,
        default: ''
    },
    image_url:{
        type : String,
        
    },
    language: {
        type: String,
        default: ''
    },
    duration: {
        type: Number
    },
    rating: {
        type : Number
    },
    actors : {
        type: Array
    },
    audi_ids : {
        type: Array
    },
    movieLocation:{
        type: String,
    }
    
});

var movie = new mongoose.model('Movie', schema);

module.exports = movie