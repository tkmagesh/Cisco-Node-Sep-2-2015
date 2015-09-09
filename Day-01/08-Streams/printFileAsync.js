var fs = require('fs');
if (process.argv.length < 3){
    console.log('File name is required');
    return;
}
var filename = process.argv[2];
if (!fs.existsSync(filename)){
    console.log('file not found');
    return;
}
var stream = fs.createReadStream(filename, {encoding : 'utf8'});
//DIRTi - Data Intensive Real Time applications

//What are the events
//ReadableStream events - data, end, close, error

//How do i subscribe
//Events module

/*
var readCount = 0;
stream.on('data', function(chunk){
    console.log(chunk);
    ++readCount;
});
stream.on('end', function(){
    console.log('done with readCount = ', readCount);
});
*/

stream.pipe(process.stdout);
var readCount = 0;
stream.on('data', function(chunk){
    ++readCount;
});
stream.on('end', function(){
    console.log('done with readCount = ', readCount);
});
