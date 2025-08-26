import { createServer, IncomingMessage, ServerResponse } from 'http';

export default class HttpServerModule {
    private portNumber: number;
    private appServer: any;

    constructor(port: number) {
        this.portNumber = port;
    }

    public createServer() {
        this.appServer = createServer((req: IncomingMessage, res: ServerResponse) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        })

        this.appServer.listen(this.portNumber, () => {
            console.log(`Server running at http://localhost:${this.portNumber}/`);
        });
    }
}