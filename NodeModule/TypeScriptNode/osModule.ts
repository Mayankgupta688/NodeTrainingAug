import os from "os";
import { osDetails } from "../Interfaces/applicationInterface";

export default class OsInfoModule {
     static getDetails(): osDetails {
        return {
            platform: os.platform(),
            cpuArch: os.arch(),
            release: os.release(),
            uptime: os.uptime(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            osCount: os.cpus().length,
            homedir: os.homedir(),
            username: "Mayank"
        }
    }
}   

export function OsInfoModuleFunc() {
    return "os Data"
}

OsInfoModuleFunc.prototype.getDetails = function(): osDetails {
    return {
        platform: os.platform(),
        cpuArch: os.arch(),
        release: os.release(),
        uptime: os.uptime(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        osCount: os.cpus().length,
        homedir: os.homedir()
    }
}
