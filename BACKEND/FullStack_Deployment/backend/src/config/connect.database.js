const mongoose = require("mongoose")


async function connectToDB(){
     try{
        await mongoose.connect("mongodb+srv://AryanGadhave:Aryan202@cohort2.vbhpae7.mongodb.net/Tasks")
        console.log("DataBase Connected")
     }
     catch(err){
        console.log("SOME ERROR OCCURED",err)
     }
}

module.exports = connectToDB;