const mongoose = require("mongoose")
const appSchema = mongoose.Schema({
    Movie_id : String,
    Audi_id : String,
    Theatre_id : String,
    seats_booked : Number,
    total_price : Number
})


var cart = new mongoose.model('cart',appSchema);

module.exports = cart