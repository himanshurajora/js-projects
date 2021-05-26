const express = require("express")
const socket = require("socket.io")
const http = require("http");
const app = express()
const server = http.createServer(app)
const io = new socket.Server(server);

app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/index.html");
})

io.on("connection", (socket)=>{
    console.log("connected")
    socket.on("gone", (data)=>{
        io.emit("came", data)
    })
})


server.listen(3000)