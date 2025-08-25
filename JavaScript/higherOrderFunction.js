// Higher Order Function: Function either takes a function as input parameter or return a function

function higherOrderFunction(inputData) {
    inputData()
}

function abc() {
    console.log("technoFunnel")
}

higherOrderFunction(abc);

setTimeout(callback, 50000);

function callback() {
    console.log("technoFunnel")
}