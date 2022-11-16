var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    historyId:{
        type:String,
        required:true,
        unique:true
    },

    movieName:{
        type:String,
        required:true,
        
    },
    theatreName:{
        type:String,
        required:true,
    },
    amountPaid:{
        type:Number,
        required:true,
    } ,
    userName :{
        type:String,
        required:true,
    }
  
});

var history = new mongoose.model('history',schema);

module.exports = history