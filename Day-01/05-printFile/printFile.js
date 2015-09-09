//var fs = require('fs');
if (process.argv.length < 3){
    console.log('File name is required');
    return;
}
var filename = process.argv[2];
if (!fs.existsSync(filename)){
    console.log('file not found');
    return;
}
var fileContents = fs.readFileSync(filename, {encoding : 'utf8'});
console.log(fileContents);
console.log("done");
