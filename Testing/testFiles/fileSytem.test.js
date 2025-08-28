var { readFile } = require("../basicTestCase/fileSytem")
var fs = require("fs").promises;
jest.mock("fs", () => {
    return {
        promises: {
            readFile: jest.fn()
        }
    }
})

describe("async file read and write", () => {

    test("async processing", async () => {
        fs.readFile.mockResolvedValue('{"name": "TechnoFunnel", "age": "10"}');
        const result = await readFile();
        expect(result).toBe("TechnoFunnel")
    })
    
})