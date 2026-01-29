// Server Initializing and DataBase Connection


// async function connectToDB(){
//     await mongoose.connect("mongodb+srv://AryanGadhave:Aryan202@lecture.ybatyma.mongodb.net/Dummy")
//     console.log("DataBase Connected")
// }
const app = require("./src/app");
const mongoose = require("mongoose")


//cluster = storage + processor

function connectToDB(){
  mongoose.connect("mongodb+srv://AryanGadhave:Aryan202@practice.8vdsnah.mongodb.net/Dummy").then(()=>{
      console.log("DataBase Connected")
  }).catch(()=>{
    console.log("connection failed")
  })
}

connectToDB()

app.listen(3000,()=>{
    console.log("server running ")
})