var path = require('path');
var fs = require('fs');

var staticResourceExtns = ['.html','.css','.js','.png','.jpg','.ico','.xml','.txt','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) != -1;
}

module.exports = function(basePath){
    return function(req, res, next){
             if (isStatic(req.url.pathname)){
                var requestedResource = path.join(basePath, req.url.pathname);
                if (!fs.existsSync(requestedResource)){
                    res.statusCode = 404;
                    res.end();
                    return;
                }
                //fs.createReadStream(requestedResource).pipe(res);
                var stream = fs.createReadStream(requestedResource);
                stream.on('data', function(chunk){
                    res.write(chunk);
                });
                stream.on('end', function(){
                    res.end();
                    console.log('finished writing data to the response stream');
                });
            } else {
                next();
            }
        };
};
