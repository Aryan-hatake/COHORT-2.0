const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
})

const userModel = mongoose.model("sampleUsers2",UserSchema)

module.exports = userModel