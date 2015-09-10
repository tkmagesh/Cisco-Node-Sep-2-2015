var http = require('http'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction');

//dataParser
//staticResourceServer
//calculatorProcessor
//notFound


var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticResourceServer(req, res);
    calculatorProcessor(req, res);
    notFoundAction(req, res);
});
server.listen(8080);
