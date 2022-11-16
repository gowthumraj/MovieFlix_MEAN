var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    adminId:{
        type:String,
        required:true,
        unique:true
    },
    adminPassword:{
        type:String,
        required:true,
    },
});

var admin = new mongoose.model('admin',schema);

module.exports = admin 