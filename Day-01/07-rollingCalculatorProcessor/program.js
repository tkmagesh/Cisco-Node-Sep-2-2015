var fs = require('fs'),
    calculator = require('./rollingCalculatorFactory').create();

fs.readFile('./calculator.dat', {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log('error - ', err);
        return;
    }
    fileContents.split('\n').forEach(function(line){
        var data = line.split(','),
            operation = data[0],
            value = parseInt(data[1], 10);
        calculator[operation](value);
    });
    console.log("result = ", calculator.getResult());
});
