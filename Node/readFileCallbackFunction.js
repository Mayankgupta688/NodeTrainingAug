var fs = require("fs");
var path = require("path"); 

// Christmas tree Problem in Node.js

fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8", readFile);

function readFile(readError, data) {

    var dataValue = "Mayank Gupta"
    // Asyn Code with Error First Approach
    if(readError) {
        console.log("Error Returning File Data");
        return;
    } else {
        var newData = data.toUpperCase();
        fs.writeFile(path.join(__dirname, "processedData.txt"), newData, writeFunction)
    }
}

function writeFunction (writeError) {
    console.log(dataValue)
    if(!writeError) {
        debugger;
        console.log("File Written Successfully" +  data);

        fs.rename(path.join(__dirname, "processedData.txt"), path.join(__dirname, "finalData.txt"), renameSuccess)
    } else {
        console.log(readError.msg);
        console.log(writeError.msg);
    }
}

function renameSuccess(renameError) {
    debugger;
    if(!renameError) {
        console.log("File Renamed Successfully");
    } else {
        console.log("Error Renaming File");
    }
}

