const createapp = require("../basicTestCase/expressFile");
var supertest = require("supertest")

describe("Api Test Cases", () => {
    var app = null;
    beforeEach(() => {
        app = createapp();
    })

    test("get data from server", async() => {
        var response = await supertest(app).get("/getallemployee")
        var employees = response.body;
        expect(employees.length).toBeGreaterThan(0)
    })

    test("get data from server", async() => {
        var response = await supertest(app).post("/addData").send({ name: "abc" })
        //var employees = JSON.parse(response.body[0].toString());
        expect(response.body.length).toBeGreaterThan(1)
    })

})