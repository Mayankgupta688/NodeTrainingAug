var myPromise = new Promise(function(accept, reject) {
    debugger;
    setTimeout(() => {
        var randomNumber = Math.floor(Math.random() * 100);
        debugger;
        if(randomNumber % 2 == 0) {
            accept("Promise Accepted " + randomNumber); 
        } else {
            reject("Promise Rejected " + randomNumber);
        }
    }, 3000);
})

myPromise.then(function successFunction(data) {
    debugger;
    console.log("Win " + data);
}, function failureFunction(data) {
    debugger;
    console.log("Loose " + data);
}).catch(function errorFunction(data) {
    debugger;
    console.log("Error " + data);
}).finally(function finalFunction() {
    debugger;
    console.log("Finally Executed");
});