// this file is used for :
// 1. Server creation
// 2. Server Configuration

const express = require("express")
const app = express()

app.use(express.json())

let notes= []

//GET (Data Reading)

app.get("/notes",(req,res)=>{
    res.send(notes)
})

//POST (Data Creation)

app.post("/notes",(req,res)=>{            //use req.body for sending large data
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})


//DELETE  (Data Deletion)

app.delete("/notes/:index",(req,res)=>{
 
// we used delete instead of splice because you never trully the data from backend you just replace it with null

    delete notes[req.params.index-1]         // use re.params for one word data
     res.send("note deleted on index ",req.params.index)
     console.log(notes)

})


//PATCH (Small Segment Of Data Updation)

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index-1].description = req.body.description
    res.send(`description of note ${req.params.index-1} has been modified`)
})
module.exports = app

