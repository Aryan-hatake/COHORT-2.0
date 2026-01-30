

//API is a set of rules or protocols that allows any two software platforms or resources to communicate with each other

// Resource = Anything that can be accessed via RESTful Apis are known as Resource

//APIs used HTTP or HTTPS protocol to allow communication between two resource

// HTTP Methos :

// 1. Get : This method should be used when you wanna get or read the data from resource ! Should not be used for modification !

// 2. Post : This method should be used when you want to create a new data or resource in backend ! data is stored in request body !

// 3. Put : This method is used when you to replace or update an existing data in backend 

// 4. Patch : This method is used when you want to update or modify an patch or segment of exisitng data

// 5. Delete : This method is used to delete an existing data in backend


const express = require("express");
const app = express()

app.use(express.json())

let notes = []

app.post("/notes",(req,res)=>{
    console.log("Before POST:", notes)
    console.log(req.body)
    notes.push(req.body)      // create the notes  (create data in backend)
    res.send("note created")
})
app.get("/notes",(req,res)=>{
    console.log("After POST:", notes)
    
    res.send(notes)   // get the notes    (sending data for reading )
})
app.listen(3000,()=>{
    console.log('server running on port 3000')
})
console.log(notes)