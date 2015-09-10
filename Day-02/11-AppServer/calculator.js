/*Create a calculator object that has the following methods
    - add(x,y)
    - subtract(x,y)
    - multiply(x,y)
    - divide(x,y)

use all the methods of the calculator object with some sample data and print the results;
*/
var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x  - y;
    },
    multiply : function(x,y){
        return x  * y;
    },
    divide : function(x,y){
        return x / y;
    },
};
module.exports = calculator;
