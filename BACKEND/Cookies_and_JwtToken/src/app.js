const express = require("express");
const app = express();
const authRouter  = require("./routes/register.auth")
const cookieParser = require("cookie-parser") //package use to access cookie storage

// Server and Cookie_Storage relationship: Server can read data in cookie storage and also write a data in cookie storage

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter) // its a middleware


module.exports = app;