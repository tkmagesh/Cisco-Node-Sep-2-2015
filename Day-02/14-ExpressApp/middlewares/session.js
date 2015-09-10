var uuid = require('node-uuid');

var sessionStore = {};

module.exports = function(req, res, next){
    //check if sessionId cookie exists
    var sessionId = req.cookies["sessionId"];
    if (!sessionId){
        sessionId = uuid.v1();
        sessionStore[sessionId] = {};
        res.cookie('sessionId', sessionId);
    }
    req.session = sessionStore[sessionId];
    next();
}
