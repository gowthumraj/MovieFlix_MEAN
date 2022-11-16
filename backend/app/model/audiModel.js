const mongoose = require("mongoose")
const appSchema = mongoose.Schema({
    Audi_id : String,
    Theatre_id : String,
    Capacity : Number,
    Seat_type : Array,
    Screen_type : String,
    Seat_rows : String,
    Seat_cols : Number,
    seat_ids : Array
})


var audi = new mongoose.model('audi',appSchema);

module.exports = audi