import { readFile } from "fs";
import path from "path";

const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http');

const port = process.env.PORT||4000;

let app = express(); 

app.use(express.json());

let server = http.createServer(app);

let io = socketIO(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/data", (req, res) => {
    readFile(path.join(__dirname + "sample.json"), "utf8", (err, data) => {
        var jsonData = JSON.parse(data)
        res.send(jsonData)
    })
})



io.on('connection', (socket) => { 
    console.log('New user connected'); 

    socket.on('createMessage', (newMessage) => { 
        socket.broadcast.emit("broadcast", newMessage)
    });

}); 
  
server.listen(port); 