var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    calculator = require('./calculator'),
    qs = require('querystring');

//dataParser
//staticResourceServer
//calculatorProcessor
//notFound

var staticResourceExtns = ['.html','.css','.js','.png','.jpg','.ico','.xml','.txt','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) != -1;
}

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url, true);
    if (isStatic(req.url.pathname)){
        var requestedResource = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(requestedResource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(requestedResource).pipe(res);
    } else if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1, 10),
            n2 = parseInt(req.url.query.n2, 10);

        var result = calculator[operation](n1,n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            console.log('req data = ', reqData);
            var data = qs.parse(reqData);
            var operation = data.operation,
                n1 = parseInt(data.n1, 10),
                n2 = parseInt(data.n2, 10);

            var result = calculator[operation](n1,n2);
            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
