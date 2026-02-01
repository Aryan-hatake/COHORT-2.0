const express = require("express");
const noteModel = require("./models/notes.model")
const cors = require("cors")
const app = express();
app.use(cors())

app.use(express.json())

app.get("/notes",async(req,res)=>{
    const notes  = await noteModel.find();
    res.status(200).json({
        message:"notes fetched successfully",
        notes
    })
})
app.post("/notes",async(req,res)=>{
    const {title,description} = req.body
    const notes  = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"notes created successfully",
        notes
    })
})

//  need to pass object id in order to delete and update value in database
app.delete("/notes/:id",async(req,res)=>{
     const {id}  = req.params;

     const deleteNote = await noteModel.findByIdAndDelete(id);

     res.status(204).json({
        message:"Notes deleted successfully",
        deleteNote
     })
})

// needs object id in order to update
app.patch("/notes/:id",async(req,res)=>{
     const {id}  = req.params;
     const description = req.body

     const updatedNote = await noteModel.findByIdAndUpdate(id,description);

     res.status(200).json({
        message:"description modified successfully",
        updatedNote
     })
})


module.exports = app