var { readFileSync, PerformOperations } = require("./simpleFunction");

describe("tests the synchronous function", () => {
    var performOperations = null;
    beforeAll(() => {
        performOperations = new PerformOperations();
        console.log("Test Started")
    })

    beforeEach(() => {
        console.log("Going ahead with new Function")
    })
    
    test("add two Number 2, 3 and return 5", () => {
        expect(performOperations.addNumber(2, 3)).toBe(5)
    });

    test("add two Number 2, 3 and return 5", () => {
        expect([1, 2, 3, 4, 5].length).toBe(5);
    });

    test("add two Number 2, 3 and return 5", () => {
        expect([1, 2, 3, 4, 5].length).toBeGreaterThan(3);
    });

    test("add two Number 2, 3 and return 5", () => {
        expect(performOperations.isValidUser({
            name: "Mayank",
            age: 10
        })).toBeTruthy();
    });

    test("add two Number 2, 3 and return 5", () => {
        expect(readFileSync()).toBe("TechnoFunnel")
    });

    afterEach(() => {
        console.log("Test case done")
    }) 

    afterAll(() => {
        console.log("All Test case done")
    })
})

