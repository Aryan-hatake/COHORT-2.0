const express = require("express");
const noteModel = require("./model/notes.model")

const app = express();

app.use(express.json())


/**
 * - GET /notes
 * - fetch all the notes Data
 */
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes
    })
})


/**
 * - POST /notes
 * - req.body => {title,description}
 */
app.post("/notes",async(req,res)=>{
    const  {title,description} = req.body
    const notes = noteModel.create({
          title,description
    })

    res.status(201).json({
        message:"Note created",
        notes
    })
})


module.exports = app;