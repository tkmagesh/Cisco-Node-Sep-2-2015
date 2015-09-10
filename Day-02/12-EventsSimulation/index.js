var primeFinder = (function(){
    var _callbacks = {};
    function isPrime(n){
        if (n <= 3) return true;
        for(var i = 2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    function trigger(eventName, data){
        var callbacks = _callbacks[eventName] || [];
        callbacks.forEach(function(callback){
            setTimeout(function(){
                callback(data);
            });
        });
    }

    return {
        addListener : function(eventName, callback){
            _callbacks[eventName] = _callbacks[eventName] || [];
            _callbacks[eventName].push(callback);
        },
        findPrimes : function(start, end){
            for(var i=start; i<=end; i++){
                if (isPrime(i)){
                    trigger('prime', i);
                } else {
                    trigger('noprime', i);
                }
            }
            console.log("Done with processing from ", start , " to ", end);
        }
    }
})()
