// Single threaded Execution model with multiple thread in backgroup for Async Processing

var a = 10;

Promise

setTimeout(function One() {
    console.log("One")
}, 18000)

setTimeout(function Two() {
    console.log("Two")
}, 15000)

setTimeout(function Three() {
    console.log("Three")
}, 25000)

setTimeout(function Four() {
    console.log("Four")
}, 2000)

setTimeout(function Five() {
    console.log("Five")
}, 1000)

for(i = 0; i < a; i++) {
    console.log(i)
}