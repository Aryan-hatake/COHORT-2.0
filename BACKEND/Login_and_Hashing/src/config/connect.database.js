const mongoose = require("mongoose");

async function connectToDB(){
  
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase Connected");
    }
    catch(err){
        console.log("Some error occurred",err)
    }

}

module.exports = connectToDB