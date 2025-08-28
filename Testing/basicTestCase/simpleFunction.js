var fs = require("fs");
var path = require("path");

function addNumber(a, b) {
    return a + b;
}

function isValidUser(user) {
    if(user.name == "Mayank") {
        return true;
    }

    return false;
}

function readFileSync() {
    var fileData = "";
    fileData = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8")
    return fileData;
}



class PerformOperations {
    addNumber(a, b) {
        return a + b;
    }

    isValidUser(user) {
        if(user.name == "Mayank") {
            return true;
        }

        return false;
    }
}

module.exports = { 
    PerformOperations, readFileSync
}