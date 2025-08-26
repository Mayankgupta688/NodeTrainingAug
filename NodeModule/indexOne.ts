import FileProcessor, { getData as getUserInfo } from "./TypeScriptNode/readFileCallback"; 
import OsInfoModule, { OsInfoModuleFunc } from "./TypeScriptNode/osModule";
import { IFileDataProcessor, osDetails } from "./Interfaces/applicationInterface";

let fileProcessor: IFileDataProcessor = new FileProcessor("sample.txt");
fileProcessor.readFile();

fileProcessor.eventLogger.on("readFileComplete", (data: string) => {
    console.log("Data from File is:" + data)
    fileProcessor.writeFile();
    getUserInfo();
});

var data: osDetails = OsInfoModule.getDetails();
console.dir(data);
var otherData: osDetails = OsInfoModuleFunc.prototype.getDetails();
console.dir(otherData);
