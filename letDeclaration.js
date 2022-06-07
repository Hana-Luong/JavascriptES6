var a = 2;
{               //just inside {}
 let a = 3;     //implicit
 console.log( a ); // 3
}
console.log( a ); // 2