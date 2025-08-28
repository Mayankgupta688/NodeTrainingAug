import { createServer, IncomingMessage, ServerResponse, get } from 'http';
import fs from "fs";
import path from "path";
import EventEmitter from 'events';

export default class HttpServerModule {
    
    static createServerStatic(portNumber: number, urlObject: any) {
        createServer((req: IncomingMessage, res: ServerResponse) => {
            var emitter: EventEmitter = new EventEmitter();

            res.writeHead(200, {'Content-Type': 'text/plain'});

            if(req.url == "/getfile") {
                fs.readFile(path.join(__dirname, "sampleFile.txt"), "utf-8", (err, data: string) => {
                    if(err) {
                        emitter.emit("response", "Error reading file");
                    } else {
                        emitter.emit("response", data);
                        emitter.emit("response", "asjdgaskgd");
                    }
                });
            }

            if(req.url == "/getprice") {
                get("http://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", (response) => {
                    var stockData: string = "";
                    response.on("data", (chunk) => {
                        stockData += chunk;
                    })

                    response.on("end", () => {
                        var jsonData = JSON.parse(stockData);
                        emitter.emit("response", `Price: ${jsonData.data.pricecurrent}`);
                    })
                })
            }

            for(let url in urlObject) {
                if(req.url == url) {
                    emitter.emit("response", urlObject[url]);
                    return;
                }
            }

            emitter.on("response", (message: string) => {
                
                res.write("This is the First Response\n");
                res.write("This is the Second Response\n");

                setTimeout(() => {
                    res.end(message);   
                }, 10000);
                
            })
            
        }).listen(portNumber, () => {
            console.log(`Server running at http://localhost:${portNumber}/`);
        });
    }
}