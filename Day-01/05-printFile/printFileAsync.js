var fs = require('fs');
if (process.argv.length < 3){
    console.log('File name is required');
    return;
}
var filename = process.argv[2];
/*if (!fs.existsSync(filename)){
    console.log('file not found');
    return;
}*/
fs.readFile(filename, {encoding : 'utf8'} , function(err, fileContents){
    if (err){
        console.log('something went wrong - ', err);
        return;
    }
    console.log(fileContents);
    console.log("done");
});

