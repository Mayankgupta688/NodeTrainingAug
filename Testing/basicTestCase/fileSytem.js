var fs = require("fs").promises;
var path = require("path")
async function readFile() {
    var fileData = "";
    var fileData = await fs.readFile(path.join(__dirname, "jsonData.txt"), "utf8")
    return JSON.parse(fileData).name;
}

module.exports = {
    readFile
}