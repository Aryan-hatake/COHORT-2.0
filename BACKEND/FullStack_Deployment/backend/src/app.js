const express = require("express");
const taskModel = require("./models/task.model")
const path  = require("path")
const cors  = require("cors")
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('./public')) // makes css and js file inside public folder accessible when asked on url with their file path

app.get("/api/task",async(req,res)=>{
      const alltask = await taskModel.find();
      res.status(200).json({
        message:"All tasks fetch successfully",
        alltask
      })
})
app.post("/api/task",async(req,res)=>{
      
      const {task,time} = req.body;
     
       newTask = await taskModel.create({
         task,time
      });
      
      res.status(201).json({
        message:"task created successfully",
        newTask
      })
})
app.delete("/api/task/:index",async(req,res)=>{
      
       let {index} = req.params
     
      const delTask = await taskModel.findByIdAndDelete(index)

      res.status(204).json({
        message:"task deleted successfully",
        delTask
      })
})
app.patch("/api/task/:index",async(req,res)=>{
       
       let updation = req.body
       let {index} = req.params
     
      const modified = await taskModel.findByIdAndUpdate(index,updation)

      res.status(200).json({
        message:"task modified successfully",
        modified
      })
})


//wildcard api for all non created  api paths
app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})



module.exports = app