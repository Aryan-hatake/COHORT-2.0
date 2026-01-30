const express = require("express");

const app = express()

app.use(express.json())

let notes = []

//GET  : [ 200 - Request Successful ]

app.get("/notes",(req,res)=>{
   res.status(200).json({
        notes
   })
})

//POST : [ 201 - A new resource has been created ]

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message:"Note has been created successfully"
    })
})

//DELETE : [ 204 - a data has been deleted (Does not return any content)]

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index-1]
    res.status(204).json({
        message:"A task has been deleted"
    })
})

//PATCH : [ 200 - This status code can be used for indicating data modification and wont use 201 since updation and creation is diffrent]

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index-1].description = req.body.description
    res.status(200).json({
        message:`Description of ${req.params.index} has been modified`
    })
})
module.exports = app