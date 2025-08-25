var fs = require("fs");
var path = require("path"); 

// Christmas tree Problem in Node.js

function fileManuplation() {
    var data = fs.readFileSync(path.join(__dirname, "sampleText.txt"), "utf8");
    fs.writeFileSync(path.join(__dirname, "processedData.txt"), data.toUpperCase());
    fs.renameSync(path.join(__dirname, "processedData.txt"), path.join(__dirname, "finalData.txt"));
}

fileManuplation()


for(var i = 0; i< 10;i++) {
    debugger;
    console.log("Hello World" + i);
}