var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
        
    },
    
    userLocation:{
        type:String,
        
    },
    userLanguage :{
        type:String,
        
    },
    userBalance :{
        type:Number,
        
    }
  
});

var user = new mongoose.model('user',schema);

module.exports = user