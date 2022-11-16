var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    theatreId:{
        type:String,
        required:true,
        unique:true
    },
    theatreName:{
        type:String,
        required:true,
    },
    theatreCapacity:{
        type:Number,
        required:true,
    } ,
    theatreType :{
        type:String,
        required:true,
    },
    showTime:{
        type:Array,

    },
    audis :
    {
        type:Array,
        required:true,
    }
});

var theatre = new mongoose.model('theatre',schema);

module.exports = theatre