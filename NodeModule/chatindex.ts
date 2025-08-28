import { readFile } from "fs";
import path from "path";

const express = require('express');

let app = express(); 

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/data/:filename/:otherParam", (req, res) => {
    console.log(req.params.filename)
    readFile(path.join(__dirname, req.params.filename), "utf8", (err, data) => {
        console.log(req.query.username)
        console.log(req.query.userage)
        console.log(req.params.otherParam)
        var jsonData = JSON.parse(data)
        res.send(jsonData)
    })
});
  
app.listen(3000); 