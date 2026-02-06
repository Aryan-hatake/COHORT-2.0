const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto") // this package is use to create hash
const authRouter = express.Router();

authRouter.post("/register",async(req,res)=>{
   const {email,password} = req.body;

   const userExist  = await userModel.findOne({email});

   if(userExist){
       return res.status(409).json({
          message:"User Already Exist"
       })
   }
   
   
   const hash = crypto.createHash("md5").update(password).digest("hex")
   //creating hash for password

   const user = await userModel.create({
       email,password:hash  //replacing plain text password to hash
   })

   const token = jwt.sign(
    {
        id:user._id,
        email:user.email
    },
     
    process.env.JWT_SECRET

   )
    
    res.cookie("JWT_TOKEN",token)
   

   res.status(201).json({
     message:"User has been Registered",
     user,
     token
   })

})
authRouter.post("/login",async(req,res)=>{
    // we can call this function as controller instead of callback
    
    const {email,password} = req.body

    const user = await userModel.findOne({email})
    
    if(!user){
        return res.status(404).json({
            messgae:"User Does Not Exist"
        })
    }

    const hashPass = crypto.createHash("md5").update(password).digest("hex")
     
    if(hashPass !== user.password){
         return res.status(401).json({
            messgae:"Incorrect Password"
        })
    }

     res.status(200).json({
        message:"Logined Successfully"
     })

})

module.exports = authRouter