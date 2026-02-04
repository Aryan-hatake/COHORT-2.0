const mongoose = require("mongoose");

function connectToDB(){

    mongoose.connect("mongodb+srv://AryanGadhave:Aryan202@practice.8vdsnah.mongodb.net/Notes2").then(()=>{
        console.log("DataBase is Connected")
    }).catch((err)=>{
         console.log("Some error occured",err)
    })
}

module.exports = connectToDB;