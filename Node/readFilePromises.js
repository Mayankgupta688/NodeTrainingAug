var fs = require("fs").promises;
var path = require("path"); 

var filePromise = fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8");

fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8").then(function(fileContent) {
    debugger;
    console.log(fileContent);

    fs.writeFile(path.join(__dirname, "processedData.txt"), fileContent.toUpperCase()).then(function writeSuccess() {
        fs.rename(path.join(__dirname, "processedData.txt"), path.join(__dirname, "finalData.txt")).then(function renameSuccess() {
            debugger;
            console.log("File Renamed Successfully");
        }, function renameError(err) {
            debugger;
            if(err) {
                console.log("Error Renaming File");
            }
        });
    });
}, function errorFunction(err) {
    debugger;
    if(err) {
        console.log("Error Returning File Data");
    }
});