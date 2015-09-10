module.exports = function(req, res, next){
     res.statusCode = 404;
    res.end();
    console.log('done sending 404');
    next();
}
