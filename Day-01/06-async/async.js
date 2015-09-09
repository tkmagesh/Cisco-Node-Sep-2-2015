function addSync(x,y){
    if (arguments.length != 2 || !arguments[0] || !arguments[1]){
        throw new Error('Invalid number of arguments');
    }
    return x + y;
}

function addSyncClient(x,y){
    try {
        var result = addSync(x,y);
        console.log("result = ", result);
    } catch (e){
        console.log('Something went wrong - ', e);
    }
}

function addAsync(x,y, onResult){
    var args = arguments;
    setTimeout(function(){
        if (!x || !y){
           var error = new Error('Invalid arguments');
           onResult(error, null);
           return ;
        }
        var result =  x + y;
        onResult(null, result);
    },4000);
}

function addAsyncClient(x,y){
   addAsync(x,y, function(err, result){
       if (err){
           console.log('Something went wrong - ', err);
           return;
       }
        console.log("result = ", result);
    });
}
