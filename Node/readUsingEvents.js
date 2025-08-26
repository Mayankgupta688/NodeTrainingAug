const EventEmitter = require('events');

var eventLogger = new EventEmitter();

setTimeout(function() {
    eventLogger.emit("logEvent")
}, 5000);

eventLogger.on("logEvent", function logData() {
    console.log("Event Fired")
});
