import {readFile, createReadStream, createWriteStream } from "fs";
import http from "http";

var readStream = createReadStream("./inputDta.txt", {
    encoding: "utf8"
})

readFile(path.join(__dirname, "./inputDta.txt"), (err, data) => {
    console.log(data)
});

var writeFile = createWriteStream("output.txt");

// readStream.on("data", (data) => {
//     writeFile.write(data);
// })

// readStream.on("end", () => {
//     console.log("File Read");
// });

readStream.pipe(writeFile);

http.createServer((req, res) => {
    createReadStream("./inputDta.txt", { encoding: "utf8" }).pipe(res);
}).listen(4000)