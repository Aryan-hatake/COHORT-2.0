const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:[true,"User already exist"]  // we can use this but it gives internal server error 500 which we dont want [avoid these]
    },
})

const userModel = mongoose.model("SampleUser1",userSchema)

module.exports = userModel;