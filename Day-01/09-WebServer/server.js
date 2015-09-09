var http = require('http'),
    fs = require('fs'),
    path = require('path');

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url, true);
    console.log(req.url);
    var requestedResource = path.join(__dirname, req.url.pathname);
    if (!fs.existsSync(requestedResource)){
        res.statusCode = 404;
        res.end();
        return;
    }
    fs.createReadStream(requestedResource).pipe(res);
});
server.listen(8080);
