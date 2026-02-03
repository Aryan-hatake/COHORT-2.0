const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task:String,
    time:String
})

const taskModel =  mongoose.model("Schedules",taskSchema)

module.exports = taskModel