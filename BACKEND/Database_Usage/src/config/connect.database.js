const mongoose = require("mongoose");



async function connectToDB() {
    // await mongoose.connect(process.env.Mongo_URI)

    console.log("DataBase Connected")
}

module.exports = connectToDB


// This file is used to contain the code to connect to database