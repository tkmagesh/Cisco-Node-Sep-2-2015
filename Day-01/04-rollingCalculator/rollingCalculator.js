/*
Create rollingCalculator that has the following methods
    - add(x)
    - subtract(x)
    - multiply(x)
    - divide(x)
    - getResult()

Usage:
    var calc = require('./rollingCalculator');
    calc.add(100)
    calc.subtract(50)
    calc.multiply(3)
    calc.divide(10)
    console.log(calc.getResult()) => 15
*/

var result = 0;
module.exports = {
    add : function(x){
        result += x;
    },
    subtract : function(x){
        result -= x;
    },
    multiply : function(x){
        result *= x;
    },
    divide : function(x){
        result /= x;
    },
    getResult : function(){
        return result;
    }
};
