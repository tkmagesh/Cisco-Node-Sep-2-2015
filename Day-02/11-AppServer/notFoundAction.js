module.exports = function(req, res){
     res.statusCode = 404;
    res.end();
    console.log('done sending 404');
}
