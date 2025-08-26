import EventEmitter from "events"

export interface osDetails {
    platform: string
    cpuArch: string
    release: string
    uptime: number
    totalMemory: number
    freeMemory: number
    osCount: number
    homedir: string,
    username?: string
}

export interface IFileDataProcessor {
    eventLogger: EventEmitter;
    readFile: () => void;
    writeFile: () => void;
}