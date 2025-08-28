import express from "express";

var server = express();

server.get("/", (req, res) => {
    res.send("Hello World....")
})

server.listen(3000)