// --- Prerequisites

var Express = require('express');
var http = require('http');
var app = Express();

var cors = require("cors");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// --- CORS

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET");  
  next();     
});


// --- Nano

var nano = require('nano')('http://localhost:5984')
  , params   = {include_docs: true}
  ;
var cuppa = nano.db.use('cuppajo');


// --- GET typesOfCoffee

console.log('GET types of Coffee');
app.get('/', function(request, response) {
    
        cuppa.list(params, function(err,body) {
         var docs = [];
           body.rows.forEach(function(doc) {
               docs.push(doc);

            });
            response.json(docs);
            console.error(err);
            console.log(response);
            console.log(body);

        });  
});




// --- Start Server

var port = 7766;
app.listen(port);


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