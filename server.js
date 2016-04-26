// Prerequisites

var Express = require('express');
var http = require('http');
var app = Express();




var port = 7766;

app.listen(port);

console.log('- - - -');
console.log('Server running on port ' + port);
console.log('- - - -');

var startServer = function() {
    return port
};

module.exports = { startServer: startServer };

