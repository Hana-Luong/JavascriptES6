//IIFE (immediately invoked function expression)

var a = 2;
(function IIFE()
    {
        var a = 3;
        console.log( a ); // 3
    }
)();    //have not seen this
console.log( a ); 

