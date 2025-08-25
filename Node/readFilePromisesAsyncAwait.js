var fs = require("fs").promises;
var path = require("path"); 

var myPromise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Mayank Gupta")
    }, 5000)
})

var myPromise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Mayank Gupta")
    }, 5000)
})

var myPromise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Mayank Gupta")
    }, 5000)
})

var myPromise3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Mayank Gupta")
    }, 5000)
})

async function fileManuplation() {
    debugger;
    var fileContent = await fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8");
    await fs.writeFile(path.join(__dirname, "processedData.txt"), fileContent.toUpperCase());
    var data = await myPromise
    console.log(data);
    await fs.rename(path.join(__dirname, "processedData.txt"), path.join(__dirname, "finalData.txt"));
}

async function fileManuplation1() {
    debugger;
    var fileContent = await fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8");
    await fs.writeFile(path.join(__dirname, "processedData1.txt"), fileContent.toUpperCase());
    myPromise3.then(async function(data) {
        console.log(data)
        await fs.rename(path.join(__dirname, "processedData1.txt"), path.join(__dirname, "finalData1.txt"));
    })
    
}

async function fileManuplation2() {
    debugger;
    var fileContent = await fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8");
    await fs.writeFile(path.join(__dirname, "processedData2.txt"), fileContent.toUpperCase());
    await myPromise2
    await fs.rename(path.join(__dirname, "processedData2.txt"), path.join(__dirname, "finalData2.txt"));
}

async function fileManuplation3() {
    debugger;
    var fileContent = await fs.readFile(path.join(__dirname, "sampleText.txt"), "utf8");
    await fs.writeFile(path.join(__dirname, "processedData3.txt"), fileContent.toUpperCase());
    await myPromise1
    await fs.rename(path.join(__dirname, "processedData3.txt"), path.join(__dirname, "finalData3.txt"));
}

fileManuplation()
fileManuplation1()
fileManuplation2()
fileManuplation3()

for(var i = 0; i< 2; i++) {
    console.log("Hello World" + i);
}