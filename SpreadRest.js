/* When ... is used in front of an array (actually, any iterable,
    it acts to “spread” it out into its individual values */

function foo(x,y,z) 
{
    console.log( x, y, z );
}
       
foo( ...[1,2,3] ); 

// Replace concat(..), like [1].concat( a, [5] )
var a = [2,3,4];
var b = [ 1, ...a, 5 ];
console.log( b ); 

//gathers a set of values together into an array
/*“gather the rest of the arguments (if any) into an array called z.” 
Since x was assigned 1, and y was assigned 2, the rest of the arguments 3, 4, and 5 
were gathered into z */
function foo(x, y, ...z) 
{
    console.log( x, y, z );
}
foo( 1, 2, 3, 4, 5 );

//the ... gathers all arguments:
function foo(...args) 
{
    console.log( args );
}

foo( 1, 2, 3, 4, 5); 