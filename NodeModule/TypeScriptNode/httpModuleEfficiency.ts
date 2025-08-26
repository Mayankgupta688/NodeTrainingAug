import { createServer, IncomingMessage, ServerResponse } from 'http';

export default class HttpServerModule {
    static createServerStatic(portNumber: number, urlObject: any) {
        createServer((req: IncomingMessage, res: ServerResponse) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            for(let url in urlObject) {
                if(req.url == url) {
                    res.end(urlObject[url]);
                    return;
                }
            }
            res.end("This is Another Page");
        }).listen(portNumber, () => {
            console.log(`Server running at http://localhost:${portNumber}/`);
        });
    }
}