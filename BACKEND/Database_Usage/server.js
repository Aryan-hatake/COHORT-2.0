const app = require("./src/app")
const connectToDB = require("./src/config/connect.database")
const noteModel = require("./src/model/notes.model")

require("dotenv").config()

console.log(process.env.Mongo_URI)

connectToDB();  // database connection function is called in server.js only

app.listen(3000,()=>{
    console.log("server running ...")
})