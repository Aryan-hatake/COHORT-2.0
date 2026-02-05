const mongoose = require("mongoose");

async function connectToDB(){
    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase Connected")
    }
    catch(err){
        console.log("Could'nt Connected to Database")
    }
}

module.exports = connectToDB