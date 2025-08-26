const EventEmitter = require('events');
var path = require("path");
var fs = require("fs");

var fileName = "sampleText.txt";
var emitter = new EventEmitter();

fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8", function(err, fileData) {
    if(err == null) {
        debugger;
        emitter.emit('readCompleteEvent', {
            fileContent: fileData,
            fileName: fileName,
            destinationFile: "processedDataAgain.txt"
        })

        emitter.emit('simpleEmit', "Done")

        setTimeout(function() {
            debugger;
            emitter.emit('readCompleteEvent', {
                fileContent: fileData.toUpperCase(),
                fileName: fileName,
                destinationFile: "processedData.txt"
            })
        }, 10000)

        emitter.emit('simpleEmitWithoutData')
    }
});

emitter.once('readCompleteEvent', function write(fileData){
    fs.writeFile(path.join(__dirname, fileData.destinationFile), fileData.fileContent, function() {
        console.log("File Created...")
    })
});

emitter.on('readCompleteEvent', function rename(fileData){
    fs.writeFile(path.join(__dirname, "logFile.txt"), `The File is read ${fileData.fileName}`, function() {
        console.log("File Created...")
    })
})

emitter.on('simpleEmit', function capture(textData){
    debugger;
    console.log("Simple Emit Event Fired " + textData)
})