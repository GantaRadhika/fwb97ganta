const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    Onions: Number, 
    spices: String, 
    curry: String 
}) 
 
module.exports = mongoose.model("Costume", 
costumeSchema) 