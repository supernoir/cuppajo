// Prerequisites

var Express = require('express');
var server = Express();



var port = 7766;
server.listen(port);
console.log('Server running on port ' + port);

var startServer = function() {
    return port
};

module.exports = { startServer: startServer };

