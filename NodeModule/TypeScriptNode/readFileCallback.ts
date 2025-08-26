import EventEmitter from "events";
import { readFile as readAsyncFile, writeFile } from "fs";
import { join } from "path";

export var userName = "TechnoFunnel"
export var userDesignation = "Manager"

export default class FileProcessor {
    private fileName: string;
    public eventLogger: EventEmitter;
    private fileData: string = "";

    public constructor(fileName: string) {
        this.fileName = fileName;
        this.eventLogger = new EventEmitter();
    }

    public readFile(): void {
        readAsyncFile(join(__dirname, this.fileName), "utf8", (err: NodeJS.ErrnoException | null, fileData: string): void => {
            if(err == null) {
                this.eventLogger.emit("readFileComplete", fileData);
                this.fileData = fileData;
            }
        })
    }

    public writeFile(): void {
        writeFile(join(__dirname, "outputFile.txt"), this.fileData, () => {
            console.log("File Created...")
        })
    }
}

export function getData() {
    console.log("Hi")
}