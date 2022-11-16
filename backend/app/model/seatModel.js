var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    /*audiId:{
        type:String,
        required:true,
        unique:true
    },*/
    
    row:{
        type:String,
        required:true,
    } ,
    col :{
        type:String,
        required:true,
    },
    seatname :{
        type:String,
        required:true,
    },
    occupied :{
        type:String,
        required:true,
    },
    /*price :
    {
        type:Number,
        required:true,
    }*/
});

var seat = new mongoose.model('seat',schema);

module.exports = seat