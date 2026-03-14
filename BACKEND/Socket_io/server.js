const app = require("./src/app");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer)

httpServer.listen(3000,()=>{
    console.log("server is running")
})