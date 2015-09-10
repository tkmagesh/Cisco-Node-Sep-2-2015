var http = require('http'),
    path = require('path'),
    app = require('./app'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction');


app.use(dataParser);
app.use(staticResourceServer(path.join(__dirname, '/public')));
app.use(calculatorProcessor);
app.use(notFoundAction);


var server = http.createServer(app);
server.listen(8080);
