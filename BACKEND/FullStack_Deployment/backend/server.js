const app = require("./src/app")
const connectToDB = require("./src/config/connect.database")



connectToDB()

app.listen(3000,()=>{
    console.log("Server is Running...")
})