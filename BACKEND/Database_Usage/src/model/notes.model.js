const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({ //making format
    title:String,
    description:String
})

const noteModel =  mongoose.model("notes",noteSchema) // (collection_name ,format/schema it is going to use)

module.exports = noteModel;


//this file is use to make schema of database data like a skeleton or format