const EventEmitter = require('events');
var path = require("path");
var fs = require("fs");

var emitter = new EventEmitter();

fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8", function(err, fileData) {
    if(err == null) {
        emitter.emit('readCompleteEvent', fileData);
    } else {
        emitter.emit("readError", err)
    }
});

emitter.on('readCompleteEvent', function rename(){
    console.log("File Read...")
})

emitter.on('readError', function capture(){
    console.log("File Read Failed...")
})