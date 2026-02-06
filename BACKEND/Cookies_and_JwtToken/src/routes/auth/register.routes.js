const express = require("express");
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const authRouter = express.Router() // groups related apis, then mounted in main  server app.use("/auth", authRouter);




authRouter.post("/register", async (req, res) => {

    const { username, email } = req.body

    const userExist = await userModel.findOne({ email })



    if (userExist) {
        return res.status(409).json({
            message: "User Already Exist"
        })

    }

    const user = await userModel.create({
        username, email
    })

    const token = jwt.sign({ //jwt sign as we the server is putting our signature on this token that it belongs to us
        id: user._id,
        name: user.username
    },
        process.env.JWT_SECRET  // create from jwt_secret_generator
    )

    res.cookie("jwt_Token", token) //Storing jwt_Token in cookie-storage

    //token is encoded string when you go to jwt_secret_decoder you will get to know all the data used to make an encoded string i.e token

    res.status(201).json({
        message: "Api connected",
        user,
        token
    })
})


module.exports = authRouter


//we store jwt token in cookie storage and not in local storage because when XSS attack happens unknown js script can access localstorage data through localstorage.getItem() but cookies data is accessed via http only i.e by api request maily from server