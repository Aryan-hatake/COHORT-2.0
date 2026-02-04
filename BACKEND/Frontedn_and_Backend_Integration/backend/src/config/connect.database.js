const mongoose = require("mongoose");

function connectToDB(){

    mongoose.connect("mongodb+srv://AryanGadhave:Aryan202@cohort2.vbhpae7.mongodb.net/").then(()=>{
        console.log("DataBase is Connected")
    }).catch((err)=>{
         console.log("Some error occured",err)
    })
}

module.exports = connectToDB;