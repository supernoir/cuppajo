// Unit testing for node server

var expect = require('chai').expect;


describe('Mocha', function() {
   it('should run our tests using npm', function() {
   expect(true).to.be.ok;
    });
});

describe('Server', function(){
   it('should listen on port 7766', function() {
    var server = require('../server.js');
    
    
      expect(server.startServer()).to.equal(7766); 
   });
    
});