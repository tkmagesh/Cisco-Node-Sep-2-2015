var express = require('express');
var router = express.Router();

var bugs = [
    {id : 1, name : "Data not saved", isClosed : false},
    {id : 2, name : "Server communication failure", isClosed : false},
    {id : 3, name : "Unknown exception thrown and application crashed", isClosed : false}
];

router.get('/', function(req, res, next) {
  //res.send(bugs.length + ' bugs will be displayed here');
    res.render('bugs/index', {list : bugs});
});

router.get('/new', function(req, res, next){
   res.render('bugs/new');
});

router.post('/new', function(req, res, nex){
    var newId = bugs.reduce(function(result, bug){
        return result > bug.id ? result : bug.id;
    },0)+1;
    var newBug = {
        id : newId,
        name : req.body.newBugName,
        isClosed : false
    };
    bugs.push(newBug);
    res.redirect('/bugs');
});

router.get('/toggle/:id', function(req, res, next){
    var bugId = parseInt(req.params.id, 10);
    var bug = bugs.filter(function(b){
        return b.id === bugId;
    })[0];
    if (bug) bug.isClosed = !bug.isClosed;
    res.redirect('/bugs');

})
module.exports = router;
