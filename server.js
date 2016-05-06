// --- Prerequisites

var Express = require('express');
var http = require('http');
var app = Express();


// --- Start Server

var port = 7766;
app.listen(port);


// --- Load JSON

var typesOfCoffee = {
    coffee_01: {
        "name":"Espresso",
        "milk":"none"
    }
}


// --- Methods

var startServer = function() {
    return port
};

var getJSON = function() {
    return typesOfCoffee
};


// --- Exports

module.exports = { startServer: startServer, getJSON: getJSON };


// --- Console Logs

console.log('- - - -');
console.log('Server running on port ' + port);
console.log('- - - -');