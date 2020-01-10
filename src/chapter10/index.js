//bilding our first example
/*ES5 illustration
(() => {
    document.getElementById("output").innerHTML = "Hello Chapter 10"
   })();
*/
var log = function(output){
    document.getElementById("output").innerHTML = output;
   };
   //For illustration, call the function above to log an output
   log("Welcome to Chapter 10!");
